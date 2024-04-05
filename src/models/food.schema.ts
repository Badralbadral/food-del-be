import mongoose, { model, Schema } from "mongoose";

const FoodSchema = new Schema({
  foodName: String,
  foodCategory: String,
  ingedients: String,
  price: String,
  sale: String,
});

export const FoodMo = mongoose.models.Food || model("Food", FoodSchema);
