import { FoodModel } from "@/models/food.schema";
import { FoodType } from "@/types/userType";

export const createFood = async (
  foodName: string,
  foodCategory: string,
  ingredients: String,
  price: number,
  sale: number,
  img: string
): Promise<FoodType> => {
  const createFood = await FoodModel.create({
    foodName,
    foodCategory,
    ingredients: ingredients.split(","),
    price,
    sale,
    img,
  });
  return createFood;
};

export const getFood = async () => {
  const categories = await FoodModel.find();
  return categories;
};
