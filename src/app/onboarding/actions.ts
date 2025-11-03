"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export async function updateUserRole(role: "student" | "company") {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const client = await clerkClient();
    await client.users.updateUser(userId, {
      publicMetadata: {
        role,
        onboarded: true,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error updating user role:", error);
    throw error;
  }
}
