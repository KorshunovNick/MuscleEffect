import express from "express";
import { getExercises } from "./exercises";

const router = express.Router();

router.get("/", getExercises);

export default router;
