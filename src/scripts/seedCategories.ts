import { prisma } from "../lib/prisma";

const categories = [
  "Antibiotics",
  "Pain Relief",
  "Vitamins & Supplements",
  "First Aid",
  "Skin Care",
  "Diabetes Care",
  "Heart Health",
  "Respiratory Health",
  "Digestive Health",
  "Baby & Mom Care",
  "Personal Care",
  "Allergy Relief",
  "Eye Care",
  "Dental Care",
  "Mental Health",
];

const seedCategories = async () => {
  console.log("Seeding categories...");

  for (const name of categories) {
    const slug = name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");

    // Check if category already exists to avoid duplicates
    const existing = await prisma.categories.findFirst({
      where: { name },
    });

    if (!existing) {
      await prisma.categories.create({
        data: {
          name,
          slug,
        },
      });
      console.log(`Created category: ${name}`);
    } else {
      console.log(`Category already exists: ${name}`);
    }
  }

  console.log("Category seeding completed.");
};

seedCategories()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
