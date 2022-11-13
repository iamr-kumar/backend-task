import { Types } from "mongoose";
import { BookModel } from "../models/Book.model";

export async function createAndSaveBook(title: string, authorId: string) {
  try {
    const book = new BookModel({ title, author: authorId, likes: [] });
    await book.save();
    return book;
  } catch (err) {
    throw err;
  }
}

export async function selectPaginatedBooks(page: number, limit: number, skipIndex: number) {
  try {
    const books = await BookModel.find()
      .lean()
      .sort({ likes: -1 })
      .limit(limit)
      .skip(skipIndex)
      .populate("author", "-password");
    return books;
  } catch (err) {
    throw err;
  }
}

export async function addLike(bookId: string, authorId: string) {
  try {
    const authorObjectId = new Types.ObjectId(authorId);
    const book = await BookModel.findById(bookId);
    if (!book) {
      throw new Error("Book not found");
    }
    const author = book.likes.find((like) => like.equals(authorObjectId));
    if (author) {
      throw new Error("You already liked this book");
    }
    book.likes.push(authorObjectId);
    await book.save();
    return book;
  } catch (err) {
    throw err;
  }
}

export async function removeLike(bookId: string, authorId: string) {
  try {
    const authorObjectId = new Types.ObjectId(authorId);
    const book = await BookModel.findById(bookId);
    if (!book) {
      throw new Error("Book not found");
    }
    const author = book.likes.find((like) => like.equals(authorObjectId));
    if (!author) {
      throw new Error("You haven't liked this book");
    }
    book.likes = book.likes.filter((like) => !like.equals(authorObjectId));
    await book.save();
    return book;
  } catch (err) {
    throw err;
  }
}
