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
      console.log("First Loop: Challenges");
      if (challenges[i].category === "Quantity") {
        console.log("Second loop: Challenge Category equals Quantity");
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
        console.log("Second loop: Challenge Category equals By Author");
        for (var j in books[0]) {
          for (var k in globalBooks) {
            if (books[0][j] === globalBooks[k]._id.toString()) {
              console.log("Book coincidence");
              console.log(globalBooks[k].author);
              console.log(challenges[i].categoryParameter);
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
        console.log("Second loop: Challenge Category equals By Category");
        for (var j in books[0]) {
          for (var k in globalBooks) {
            if (books[0][j] === globalBooks[k]._id.toString()) {
              console.log("Book coincidence");
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

    // for (var i in challenges) {
    //   console.log("first loop");
    //   const challengeCategory = challenges[0][i];
    //   console.log(challengeCategory);
    //   if (challengeCategory === "Quantity") {
    //     console.log("enters");
    //     for (var j in books) {
    //       console.log("enters more");
    //       console.log(books[1][j].setHours(0, 0, 0, 0));
    //       var addedDate = books[1][j].setHours(0, 0, 0, 0);
    //       console.log(addedDate);
    //       var beginDate = challenges[3][i].setHours(0, 0, 0, 0);
    //       console.log(beginDate);
    //       var endDate = challenges[4][i].setHours(0, 0, 0, 0);
    //       console.log(endDate);
    //       if (addedDate <= endDate && addedDate >= beginDate) {
    //         console.log("progess changing");
    //         challenges[5][i] = challenges[5][i] + 1;
    //         const query = {
    //           owner: email,
    //           category: challenges[0][i],
    //           categoryParameter: challenges[1][i],
    //           quantity: challenges[2][i],
    //         };
    //         const updateChallenge = {
    //           $set: {
    //             challenges: [
    //               {
    //                 category: challenges[0][i],
    //                 categoryParameter: challenges[1][i],
    //                 quantity: challenges[2][i],
    //                 beginDate: challenges[3][i],
    //                 endDate: challenges[4][i],
    //                 progress: challenges[5][i],
    //               },
    //             ],
    //           },
    //         };
    //         const updatedChallenge = await Challenge.updateOne(
    //           query,
    //           updateChallenge
    //         );
    //         console.log(updatedChallenge);
    //       }
    //     }
    //   }
    // }

    // const query = { owner: email };
    // const updateShelfQuery = {
    //   $push: { books: { bookID: book, dateAdded: date } },
    // };
    // const updatedShelf = await Shelf.updateOne(query, updateShelfQuery);

    // for (var i in books) {
    //   console.log(i);
    //   console.log(books[1][i]);
    // }

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

// export const addNewChallenge = async (req, res) => {
//   const { email } = req.params;
//   const { category, categoryParameter, quantity, endDate } = req.body;

//   try {
//     const query = { owner: email };
//     const createChallengeQuery = {
//       $push: {
//         challenges: {
//           category: category,
//           categoryParameter: categoryParameter,
//           quantity: quantity,
//           beginDate: new Date(),
//           endDate: endDate,
//           progress: 0,
//         },
//       },
//     };

//     await Challenge.updateOne(query, createChallengeQuery);

//     const challenge = await Challenge.find({ owner: email });

//     res.status(200).json(challenge);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };
