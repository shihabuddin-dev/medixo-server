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
    const {id}=req.params
    if(!id){
        throw new Error("Id is required")
    }
    const result= await orderService.getSingleOrderDetails(id as unknown as number)
    res.status(200).json({
      success: true,
      message: "Successfully get Single Orders",
      data: result
    })

  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to get Single Orders",
    });
  }
};


const createNewOrder=async(req:Request, res:Response)=>{
try {
    const result= await orderService.createNewOrder(req.body)
    res.status(201).json({
        success:true,
        message:"Successfully Create New Order",
        data:result
    })
} catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to Create New Order",
    });
  }
}

export const orderController = {
  getAllOrder,
  getSingleOrderDetails,
  createNewOrder
};
