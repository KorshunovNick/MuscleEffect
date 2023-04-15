import { MongoClient, ServerApiVersion } from "mongodb";
import { DB_COLLECTIONS, DB_NAME, DB_PASSWORD, DB_USERNAME } from "./config";
const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster.rzvw0lx.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connectDB() {
  try {
    await client.connect();
    const database = client.db(DB_NAME);
    return database
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}
