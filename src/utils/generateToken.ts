import jwt from "jsonwebtoken";
import { Author } from "../models/Author.model";

export const generateToken = (author: Author) => {
  const token = jwt.sign(
    {
      id: author._id,
      email: author.email,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1d",
    }
  );
  return token;
};
