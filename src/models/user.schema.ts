import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
  firstName: String,
  address: String,
  email: {
    type: String,
    required: true,
  },
  password: Number,
});

export const UserModel = mongoose.models.User || model("User", UserSchema);
