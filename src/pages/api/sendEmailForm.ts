import type { NextApiRequest, NextApiResponse } from "next";
import connect from "@/helper/db";
import { corsAllow } from "@/helper/cors";
import { transporter, mailOption, changePassword } from "@/services/nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connect();
  await corsAllow(req, res);
  const data = req.body;
  if (!data.email) {
    return res.status(400).json({ message: "Email required" });
  }
  switch (req.method) {
    case "POST":
      try {
        await transporter.sendMail({
          ...mailOption,
          subject: "Pinecone Food Delivery",
          text: "This is from back-end",
          html: `<h1>This is your key - ${data.key}</h1>`,
        });
        return res.status(200).json({ success: true });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
    case "PUT":
      try {
        const categories = await changePassword(
          req.body.email,
          req.body.newPass
        );
        console.log(categories);
        res.status(200).json({ message: "Succesfully updated" });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
  }
}
