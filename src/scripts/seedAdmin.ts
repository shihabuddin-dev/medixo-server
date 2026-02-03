import { UserRole } from "../middlewares/auth";
import { prisma } from "../lib/prisma";

async function seedAdmin() {
  try {
    console.log("---Seeding Admin---");
    // keep those data in env file
    const adminData = {
      name: "Shihab Uddin",
      email: "shihab.dev@email.com",
      role: UserRole.ADMIN,
      password: "password123",
      emailVerified: true,
    };
    // check exists user in DB
    const existingUser = await prisma.user.findUnique({
      where: {
        email: adminData.email,
      },
    });
    console.log("---Checking Existing User---");

    if (existingUser) {
      console.log("User already exists");
      throw new Error("User already exists");
    }

    const url = "http://localhost:5000/api/auth/sign-up/email";
    const signUpAdmin = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: `${process.env.APP_URL}`,
      },
      body: JSON.stringify(adminData),
    });


    if (signUpAdmin.ok) {
      console.log('---Admin Created---');
      await prisma.user.update({
        where: {
          email: adminData.email,
        },
        data: {
          emailVerified: true,
        },
      });
    }
    console.log('Email Verified');
    console.log('---Success---');
  } catch (err) {
    console.error(err);
  }
}
seedAdmin();
