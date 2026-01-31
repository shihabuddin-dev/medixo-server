/*
  Warnings:

  - You are about to drop the `Reviews` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `Medicines` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Medicines" ADD COLUMN     "user_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "Reviews";

-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Medicines_user_id_idx" ON "Medicines"("user_id");
