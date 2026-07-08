import express from "express";
import { register, login, currentUser} from "./auth.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

const router = express.Router();

// Register User
router.post("/register", register);

// Login User
router.post("/login", login);

router.get("/me", authMiddleware, currentUser);

export default router;