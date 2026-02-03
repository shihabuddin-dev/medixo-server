import { prisma } from "../../lib/prisma";

const getAllMedicines = async () => {
  const result = await prisma.medicines.findMany({});
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
