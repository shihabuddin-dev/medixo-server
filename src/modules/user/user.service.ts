import { prisma } from "../../lib/prisma";

const getAllUser = async () => {
  const result = await prisma.user.findMany({});
  return result;
};

const updateSingleUserStatus = async (
  id: string,
  payload: { status: string },
  userId: string,
) => {
  const user = await prisma.user.findUniqueOrThrow({ where: { id: userId } });
  if (user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
  await prisma.user.findUniqueOrThrow({ where: { id } });
  return await prisma.user.update({
    data: { status: payload.status as any },
    where: { id },
  });
};

const updateMyProfile = async (id: string, payload: Partial<any>) => {
  return await prisma.user.update({
    where: { id },
    data: payload,
  });
};

export const userService = {
  getAllUser,
  updateSingleUserStatus,
  updateMyProfile,
};
