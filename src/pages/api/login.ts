// import { loginService } from "@/services/user";
import type { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "@/services/user";
import connect from "@/helper/db";
import { corsAllow } from "@/helper/cors";

type Data = {
  message?: string;
  token?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connect();
  await corsAllow(req, res);
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  console.log("🚀 ~ req.body:", req.body);
  try {
    const users = await getUser();
    res.status(200).json({ message: "Succesfully got users data", users });
    console.log("Succesfully got users data");
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
  //   if (req.method !== "POST") {
  //     return res.status(405).json({ message: "Method Not Allowed" });
  //   }
  //   const { email, password } = req.body;
  //   try {
  //     const token = await loginService(email, password);
  //     if (token) {
  //       return res.status(200).json({ token, message: "Login successful" });
  //     }
  //   } catch (e: any) {
  //     return res.status(400).json({ message: e.message });
  //   }
}
