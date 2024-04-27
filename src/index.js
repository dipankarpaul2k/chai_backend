import "dotenv/config";

import dbConnection from "./db/db.connection.js";

dbConnection();

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
