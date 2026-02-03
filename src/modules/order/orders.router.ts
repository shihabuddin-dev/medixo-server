import { Router } from "express";
import { orderController } from "./order.controller";

import auth, { UserRole } from "../../middlewares/auth";

const router = Router();

router.get("/orders",auth(UserRole.ADMIN, UserRole.USER),orderController.getAllOrder);
router.get("/orders/:id", auth(UserRole.ADMIN, UserRole.USER, UserRole.SELLER),orderController.getSingleOrderDetails);
router.post("/orders", auth(UserRole.ADMIN, UserRole.USER), orderController.createNewOrder);
router.patch("/orders/:id", auth(UserRole.ADMIN, ), orderController.updateOrderStatus);

export const orderRouter: Router = router;
