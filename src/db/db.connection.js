import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export default async function dbConnection() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_ATLAS_URI}/${DB_NAME}`
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting MongoDb Atlas", error);
    process.exit(1);
  }
}
