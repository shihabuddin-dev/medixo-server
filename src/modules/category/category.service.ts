import { prisma } from "../../lib/prisma";

const getAllCategories = async () => {
  const result = await prisma.categories.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return result;
};
export const categoryService = {
  getAllCategories,
};
