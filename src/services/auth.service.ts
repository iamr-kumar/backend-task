import bcrypt from "bcryptjs";
import { createAndSaveAuthor, findAuthorByEmail } from "../repository";
import { generateToken } from "../utils/generateToken";

export async function registerAuthor(name: string, email: string, password: string, phone: string): Promise<string> {
  try {
    const existingAuthor = await findAuthorByEmail(email);
    if (existingAuthor) {
      throw new Error("User already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const author = await createAndSaveAuthor(name, email, hash, phone);
    const token = await generateToken(author);
    return token;
  } catch (err) {
    throw err;
  }
}

export async function loginAuthor(email: string, password: string): Promise<string> {
  try {
    const author = await findAuthorByEmail(email);
    if (!author) {
      throw new Error("Invalid email or password");
    }
    const isMatch = await bcrypt.compare(password, author.password);
    if (!isMatch) {
      throw new Error("Invalid email or password");
    }
    const token = await generateToken(author);
    return token;
  } catch (err: any) {
    throw err;
  }
}
