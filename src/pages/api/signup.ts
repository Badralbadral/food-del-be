import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const data = req.body;
  const parsedData = JSON.parse(data);
  console.log(parsedData);
  res.status(200).json({ message: "hello" });
}
