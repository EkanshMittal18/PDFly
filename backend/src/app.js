import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import cookieParser from "cookie-parser";
import authRoutes from "./features/auth/auth.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import pdfRoutes from "./features/pdf/pdf.routes.js";


dotenv.config();

const app = express();

// Security
app.use(helmet());

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookies
app.use(cookieParser());

// Compression
app.use(compression());

// Logger
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/pdf", pdfRoutes);

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 PDFly Backend Running Successfully",
  });
});// Global Error Handler
app.use(errorHandler);



export default app;