import { corsAllow } from "@/helper/cors";
import connect from "@/helper/db";
import {
  createCategory,
  deleteCategory,
  editCategory,
  getCategory,
} from "@/services/category";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connect();
  await corsAllow(req, res);

  switch (req.method) {
    case "POST":
      try {
        const user = await createCategory(req.body.name);
        res.status(200).json({ message: "Succesfully category created" });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
    case "GET":
      try {
        const categories = await getCategory();
        res.status(200).json(categories);
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }

    case "PUT":
      try {
        const categories = await getCategory();
        res.status(200).json(categories);
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
    case "DELETE":
      try {
        const categories = await deleteCategory(req.body);
        res.status(200).json(categories);
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
  }
};
export default handler;
