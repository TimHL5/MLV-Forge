import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Star, Zap } from "lucide-react";
import { AnimatedGrid } from "@/components/AnimatedGrid";
import { GradientOrbs } from "@/components/GradientOrbs";

export const metadata = {
  title: "For Task Posters | MLV Forge - Get Any Digital Task Done Fast",
  description: "Post any digital task and get it done by AI-powered doers at 10X the speed. Fixed pricing, instant AI matching, quality guaranteed.",
};

export default function ForPostersPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-hidden">
      {/* Animated Backgrounds */}
      <AnimatedGrid />
      <GradientOrbs />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/5 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#6AC670] to-[#F2CF07] rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#0a0a0a]" />
            </div>
            <span className="text-xl font-heading font-bold gradient-text">MLV Forge</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="text-sm text-white/80 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link
              href="/sign-up?role=poster"
              className="px-6 py-2 bg-gradient-to-r from-[#6AC670] to-[#F2CF07] text-[#0a0a0a] font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F2CF07] to-[#6AC670] rounded-full blur-md animate-pulse" />
                <div className="relative w-2 h-2 bg-gradient-to-r from-[#F2CF07] to-[#6AC670] rounded-full" />
              </div>
              <span className="text-sm font-mono font-medium text-white/80 tracking-wider">
                FOR_TASK_POSTERS
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight">
              <span className="text-white">Get Any Task Done</span>
              <br />
              <span className="gradient-text">10X Faster</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
              Post any digital task. Get matched instantly with AI-powered doers who deliver
              high-quality work in hours, not days. Fixed pricing. Quality guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                href="/sign-up?role=poster"
                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#6AC670] to-[#F2CF07] text-[#0a0a0a] font-bold text-lg rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6AC670] to-[#F2CF07] blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Post Your First Task
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
              Why Task Posters Choose MLV Forge
            </h2>
            <p className="text-xl text-white/60">
              The fastest way to get digital work done
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Instant AI Matching",
                description: "Our AI matches you with the perfect doer in under 10 minutes. No more waiting days for applications.",
                color: "#F2CF07",
              },
              {
                icon: Shield,
                title: "Quality Guaranteed",
                description: "AI quality checks before delivery. Escrow protection holds payment until you approve. Money-back guarantee.",
                color: "#6AC670",
              },
              {
                icon: Star,
                title: "Fixed Pricing",
                description: "$15-50 per task. No hourly rate uncertainty. Know exactly what you'll pay before work begins.",
                color: "#F2CF07",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="glass p-8 rounded-lg hover:border-[#6AC670]/50 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `${feature.color}15` }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white/5 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
              How It Works
            </h2>
            <p className="text-xl text-white/60">
              From idea to done in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Post Your Task",
                description: "Describe what you need - video editing, research, design, code, anything digital. Set your budget and deadline.",
              },
              {
                step: "2",
                title: "Get Matched",
                description: "Our AI instantly finds the perfect doer based on skills, past work, and availability. Average match time: 10 minutes.",
              },
              {
                step: "3",
                title: "Receive Results",
                description: "Doers use our AI workspace to deliver professional results. Review, approve, and pay. Quality guaranteed.",
              },
            ].map((item, i) => (
              <div key={i} className="glass p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6AC670] to-[#F2CF07] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-[#0a0a0a]">{item.step}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="glass p-12 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6AC670]/10 via-[#F2CF07]/10 to-[#6AC670]/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
                Ready to Get Things Done?
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Post your first task and see why posters choose MLV Forge for fast, quality results.
              </p>
              <Link
                href="/sign-up?role=poster"
                className="gradient-btn px-10 py-5 rounded-lg text-lg font-semibold text-[#0a0a0a] inline-flex items-center gap-2 glow-gradient"
              >
                Post a Task Now
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 relative">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-[#6AC670] to-[#F2CF07] rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#0a0a0a]" />
            </div>
            <span className="text-xl font-heading font-bold gradient-text">MLV Forge</span>
          </div>
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} MLV Forge. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
