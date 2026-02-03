import { Request, Response } from "express";
import { categoryService } from "./category.service";

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.getAllCategories();  
    res.status(200).json({
      success: true,
      message: "Successfully get all categories",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to get all categories",
      details: err,
    });
  }
};


export const categoryController = {
    getAllCategories

}