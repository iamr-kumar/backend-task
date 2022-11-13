import { NextFunction, Request, Response } from "express";
import { loginAuthor, registerAuthor } from "../services";
import { emailRegex, passwordRegex, phoneRegex } from "../utils/constants/regex";

export const registerAuthorController = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password, phone } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Please enter a valid email" });
  }
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message:
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character",
    });
  }
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ message: "Please enter a valid phone number" });
  }

  try {
    const token = await registerAuthor(name, email, password, phone);
    return res.status(200).json({ token });
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
};

export const loginAuthorController = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Please enter a valid email" });
  }
  try {
    const token = await loginAuthor(email, password);
    return res.status(200).json({ token });
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
};
