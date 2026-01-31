import { Router } from "express";
import { userController } from "./user.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = Router();

// router.get("/admin/users", auth(UserRole.ADMIN), userController.getAllUser);
router.get("/admin/users", userController.getAllUser);

// router.patch("/admin/users/:id", userController.updateSingleUserStatus);

export const userRouter: Router = router;
