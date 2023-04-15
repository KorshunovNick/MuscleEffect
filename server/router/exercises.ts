import { RequestHandler } from "express";
import fs from "fs";
import path from "path";
import { ASSETS_PATH, DB_COLLECTIONS } from "../config";

export const getExercises: RequestHandler = async (req, res) => {
 const data = await req.database.collection(DB_COLLECTIONS.exercises).find({}).toArray()
  res.send(data);
};
