import { FoodModel } from "@/models/food.schema";
import { FoodType } from "@/types/userType";

export const createFood = async (
  foodName: string,
  foodCategory: string,
  ingedients: string,
  price: number,
  sale: number
): Promise<FoodType> => {
  const createFood = await FoodModel.create({
    foodName,
    foodCategory,
    ingedients,
    price,
    sale,
  });
  return createFood;
};
