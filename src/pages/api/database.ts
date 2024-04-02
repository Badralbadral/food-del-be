import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
const url = process.env.MONGO_DB_URL as string;

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const connect = async () => {
    try {
      await mongoose.connect(url);
      console.log("Database connected succesfully");
      res.send("Database connected succesfully");
    } catch (error) {
      console.log(error);
    }
  };
  connect();
};
export default handler;
