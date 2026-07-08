import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

app.listen(PORT, () => {
  console.log("=================================");
  console.log(`🚀 Server Running on Port ${PORT}`);
  console.log("=================================");
});