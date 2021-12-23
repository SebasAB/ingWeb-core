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

  console.log(shelf);
  console.log(shelf.owner);
  console.log(shelf.body);

  const newShelf = new Shelf(shelf);

  try {
    const shelfs = await Shelf.find();
    for (var i in shelfs) {
      if (newShelf.owner === shelfs[i].owner) {
        res.status(409).json({ message: "Unable to create shelf" });
        return false;
      }
    }
    console.log("shelf created");
    await newShelf.save();
    res.status(201).json(newShelf);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
