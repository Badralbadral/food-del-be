import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
  Name: String,
  Address: String,
  Email: {
    type: String,
    required: true,
  },
  Password: String,
});

export const UserModel = mongoose.models.User || model("User", UserSchema);
