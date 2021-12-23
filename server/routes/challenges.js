import express from "express";

import { getChallenges, createChallenge } from "../controllers/challenges.js";

const router = express.Router();

router.get("/:email", getChallenges);
router.post("/", createChallenge);

export default router;
