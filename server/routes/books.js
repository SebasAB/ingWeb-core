import express from "express";

import {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/books.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getBooks);
router.post("/", auth, createBook);
router.patch("/:id", auth, updateBook);
router.delete("/:id", deleteBook);

export default router;
