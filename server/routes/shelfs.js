import express from "express";

import {
  getShelfs,
  createShelf,
  updateShelf,
  deleteFromShelf,
} from "../controllers/shelfs.js";

const router = express.Router();

router.get("/:email", getShelfs);
router.post("/", createShelf);
router.patch("/:email", updateShelf);
router.delete("/:email/:book", deleteFromShelf);

export default router;
