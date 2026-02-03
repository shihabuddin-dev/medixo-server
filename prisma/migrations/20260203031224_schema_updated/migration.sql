/*
  Warnings:

  - You are about to drop the column `categories_id` on the `medicines` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `shipping_address` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `reviews` table. All the data in the column will be lost.
  - You are about to drop the column `medicine_id` on the `reviews` table. All the data in the column will be lost.
  - Added the required column `shippingAddress` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medicineId` to the `reviews` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_medicine_id_fkey";

-- AlterTable
ALTER TABLE "medicines" DROP COLUMN "categories_id",
ADD COLUMN     "categoriesId" TEXT;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "created_at",
DROP COLUMN "shipping_address",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "shippingAddress" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "reviews" DROP COLUMN "created_at",
DROP COLUMN "medicine_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "medicineId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "medicines"("id") ON DELETE CASCADE ON UPDATE CASCADE;
