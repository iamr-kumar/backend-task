import { AuthorModel } from "../models/Author.model";

export const findAuthorByEmail = async (email: string) => {
  try {
    const author = await AuthorModel.findOne({ email }).lean();
    return author;
  } catch (err) {
    throw err;
  }
};

export const createAndSaveAuthor = async (name: string, email: string, password: string, phone: string) => {
  try {
    const author = new AuthorModel({ name, email, password, phone });
    await author.save();
    return author;
  } catch (err) {
    throw err;
  }
};

export const selectAuthors = async () => {
  try {
    const authors = await AuthorModel.find({}).lean().select("-password");
    return authors;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const selectAuthor = async (authorId: string) => {
  try {
    const author = await AuthorModel.findById(authorId).lean().select("-password");
    return author;
  } catch (err) {
    throw err;
  }
};
