import { Router } from "express";
import { userController } from "./user.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = Router();

router.get("/admin/users", auth(UserRole.ADMIN), userController.getAllUser);

router.patch("/admin/users/:id", auth(UserRole.ADMIN), userController.updateSingleUserStatus);

export const userRouter: Router = router;
