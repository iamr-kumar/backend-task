import { Request, Response } from "express";
import { dislikeBook, getBooks, likeBook } from "../services/book.service";

export const getBooksController = async (req: Request, res: Response) => {
  const limit = parseInt(req.query.limit as string);
  const page = parseInt(req.query.page as string);
  try {
    const books = await getBooks(limit, page);
    return res.status(200).json(books);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const likeController = async (req: Request, res: Response) => {
  const bookId = req.params.id;
  const authorId = res.locals.authorId;
  try {
    const book = await likeBook(bookId, authorId);
    return res.status(200).json(book);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const dislikeController = async (req: Request, res: Response) => {
  const bookId = req.params.id;
  const authorId = res.locals.authorId;
  try {
    const book = await dislikeBook(bookId, authorId);
    return res.status(200).json(book);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
