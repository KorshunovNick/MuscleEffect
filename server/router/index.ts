import express from "express";
import { getExercises } from "./exercises";

const router = express.Router();

router.get("/:muscleGroup", getExercises);

export default router;
