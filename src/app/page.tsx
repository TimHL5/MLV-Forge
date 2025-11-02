import Link from "next/link";
import { ArrowRight, Sparkles, Users, Zap, TrendingUp, Shield, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full glass border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-heading font-bold">MLV Forge</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-sm hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#for-companies" className="text-sm hover:text-primary transition-colors">
              For Companies
            </Link>
            <Link href="#for-students" className="text-sm hover:text-primary transition-colors">
              For Students
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/sign-in"
              className="text-sm hover:text-primary transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="gradient-btn px-6 py-2 rounded-lg text-sm font-medium text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <Sparkles className="inline w-4 h-4 mr-2" />
              Where AI Meets Ambition
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
              Turn Your <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">AI Skills</span><br />
              Into Real Work
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Get paid. Build your portfolio. Work on real projects with cutting-edge AI tools built into the platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/sign-up?role=student"
                className="gradient-btn px-8 py-4 rounded-lg font-semibold text-white inline-flex items-center justify-center gap-2"
              >
                I'm a Student
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/sign-up?role=company"
                className="px-8 py-4 rounded-lg font-semibold border-2 border-gray-700 hover:border-primary transition-colors inline-flex items-center justify-center gap-2"
              >
                I'm a Company
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">$20-30</div>
                <div className="text-sm text-gray-400">Per Hour</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">80%</div>
                <div className="text-sm text-gray-400">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-400">AI Assistant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              How MLV Forge Works
            </h2>
            <p className="text-xl text-gray-400">
              AI-powered platform connecting Gen Z talent with real business projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-lg hover:border-primary/50 transition-all cursor-pointer group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Join Teams</h3>
              <p className="text-gray-400">
                Students join virtual "startup teams" to execute real business projects together.
              </p>
            </div>

            <div className="glass p-8 rounded-lg hover:border-primary/50 transition-all cursor-pointer group">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">AI-Powered Tools</h3>
              <p className="text-gray-400">
                Claude AI assistant built directly into the platform guides you through every project.
              </p>
            </div>

            <div className="glass p-8 rounded-lg hover:border-primary/50 transition-all cursor-pointer group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Get Paid & Grow</h3>
              <p className="text-gray-400">
                Earn $20-30/hour while building your portfolio and leveling up your skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies */}
      <section id="for-companies" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-success/10 border border-success/20 rounded-full text-sm text-success mb-4">
                For Companies
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Get Marketing, Research & Analysis Done at <span className="text-success">80% Lower Cost</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Access Gen Z talent that thinks in AI workflows. High quality work with cutting-edge tools.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "AI-augmented college students ready to work",
                  "Fixed pricing - no hourly surprises",
                  "Built-in project management & chat",
                  "Quality checked by AI before delivery",
                  "Money-back guarantee on all projects"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/sign-up?role=company"
                className="gradient-btn px-8 py-4 rounded-lg font-semibold text-white inline-flex items-center gap-2"
              >
                Post Your First Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="glass p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Escrow Protection</h4>
                    <p className="text-sm text-gray-400">Payment held until you approve the work</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                  <Star className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Vetted Talent</h4>
                    <p className="text-sm text-gray-400">AI assessment + rating system ensures quality</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Fast Turnaround</h4>
                    <p className="text-sm text-gray-400">Most projects completed in 1-2 weeks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Students */}
      <section id="for-students" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 glass p-8 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <span className="text-sm text-gray-400">LinkedIn Posts Project</span>
                  <span className="text-success font-semibold">+$375</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <span className="text-sm text-gray-400">Social Media Graphics</span>
                  <span className="text-success font-semibold">+$200</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <span className="text-sm text-gray-400">Email Campaign Copy</span>
                  <span className="text-success font-semibold">+$300</span>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">This Month</span>
                    <span className="text-2xl font-heading font-bold text-success">$875</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Working 10-15 hours/week</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
                For Students
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Earn While You Learn Through <span className="text-primary">Real Client Work</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Build your portfolio, master AI tools, and get paid $20-30/hour for work that actually matters.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Work 10-15 hours/week around your classes",
                  "AI mentor guides you through every project",
                  "Build a portfolio that gets you hired",
                  "Level up to unlock higher-paying work",
                  "Get paid directly to your bank account"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/sign-up?role=student"
                className="gradient-btn px-8 py-4 rounded-lg font-semibold text-white inline-flex items-center gap-2"
              >
                Start Building Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass p-12 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Ready to Forge Your Future?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join the next generation of work. AI-powered. Student-driven. Results-focused.
              </p>
              <Link
                href="/sign-up"
                className="gradient-btn px-10 py-5 rounded-lg text-lg font-semibold text-white inline-flex items-center gap-2 glow"
              >
                Get Started Free
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-heading font-bold">MLV Forge</span>
              </div>
              <p className="text-sm text-gray-400">
                Where AI Meets Ambition
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-primary transition-colors">How It Works</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Features</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} MLV Forge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
