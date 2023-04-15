import express from "express";
import cors from "cors";
import router from "./router";
import { connectDB } from "./database";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(cors());


const main = async () => {
  const database = await connectDB();
  app.use((req, res, next) => {
    req.database = database;
    next();
  });
  app.use(router);
  app.use((req, res) => {
    res.status(404).send("Not found plac plac");
  });
  app.listen(PORT, () => {
    console.log(`Server has been start at http://localhost:${PORT}`);
  });
};
main();
