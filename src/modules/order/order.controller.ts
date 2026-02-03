import { Request, Response } from "express";
import { orderService } from "./orders.service";

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getAllOrder();
    res.status(200).json({
      success: true,
      message: "Successfully get all Orders",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to get all Orders",
    });
  }
};

const getSingleOrderDetails = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("Id is required");
    }
    const result = await orderService.getSingleOrderDetails(id as string);
    // order id validation check
    if (result === null) {
      res.status(404).json({
        success: false,
        message: "Order not found for the given id",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Successfully get Single Orders",
        data: result,
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to get Single Orders",
    });
  }
};

const createNewOrder = async (req: Request, res: Response) => {
  try {
    const user = req?.user;
    const result = await orderService.createNewOrder(
      req.body,
      user?.id as string,
    );
    res.status(201).json({
      success: true,
      message: "Successfully Create New Order",
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || "Failed to Create New Order",
    });
  }
};

const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!id) {
      throw new Error("Id is required");
    }
    const result = await orderService.updateOrderStatus(id as string, status);
    res.status(200).json({
      success: true,
      message: "Successfully updated Order Status",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to update Order Status",
    });
  }
};

export const orderController = {
  getAllOrder,
  getSingleOrderDetails,
  createNewOrder,
  updateOrderStatus
};
