import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type Profile = {
  name: string;
  role: string;
  tagline?: string;
  location: string;
  phone?: string;
  email: string;
  github?: string;
  codeberg?: string;
  linkedin?: string;
};

type Project = { name: string; summary: string; stack?: string[] };
type Job = {
  company: string;
  role: string;
  location?: string;
  period: string;
  points: string[];
};
type Education = { school: string; degree: string; period: string };
type Product = { name: string; company: string; summary: string };
type StackGroup = { title: string; items: string[] };
type ExpertiseItem = { label: string };
type StrengthItem = { label: string };

type SimplePortfolioData = {
  profile: Profile;
  professionalSummary?: string;
  expertise?: ExpertiseItem[];
  stack?: StackGroup[];
  projects?: Project[];
  productsLeadership?: Product[];
  experience?: Job[];
  leadershipStrengths?: StrengthItem[];
  education?: Education[];
  certs?: string[];
};

const PAGE = { w: 210, h: 297, m: 12 };
const CONTENT_W = PAGE.w - PAGE.m * 2;

type ExportElementToPdfOptions = {
  marginMm?: number;
  continuationTopGapMm?: number;
  scale?: number;
  backgroundColor?: string;
};

export async function exportElementToPdf(
  element: HTMLElement,
  fileName = "portfolio.pdf",
  options: ExportElementToPdfOptions = {},
) {
  const marginMm = options.marginMm ?? 10;
  const continuationTopGapMm = options.continuationTopGapMm ?? 3;
  const scale = options.scale ?? 2;
  const backgroundColor = options.backgroundColor ?? "#05070a";

  if (document.fonts) {
    try {
      await document.fonts.ready;
    } catch {
      // no-op: continue even if browser font readiness check fails
    }
  }

  const pdf = new jsPDF("p", "mm", "a4");
  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();
  const contentW = pageW - marginMm * 2;
  const contentH = pageH - marginMm * 2;

  const host = document.createElement("div");
  host.style.position = "fixed";
  host.style.left = "0";
  host.style.top = "0";
  host.style.opacity = "0";
  host.style.pointerEvents = "none";
  host.style.overflow = "visible";
  host.style.zIndex = "-1";

  const clone = element.cloneNode(true) as HTMLElement;
  clone.classList.add("pdf-capture-root");
  clone.style.margin = "0";
  clone.style.transform = "none";
  clone.style.position = "relative";

  host.appendChild(clone);
  document.body.appendChild(host);

  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

  const rootRect = clone.getBoundingClientRect();
  const sectionBreaksCss = Array.from(
    clone.querySelectorAll<HTMLElement>(".pdf-section, .pdf-breakpoint"),
  )
    .flatMap((section) => {
      const r = section.getBoundingClientRect();
      const top = Math.max(0, r.top - rootRect.top);
      const bottom = Math.max(0, r.bottom - rootRect.top);
      return [top, bottom];
    })
    .sort((a, b) => a - b);

  const captureWidth = Math.max(
    1,
    Math.round(
      Math.max(clone.scrollWidth, clone.getBoundingClientRect().width),
    ),
  );
  const captureHeight = Math.max(
    1,
    Math.round(
      Math.max(clone.scrollHeight, clone.getBoundingClientRect().height),
    ),
  );

  let canvas: HTMLCanvasElement;
  try {
    canvas = await html2canvas(clone, {
      backgroundColor,
      scale,
      useCORS: true,
      logging: false,
      foreignObjectRendering: false,
      width: captureWidth,
      height: captureHeight,
      windowWidth: captureWidth,
      windowHeight: captureHeight,
      scrollX: 0,
      scrollY: 0,
    });
  } finally {
    document.body.removeChild(host);
  }

  const pxPerMm = canvas.width / contentW;
  const firstPageHeightPx = Math.max(1, Math.floor(contentH * pxPerMm));
  const continuationContentH = Math.max(1, contentH - continuationTopGapMm);
  const continuationPageHeightPx = Math.max(
    1,
    Math.floor(continuationContentH * pxPerMm),
  );
  const renderScale = canvas.width / captureWidth;

  const sectionBreaksPx = Array.from(
    new Set(
      sectionBreaksCss
        .map((v) => Math.round(v * renderScale))
        .filter((v) => v > 0 && v < canvas.height),
    ),
  ).sort((a, b) => a - b);

  const minTailPx = Math.max(12, Math.floor(pxPerMm * 1.2));

  const paintPageBackground = () => {
    pdf.setFillColor(backgroundColor);
    pdf.rect(0, 0, pageW, pageH, "F");
  };

  let renderedPx = 0;
  let pageIndex = 0;

  while (renderedPx < canvas.height) {
    const remainingPx = canvas.height - renderedPx;
    if (pageIndex > 0 && remainingPx < minTailPx) {
      break;
    }

    const currentPageHeightPx =
      pageIndex === 0 ? firstPageHeightPx : continuationPageHeightPx;
    const currentPageTopMm =
      marginMm + (pageIndex === 0 ? 0 : continuationTopGapMm);

    const defaultSliceHeightPx = Math.min(currentPageHeightPx, remainingPx);
    let sliceHeightPx = defaultSliceHeightPx;

    if (renderedPx + sliceHeightPx < canvas.height && sectionBreaksPx.length) {
      const targetEnd = renderedPx + sliceHeightPx;
      const minSnapFillPx = Math.floor(currentPageHeightPx * 0.92);
      const snapWindowPx = Math.floor(currentPageHeightPx * 0.08);
      const minBoundaryForSnap = Math.max(
        renderedPx + minSnapFillPx,
        targetEnd - snapWindowPx,
      );

      let bestBreak = -1;
      for (const boundary of sectionBreaksPx) {
        if (boundary <= renderedPx + 1) continue;
        if (boundary > targetEnd) break;
        if (boundary >= minBoundaryForSnap) bestBreak = boundary;
      }

      if (bestBreak > renderedPx + 1) {
        sliceHeightPx = bestBreak - renderedPx;

        const remainingAfterBreak =
          canvas.height - (renderedPx + sliceHeightPx);
        if (remainingAfterBreak > 0 && remainingAfterBreak < minTailPx) {
          sliceHeightPx = defaultSliceHeightPx;
        }
      }
    }

    const pageCanvas = document.createElement("canvas");
    pageCanvas.width = canvas.width;
    pageCanvas.height = sliceHeightPx;

    const ctx = pageCanvas.getContext("2d");
    if (!ctx) {
      throw new Error("Unable to initialize PDF canvas context.");
    }

    ctx.drawImage(
      canvas,
      0,
      renderedPx,
      canvas.width,
      sliceHeightPx,
      0,
      0,
      canvas.width,
      sliceHeightPx,
    );

    if (pageIndex > 0) {
      pdf.addPage();
    }

    paintPageBackground();

    const sliceHeightMm = sliceHeightPx / pxPerMm;
    pdf.addImage(
      pageCanvas,
      "PNG",
      marginMm,
      currentPageTopMm,
      contentW,
      sliceHeightMm,
      undefined,
      "FAST",
    );

    renderedPx += sliceHeightPx;
    pageIndex += 1;
  }

  pdf.save(fileName);
}

