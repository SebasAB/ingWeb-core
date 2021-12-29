import mongoose from "mongoose";

const challengeSchema = mongoose.Schema({
  owner: String,
  category: String,
  categoryParameter: String,
  quantity: Number,
  beginDate: Date,
  endDate: Date,
  progress: Number,
});

const Challenge = mongoose.model("Challenge", challengeSchema);

export default Challenge;
