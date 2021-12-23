import mongoose from "mongoose";

const challengeSchema = mongoose.Schema({
  owner: String,
  category: String,
  categoryParameter: String,
  quantity: Number,
  beginDate: {
    type: Date,
    default: new Date(),
  },
  endDate: Date,
  progress: {
    type: Number,
    default: 0,
  },
});

const Challenge = mongoose.model("Challenge", challengeSchema);

export default Challenge;
