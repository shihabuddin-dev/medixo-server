import { Router } from "express";
import { medicineController } from "./medicines.controller";

const router= Router()
router.get('/medicines', medicineController.getAllMedicines)
router.get('/medicines/:id', medicineController.getSingleMedicine)
router.post('/medicines', medicineController.addNewMedicine)


export const medicineRouter:Router= router