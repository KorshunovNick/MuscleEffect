import { Db } from "mongodb";

declare module "express-serve-static-core" {
  interface Request {
    database: Db;
  }
}
