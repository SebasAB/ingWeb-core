import mongoose from "mongoose";
import Shelf from "../models/shelf.js";

export const getShelfs = async (req, res) => {
  const { email } = req.params;
  var returnShelf;
  try {
    const shelfs = await Shelf.find();

    for (var i in shelfs) {
      if (email === shelfs[i].owner) {
        returnShelf = shelfs[i];
      }
    }
    res.status(200).json(returnShelf);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const createShelf = async (req, res) => {
  const shelf = req.body;

  const newShelf = new Shelf(shelf);

  try {
    const shelfs = await Shelf.find();
    for (var i in shelfs) {
      if (newShelf.owner === shelfs[i].owner) {
        res.status(409).json({ message: "Unable to create shelf" });
        return false;
      }
    }
    await newShelf.save();
    res.status(201).json(newShelf);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateShelf = async (req, res) => {
  const { email } = req.params;
  const { book } = req.body;
  const date = new Date();
  try {
    const query = { owner: email };
    const updateBooks = {
      $push: { books: book },
    };
    const updateDates = {
      $push: { datesAdded: date },
    };
    const updatedShelf = await Shelf.updateOne(query, updateBooks);
    await Shelf.updateOne(query, updateDates);
    res.status(200).json(updatedShelf);
  } catch (error) {
    res.status(500).json({ message: error });
    console.log(error);
  }
};
