import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  // Check if user has completed onboarding by checking metadata
  const hasCompletedOnboarding = user.publicMetadata?.onboarded;

  if (!hasCompletedOnboarding) {
    redirect("/onboarding");
  }

  // Get user role and admin status
  const role = user.publicMetadata?.role as "doer" | "poster" | undefined;
  const isAdmin = user.publicMetadata?.isAdmin as boolean;

  // Redirect admins to admin portal
  if (isAdmin) {
    redirect("/admin");
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border glass">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-heading font-bold">MLV Forge</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">
              Welcome, {user.firstName || user.emailAddresses[0].emailAddress}
            </span>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-heading font-bold mb-2">
              {role === "poster" ? "Poster Dashboard" : "Doer Dashboard"}
            </h1>
            <p className="text-gray-400">
              {role === "poster"
                ? "Post tasks and manage your projects"
                : "Browse tasks and build your portfolio"}
            </p>
          </div>

          {role === "poster" ? (
            // Poster Dashboard
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-lg">
                <h3 className="font-heading font-bold mb-2">Post a Task</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Describe your task and get matched with skilled doers
                </p>
                <span className="text-sm text-gray-500">Coming soon</span>
              </div>

              <div className="glass p-6 rounded-lg">
                <h3 className="font-heading font-bold mb-2">Active Tasks</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Monitor progress on your posted tasks
                </p>
                <span className="text-sm text-gray-500">Coming soon</span>
              </div>

              <div className="glass p-6 rounded-lg">
                <h3 className="font-heading font-bold mb-2">Completed Tasks</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Review completed work and rate doers
                </p>
                <span className="text-sm text-gray-500">Coming soon</span>
              </div>
            </div>
          ) : (
            // Doer Dashboard
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-lg">
                <h3 className="font-heading font-bold mb-2">Browse Tasks</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Find tasks that match your skills and interests
                </p>
                <span className="text-sm text-gray-500">Coming soon</span>
              </div>

              <div className="glass p-6 rounded-lg">
                <h3 className="font-heading font-bold mb-2">Active Tasks</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Work on your current tasks with AI assistance
                </p>
                <span className="text-sm text-gray-500">Coming soon</span>
              </div>

              <div className="glass p-6 rounded-lg">
                <h3 className="font-heading font-bold mb-2">Your Earnings</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Track your income and completed tasks
                </p>
                <span className="text-sm text-gray-500">Coming soon</span>
              </div>
            </div>
          )}

          <div className="mt-12 glass p-8 rounded-lg text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">
              🎉 Welcome to MLV Forge!
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The AI-powered task marketplace is in active development. Core features like
              task posting, AI matching, and payments will be available soon.
              Thank you for being an early adopter!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
