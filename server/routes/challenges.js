import express from "express";

import {
  getChallenges,
  createChallenge,
  // addNewChallenge,
} from "../controllers/challenges.js";

const router = express.Router();

router.get("/:email", getChallenges);
router.post("/", createChallenge);
// router.patch("/:email", addNewChallenge);

export default router;
