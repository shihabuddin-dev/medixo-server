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

const addNewMedicine = async (payload: {
  name: string;
  image: string;
  seller_id: string;
  description: string;
  price: number;
  quantity: number;
  // id: string
}) => {
  console.log(payload)

// await prisma.medicines.findUniqueOrThrow({
//   where:{
//     id: payload.id as unknown as number
//   },
// })

// if(payload.id){
//      await prisma.medicines.findUniqueOrThrow({
//             where: {
//                 id: payload.id as unknown as number
//             }
//         })
// }

const result= await prisma.medicines.create({
  data:payload
})
return result
};

export const medicineService = {
  getAllMedicines,
  getSingleMedicine,
  addNewMedicine,
};
