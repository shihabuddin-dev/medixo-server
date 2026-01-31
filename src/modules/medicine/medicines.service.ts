import { prisma } from "../../lib/prisma";

const getAllMedicines = async () => {
  const result = await prisma.medicines.findMany({});
  return result;
};

const getSingleMedicine = async (id: number) => {
  const result = await prisma.medicines.findUnique({
    where: { id },
  });
  return result;
};

const addNewMedicine = async (payload: Record<string, unknown>) => {
//  const { seller_id, name, price, quantity, description, image, category}=payload || {}
//  console.log(payload);
//   const result = await prisma.medicines.create({
//     data: {
//       seller_id,
//       name,
//       price,
//       quantity,
//       description,
//       image,
//       category
//     },
//   },
// );
// return result

};

export const medicineService = {
  getAllMedicines,
  getSingleMedicine,
  addNewMedicine,
};
