import { prisma } from "../../lib/prisma";

const getAllMedicines = async (query: {
  searchTerm?: string;
  category?: string;
  categoriesId?: string;
  minPrice?: number;
  maxPrice?: number;
  sellerId?: string;
}) => {
  const { searchTerm, category, categoriesId, minPrice, maxPrice, sellerId } =
    query;

  const where: any = {};

  const activeCategory = category || categoriesId;

  if (searchTerm) {
    where.OR = [
      { name: { contains: searchTerm, mode: "insensitive" } },
      { description: { contains: searchTerm, mode: "insensitive" } },
    ];
  }

  if (activeCategory && activeCategory !== "all") {
    where.categoriesId = activeCategory;
  }

  if (minPrice !== undefined || maxPrice !== undefined) {
    where.price = {};
    if (minPrice !== undefined) where.price.gte = Number(minPrice);
    if (maxPrice !== undefined) where.price.lte = Number(maxPrice);
  }

  if (sellerId) {
    where.sellerId = sellerId;
  }

  const result = await prisma.medicines.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};

const getSingleMedicine = async (id: string) => {
  const result = await prisma.medicines.findUnique({
    where: { id },
  });
  return result;
};

const addNewMedicine = async (payload: {
  categoriesId?: string;
  sellerId: string;
  name: string;
  image: string;
  stock: number;
  price: number;
  description: string;
}) => {
  await prisma.user.findUniqueOrThrow({
    where: {
      id: payload.sellerId,
    },
  });

  const result = await prisma.medicines.create({
    data: payload,
  });
  return result;
};

const updateMedicineById = async (
  id: string,
  payload: {
    categoriesId?: string;
    name?: string;
    image?: string;
    stock?: number;
    price?: number;
    description?: string;
  },
) => {
  const result = await prisma.medicines.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteMedicineById = async (id: string) => {
  const medicineData = await prisma.medicines.findFirst({ where: { id } });
  if (!medicineData) {
    throw new Error("Medicine not found");
  }
  const result = await prisma.medicines.delete({
    where: { id },
  });
  return result;
};

export const medicineService = {
  getAllMedicines,
  getSingleMedicine,
  addNewMedicine,
  updateMedicineById,
  deleteMedicineById,
};
