import express from "express";

import { getShelfs, createShelf } from "../controllers/shelfs.js";

const router = express.Router();

router.get("/:email", getShelfs);
router.post("/", createShelf);

export default router;
