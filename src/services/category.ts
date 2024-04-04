import { CategoryModel } from "@/models/category.schema";

export const createCategory = async (name: string): Promise<string> => {
  const createCategory = await CategoryModel.create({ name });
  return createCategory;
};

export const getCategory = async () => {
  try {
    const categories = await CategoryModel.find();
    return categories;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const categories = await CategoryModel.deleteOne({ _id: id });
    return categories;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const editCategory = async (id: string) => {
  try {
    const categories = await CategoryModel.updateOne({ _id: id });
    return categories;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
