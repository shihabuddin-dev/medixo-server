import { Request, Response } from "express";
import { medicineService } from "./medicine.service";

const getAllMedicines = async (req: Request, res: Response) => {
  try {
    const result = await medicineService.getAllMedicines();
    res.status(200).json({
      success: true,
      message: "Successfully get all medicines",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to get all medicines",
      details: err,
    });
  }
};

const getSingleMedicine = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("Id is required");
    }
    const result = await medicineService.getSingleMedicine(id as string);
    if (result === null) {
      res.status(404).json({
        success: false,
        message: "Medicine not found for the given id",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Successfully get Single medicines",
        data: result,
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to get Single medicine",
      details: err,
    });
  }
};

const addNewMedicine=async(req:Request, res:Response)=>{
  try {
    const user = req.user;
    req.body.sellerId = user?.id;
    const result= await medicineService.addNewMedicine(req.body)
    res.status(201).json({
      success: true,
      message: "Successfully create new medicine",
      data: result
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to create new medicine",
    });
  }
}

export const medicineController = {
  getAllMedicines,
  getSingleMedicine,
  addNewMedicine
};
