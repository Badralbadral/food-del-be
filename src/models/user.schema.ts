import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  address: String,
  email: {
    type: String,
    required: true,
  },
  password: String,
});

export const UserModel = mongoose.models.User || model("User", UserSchema);
