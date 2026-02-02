-- CreateTable
CREATE TABLE "medicines" (
    "id" TEXT NOT NULL,
    "categories_id" TEXT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "medicines_pkey" PRIMARY KEY ("id")
);
