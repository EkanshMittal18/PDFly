import fs from "fs";
import path from "path";
import archiver from "archiver";
import { pdf } from "pdf-to-img";
import { PDFDocument , degrees, rgb, StandardFonts, } from "pdf-lib";
import { exec } from "child_process";
import { promisify } from "util";
import sharp from "sharp";


const tempPdfFolder = path.join("src", "temp", "pdf");
const imageFolder = path.join("src", "temp", "images");
const outputFolder = path.join("src", "temp", "output");
const pdfToImageFolder = path.join("src", "temp", "pdf-to-image");

const execAsync = promisify(exec);

export const handleUpload = async (file) => {
  if (!file) {
    throw new Error("Please upload a PDF file.");
  }

  return {
    fileName: file.filename,
    originalName: file.originalname,
    size: file.size,
    path: file.path,
  };
};

export const mergePDFs = async (files) => {
  if (!files || files.length < 2) {
    throw new Error("Please upload at least 2 PDF files.");
  }

  // Create output folder if not exists
  const outputFolder = "src/outputs";

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
  }

  const mergedPdf = await PDFDocument.create();

  for (const file of files) {
    const pdfBytes = fs.readFileSync(file.path);

    const pdf = await PDFDocument.load(pdfBytes);

    const copiedPages = await mergedPdf.copyPages(
      pdf,
      pdf.getPageIndices()
    );

    copiedPages.forEach((page) => {
      mergedPdf.addPage(page);
    });
  }

  const mergedBytes = await mergedPdf.save();

  const outputPath = path.join(
    outputFolder,
    `merged-${Date.now()}.pdf`
  );

  fs.writeFileSync(outputPath, mergedBytes);

  return outputPath;
};
export const splitPDFService = async (
  file,
  startPage,
  endPage
) => {

  if (!file) {
    throw new Error("Please upload a PDF.");
  }

  const outputFolder = "src/outputs";

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
  }

  const pdfBytes = fs.readFileSync(file.path);

  const pdf = await PDFDocument.load(pdfBytes);

  const totalPages = pdf.getPageCount();

  if (
    startPage < 1 ||
    endPage > totalPages ||
    startPage > endPage
  ) {
    throw new Error("Invalid page range.");
  }

  const newPdf = await PDFDocument.create();

  const pageIndexes = [];

  for (
    let i = startPage - 1;
    i <= endPage - 1;
    i++
  ) {
    pageIndexes.push(i);
  }

  const copiedPages = await newPdf.copyPages(
    pdf,
    pageIndexes
  );

  copiedPages.forEach((page) => {
    newPdf.addPage(page);
  });

  const pdfBytesOutput = await newPdf.save();

  const outputPath = path.join(
    outputFolder,
    `split-${Date.now()}.pdf`
  );

  fs.writeFileSync(
    outputPath,
    pdfBytesOutput
  );

  return outputPath;
};

export const compressPDFService = async (
  file,
  quality = "balanced"
) => {

  if (!file) {
    throw new Error("Please upload a PDF.");
  }

  const outputFolder = "src/outputs";

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
  }

  const outputPath = path.join(
    outputFolder,
    `compressed-${Date.now()}.pdf`
  );

  const qualityMap = {
    low: "/prepress",
    balanced: "/ebook",
    high: "/screen",
  };

  const pdfSetting =
    qualityMap[quality] || "/ebook";

  const gsPath =
  '"C:\\Program Files\\gs\\gs10.07.1\\bin\\gswin64c.exe"';

const command = `${gsPath} \
-sDEVICE=pdfwrite \
-dCompatibilityLevel=1.4 \
-dPDFSETTINGS=${pdfSetting} \
-dNOPAUSE \
-dQUIET \
-dBATCH \
-sOutputFile="${outputPath}" \
"${file.path}"`;

  await execAsync(command);

  return outputPath;
};

