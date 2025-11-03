import Link from "next/link";
import { ArrowRight, Sparkles, Zap, TrendingUp, Brain } from "lucide-react";
import { AnimatedGrid } from "@/components/AnimatedGrid";
import { GradientOrbs } from "@/components/GradientOrbs";

export const metadata = {
  title: "For Task Doers | MLV Forge - Earn While Learning with AI",
  description: "Browse tasks, work with AI assistance, and earn $15-50 per task while building your skills. No experience required - AI guides you through every task.",
};

export default function ForDoersPage() {
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
              href="/sign-up?role=doer"
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#6AC670] to-[#F2CF07] rounded-full blur-md animate-pulse" />
                <div className="relative w-2 h-2 bg-gradient-to-r from-[#6AC670] to-[#F2CF07] rounded-full" />
              </div>
              <span className="text-sm font-mono font-medium text-white/80 tracking-wider">
                FOR_TASK_DOERS
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight">
              <span className="text-white">Build Skills + Earn Money</span>
              <br />
              <span className="gradient-text">With AI As Your Co-Pilot</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
              Browse tasks, work with our built-in AI assistant, and earn $15-50 per task while
              building your portfolio. No experience required - AI helps you level up.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                href="/sign-up?role=doer"
                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#6AC670] to-[#F2CF07] text-[#0a0a0a] font-bold text-lg rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6AC670] to-[#F2CF07] blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Earning Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Earnings Example */}
            <div className="pt-12 max-w-md mx-auto glass p-6 rounded-lg">
              <div className="space-y-3">
                {[
                  { label: "Video Editing Task", amount: "+$45" },
                  { label: "Market Research", amount: "+$30" },
                  { label: "Logo Design", amount: "+$50" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-white/60">{item.label}</span>
                    <span className="text-[#6AC670] font-semibold">{item.amount}</span>
                  </div>
                ))}
                <div className="border-t border-white/10 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">This Week</span>
                    <span className="text-2xl font-heading font-bold text-[#6AC670]">$125</span>
                  </div>
                  <p className="text-xs text-white/40 mt-1">3 tasks • AI assisted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
              Why Doers Love MLV Forge
            </h2>
            <p className="text-xl text-white/60">
              The fastest way to build skills and earn money
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Co-Pilot",
                description: "Every task comes with our AI workspace. Get help researching, creating, and delivering professional work.",
                color: "#6AC670",
              },
              {
                icon: TrendingUp,
                title: "Learn While Earning",
                description: "No experience required. AI guides you through tasks, teaching you new skills as you work. Build a real portfolio.",
                color: "#F2CF07",
              },
              {
                icon: Zap,
                title: "Flexible Schedule",
                description: "Work on your time. Browse available tasks 24/7. Pick what interests you. No minimum hours or commitments.",
                color: "#6AC670",
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
              From browsing to earning in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Browse Tasks",
                description: "Find tasks that match your interests. Video editing, research, design, code, analysis. All skill levels welcome.",
              },
              {
                step: "2",
                title: "Work With AI",
                description: "Use our AI workspace to research, create, and deliver. AI helps you learn and produce professional results.",
              },
              {
                step: "3",
                title: "Get Paid",
                description: "Submit your work. Poster reviews and approves. Earn $15-50 per task. Build your portfolio with every completed task.",
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

      {/* Task Types Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
              What You Can Work On
            </h2>
            <p className="text-xl text-white/60">
              Hundreds of digital tasks across multiple categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🎬", label: "Video Editing", tasks: "30-50 tasks/week" },
              { emoji: "📊", label: "Research", tasks: "50+ tasks/week" },
              { emoji: "🎨", label: "Design", tasks: "40+ tasks/week" },
              { emoji: "💻", label: "Coding", tasks: "20-30 tasks/week" },
              { emoji: "✍️", label: "Writing", tasks: "60+ tasks/week" },
              { emoji: "📈", label: "Analysis", tasks: "25-35 tasks/week" },
              { emoji: "🎵", label: "Audio", tasks: "15-25 tasks/week" },
              { emoji: "🔧", label: "Other", tasks: "30+ tasks/week" },
            ].map((category, i) => (
              <div key={i} className="glass p-6 rounded-lg text-center hover:border-[#6AC670]/50 transition-all">
                <div className="text-4xl mb-3">{category.emoji}</div>
                <h3 className="font-heading font-bold mb-2">{category.label}</h3>
                <p className="text-sm text-white/50">{category.tasks}</p>
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
                Ready to Start Building?
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Join doers earning money while building skills with AI assistance. Start today.
              </p>
              <Link
                href="/sign-up?role=doer"
                className="gradient-btn px-10 py-5 rounded-lg text-lg font-semibold text-[#0a0a0a] inline-flex items-center gap-2 glow-gradient"
              >
                Start Earning Now
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