const FONT = {
  section: 12,
  subheading: 10,
  body: 10,
  small: 9,
};

const SP = {
  sectionTop: 7,
  sectionBottom: 4,
  rowGap: 3,
  line: 4.8,
  boxPadX: 3,
  boxPadY: 3,
};

function wrap(pdf: jsPDF, text: string, maxW: number) {
  return pdf.splitTextToSize(text, maxW) as string[];
}

function ensurePage(pdf: jsPDF, y: number, needed = 12) {
  if (y + needed > PAGE.h - PAGE.m) {
    pdf.addPage();
    return PAGE.m;
  }
  return y;
}

function setFont(pdf: jsPDF, size: number, bold = false) {
  pdf.setFont("helvetica", bold ? "bold" : "normal");
  pdf.setFontSize(size);
}

function drawSectionHeading(pdf: jsPDF, title: string, y: number) {
  y = ensurePage(pdf, y, 12);
  y += SP.sectionTop;

  setFont(pdf, FONT.section, true);
  pdf.text(title, PAGE.m, y);

  y += 2;
  pdf.setLineWidth(0.25);
  pdf.line(PAGE.m, y, PAGE.w - PAGE.m, y);

  return y + 4;
}

function drawBox(pdf: jsPDF, yTop: number, h: number) {
  pdf.setLineWidth(0.2);
  pdf.roundedRect(PAGE.m, yTop, CONTENT_W, h, 1.2, 1.2, "S");
}