export const imageToPDFService = async (files) => {

  if (!files || files.length === 0) {
    throw new Error("Please upload at least one image.");
  }

  const outputFolder = "src/outputs";

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
  }

  const pdfDoc = await PDFDocument.create();

  for (const file of files) {

    const imageBuffer = await sharp(file.path)
      .jpeg()
      .toBuffer();

    const image = await pdfDoc.embedJpg(imageBuffer);

    const { width, height } = image.scale(1);

    const page = pdfDoc.addPage([width, height]);

    page.drawImage(image, {
      x: 0,
      y: 0,
      width,
      height,
    });

  }

  const pdfBytes = await pdfDoc.save();

  const outputPath = path.join(
    outputFolder,
    `images-${Date.now()}.pdf`
  );

  fs.writeFileSync(outputPath, pdfBytes);

  return outputPath;

};


export const rotatePDFService = async (
  file,
  rotation
) => {

  if (!file) {
    throw new Error("Please upload a PDF.");
  }

  const allowedRotations = [90, 180, 270];

  if (!allowedRotations.includes(rotation)) {
    throw new Error(
      "Rotation must be 90, 180 or 270."
    );
  }

  const outputFolder = "src/outputs";

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, {
      recursive: true,
    });
  }

  const pdfBytes = fs.readFileSync(file.path);

  const pdfDoc = await PDFDocument.load(pdfBytes);

  const pages = pdfDoc.getPages();

  pages.forEach((page) => {
    page.setRotation(degrees(rotation));
  });

  const rotatedPdf = await pdfDoc.save();

  const outputPath = path.join(
    outputFolder,
    `rotated-${Date.now()}.pdf`
  );

  fs.writeFileSync(
    outputPath,
    rotatedPdf
  );

  return outputPath;

};

export const watermarkPDFService = async (
  file,
  watermark
) => {

  if (!file) {
    throw new Error("Please upload a PDF.");
  }

  if (!watermark.trim()) {
    throw new Error("Watermark text is required.");
  }

  const outputFolder = "src/outputs";

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, {
      recursive: true,
    });
  }

  const pdfBytes = fs.readFileSync(file.path);

  const pdfDoc = await PDFDocument.load(pdfBytes);

  const font = await pdfDoc.embedFont(
    StandardFonts.HelveticaBold
  );

  const pages = pdfDoc.getPages();

  pages.forEach((page) => {

    const { width, height } = page.getSize();

    page.drawText(watermark, {
      x: width / 4,
      y: height / 2,
      size: 40,
      font,
      color: rgb(0.75, 0.75, 0.75),
      rotate: degrees(45),
      opacity: 0.4,
    });

  });

  const outputBytes = await pdfDoc.save();

  const outputPath = path.join(
    outputFolder,
    `watermark-${Date.now()}.pdf`
  );

  fs.writeFileSync(
    outputPath,
    outputBytes
  );

  return outputPath;

};

export const pdfToImageService = async (file) => {

  if (!file) {
    throw new Error("Please upload a PDF.");
  }

  if (!fs.existsSync(pdfToImageFolder)) {
    fs.mkdirSync(pdfToImageFolder, {
      recursive: true,
    });
  }

  if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, {
    recursive: true,
  });
}

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, {
    recursive: true,
  });
}

  const zipPath = path.join(
    outputFolder,
    `images-${Date.now()}.zip`
  );

  const output = fs.createWriteStream(zipPath);

  const archive = archiver("zip", {
    zlib: { level: 9 },
  });

  archive.pipe(output);

  const document = await pdf(file.path, {
    scale: 3,
  });

  let pageNumber = 1;

  for await (const image of document) {

    archive.append(image, {
      name: `page-${pageNumber}.png`,
    });

    pageNumber++;

  }

  await document.destroy();

  await archive.finalize();

  await new Promise((resolve, reject) => {

    output.on("close", resolve);

    output.on("error", reject);

  });

  return zipPath;

};

export const protectPDFService = async (file, password) => {
if (!file) {
  throw new Error("Please upload a PDF file.");
}

const inputPath = file.path;

const outputPath = path.join(
  outputFolder,
  `protected-${Date.now()}.pdf`
);

// Make sure output folder exists
fs.mkdirSync(outputFolder, {
  recursive: true,
});
const command = `qpdf --encrypt "${password}" "${password}" 256 -- "${inputPath}" "${outputPath}"`;

await execAsync(command);

return outputPath;
};
