import Link from "next/link";
import { ArrowRight, Sparkles, Zap, TrendingUp, Brain, DollarSign, Clock, Briefcase, Shield, Star } from "lucide-react";
import { AnimatedGrid } from "@/components/AnimatedGrid";
import { GradientOrbs } from "@/components/GradientOrbs";
import { BRAND, COPY, PRICING } from "@/lib/constants";

export const metadata = {
  title: `For Students | ${BRAND.name} - Build Your Career with AI`,
  description: "Get paid $300-800 per project doing real work for real companies. Use built-in AI copilots to deliver professional results. Start building your career today.",
};

export default function ForStudentsPage() {
  return (
    <div className="min-h-screen bg-void-black text-white relative overflow-x-hidden">
      {/* Animated Backgrounds */}
      <AnimatedGrid />
      <GradientOrbs />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-deep-navy/80 border-b border-electric-blue/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-cyber-cyan rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-heading font-bold gradient-text">{BRAND.name}</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="text-sm text-white/80 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link
              href="/sign-up?role=student"
              className="px-6 py-2 bg-gradient-to-r from-electric-blue to-cyber-cyan text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              {COPY.cta.generic}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 px-4 bg-constellation">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-electric-blue/20 rounded-full">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-cyber-cyan rounded-full blur-md animate-pulse" />
                <div className="relative w-2 h-2 bg-gradient-to-r from-electric-blue to-cyber-cyan rounded-full" />
              </div>
              <span className="text-sm font-mono font-medium text-white/80 tracking-wider">
                FOR_STUDENTS
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight">
              <span className="text-white">Build Your Career</span>
              <br />
              <span className="gradient-text glow-text">One Project at a Time</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
              Get paid {PRICING.student.display} per project doing real work for real companies.
              Use built-in AI copilots to deliver professional results. No unpaid internships.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                href="/sign-up?role=student"
                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-electric-blue to-cyber-cyan text-white font-bold text-lg rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-cyber-cyan blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {COPY.cta.student.primary}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Earnings Example */}
            <div className="pt-12 max-w-md mx-auto glass p-6 rounded-lg">
              <div className="space-y-3">
                {[
                  { label: "Content Creation", amount: "+$500" },
                  { label: "Market Research", amount: "+$400" },
                  { label: "Data Analysis", amount: "+$650" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-white/60">{item.label}</span>
                    <span className="text-electric-blue font-semibold">{item.amount}</span>
                  </div>
                ))}
                <div className="border-t border-white/10 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">This Week</span>
                    <span className="text-2xl font-heading font-bold text-electric-blue">$1,550</span>
                  </div>
                  <p className="text-xs text-white/40 mt-1">3 projects • AI-enhanced</p>
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text glow-text">
              Why Students Choose {BRAND.name}
            </h2>
            <p className="text-xl text-white/60">
              Build skills, earn money, and launch your career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Co-Pilot",
                description: "Built-in AI copilots help you research, write, analyze, and create like a professional. Learn as you earn.",
                color: "electric-blue",
              },
              {
                icon: DollarSign,
                title: "Real Money",
                description: `Earn ${PRICING.student.display} per project. Weekly payouts. Build your income while staying in school.`,
                color: "success-green",
              },
              {
                icon: Briefcase,
                title: "Build Portfolio",
                description: "Every project becomes a portfolio piece. Show companies what you can actually do, not just what you studied.",
                color: "cyber-cyan",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="glass p-8 rounded-lg hover:border-electric-blue/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-electric-blue/10">
                  <feature.icon className="w-6 h-6 text-electric-blue" />
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
              From sign-up to payday in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Join & Verify",
                description: "Sign up and complete your profile. Get verified by our team in 24 hours.",
              },
              {
                step: "2",
                title: "Find Projects",
                description: "Browse projects from real companies. Filter by skill, pay, and timeline.",
              },
              {
                step: "3",
                title: "Build with AI",
                description: "Use built-in AI copilots to research, create, and deliver professional work.",
              },
              {
                step: "4",
                title: "Get Paid",
                description: `Submit work. Get paid ${PRICING.student.display} within 48 hours of approval.`,
              },
            ].map((item, i) => (
              <div key={i} className="glass p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-cyber-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Work On */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
              What You Can Work On
            </h2>
            <p className="text-xl text-white/60">
              Hundreds of projects across multiple categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "✍️", label: "Content Writing", desc: "Blogs, social media, newsletters" },
              { icon: "🔍", label: "Research", desc: "Market research, competitor analysis" },
              { icon: "📊", label: "Data Analysis", desc: "Excel, dashboards, reports" },
              { icon: "🎨", label: "Design", desc: "Graphics, presentations, mockups" },
              { icon: "📱", label: "Social Media", desc: "Posts, captions, strategies" },
              { icon: "💼", label: "Business", desc: "Strategy, planning, operations" },
              { icon: "🤖", label: "AI Tasks", desc: "Prompting, testing, workflows" },
              { icon: "📈", label: "Marketing", desc: "Campaigns, analytics, SEO" },
            ].map((category, i) => (
              <div key={i} className="glass p-6 rounded-lg text-center hover:border-electric-blue/50 transition-all">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-heading font-bold mb-2">{category.label}</h3>
                <p className="text-sm text-white/50">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="text-white">More than just </span>
                <span className="gradient-text">a side hustle</span>
              </h2>
              <p className="text-xl text-white/60 mb-8">
                {BRAND.name} isn't just about making money. It's about building the career you want.
              </p>

              <ul className="space-y-4">
                {[
                  { icon: Shield, text: "Escrow protection - payment held until work is approved" },
                  { icon: Star, text: "Build reputation with every completed project" },
                  { icon: Clock, text: "Work on your schedule - nights, weekends, between classes" },
                  { icon: Zap, text: "AI tools make you competitive with experienced pros" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-electric-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-electric-blue" />
                    </div>
                    <span className="text-white/70">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-white">Student Success Story</h3>
              <div className="space-y-4">
                <p className="text-white/70 italic">
                  "I made $2,400 last month working on {BRAND.name} between classes. The AI tools helped me
                  deliver work I never thought I could do. Now I have a portfolio that got me a full-time
                  offer before graduation."
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-cyber-cyan rounded-full"></div>
                  <div>
                    <div className="font-semibold text-white">Sarah Chen</div>
                    <div className="text-sm text-white/60">BC '25 • Marketing Major</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="glass p-12 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-cyber-cyan/10 to-electric-blue/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text glow-text">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Join thousands of students earning {PRICING.student.display} per project while building their careers.
              </p>
              <Link
                href="/sign-up?role=student"
                className="gradient-btn px-10 py-5 rounded-lg text-lg font-semibold text-white inline-flex items-center gap-2 glow-electric"
              >
                {COPY.cta.student.primary}
                <ArrowRight className="w-6 h-6" />
              </Link>
              <p className="text-sm text-white/40 mt-4">Free to join • No experience required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-electric-blue/20 relative">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-cyber-cyan rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-heading font-bold gradient-text">{BRAND.name}</span>
          </div>
          <p className="text-sm text-white/60">
            {COPY.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
