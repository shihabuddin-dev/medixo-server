import { Router } from "express";
import { categoryController } from "./category.controller";

const router = Router()

router.get('/categories', categoryController.getAllCategories)

export const categoryRouter:Router= router