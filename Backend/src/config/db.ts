import mongoose from "mongoose";
require("dotenv").config();
const DB_URL: string | undefined = process.env.DB_URL;

async function connect() {
    mongoose.set("strictQuery", false);
    if (DB_URL === undefined) {
      throw new Error("DB_URL is not defined");
    }
    return mongoose.connect(DB_URL);
  }

export default connect;
