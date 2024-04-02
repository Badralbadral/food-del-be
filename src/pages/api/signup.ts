import { createUser } from "@/services/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const data = req.body;
  const parsedData = JSON.parse(data);
  console.log("🚀 ~ parsedData:", parsedData);
  try {
    const user = await createUser(
      parsedData.name,
      parsedData.name,
      parsedData.address,
      parsedData.passwords
    );
    res.status(200).json({ message: "Succesfully user created", user });
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
}
