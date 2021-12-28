import mongoose from "mongoose";
import Challenge from "../models/challenge.js";

export const getChallenges = async (req, res) => {
  const { email } = req.params;
  try {
    const challenge = await Challenge.find({ owner: email });

    res.status(200).json(challenge);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const createChallenge = async (req, res) => {
  const email = req.body;
  try {
    const newChallenge = new Challenge(email);
    await newChallenge.save();
    res.status(200).json(newChallenge);
  } catch (error) {
    console.log(error);
  }
};

export const addNewChallenge = async (req, res) => {
  const { email } = req.params;
  const { category, categoryParameter, quantity, endDate } = req.body;

  try {
    const query = { owner: email };
    const createChallengeQuery = {
      $push: {
        challenges: {
          category: category,
          categoryParameter: categoryParameter,
          quantity: quantity,
          beginDate: new Date(),
          endDate: endDate,
          progress: 0,
        },
      },
    };

    await Challenge.updateOne(query, createChallengeQuery);

    const challenge = await Challenge.find({ owner: email });

    res.status(200).json(challenge);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
