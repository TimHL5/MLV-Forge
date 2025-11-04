"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { Sparkles } from "lucide-react";
import { updateUserRole } from "./actions";
import { BRAND, PRICING } from "@/lib/constants";

// Loading fallback component
function OnboardingLoading() {
  return (
    <div className="min-h-screen bg-void-black text-white">
      {/* Navigation */}
      <nav className="border-b border-electric-blue/20 glass">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-cyber-cyan rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-heading font-bold gradient-text">{BRAND.name}</span>
          </div>
        </div>
      </nav>

      {/* Loading Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-pulse">
            <p className="text-white/60">Loading your onboarding experience...</p>
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

  const [role, setRole] = useState<"doer" | "poster" | null>(
    roleParam as "doer" | "poster" | null
  );
  const [loading, setLoading] = useState(false);

  const handleRoleSelection = async (selectedRole: "doer" | "poster") => {
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
      <div className="min-h-screen flex items-center justify-center bg-void-black text-white">
        <div className="text-center">
          <p className="text-white/60">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-void-black text-white">
      {/* Navigation */}
      <nav className="border-b border-electric-blue/20 glass">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-cyber-cyan rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-heading font-bold gradient-text">{BRAND.name}</span>
          </div>
        </div>
      </nav>

      {/* Onboarding Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text glow-text">
              Welcome to {BRAND.name}! ⚡
            </h1>
            <p className="text-xl text-white/60">
              {BRAND.description} What brings you here?
            </p>
          </div>

          {!role ? (
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Student Card */}
              <button
                onClick={() => handleRoleSelection("doer")}
                disabled={loading}
                className="glass p-8 rounded-lg text-left hover:border-electric-blue/50 transition-all cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-electric-blue/20 transition-colors">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">
                  I'm a Student
                </h3>
                <p className="text-white/60 mb-4">
                  Build your career and earn {PRICING.student.display} per project with AI copilot assistance.
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>✓ Built-in AI copilots</li>
                  <li>✓ Real work, real money</li>
                  <li>✓ Build your portfolio</li>
                  <li>✓ Work on your schedule</li>
                </ul>
              </button>

              {/* Company Card */}
              <button
                onClick={() => handleRoleSelection("poster")}
                disabled={loading}
                className="glass p-8 rounded-lg text-left hover:border-electric-blue/50 transition-all cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="w-12 h-12 bg-success-green/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-success-green/20 transition-colors">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">
                  I'm a Company
                </h3>
                <p className="text-white/60 mb-4">
                  Hire AI-powered college talent at {PRICING.company.display} per project. 60% cheaper than freelancers.
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>✓ 72-hour delivery</li>
                  <li>✓ Fixed project pricing</li>
                  <li>✓ AI-enhanced quality</li>
                  <li>✓ Quality guaranteed</li>
                </ul>
              </button>
            </div>
          ) : (
            <div className="text-center">
              <div className="animate-pulse">
                <p className="text-white/60">Setting up your account...</p>
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
