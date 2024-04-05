import { CategoryModel } from "@/models/category.schema";

export const createCategory = async (name: string): Promise<string> => {
  const createCategory = await CategoryModel.create({ name });
  return createCategory;
};

export const getCategory = async () => {
  const categories = await CategoryModel.find();
  return categories;
};

export const deleteCategory = async (id: string) => {
  const categories = await CategoryModel.deleteOne({ _id: id });
  return categories;
};

export const editCategory = async (name: string, updateOne: string) => {
  const categories = await CategoryModel.updateOne(
    { name },
    { name: updateOne }
  );
  return categories;
};