function drawWrappedText(
  pdf: jsPDF,
  lines: string[],
  x: number,
  y: number,
  lineH = SP.line,
) {
  lines.forEach((line, i) => pdf.text(line, x, y + i * lineH));
  return y + lines.length * lineH;
}

function drawBulletLines(
  pdf: jsPDF,
  items: string[],
  x: number,
  y: number,
  maxW: number,
) {
  let cy = y;
  for (const item of items) {
    const lines = wrap(pdf, item, maxW - 4);
    pdf.text("•", x, cy);
    cy = drawWrappedText(pdf, lines, x + 4, cy);
  }
  return cy;
}

function calcLinesForBullets(pdf: jsPDF, items: string[], maxW: number) {
  let count = 0;
  for (const item of items) count += wrap(pdf, item, maxW - 4).length;
  return count;
}

function drawRowBox(
  pdf: jsPDF,
  y: number,
  render: (contentY: number) => void,
  estimatedLines: number,
) {
  const h = SP.boxPadY * 2 + estimatedLines * SP.line + 1;
  y = ensurePage(pdf, y, h + SP.rowGap);
  drawBox(pdf, y, h);
  render(y + SP.boxPadY + 1);
  return y + h + SP.rowGap;
}

export function exportSimplePortfolioPdf(
  data: SimplePortfolioData,
  fileName = "portfolio.pdf",
) {
  const pdf = new jsPDF("p", "mm", "a4");
  let y = PAGE.m;

  // PROFILE
  y = drawSectionHeading(pdf, "Profile", y);
  y = drawRowBox(
    pdf,
    y,
    (cy) => {
      setFont(pdf, 13, true);
      pdf.text(data.profile.name, PAGE.m + SP.boxPadX, cy);
      cy += SP.line;

      setFont(pdf, FONT.body, false);
      cy = drawWrappedText(
        pdf,
        wrap(pdf, data.profile.role, CONTENT_W - SP.boxPadX * 2),
        PAGE.m + SP.boxPadX,
        cy,
      );

      const contact = `${data.profile.location} | ${data.profile.email}${
        data.profile.phone ? ` | ${data.profile.phone}` : ""
      }`;
      cy = drawWrappedText(
        pdf,
        wrap(pdf, contact, CONTENT_W - SP.boxPadX * 2),
        PAGE.m + SP.boxPadX,
        cy,
      );

      const links = [
        data.profile.github,
        data.profile.codeberg,
        data.profile.linkedin,
      ]
        .filter(Boolean)
        .join(" | ");
      if (links) {
        drawWrappedText(
          pdf,
          wrap(pdf, links, CONTENT_W - SP.boxPadX * 2),
          PAGE.m + SP.boxPadX,
          cy,
        );
      }
    },
    6,
  );

  // PROFESSIONAL SUMMARY
  if (data.professionalSummary) {
    y = drawSectionHeading(pdf, "Professional Summary", y);
    const lines = wrap(
      pdf,
      data.professionalSummary,
      CONTENT_W - SP.boxPadX * 2,
    );
    y = drawRowBox(
      pdf,
      y,
      (cy) => {
        setFont(pdf, FONT.body, false);
        drawWrappedText(pdf, lines, PAGE.m + SP.boxPadX, cy);
      },
      lines.length,
    );
  }

  // CORE EXPERTISE
  if (data.expertise?.length) {
    y = drawSectionHeading(pdf, "Core Expertise", y);
    const bullets = data.expertise.map((e) => e.label);
    const lines = calcLinesForBullets(pdf, bullets, CONTENT_W - SP.boxPadX * 2);
    y = drawRowBox(
      pdf,
      y,
      (cy) => {
        setFont(pdf, FONT.body, false);
        drawBulletLines(
          pdf,
          bullets,
          PAGE.m + SP.boxPadX,
          cy,
          CONTENT_W - SP.boxPadX * 2,
        );
      },
      lines,
    );
  }

  // TECHNICAL STACK
  if (data.stack?.length) {
    y = drawSectionHeading(pdf, "Technical Stack", y);
    for (const group of data.stack) {
      const titleLines = wrap(
        pdf,
        group.title,
        CONTENT_W - SP.boxPadX * 2,
      ).length;
      const itemLines = calcLinesForBullets(
        pdf,
        group.items,
        CONTENT_W - SP.boxPadX * 2 - 4,
      );
      const estimate = titleLines + itemLines + 1;

      y = drawRowBox(
        pdf,
        y,
        (cy) => {
          setFont(pdf, FONT.subheading, true);
          cy = drawWrappedText(
            pdf,
            wrap(pdf, group.title, CONTENT_W - SP.boxPadX * 2),
            PAGE.m + SP.boxPadX,
            cy,
          );

          setFont(pdf, FONT.body, false);
          drawBulletLines(
            pdf,
            group.items,
            PAGE.m + SP.boxPadX + 4,
            cy,
            CONTENT_W - SP.boxPadX * 2 - 4,
          );
        },
        estimate,
      );
    }
  }

  // EXPERIENCE
  if (data.experience?.length) {
    y = drawSectionHeading(pdf, "Experience", y);
    for (const job of data.experience) {
      const head = `${job.role} — ${job.company}`;
      const meta = `${job.location ? `${job.location} | ` : ""}${job.period}`;
      const headLines = wrap(pdf, head, CONTENT_W - SP.boxPadX * 2).length;
      const metaLines = wrap(pdf, meta, CONTENT_W - SP.boxPadX * 2).length;
      const pointLines = calcLinesForBullets(
        pdf,
        job.points,
        CONTENT_W - SP.boxPadX * 2 - 4,
      );

      y = drawRowBox(
        pdf,
        y,
        (cy) => {
          setFont(pdf, FONT.subheading, true);
          cy = drawWrappedText(
            pdf,
            wrap(pdf, head, CONTENT_W - SP.boxPadX * 2),
            PAGE.m + SP.boxPadX,
            cy,
          );

          setFont(pdf, FONT.small, false);
          cy = drawWrappedText(
            pdf,
            wrap(pdf, meta, CONTENT_W - SP.boxPadX * 2),
            PAGE.m + SP.boxPadX,
            cy,
          );

          setFont(pdf, FONT.body, false);
          drawBulletLines(
            pdf,
            job.points,
            PAGE.m + SP.boxPadX + 4,
            cy,
            CONTENT_W - SP.boxPadX * 2 - 4,
          );
        },
        headLines + metaLines + pointLines + 1,
      );
    }
  }

  // PROJECTS
  if (data.projects?.length) {
    y = drawSectionHeading(pdf, "Selected Research & Engineering Projects", y);
    for (const p of data.projects) {
      const titleLines = wrap(pdf, p.name, CONTENT_W - SP.boxPadX * 2).length;
      const summaryLines = wrap(
        pdf,
        p.summary,
        CONTENT_W - SP.boxPadX * 2 - 4,
      ).length;
      const stackText = p.stack?.length ? `Stack: ${p.stack.join(", ")}` : "";
      const stackLines = stackText
        ? wrap(pdf, stackText, CONTENT_W - SP.boxPadX * 2 - 4).length
        : 0;

      y = drawRowBox(
        pdf,
        y,
        (cy) => {
          setFont(pdf, FONT.subheading, true);
          cy = drawWrappedText(
            pdf,
            wrap(pdf, p.name, CONTENT_W - SP.boxPadX * 2),
            PAGE.m + SP.boxPadX,
            cy,
          );

          setFont(pdf, FONT.body, false);
          cy = drawBulletLines(
            pdf,
            [p.summary],
            PAGE.m + SP.boxPadX + 4,
            cy,
            CONTENT_W - SP.boxPadX * 2 - 4,
          );

          if (stackText) {
            drawBulletLines(
              pdf,
              [stackText],
              PAGE.m + SP.boxPadX + 4,
              cy,
              CONTENT_W - SP.boxPadX * 2 - 4,
            );
          }
        },
        titleLines + summaryLines + stackLines + 1,
      );
    }
  }

  // PRODUCTS & LEADERSHIP
  if (data.productsLeadership?.length) {
    y = drawSectionHeading(pdf, "Selected Products & Leadership", y);
    for (const p of data.productsLeadership) {
      const title = `${p.name} — ${p.company}`;
      const titleLines = wrap(pdf, title, CONTENT_W - SP.boxPadX * 2).length;
      const summaryLines = wrap(
        pdf,
        p.summary,
        CONTENT_W - SP.boxPadX * 2 - 4,
      ).length;

      y = drawRowBox(
        pdf,
        y,
        (cy) => {
          setFont(pdf, FONT.subheading, true);
          cy = drawWrappedText(
            pdf,
            wrap(pdf, title, CONTENT_W - SP.boxPadX * 2),
            PAGE.m + SP.boxPadX,
            cy,
          );

          setFont(pdf, FONT.body, false);
          drawBulletLines(
            pdf,
            [p.summary],
            PAGE.m + SP.boxPadX + 4,
            cy,
            CONTENT_W - SP.boxPadX * 2 - 4,
          );
        },
        titleLines + summaryLines + 1,
      );
    }
  }

  // LEADERSHIP STRENGTHS
  if (data.leadershipStrengths?.length) {
    y = drawSectionHeading(pdf, "Leadership Strengths", y);
    const bullets = data.leadershipStrengths.map((s) => s.label);
    const lines = calcLinesForBullets(pdf, bullets, CONTENT_W - SP.boxPadX * 2);
    y = drawRowBox(
      pdf,
      y,
      (cy) => {
        setFont(pdf, FONT.body, false);
        drawBulletLines(
          pdf,
          bullets,
          PAGE.m + SP.boxPadX,
          cy,
          CONTENT_W - SP.boxPadX * 2,
        );
      },
      lines,
    );
  }

  // EDUCATION
  if (data.education?.length) {
    y = drawSectionHeading(pdf, "Education", y);
    for (const e of data.education) {
      const degreeLines = wrap(
        pdf,
        e.degree,
        CONTENT_W - SP.boxPadX * 2,
      ).length;
      const meta = `${e.school} | ${e.period}`;
      const metaLines = wrap(pdf, meta, CONTENT_W - SP.boxPadX * 2 - 4).length;

      y = drawRowBox(
        pdf,
        y,
        (cy) => {
          setFont(pdf, FONT.subheading, true);
          cy = drawWrappedText(
            pdf,
            wrap(pdf, e.degree, CONTENT_W - SP.boxPadX * 2),
            PAGE.m + SP.boxPadX,
            cy,
          );

          setFont(pdf, FONT.body, false);
          drawBulletLines(
            pdf,
            [meta],
            PAGE.m + SP.boxPadX + 4,
            cy,
            CONTENT_W - SP.boxPadX * 2 - 4,
          );
        },
        degreeLines + metaLines + 1,
      );
    }
  }

  // CERTIFICATES
  if (data.certs?.length) {
    y = drawSectionHeading(pdf, "Certificates", y);
    const lines = calcLinesForBullets(
      pdf,
      data.certs,
      CONTENT_W - SP.boxPadX * 2,
    );
    y = drawRowBox(
      pdf,
      y,
      (cy) => {
        setFont(pdf, FONT.body, false);
        drawBulletLines(
          pdf,
          data.certs!,
          PAGE.m + SP.boxPadX,
          cy,
          CONTENT_W - SP.boxPadX * 2,
        );
      },
      lines,
    );
  }

  // page numbers
  const total = pdf.getNumberOfPages();
  setFont(pdf, 8, false);
  for (let i = 1; i <= total; i++) {
    pdf.setPage(i);
    pdf.text(`Page ${i} of ${total}`, PAGE.w - PAGE.m - 18, PAGE.h - 4.5);
  }

  pdf.save(fileName);
}
