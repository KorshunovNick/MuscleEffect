import express from "express";
import { getExercises } from "./exercises";

const router = express.Router();

router.get("/ex/:muscleGroupId", getExercises);

export default router;
