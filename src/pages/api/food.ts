import { corsAllow } from "@/helper/cors";
import connect from "@/helper/db";
import { createFood, getFood } from "@/services/food";
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
  }
};

export default handler;
