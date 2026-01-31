import { prisma } from "../../lib/prisma";
import { UserStatus } from "../../middlewares/auth";

const getAllUser = async () => {
  const result = await prisma.user.findMany({});
  return result;
};

// const updateSingleUserStatus = async (
//   id: string,
//   data: { status: UserStatus },
//   userId: string,
// ) => {
//   const userData = await prisma.user.findFirst({
//     where: {
//       id,
//     //   userId,
//     },
//     select: {
//       id: true,
//     },
//   });

//   if (!userData) {
//     throw new Error("Your provided input is invalid!");
//   }

//   return await prisma.user.update({
//     where: {
//       id,
//       status,
//     },
//     data,
//   });
// };


export const userService = {
  getAllUser,
//   updateSingleUserStatus,
};
