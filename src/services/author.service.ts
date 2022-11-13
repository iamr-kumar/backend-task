import { Author } from "../models/Author.model";
import { BookModel } from "../models/Book.model";
import { selectAuthor, selectAuthors } from "../repository";

export async function getAuthorsWithBooks(): Promise<Author[]> {
  try {
    const authors = await selectAuthors();
    const authorsWithBooks = await Promise.all(
      authors.map(async (author) => {
        const books = await BookModel.find({ author: author._id });
        return { ...author, numberOfBooks: books.length };
      })
    );
    return authorsWithBooks;
  } catch (err) {
    throw err;
  }
}

export async function getAuthorWithBooks(authorId: string): Promise<Author> {
  try {
    const author = await selectAuthor(authorId);
    if (!author) {
      throw new Error("Author not found");
    }
    const books = await BookModel.find({ author: author._id });
    return { ...author, books };
  } catch (err) {
    throw err;
  }
}
