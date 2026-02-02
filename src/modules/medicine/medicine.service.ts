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
  categories_id?: string;
  sellerId: string;
  name: string;
  image: string;
  stock: number;
  price: number;
  description: string;
}) => {
  console.log(payload)
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

export const medicineService = {
  getAllMedicines,
  getSingleMedicine,
  addNewMedicine,
};
