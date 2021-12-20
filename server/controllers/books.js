import mongoose from "mongoose";
import Book from "../models/bookInfo.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//for challenges we can asign the information from the token that comes from the req

export const createBook = async (req, res) => {
  const book = req.body;

  //const newBook = new Book({...book, "creator": req.user_id})

  const newBook = new Book(book);

  try {
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id: _id } = req.params;

    const book = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post with that id");

    const updatedBook = await Book.findByIdAndUpdate(_id, book, { new: true });

    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No post with that id");

    await Book.findByIdAndRemove(id);

    res.json({ message: "Post deleted succesfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
