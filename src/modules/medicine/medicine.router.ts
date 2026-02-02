import { Router } from "express";
import { medicineController } from "./medicine.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router= Router()
router.get('/medicines', medicineController.getAllMedicines)
// router.get('/medicines/:id', medicineController.getSingleMedicine)
// router.post('/medicines', auth(UserRole.ADMIN, UserRole.USER, UserRole.SELLER), medicineController.addNewMedicine)


export const medicineRouter:Router= router