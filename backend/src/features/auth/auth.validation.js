export const validateRegister = (data) => {
  const { fullName, email, password } = data;

  if (!fullName || !email || !password) {
    return "All fields are required.";
  }

  if (fullName.trim().length < 3) {
    return "Full name must be at least 3 characters.";
  }

  const emailRegex = /^\S+@\S+\.\S+$/;

  if (!emailRegex.test(email)) {
    return "Invalid email address.";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters.";
  }

  return null;
};

export const validateLogin = (data) => {
  const { email, password } = data;

  if (!email || !password) {
    return "Email and Password are required.";
  }

  return null;
};