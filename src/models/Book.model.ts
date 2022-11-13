import mongoose, { Types } from "mongoose";

export interface IBook {
  title: string;
  likes: Array<Types.ObjectId>;
  author: Types.ObjectId;
}

export interface Book extends IBook {
  _id: Types.ObjectId;
}

const bookSchema = new mongoose.Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
});

export const BookModel = mongoose.model("Book", bookSchema);
