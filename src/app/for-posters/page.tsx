import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Star, Zap, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { AnimatedGrid } from "@/components/AnimatedGrid";
import { GradientOrbs } from "@/components/GradientOrbs";
import { BRAND, COPY, PRICING, VALUE_PROPS } from "@/lib/constants";

export const metadata = {
  title: `For Companies | ${BRAND.name} - Build Your Team 60% Faster`,
  description: "Hire AI-powered college talent for content, research, and analysis. 60% cheaper than freelancers. 72-hour delivery. Professional-grade output guaranteed.",
};

export default function ForCompaniesPage() {
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
              href="/sign-up?role=company"
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
                FOR_COMPANIES
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight">
              <span className="text-white">Build Your Team</span>
              <br />
              <span className="gradient-text glow-text">In Days, Not Months</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
              Hire AI-powered college talent for content, research, and analysis.
              {VALUE_PROPS.percentCheaper} cheaper than freelancers. {VALUE_PROPS.deliveryTime} average delivery.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                href="/sign-up?role=company"
                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-electric-blue to-cyber-cyan text-white font-bold text-lg rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-cyber-cyan blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {COPY.cta.company.primary}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Pricing Preview */}
            <div className="pt-12 max-w-md mx-auto glass p-6 rounded-lg">
              <div className="space-y-3">
                {[
                  { label: "Content Creation", price: PRICING.company.display },
                  { label: "Market Research", price: PRICING.company.display },
                  { label: "Data Analysis", price: PRICING.company.display },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-white/60">{item.label}</span>
                    <span className="text-electric-blue font-semibold">{item.price}/project</span>
                  </div>
                ))}
                <div className="border-t border-white/10 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">vs Freelancers</span>
                    <span className="text-2xl font-heading font-bold text-success-green">{VALUE_PROPS.percentCheaper} less</span>
                  </div>
                  <p className="text-xs text-white/40 mt-1">Fixed pricing • AI-enhanced quality</p>
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
              Why Companies Choose {BRAND.name}
            </h2>
            <p className="text-xl text-white/60">
              Fast, affordable, and AI-powered talent on demand
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: `${VALUE_PROPS.deliveryTime} average delivery. From project post to completion in under a week. No lengthy hiring process.`,
                color: "electric-blue",
              },
              {
                icon: Star,
                title: `${VALUE_PROPS.percentCheaper} Cheaper`,
                description: `Fixed project pricing at ${PRICING.company.display}. No hourly rate surprises. Budget predictability built-in.`,
                color: "success-green",
              },
              {
                icon: Shield,
                title: "Quality Guaranteed",
                description: "Students use built-in AI copilots for consistent, professional-grade output. Unlimited revisions. Money-back guarantee.",
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
              From idea to done in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Post Project",
                description: "Describe what you need. Set budget and timeline. Takes 5 minutes.",
              },
              {
                step: "2",
                title: "Get Matched",
                description: "AI matches you with vetted students based on skills and past work.",
              },
              {
                step: "3",
                title: "Review Work",
                description: "Students deliver within 48-72 hours. Request revisions if needed.",
              },
              {
                step: "4",
                title: "Done",
                description: "Approve work. Payment released. Rate experience. Hire again anytime.",
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

      {/* What You Can Build */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
              What You Can Build
            </h2>
            <p className="text-xl text-white/60">
              Any knowledge work that can be powered by AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📝", label: "Content", desc: "Blogs, social, newsletters, email campaigns" },
              { icon: "🔍", label: "Research", desc: "Market research, competitor analysis, data" },
              { icon: "📊", label: "Analysis", desc: "Excel models, reports, dashboards" },
              { icon: "🎨", label: "Design", desc: "Social graphics, slide decks, mockups" },
              { icon: "📱", label: "Social Media", desc: "Posts, captions, content calendars" },
              { icon: "💼", label: "Business", desc: "Strategy docs, business plans, operations" },
              { icon: "📈", label: "Marketing", desc: "Campaign planning, SEO, analytics" },
              { icon: "✍️", label: "Writing", desc: "Case studies, whitepapers, copywriting" },
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

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-white/5 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="text-white">Why </span>
              <span className="gradient-text">{BRAND.name}</span>
              <span className="text-white"> vs Alternatives</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                platform: "Traditional Freelancers",
                issues: [
                  "2-4 weeks to hire",
                  "$75-150/hour rates",
                  "Inconsistent quality",
                  "No AI tools included"
                ],
              },
              {
                platform: BRAND.name,
                issues: [
                  `✅ ${VALUE_PROPS.deliveryTime} delivery`,
                  `✅ ${PRICING.company.display} per project`,
                  "✅ AI-enhanced quality",
                  "✅ Built-in AI copilots"
                ],
                highlight: true,
              },
              {
                platform: "Other Marketplaces",
                issues: [
                  "No AI integration",
                  "Transactional only",
                  "Variable quality",
                  "Hidden fees"
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`glass p-8 rounded-lg ${item.highlight ? 'border-2 border-electric-blue shadow-glow-primary' : ''}`}
              >
                <h3 className={`text-2xl font-heading font-bold mb-6 text-center ${item.highlight ? 'gradient-text' : 'text-white'}`}>
                  {item.platform}
                </h3>
                <ul className="space-y-3">
                  {item.issues.map((issue, j) => (
                    <li key={j} className={`flex items-start gap-3 ${item.highlight ? 'text-white' : 'text-white/60'}`}>
                      {item.highlight ? (
                        <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-white/20 flex-shrink-0 mt-0.5"></div>
                      )}
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="glass p-12 rounded-2xl">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-norse-gold text-norse-gold" />
                ))}
              </div>
              <p className="text-2xl text-white/90 italic leading-relaxed mb-8">
                "We hired 5 {BRAND.name} students to create our content calendar. They delivered 20 LinkedIn posts
                in 4 days using AI. Would have taken our team 2 weeks. The quality was incredible."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-cyber-cyan rounded-full"></div>
                <div className="text-left">
                  <div className="font-semibold text-white">Sarah Chen</div>
                  <div className="text-sm text-white/60">Marketing Director, FlowState (YC W24)</div>
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
                Ready to Build Your Team?
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Join companies hiring AI-powered talent at {PRICING.company.display} per project.
                {VALUE_PROPS.deliveryTime} delivery. Quality guaranteed.
              </p>
              <Link
                href="/sign-up?role=company"
                className="gradient-btn px-10 py-5 rounded-lg text-lg font-semibold text-white inline-flex items-center gap-2 glow-electric"
              >
                {COPY.cta.company.primary}
                <ArrowRight className="w-6 h-6" />
              </Link>
              <p className="text-sm text-white/40 mt-4">First project free • {VALUE_PROPS.deliveryTime} delivery • Quality guaranteed</p>
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
