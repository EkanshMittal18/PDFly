import express from "express";
import upload from "../../middlewares/upload.middleware.js";
import {
  uploadPDF,
  mergePDF,
  splitPDF,
  compressPDF,
  imageToPDF,
  // pdfToImage,
  rotatePDF,
  watermarkPDF,
} from "./pdf.controller.js";

const router = express.Router();

// Upload PDF
router.post("/upload", upload.single("pdf"), uploadPDF);

// Merge PDFs
router.post("/merge", upload.array("pdf", 10), mergePDF);

// Split PDF
router.post("/split", upload.single("pdf"), splitPDF);

// Compress PDF
router.post("/compress", upload.single("pdf"), compressPDF);

router.post("/image-to-pdf", upload.array("images", 20), imageToPDF);

// router.post("/pdf-to-image", upload.single("pdf"), pdfToImage);

router.post("/rotate", upload.single("pdf"), rotatePDF);

router.post("/watermark", upload.single("pdf"), watermarkPDF);

export default router;