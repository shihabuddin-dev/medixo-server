import { prisma } from "../../lib/prisma";

const getAllOrder = async () => {
  const result = await prisma.orders.findMany({});
  return result;
};

const getSingleOrderDetails = async (id: number) => {
  const result = await prisma.orders.findUnique({
    where: { id },
  });
  return result;
};

const createNewOrder = async (payload: Record<string, unknown>) => {
  console.log(payload);
  // const { customer_id, status, shipping_address, quantity, price } = payload;
  const result = await prisma.orders.create({
    data: payload,
  });
  return result;
};

export const orderService = {
  getAllOrder,
  getSingleOrderDetails,
  createNewOrder,
};
