import { corsAllow } from "@/helper/cors";
import connect from "@/helper/db";
import { createFood, deleteFood, editFood, getFood } from "@/services/food";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connect();
  await corsAllow(req, res);

  switch (req.method) {
    case "POST":
      try {
        const food = await createFood(
          req.body.foodName,
          req.body.foodCategory,
          req.body.ingredients.replace(/ /g, ""),
          req.body.price,
          req.body.sale,
          req.body.img
        );
        res.status(200).json({ message: "Food succesfully created", food });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
    case "GET":
      try {
        const food = await getFood();
        res.status(200).json(food);
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
    case "PUT":
      try {
        const food = await editFood(req.body);
        res.status(200).json({ message: "Food succesfully updated", food });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
    case "DELETE":
      try {
        await deleteFood(req.body.id);
        res.status(200).json({ message: "Food succesfully deleted" });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
  }
};

export default handler;
