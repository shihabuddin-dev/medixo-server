import { Request, Response } from "express";
import { medicineService } from "./medicines.service";

const getAllMedicines = async (req: Request, res: Response) => {
  try {
    const result= await medicineService.getAllMedicines()
    res.status(200).json({
      success: true,
      message: "Successfully get all medicines",
      data: result
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to get all medicines",
    });
  }
};

const getSingleMedicine= async (req:Request, res:Response)=>{
  try {
    const {id}=req.params
    if(!id){
      throw new Error("Id is required")
    }
    const result= await medicineService.getSingleMedicine(id as unknown as number)
    res.status(200).json({
      success: true,
      message: "Successfully get Single medicines",
      data: result
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to get Single medicine",
    });
  }
}

const addNewMedicine=async(req:Request, res:Response)=>{
  try {
    //  const user = req.user;
    // req.body.seller_id = user?.id;
    // console.log(user);
    // const result= await medicineService.addNewMedicine(req.body)
    // res.status(201).json({
    //   success: true,
    //   message: "Successfully create new medicine",
    //   data: result
    // })
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
