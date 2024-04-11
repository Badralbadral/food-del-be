import type { NextApiRequest, NextApiResponse } from "next";
import connect from "@/helper/db";
import { corsAllow } from "@/helper/cors";
import {
  transporter,
  mailOption,
  changePassword,
  verificationService,
} from "@/services/nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connect();
  await corsAllow(req, res);
  const data = req.body;
  switch (req.method) {
    case "POST":
      if (!data.email) {
        return res.status(400).json({ message: "Email required" });
      } else {
        try {
          await transporter.sendMail({
            ...mailOption,
            subject: "Pinecone Food Delivery",
            text: "This is from back-end",
            html: `<h1>This is your key - ${data.key}</h1>`,
          });
          const check = await changePassword(data.email, data.key);
          if (check) {
            return res
              .status(200)
              .json({ verified: check, message: "successful" });
          }
        } catch (e: any) {
          return res.status(400).json({ message: e.message });
        }
      }
    case "PUT":
      try {
        const verify = await verificationService(data.code, data.newPassword);
        if (verify) {
          return res
            .status(200)
            .json({ verified: verify, message: "successful" });
        }
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
  }
}
