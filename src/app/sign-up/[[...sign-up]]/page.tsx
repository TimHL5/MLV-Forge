import { SignUp } from "@clerk/nextjs";
import { AnimatedGrid } from "@/components/AnimatedGrid";
import { GradientOrbs } from "@/components/GradientOrbs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
      <AnimatedGrid />
      <GradientOrbs />

      <div className="w-full max-w-md relative z-10 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading font-bold mb-2 gradient-text">
            MLV Forge
          </h1>
          <p className="text-lg text-[#B0B0B0]">
            Join the future of AI-powered work
          </p>
        </div>
        <SignUp />
      </div>
    </div>
  );
}
