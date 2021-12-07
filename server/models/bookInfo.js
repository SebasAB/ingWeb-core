import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    genre: String
});

const Book = mongoose.model('Book', bookSchema)

export default Book

