import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type ExportOptions = {
  fileName?: string;
  scale?: number;
};

export async function exportElementToPdf(
  element: HTMLElement,
  options: ExportOptions = {},
) {
  const { fileName = "ai-engineer-portfolio.pdf", scale = 2 } = options;

  const canvas = await html2canvas(element, {
    scale,
    useCORS: true,
    backgroundColor: "#05070a",
    logging: false,
  });

  const imgData = canvas.toDataURL("image/png");

  // A4 portrait in mm
  const pdf = new jsPDF("p", "mm", "a4");
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  // If content is taller than one page, add pages
  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save(fileName);
}
