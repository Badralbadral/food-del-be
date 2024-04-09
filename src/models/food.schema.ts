import mongoose, { model, Schema } from "mongoose";

const FoodSchema = new Schema({
  foodName: String,
  foodCategory: String,
  ingredients: [
    {
      type: String,
    },
  ],
  price: Number,
  sale: Number,
  img: String,
});

export const FoodModel = mongoose.models.Food || model("Food", FoodSchema);
