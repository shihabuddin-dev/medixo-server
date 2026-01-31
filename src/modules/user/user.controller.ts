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
    });
  }
};

// const updateSingleUserStatus = async (req: Request, res: Response) => {
//   try {
//     const user = req.user;
//     const { id } = req.params;
//     if (!id) {
//       throw new Error("Id is required");
//     }
//     const result = await userService.updateSingleUserStatus(
//       id as unknown as string,
//       req.body,
//       user?.id!,
//     );
//     res.status(200).json({
//       success: true,
//       message: "Successfully Update User Status",
//       data: result,
//     });
//   } catch (err) {
//     res.status(400).json({
//       success: false,
//       message: "Update to Failed User Status",
//     });
//   }
// };

export const userController = {
  getAllUser,
//   updateSingleUserStatus,
};
