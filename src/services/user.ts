import { UserModel } from "@/models/user.schema";

export const createUser = async (
  firstName: String,
  address: String,
  email: String,
  password: number
) => {
  const createUser = UserModel.create({ firstName, address, email, password });
  return createUser;
};
