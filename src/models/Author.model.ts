import mongoose, { Types } from "mongoose";
import { Book } from "./Book.model";

export interface IAuthor {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface Author extends IAuthor {
  _id: Types.ObjectId;
  books?: Book[];
  numberOfBooks?: number;
}

const authorSchema = new mongoose.Schema<IAuthor>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    minLength: 10,
    required: true,
    unique: true,
  },
});

export const AuthorModel = mongoose.model("Author", authorSchema);
