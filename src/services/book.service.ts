import { Book } from "../models/Book.model";
import { addLike, removeLike, selectPaginatedBooks } from "../repository/book.repository";

export async function getBooks(limit: number, page: number): Promise<Book[]> {
  const skipIndex = (page - 1) * limit;
  try {
    const books = await selectPaginatedBooks(page, limit, skipIndex);
    return books;
  } catch (err: any) {
    throw err;
  }
}

export async function likeBook(bookId: string, authorId: string): Promise<Book> {
  try {
    const book = await addLike(bookId, authorId);
    return book;
  } catch (err) {
    throw err;
  }
}

export async function dislikeBook(bookId: string, authorId: string): Promise<Book> {
  try {
    const book = await removeLike(bookId, authorId);
    return book;
  } catch (err) {
    throw err;
  }
}
