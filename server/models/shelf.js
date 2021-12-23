import mongoose from "mongoose";

const shelfSchema = mongoose.Schema({
  owner: String,
  books: {
    type: [String],
    default: [],
  },
  datesAdded: {
    type: [Date],
    default: [],
  },
});

const Shelf = mongoose.model("Shelf", shelfSchema);

export default Shelf;
