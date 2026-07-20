import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import { createCanvas } from "@napi-rs/canvas";

dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

app.listen(PORT, "0.0.0.0", () => {
  console.log("=================================");
  console.log(`🚀 Server Running on Port ${PORT}`);
  console.log("=================================");
});