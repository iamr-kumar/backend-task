import { faker } from "@faker-js/faker";
import { Author } from "../models/Author.model";
import { Book } from "../models/Book.model";
import { createAndSaveAuthor } from "../repository";
import { createAndSaveBook } from "../repository/book.repository";
import bcrypt from "bcryptjs";

interface FakeData {
  author: Author;
  book: Book;
}

async function generateFakeAuthor() {
  const name = faker.name.fullName();
  const email = faker.internet.email();
  const phone = faker.phone.number();
  const password = faker.internet.password();
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const author = await createAndSaveAuthor(name, email, hashedPassword, phone);
    return { name, email, phone, password, _id: author._id };
  } catch (err) {
    console.log(err);
  }
}

export async function generateFakeBook(authorId: string) {
  const title = faker.lorem.word(3);
  try {
    const book = await createAndSaveBook(title, authorId);
    return book;
  } catch (err) {
    throw err;
  }
}

export const generateFakeData = async (count: number) => {
  var data: Array<FakeData> = [];
  try {
    for (let i = 0; i < count; i++) {
      const author = await generateFakeAuthor();
      const book = await generateFakeBook(author!._id.toString()!);
      if (author && book) {
        data.push({ author, book });
      }
    }
    return data;
  } catch (err) {
    console.log(err);
  }
};
