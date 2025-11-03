"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export async function updateUserRole(role: "doer" | "poster") {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const client = await clerkClient();

    // Check if user is @mlvignite.com admin
    const user = await client.users.getUser(userId);
    const isAdmin = user.emailAddresses[0]?.emailAddress?.endsWith('@mlvignite.com') || false;

    await client.users.updateUser(userId, {
      publicMetadata: {
        role,
        isAdmin,
        onboarded: true,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error updating user role:", error);
    throw error;
  }
}
