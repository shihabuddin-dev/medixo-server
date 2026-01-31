import { Router } from "express";
import { orderController } from "./order.controller";

const router = Router();

router.get("/orders", orderController.getAllOrder);
router.get("/orders/:id", orderController.getSingleOrderDetails);
router.post("/orders", orderController.createNewOrder);

export const orderRouter: Router = router;
