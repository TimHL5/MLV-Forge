'use client'

import Link from "next/link";
import { ArrowRight, Sparkles, Users, Zap, TrendingUp, DollarSign, Clock, Briefcase, ChevronDown, Star, Shield, TrendingDown } from "lucide-react";
import { AnimatedGrid } from "@/components/AnimatedGrid";
import { GradientOrbs } from "@/components/GradientOrbs";
import { FloatingParticles } from "@/components/FloatingParticles";
import { useEffect, useState, useRef } from "react";
import { BRAND, COPY, PRICING, VALUE_PROPS } from "@/lib/constants";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isNavFloating, setIsNavFloating] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const fullText = 'Nida';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Hide scroll indicator after scrolling 100px
      if (currentScrollY > 100) {
        setShowScrollIndicator(false);
        setIsNavFloating(true);
      } else {
        setShowScrollIndicator(true);
        setIsNavFloating(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect for "Nida"
  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 120;
    const startDelay = 1000;

    const startTyping = setTimeout(() => {
      const typeNextChar = () => {
        if (currentIndex < fullText.length) {
          setTypedText(fullText.substring(0, currentIndex + 1));
          currentIndex++;
          setTimeout(typeNextChar, typingSpeed);
        } else {
          setIsTypingComplete(true);
        }
      };
      typeNextChar();
    }, startDelay);

    return () => clearTimeout(startTyping);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-void-black text-white relative overflow-x-hidden">
      {/* Animated Backgrounds */}
      <AnimatedGrid />
      <GradientOrbs />
      <FloatingParticles />

      {/* Navigation - Nida Theme */}
      <nav
        className="fixed z-50 transition-all"
        style={{
          top: isNavFloating ? '20px' : '0',
          left: isNavFloating ? '50%' : '0',
          right: isNavFloating ? 'auto' : '0',
          width: isNavFloating ? 'calc(100% - 80px)' : '100%',
          maxWidth: isNavFloating ? '1400px' : 'none',
          transform: isNavFloating ? 'translateX(-50%)' : 'none',
          borderRadius: isNavFloating ? '16px' : '0',
          background: isNavFloating ? 'rgba(15, 20, 25, 0.8)' : 'rgba(10, 14, 20, 0.9)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: isNavFloating ? '1px solid rgba(0, 102, 255, 0.2)' : 'none',
          borderBottom: isNavFloating ? '1px solid rgba(0, 102, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: isNavFloating ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 102, 255, 0.1)' : 'none',
          transitionProperty: 'all',
          transitionDuration: '0.4s',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          className="mx-auto px-8 flex items-center justify-between"
          style={{
            maxWidth: '1400px',
            height: isNavFloating ? '60px' : '70px',
            transition: 'height 0.4s ease',
          }}
        >
          <div className="flex items-center gap-2">
            <div
              className="relative w-8 h-8"
              style={{ willChange: 'transform' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue to-cyber-cyan rounded-lg blur-md opacity-75 animate-pulse" />
              <div className="relative w-8 h-8 bg-gradient-to-br from-electric-blue to-cyber-cyan rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="text-xl font-heading font-bold gradient-text">{BRAND.name}</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#how-it-works"
              className="text-sm text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,102,255,0.5)] transition-all"
            >
              How It Works
            </Link>
            <Link
              href="#for-students"
              className="text-sm text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,102,255,0.5)] transition-all"
            >
              For Students
            </Link>
            <Link
              href="#for-companies"
              className="text-sm text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,102,255,0.5)] transition-all"
            >
              For Companies
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/sign-in"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="relative px-6 py-2 bg-gradient-to-r from-electric-blue to-cyber-cyan text-white font-semibold rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-cyber-cyan blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">{COPY.cta.generic}</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Nida Theme */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 px-4 overflow-hidden bg-constellation">
        <div
          ref={heroRef}
          className="container mx-auto max-w-6xl relative z-10"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            willChange: 'transform',
          }}
        >
          <div className="text-center space-y-8">
            {/* AI Badge */}
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-electric-blue/20 rounded-full animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-cyber-cyan rounded-full blur-md animate-pulse" />
                <div className="relative w-2 h-2 bg-gradient-to-r from-electric-blue to-cyber-cyan rounded-full" />
              </div>
              <span className="text-sm font-mono font-medium text-white/80 tracking-wider">
                AI_NATIVE_WORKFORCE_PLATFORM.EXE
              </span>
            </div>

            {/* Main Headline with Typing Animation */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight">
              <span className="text-white">Build on</span>
              <br />
              <span className="gradient-text glow-text-strong">
                {typedText}
                {!isTypingComplete && <span className="typing-cursor">|</span>}
              </span>
              <br />
              <span className="text-white">Forge your future.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
              {COPY.hero.subheadline}
            </p>

            {/* CTA Buttons */}
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

              <Link
                href="/sign-up?role=company"
                className="group relative w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-bold text-lg rounded-xl border border-electric-blue/30 hover:border-electric-blue hover:bg-white/10 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-cyber-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {COPY.cta.company.primary}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Stats with staggered animation */}
            <div
              ref={statsRef}
              className="pt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
                willChange: 'transform',
              }}
            >
              {[
                { value: PRICING.student.display, label: 'Per Project (Students)', delay: '0s' },
                { value: VALUE_PROPS.deliveryTime, label: 'Average Delivery', delay: '0.1s' },
                { value: COPY.stats.rating, label: COPY.stats.ratingLabel, delay: '0.2s' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="fade-in-on-scroll relative group"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-cyber-cyan/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative text-center p-6 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl group-hover:border-electric-blue/50 transition-colors">
                    <div
                      className="text-4xl md:text-5xl font-bold mb-2 gradient-text"
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-white/60 font-mono">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500"
          style={{ opacity: showScrollIndicator ? 1 : 0, pointerEvents: showScrollIndicator ? 'auto' : 'none' }}
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-white/40 font-mono">SCROLL</span>
            <ChevronDown className="w-6 h-6 text-electric-blue" />
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void-black to-transparent pointer-events-none" />
      </section>

      {/* Positioning Section - "Like Fiverr, but with AI superpowers" */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="text-white">Like Fiverr, but with </span>
              <span className="gradient-text">AI superpowers</span>
            </h2>
            <p className="text-xl text-white/60">
              {BRAND.positioning} - where talent meets technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Fast',
                description: VALUE_PROPS.deliveryTime + ' average delivery. No lengthy hiring process.',
                color: 'electric-blue',
              },
              {
                icon: TrendingDown,
                title: 'Affordable',
                description: `${VALUE_PROPS.percentCheaper} cheaper than freelancers. ${PRICING.student.display} per project, not $150/hour.`,
                color: 'cyber-cyan',
              },
              {
                icon: Sparkles,
                title: 'AI-Powered',
                description: 'Students work with built-in AI copilots. Consistent, professional-grade output.',
                color: 'electric-blue',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="fade-in-on-scroll glass p-8 rounded-lg hover:border-electric-blue/50 transition-all cursor-pointer group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all bg-electric-blue/10"
                >
                  <feature.icon className="w-6 h-6 text-electric-blue" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 relative bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text glow-text">
              How Nida works
            </h2>
            <p className="text-xl text-white/60">
              Post projects. Match with AI-powered talent. Get results in hours.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: '1. Join & Post',
                description: 'Students sign up and get verified. Companies post projects with budget and timeline.',
                color: 'electric-blue',
              },
              {
                icon: Zap,
                title: '2. AI Matches',
                description: 'Our AI instantly matches projects with skilled students who have the right experience.',
                color: 'cyber-cyan',
              },
              {
                icon: Sparkles,
                title: '3. Build with AI',
                description: 'Students use built-in AI copilots to research, write, analyze, and create professionally.',
                color: 'molten-orange',
              },
              {
                icon: TrendingUp,
                title: '4. Get Paid',
                description: 'Companies approve work. Students get paid within 48 hours. Everyone builds their future.',
                color: 'success-green',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="fade-in-on-scroll glass p-8 rounded-lg hover:border-electric-blue/50 transition-all cursor-pointer group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all bg-electric-blue/10"
                >
                  <feature.icon className="w-6 h-6 text-electric-blue" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Students Section */}
      <section id="for-students" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-on-scroll">
              <div className="inline-block px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-sm text-electric-blue mb-4">
                For Students
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Build your career, <span className="gradient-text">one project at a time</span>
              </h2>
              <p className="text-xl text-white/60 mb-8">
                Get paid ${PRICING.student.display.replace('$', '')} per project doing real work for real companies. No unpaid internships. No coffee runs. Just real experience and real money.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  { icon: DollarSign, text: `Get paid ${PRICING.student.display} per project. Weekly payouts. Build your income while in school.` },
                  { icon: Sparkles, text: 'Built-in AI copilots help you research, write, analyze, and create like a pro.' },
                  { icon: Briefcase, text: 'Every project becomes a portfolio piece. Show companies what you can do.' },
                  { icon: Clock, text: 'Nights, weekends, between classes. Work from anywhere, on your terms.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-electric-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-electric-blue" />
                    </div>
                    <span className="text-white/70">{item.text}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/sign-up?role=student"
                className="gradient-btn px-8 py-4 rounded-lg font-semibold text-white inline-flex items-center gap-2"
              >
                {COPY.cta.student.primary}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="fade-in-on-scroll glass p-8 rounded-lg">
              <div className="space-y-6">
                {[
                  { icon: Shield, title: 'Escrow Protection', description: 'Payment held until work is approved' },
                  { icon: Star, title: 'Build Your Brand', description: 'Every project adds to your portfolio and reputation' },
                  { icon: Zap, title: 'AI-Enhanced', description: 'Built-in tools make you competitive with pros' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-void-black/50 rounded-lg">
                    <item.icon className="w-6 h-6 text-electric-blue flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1 text-white">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies Section */}
      <section id="for-companies" className="py-20 px-4 bg-white/5 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 fade-in-on-scroll glass p-8 rounded-lg">
              <div className="space-y-4">
                {[
                  { label: 'Content Creation', amount: `${PRICING.company.display}` },
                  { label: 'Market Research', amount: `${PRICING.company.display}` },
                  { label: 'Data Analysis', amount: `${PRICING.company.display}` },
                  { label: 'Design Work', amount: `${PRICING.company.display}` },
                ].map((project, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-void-black/50 rounded-lg">
                    <span className="text-sm text-white/60">{project.label}</span>
                    <span className="text-electric-blue font-semibold">{project.amount}</span>
                  </div>
                ))}

                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Fixed Project Pricing</span>
                    <span className="text-2xl font-heading font-bold text-electric-blue">{VALUE_PROPS.percentCheaper} less</span>
                  </div>
                  <p className="text-xs text-white/40 mt-1">vs traditional freelancers • AI-enhanced quality</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 fade-in-on-scroll">
              <div className="inline-block px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-sm text-electric-blue mb-4">
                For Companies
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Build your team <span className="gradient-text">in days, not months</span>
              </h2>
              <p className="text-xl text-white/60 mb-8">
                Hire AI-powered college talent for content, research, and analysis. {VALUE_PROPS.percentCheaper} cheaper than freelancers. Professional-grade output.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Fast delivery: " + VALUE_PROPS.deliveryTime + " average",
                  "Fixed pricing - " + PRICING.company.display + " per project",
                  "AI-enhanced quality every time",
                  "Scale your team on demand",
                  "Vetted students from top universities"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-electric-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-electric-blue"></div>
                    </div>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/sign-up?role=company"
                className="gradient-btn px-8 py-4 rounded-lg font-semibold text-white inline-flex items-center gap-2"
              >
                {COPY.cta.company.primary}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="fade-in-on-scroll glass p-12 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-cyber-cyan/10 to-electric-blue/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text glow-text">
                Ready to build on Nida?
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                {COPY.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/sign-up?role=student"
                  className="gradient-btn px-10 py-5 rounded-lg text-lg font-semibold text-white inline-flex items-center gap-2 glow-electric"
                >
                  {COPY.cta.student.primary}
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <Link
                  href="/sign-up?role=company"
                  className="px-10 py-5 rounded-lg text-lg font-semibold text-white bg-white/5 backdrop-blur-sm border border-electric-blue/30 hover:border-electric-blue hover:bg-white/10 transition-all inline-flex items-center gap-2"
                >
                  {COPY.cta.company.primary}
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-electric-blue/20 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-blue to-cyber-cyan rounded-lg blur-md opacity-75" />
                  <div className="relative w-8 h-8 bg-gradient-to-br from-electric-blue to-cyber-cyan rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
                <span className="text-xl font-heading font-bold gradient-text">{BRAND.name}</span>
              </div>
              <p className="text-sm text-white/60">
                {COPY.footer.tagline}
              </p>
            </div>

            {[
              {
                title: 'For Students',
                links: ['How it Works', 'Browse Projects', 'Success Stories', 'FAQ']
              },
              {
                title: 'For Companies',
                links: ['How it Works', 'Pricing', 'Case Studies', 'FAQ']
              },
              {
                title: 'Company',
                links: ['About Us', 'Contact', 'Careers', 'Terms', 'Privacy']
              }
            ].map((section, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-3 text-white">{section.title}</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link href="#" className="hover:text-electric-blue transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/5 text-center text-sm text-white/40">
            <p>{COPY.footer.copyright}</p>
            <p className="mt-2">{COPY.footer.builtWith}</p>
          </div>
        </div>
      </footer>

      {/* Add custom styles */}
      <style jsx global>{`
        /* Fade-in on scroll */
        .fade-in-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Typing cursor */
        .typing-cursor {
          display: inline-block;
          width: 3px;
          height: 1em;
          background: linear-gradient(90deg, #0066FF, #00D9FF);
          margin-left: 4px;
          animation: blink 1s step-end infinite;
          vertical-align: middle;
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
