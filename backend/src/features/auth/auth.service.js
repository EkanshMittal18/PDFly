import User from "./auth.model.js";
import generateToken from "../../utils/generateToken.js";

export const registerUser = async (userData) => {
  const { fullName, email, password } = userData;

  // Check Existing User
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists with this email.");
  }

  
  // Create User
  const user = await User.create({
    fullName,
    email,
    password,
  });

  return {
    id: user._id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
  };
};


export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found.");
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new Error("Invalid email or password.");
  }

  const token = generateToken(user._id);

  return {
    token,
    user: {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
  };
};export const getCurrentUser = async (userId) => {
  const user = await User.findById(userId).select("-password");

  if (!user) {
    throw new Error("User not found.");
  }

  return user;
};

