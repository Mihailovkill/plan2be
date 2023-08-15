const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

import type { NextApiRequest, NextApiResponse } from "next";
import prisma, { createUser } from "@/lib/db";

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  const { email, username, password } = req.body;
  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return res.status(409).json({ error: "Email already in use" });
  }

  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  if (!username || username.length < 3) {
    return res
      .status(400)
      .json({ error: "Username should be at least 3 characters long" });
  }

  if (!password || password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password should be at least 6 characters long" });
  }

  try {
    const user = await createUser({ email, username, password }); // You should hash the password before saving it
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: "Error registering the user" });
  }
}
