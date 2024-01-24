import mongoose from "mongoose";

import { DB_NAME } from "../constant.js";

const connectDB = async (req, res) => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(`\n MongoDb Connected :${connectionInstance.connection.host}`);
  } catch (error) {
    (err) => {
      console.log("DB Connection failed", err);
      process.exit(1);
    };
  }
};

export default connectDB;
