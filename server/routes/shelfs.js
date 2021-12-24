import express from "express";

import { getShelfs, createShelf, updateShelf } from "../controllers/shelfs.js";

const router = express.Router();

router.get("/:email", getShelfs);
router.post("/", createShelf);
router.patch("/:email", updateShelf);

export default router;
