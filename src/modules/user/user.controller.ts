import { Request, Response } from "express";
import { userService } from "./user.service";

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUser();
    res.status(200).json({
      success: true,
      message: "Successfully get All User",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to get All User",
      details: err,
    });
  }
};

const updateSingleUserStatus = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const { id } = req.params;
    if (!id) {
      throw new Error("Id is required");
    }
    console.log("controller", user, id, req.body);
    const result = await userService.updateSingleUserStatus(
      id as string,
      req.body,
      user?.id as string,
    );
    res.status(200).json({
      success: true,
      message: "Successfully Update User Status",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Update to Failed User Status",
      details: err,
    });
  }
};

const updateMyProfile = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const result = await userService.updateMyProfile(
      user?.id as string,
      req.body,
    );
    res.status(200).json({
      success: true,
      message: "Successfully Update My Profile",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to update profile",
      details: err,
    });
  }
};

export const userController = {
  getAllUser,
  updateSingleUserStatus,
  updateMyProfile,
};
