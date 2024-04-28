import "dotenv/config";
import dbConnection from "./db/db.connection.js";
import app from "./app.js";

const port = process.env.PORT || 8000;

dbConnection()
  .then(function () {
    app.on("connecting", () => {
      console.log("Mongoose is connecting to the MongoDB server...");
    });
    app.on("connected", () => {
      console.log("Mongoose successfully connected to the MongoDB server.");
    });
    app.on("error", (error) => {
      console.log("An error occurs on a connection.\n", error);
      throw error;
    });
    app.listen(port, () => {
      console.log(`App is listening on ${port}`);
    });
  })
  .catch(function (error) {
    console.log("Error while connecting MongoDB.\n", error);
  });

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_ATLAS_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("index.js > app is not able to connect to db : ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => [
      console.log(`App is listening on ${process.env.PORT}`),
    ]);
  } catch (error) {
    console.error("Mongoose Error: ", error);
    throw error;
  }
})();
*/
