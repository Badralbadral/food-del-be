import { UserModel } from "@/models/user.schema";
import { UserType } from "@/types/userType";

export const createUser = async (
  Name: string,
  Address: string,
  Email: string,
  Password: string
) => {
  const createUser = UserModel.create({ Name, Address, Email, Password });
  return createUser;
};

export const getUser = async (): Promise<UserType[]> => {
  try {
    const users = await UserModel.find({});
    return users;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
