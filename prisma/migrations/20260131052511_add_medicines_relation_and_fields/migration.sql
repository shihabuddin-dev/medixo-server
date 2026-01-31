/*
  Warnings:

  - Added the required column `description` to the `medicines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `medicines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `medicines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `medicines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `medicines` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "medicines" ADD COLUMN     "categories_id" TEXT,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "stock" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "medicines" ADD CONSTRAINT "medicines_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
