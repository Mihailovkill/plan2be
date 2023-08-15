import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

interface UserInput {
  email: string;
  username: string;
  password: string;
}

export const createUser = async ({ email, username, password }: UserInput) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const user = await prisma.user.create({
      data: {
        email: email,
        username: username,
        password: hashedPassword,
        // Add any other default fields if required
      },
    });

    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Ensure to close Prisma client when your application is terminating
process.on("SIGINT", async () => {
  await prisma.$disconnect();
});

export default prisma;
