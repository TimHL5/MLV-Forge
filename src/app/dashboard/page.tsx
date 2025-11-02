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
            <h1 className="text-4xl font-heading font-bold mb-2">Dashboard</h1>
            <p className="text-gray-400">
              Your MLV Forge workspace is being built...
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-lg">
              <h3 className="font-heading font-bold mb-2">Profile Setup</h3>
              <p className="text-sm text-gray-400 mb-4">
                Complete your profile to start working on projects
              </p>
              <Link
                href="/onboarding"
                className="text-primary hover:underline text-sm"
              >
                Update Profile →
              </Link>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="font-heading font-bold mb-2">Browse Projects</h3>
              <p className="text-sm text-gray-400 mb-4">
                Discover projects that match your skills
              </p>
              <span className="text-sm text-gray-500">Coming soon</span>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="font-heading font-bold mb-2">Your Earnings</h3>
              <p className="text-sm text-gray-400 mb-4">
                Track your income and completed projects
              </p>
              <span className="text-sm text-gray-500">Coming soon</span>
            </div>
          </div>

          <div className="mt-12 glass p-8 rounded-lg text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">
              🎉 Welcome to MLV Forge!
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The platform is currently in active development. Core features like
              project posting, applications, and payments will be available soon.
              Thank you for being an early adopter!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
