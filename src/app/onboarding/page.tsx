"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { Sparkles } from "lucide-react";
import { updateUserRole } from "./actions";

// Loading fallback component
function OnboardingLoading() {
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
        </div>
      </nav>

      {/* Loading Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-pulse">
            <p className="text-gray-400">Loading your onboarding experience...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main onboarding content that uses useSearchParams
function OnboardingContent() {
  const { user } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");

  const [role, setRole] = useState<"student" | "company" | null>(
    roleParam as "student" | "company" | null
  );
  const [loading, setLoading] = useState(false);

  const handleRoleSelection = async (selectedRole: "student" | "company") => {
    setLoading(true);
    try {
      // Update user metadata with selected role using server action
      await updateUserRole(selectedRole);

      // Redirect to dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Error updating user metadata:", error);
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
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
        </div>
      </nav>

      {/* Onboarding Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Welcome to MLV Forge! 🎉
            </h1>
            <p className="text-xl text-gray-400">
              Let's get you set up. Are you a student or a company?
            </p>
          </div>

          {!role ? (
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Student Card */}
              <button
                onClick={() => handleRoleSelection("student")}
                disabled={loading}
                className="glass p-8 rounded-lg text-left hover:border-primary/50 transition-all cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">
                  I'm a Student
                </h3>
                <p className="text-gray-400 mb-4">
                  Earn $20-30/hour while building your portfolio through real
                  client work guided by AI mentors.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ Work 10-15 hours/week</li>
                  <li>✓ AI-powered project assistance</li>
                  <li>✓ Build your portfolio</li>
                  <li>✓ Get paid directly</li>
                </ul>
              </button>

              {/* Company Card */}
              <button
                onClick={() => handleRoleSelection("company")}
                disabled={loading}
                className="glass p-8 rounded-lg text-left hover:border-primary/50 transition-all cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-success/20 transition-colors">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">
                  I'm a Company
                </h3>
                <p className="text-gray-400 mb-4">
                  Get marketing, research, and analysis done at 80% lower cost
                  with AI-augmented Gen Z talent.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ 80% cost savings</li>
                  <li>✓ High-quality work</li>
                  <li>✓ Fast turnaround</li>
                  <li>✓ Escrow protection</li>
                </ul>
              </button>
            </div>
          ) : (
            <div className="text-center">
              <div className="animate-pulse">
                <p className="text-gray-400">Setting up your account...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Default export with Suspense boundary
export default function OnboardingPage() {
  return (
    <Suspense fallback={<OnboardingLoading />}>
      <OnboardingContent />
    </Suspense>
  );
}
