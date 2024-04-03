import { createUser } from "@/services/user";
import { NextApiRequest, NextApiResponse } from "next";
import connect from "@/helper/db";
import { corsAllow } from "@/helper/cors";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connect();
  await corsAllow(req, res);
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const data = req.body;
  const { name, email, address, password } = data;
  try {
    const user = await createUser(name, address, email, password);
    res.status(200).json({ message: "Succesfully user created", user });
    console.log("Succesfully User Created");
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
};
export default handler;
