import { Request, Response } from "express";
import { getAuthorsWithBooks, getAuthorWithBooks } from "../services/author.service";

export async function getAuthorsController(req: Request, res: Response) {
  try {
    const authors = await getAuthorsWithBooks();
    return res.status(200).json(authors);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}

export async function getAuthorController(req: Request, res: Response) {
  try {
    const author = await getAuthorWithBooks(req.params.id);
    return res.status(200).json(author);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}

export async function getLoggedinAuthorController(req: Request, res: Response) {
  try {
    const author = await getAuthorWithBooks(res.locals.authorId);
    return res.status(200).json(author);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}
