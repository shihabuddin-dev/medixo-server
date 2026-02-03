-- CreateEnum
CREATE TYPE "MedicineCategory" AS ENUM ('ANTIBIOTICS', 'PAINKILLERS', 'VITAMINS', 'SUPPLEMENTS', 'COLD_AND_FLU', 'DIGESTIVE', 'SKIN_CARE', 'ALLERGY_RELIEF', 'ANTACID', 'COUGH_SYRUP');

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "category" "MedicineCategory";
