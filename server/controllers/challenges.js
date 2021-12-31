import mongoose from "mongoose";
import Challenge from "../models/challenge.js";
import Shelf from "../models/shelf.js";
import Book from "../models/bookInfo.js";

export const getChallenges = async (req, res) => {
  const { email } = req.params;
  try {
    const userShelf = await Shelf.findOne({ owner: email });
    const challenges = await Challenge.find({ owner: email });
    const globalBooks = await Book.find();
    const books = Object.values(userShelf.books);
    for (var i in challenges) {
      const challengeID = challenges[i]._id.toString();
      var challengeProgression = 0;
      if (challenges[i].category === "Quantity") {
        for (var j in books[0]) {
          var addedDate = books[1][j].setHours(0, 0, 0, 0);
          var beginDate = challenges[i].beginDate.setHours(0, 0, 0, 0);
          var endDate = challenges[i].endDate.setHours(0, 0, 0, 0);
          if (addedDate <= endDate && addedDate >= beginDate) {
            challengeProgression += 1;
          }
        }
        const query = {
          _id: challengeID,
        };
        const updatedChallenge = {
          $set: {
            progress: challengeProgression,
          },
        };

        await Challenge.updateOne(query, updatedChallenge);
      } else if (challenges[i].category === "By Author") {
        for (var j in books[0]) {
          for (var k in globalBooks) {
            if (books[0][j] === globalBooks[k]._id.toString()) {
              if (globalBooks[k].author === challenges[i].categoryParameter) {
                challengeProgression += 1;
              }
            }
          }
        }
        const query = {
          _id: challengeID,
        };
        const updatedChallenge = {
          $set: {
            progress: challengeProgression,
          },
        };
        await Challenge.updateOne(query, updatedChallenge);
      } else if (challenges[i].category === "By Category") {
        for (var j in books[0]) {
          for (var k in globalBooks) {
            if (books[0][j] === globalBooks[k]._id.toString()) {
              if (globalBooks[k].genre === challenges[i].categoryParameter) {
                challengeProgression += 1;
              }
            }
          }
        }
        const query = {
          _id: challengeID,
        };
        const updatedChallenge = {
          $set: {
            progress: challengeProgression,
          },
        };
        await Challenge.updateOne(query, updatedChallenge);
      }
    }

    res.status(200).json(challenges);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const createChallenge = async (req, res) => {
  const challenge = req.body;
  try {
    const newChallenge = new Challenge(challenge);
    await newChallenge.save();
    const challenges = await Challenge.find({ owner: email });
    res.status(200).json(challenges);
  } catch (error) {
    console.log(error);
  }
};
