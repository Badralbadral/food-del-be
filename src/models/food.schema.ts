import mongoose, { model, Schema } from "mongoose";

const FoodSchema = new Schema({
  foodName: String,
  foodCategory: String,
  ingedients: String,
  price: Number,
  sale: Number,
});

export const FoodModel = mongoose.models.Food || model("Food", FoodSchema);
