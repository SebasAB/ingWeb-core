import mongoose from "mongoose";

const shelfSchema = mongoose.Schema({
  owner: String,
  books: {
    bookID: String,
    dateAdded: Date,
  },
});

const Shelf = mongoose.model("Shelf", shelfSchema);

export default Shelf;
