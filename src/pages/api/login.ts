import { loginService } from "@/services/user";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message?: string;
  token?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const data = req.body;
  const parsedData = JSON.parse(data);
  console.log(parsedData);
  res.status(200).json({ message: "hello" });
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
