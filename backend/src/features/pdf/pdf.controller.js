import {
  handleUpload,
  mergePDFs,
  splitPDFService,
  compressPDFService,
  imageToPDFService,
  pdfToImageService,
  rotatePDFService,
  watermarkPDFService,
} from "./pdf.service.js";
import downloadFile from "../../utils/downloadFile.js";
export const uploadPDF = async (req, res) => {
  try {
    // Check File
    const file = await handleUpload(req.file);
    return res.status(200).json({
        success: true,
        message: "PDF Uploaded Successfully.",
        data: file,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const mergePDF = async (req, res) => {
  try {
    const outputPath = await mergePDFs(req.files);

    return downloadFile(
      res,
      outputPath,
      "merged.pdf"
    );

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const splitPDF = async (req, res) => {
  try {

    const { startPage, endPage } = req.body;

    const outputPath = await splitPDFService(
      req.file,
      Number(startPage),
      Number(endPage)
    );

    return downloadFile(
      res,
      outputPath,
      "split.pdf"
    );

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const compressPDF = async (req, res) => {
  try {
    const { quality = "balanced" } = req.body;

    const outputPath = await compressPDFService(
      req.file,
      quality
    );

    return downloadFile(
      res,
      outputPath,
      "compressed.pdf"
    );

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const imageToPDF = async (req, res) => {
  try {

    const outputPath = await imageToPDFService(
      req.files
    );

    return downloadFile(
      res,
      outputPath,
      "images.pdf"
    );

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const rotatePDF = async (req, res) => {

  try {

    const { rotation } = req.body;

    console.log(req.body);
    console.log(req.body.rotation);
    console.log(Number(req.body.rotation));

    const outputPath = await rotatePDFService(
      req.file,
      Number(rotation)
    );

    return downloadFile(
      res,
      outputPath,
      "rotated.pdf"
    );

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

export const watermarkPDF = async (req, res) => {

  try {

    const { watermark } = req.body;

    if (!watermark) {
      return res.status(400).json({
        success: false,
        message: "Watermark text is required.",
      });
    }

    const outputPath = await watermarkPDFService(
      req.file,
      watermark
    );

    return downloadFile(
      res,
      outputPath,
      "watermarked.pdf"
    );

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// export const pdfToImage = async (req, res) => {
//   try {

//     const outputPath = await pdfToImageService(
//       req.file
//     );

//     return downloadFile(
//       res,
//       outputPath,
//       "images.zip"
//     );

//   } catch (error) {

//   console.error("PDF TO IMAGE ERROR:");
//   console.error(error);

//   return res.status(500).json({
//     success: false,
//     message: error.message,
//   });

// }
// };

export const pdfToImage = async (req, res) => {
  try {

    const outputPath = await pdfToImageService(
      req.file
    );

    return downloadFile(
      res,
      outputPath,
      "images.zip"
    );

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};