import mongoose, { model, mongo, Schema } from "mongoose";

const CategorySchema = new Schema({
  name: String,
});

export const CategoryModel =
  mongoose.models.Category || model("Category", CategorySchema);
