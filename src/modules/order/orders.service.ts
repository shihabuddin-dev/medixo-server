import { prisma } from "../../lib/prisma";

const getAllOrder = async (params?: {
  sellerId?: string;
  customerId?: string;
}) => {
  const { sellerId, customerId } = params || {};
  const result = await prisma.orders.findMany({
    where: {
      AND: [
        customerId ? { customerId } : {},
        sellerId ? { medicines: { sellerId } } : {},
      ],
    },
    include: {
      medicines: true,
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
  return result;
};

const getSingleOrderDetails = async (id: string) => {
  const result = await prisma.orders.findUnique({
    where: { id },
    include: {
      medicines: true,
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
  return result;
};

const createNewOrder = async (
  payload: { medicineId: string; quantity: number; shippingAddress: string },
  id: string,
) => {
  const { medicineId, quantity, shippingAddress } = payload;

  if (!medicineId || !quantity || !shippingAddress) {
    throw new Error(
      "Missing required fields: medicineId, quantity, or shippingAddress",
    );
  }

  if (quantity <= 0) {
    throw new Error("Quantity must be greater than 0");
  }

  const result = await prisma.$transaction(async (tx) => {
    // 1. Check if medicine exists and has sufficient stock
    const medicine = await tx.medicines.findUnique({
      where: { id: medicineId },
    });

    if (!medicine) {
      throw new Error("Medicine not found");
    }

    if (medicine.stock < quantity) {
      throw new Error("Insufficient stock");
    }

    // 2. Reduce stock
    await tx.medicines.update({
      where: { id: medicineId },
      data: {
        stock: medicine.stock - quantity,
      },
    });

    // 3. Create Order
    const order = await tx.orders.create({
      data: {
        customerId: id,
        medicineId,
        quantity,
        totalPrice: medicine.price * quantity,
        shippingAddress,
        status: "Pending",
      },
      // include: {
      //   medicine: true, // Return medicine details with the order
      // },
    });

    return order;
  });

  return result;
};

const updateOrderStatus = async (id: string, status: string) => {
  const result = await prisma.orders.update({
    where: { id },
    data: {
      status,
    },
  });
  return result;
};

const deleteOrder = async (id: string) => {
  const result = await prisma.orders.delete({
    where: { id },
  });
  return result;
};

export const orderService = {
  getAllOrder,
  getSingleOrderDetails,
  createNewOrder,
  updateOrderStatus,
  deleteOrder,
};
