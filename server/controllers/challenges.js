import mongoose from "mongoose";
import Challenge from "../models/challenge.js";

export const getChallenges = async (req, res) => {
  const { email } = req.params;
  var returnChallenges = [];
  try {
    const challenges = await Challenge.find();

    for (var i in challenges) {
      if (email === challenges[i].owner) {
        returnChallenges.push(challenges[i]);
      }
    }
    res.status(200).json(returnChallenges);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const createChallenge = async (req, res) => {
  const challenge = req.body;

  const newChallenge = new Challenge(challenge);

  try {
    await newChallenge.save();
    res.status(201).json(newChallenge);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
