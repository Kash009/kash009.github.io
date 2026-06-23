import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type ExportOptions = {
  fileName?: string;
  scale?: number;
  backgroundColor?: string;
};

export async function exportElementToPdf(
  element: HTMLElement,
  options: ExportOptions = {},
) {
  const {
    fileName = "ai-engineer-portfolio.pdf",
    scale = 2,
    backgroundColor = "#05070a",
  } = options;

  const pdf = new jsPDF("p", "mm", "a4");
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const margin = 8;
  const gap = 4;
  const usableWidthMm = pageWidth - margin * 2;
  const usableHeightMm = pageHeight - margin * 2;

  const sections = Array.from(element.children) as HTMLElement[];
  let cursorYmm = margin;
  let hasDrawnAnything = false;

  for (const section of sections) {
    const sectionCanvas = await html2canvas(section, {
      scale,
      useCORS: true,
      backgroundColor,
      logging: false,
      windowWidth: section.scrollWidth,
      windowHeight: section.scrollHeight,
    });

    // Convert mm->px at current fit ratio:
    // full section width in px maps to usableWidthMm in pdf
    const pxPerMm = sectionCanvas.width / usableWidthMm;

    let sourceYpx = 0;
    const totalHeightPx = sectionCanvas.height;

    while (sourceYpx < totalHeightPx) {
      // remaining vertical space on current pdf page in mm
      const remainingMm = pageHeight - margin - cursorYmm;

      // if no room, add new page
      if (remainingMm <= 1) {
        pdf.addPage();
        cursorYmm = margin;
      }

      // convert remaining drawable mm to px in source canvas
      const sliceHeightPx = Math.min(
        Math.floor((pageHeight - margin - cursorYmm) * pxPerMm),
        totalHeightPx - sourceYpx,
      );

      // safety: if still zero, new page
      if (sliceHeightPx <= 0) {
        pdf.addPage();
        cursorYmm = margin;
        continue;
      }

      // create slice canvas
      const sliceCanvas = document.createElement("canvas");
      sliceCanvas.width = sectionCanvas.width;
      sliceCanvas.height = sliceHeightPx;

      const ctx = sliceCanvas.getContext("2d");
      if (!ctx) throw new Error("Failed to create canvas context");

      ctx.drawImage(
        sectionCanvas,
        0,
        sourceYpx,
        sectionCanvas.width,
        sliceHeightPx,
        0,
        0,
        sectionCanvas.width,
        sliceHeightPx,
      );

      const sliceData = sliceCanvas.toDataURL("image/png", 1.0);

      const sliceHeightMm = sliceHeightPx / pxPerMm;

      pdf.addImage(
        sliceData,
        "PNG",
        margin,
        cursorYmm,
        usableWidthMm,
        sliceHeightMm,
        undefined,
        "FAST",
      );

      hasDrawnAnything = true;
      sourceYpx += sliceHeightPx;
      cursorYmm += sliceHeightMm;

      // if this section continues, force next page (cleaner than splitting with tiny leftover)
      if (sourceYpx < totalHeightPx) {
        pdf.addPage();
        cursorYmm = margin;
      }
    }

    // gap after each finished section
    cursorYmm += gap;

    // if gap overflow, start next page
    if (cursorYmm > pageHeight - margin) {
      pdf.addPage();
      cursorYmm = margin;
    }
  }

  if (hasDrawnAnything) {
    pdf.save(fileName);
  }
}
