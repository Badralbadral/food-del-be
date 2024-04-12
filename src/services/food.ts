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

export const editFood = async (foodData: FoodType) => {
  const food = await FoodModel.updateOne(
    { _id: foodData.id },
    {
      foodName: foodData.foodName,
      foodCategory: foodData.foodCategory,
      ingredients: foodData.ingredients,
      price: foodData.price,
      sale: foodData.sale,
      img: foodData.img,
    }
  );
  return food;
};

export const deleteFood = async (id: string) => {
  const food = await FoodModel.deleteOne({ _id: id });
  return food;
};
