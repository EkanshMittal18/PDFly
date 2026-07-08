import {
  validateRegister,
  validateLogin,
} from "./auth.validation.js";

import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "./auth.service.js";

// ================= REGISTER =================

export const register = async (req, res) => {
  try {
    const error = validateRegister(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }

    const user = await registerUser(req.body);

    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
      data: user,
    });

  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= LOGIN =================

export const login = async (req, res) => {
  try {
    const error = validateLogin(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }

    const data = await loginUser(req.body);

    return res.status(200).json({
      success: true,
      message: "Login Successful.",
      data,
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= CURRENT USER =================

export const currentUser = async (req, res) => {
  try {
    const user = await getCurrentUser(req.user.id);

    return res.status(200).json({
      success: true,
      message: "Current user fetched successfully.",
      data: user,
    });

  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};