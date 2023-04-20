import { RequestHandler } from "express";
import fs from "fs";
import path from "path";
import { DB_COLLECTIONS } from "../config";

export const getExercises: RequestHandler = async (req, res) => {
  const data = await req.database
    .collection(DB_COLLECTIONS.exercises)
    .find({ muscleGroup: req.params.muscleGroup })
    .toArray();
  res.send(data);
};
