'use client'

import Link from "next/link";
import { ArrowRight, Sparkles, Users, Zap, TrendingUp, Shield, Star, ChevronDown } from "lucide-react";
import { AnimatedGrid } from "@/components/AnimatedGrid";
import { GradientOrbs } from "@/components/GradientOrbs";
import { FloatingParticles } from "@/components/FloatingParticles";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isNavFloating, setIsNavFloating] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const fullText = 'AI Skills';

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

  // Typewriter effect for "AI Skills"
  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 120; // ms per character
    const startDelay = 1000; // Wait 1 second before typing

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

    // Observe all elements with fade-in-on-scroll class
    document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-hidden">
      {/* Animated Backgrounds */}
      <AnimatedGrid />
      <GradientOrbs />
      <FloatingParticles />

      {/* Navigation - glassmorphic with floating island effect */}
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
          background: isNavFloating ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: isNavFloating ? '1px solid rgba(255, 255, 255, 0.25)' : 'none',
          borderBottom: isNavFloating ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: isNavFloating ? '0 8px 32px rgba(0, 0, 0, 0.4)' : 'none',
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#6AC670] to-[#F2CF07] rounded-lg blur-md opacity-75 animate-pulse" />
              <div className="relative w-8 h-8 bg-gradient-to-br from-[#6AC670] to-[#F2CF07] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#0a0a0a]" />
              </div>
            </div>
            <span className="text-xl font-heading font-bold gradient-text">MLV Forge</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#how-it-works"
              className="text-sm text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(106,198,112,0.5)] transition-all"
            >
              How It Works
            </Link>
            <Link
              href="#for-posters"
              className="text-sm text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(106,198,112,0.5)] transition-all"
            >
              For Task Posters
            </Link>
            <Link
              href="#for-doers"
              className="text-sm text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(106,198,112,0.5)] transition-all"
            >
              For Task Doers
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
              className="relative px-6 py-2 bg-gradient-to-r from-[#6AC670] to-[#F2CF07] text-[#0a0a0a] font-semibold rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#6AC670] to-[#F2CF07] blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Get Started</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 px-4 overflow-hidden">
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
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6AC670] to-[#F2CF07] rounded-full blur-md animate-pulse" />
                <div className="relative w-2 h-2 bg-gradient-to-r from-[#6AC670] to-[#F2CF07] rounded-full" />
              </div>
              <span className="text-sm font-mono font-medium text-white/80 tracking-wider">
                AI_POWERED_TASK_ENGINE.EXE
              </span>
            </div>

            {/* Main Headline with Typing Animation */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight">
              <span className="text-white">Turn Your</span>
              <br />
              <span className="gradient-text-animated">
                {typedText}
                {!isTypingComplete && <span className="typing-cursor">|</span>}
              </span>
              <br />
              <span className="text-white">Into Real Work</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
              Post any digital task. Get it done by skilled doers using{' '}
              <span className="text-[#6AC670] font-medium">cutting-edge AI tools</span>. Video editing. Research. Design. Code. Analysis. All powered by{' '}
              <span className="text-[#F2CF07] font-medium">AI built into every workflow</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                href="/sign-up?role=doer"
                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#6AC670] to-[#F2CF07] text-[#0a0a0a] font-bold text-lg rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6AC670] to-[#F2CF07] blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Earning
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/sign-up?role=poster"
                className="group relative w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-bold text-lg rounded-xl border border-white/20 hover:border-[#6AC670] hover:bg-white/10 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6AC670]/20 to-[#F2CF07]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Post a Task
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
                { value: '$15-50/task', label: 'Per Task Range', delay: '0s' },
                { value: '10min', label: 'Average Match Time', delay: '0.1s' },
                { value: '24/7', label: 'AI Assistant', delay: '0.2s' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="fade-in-on-scroll relative group"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6AC670]/10 to-[#F2CF07]/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl group-hover:border-[#6AC670]/50 transition-colors">
                    <div
                      className="text-4xl md:text-5xl font-bold mb-2"
                      style={{
                        background: 'linear-gradient(135deg, #6AC670 0%, #F2CF07 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
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
            <ChevronDown className="w-6 h-6 text-[#6AC670]" />
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
              How It Works
            </h2>
            <p className="text-xl text-white/60">
              Post tasks. Match with skilled doers. Get AI-powered results in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: '1. Post Your Task',
                description: 'Describe any digital task - video editing, research, design, code, analysis. Set your budget and deadline.',
                color: '#6AC670',
              },
              {
                icon: Zap,
                title: '2. AI Matches You',
                description: 'Our AI instantly matches your task with skilled doers who have the right tools and experience.',
                color: '#F2CF07',
              },
              {
                icon: TrendingUp,
                title: '3. Get Results Fast',
                description: 'Doers use cutting-edge AI tools to deliver high-quality work. Review and approve in your dashboard.',
                color: '#6AC670',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="fade-in-on-scroll glass p-8 rounded-lg hover:border-[#6AC670]/50 transition-all cursor-pointer group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all"
                  style={{
                    background: `${feature.color}15`,
                  }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{feature.title}</h3>
                <p className="text-white/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Task Posters */}
      <section id="for-posters" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-on-scroll">
              <div className="inline-block px-4 py-2 bg-[#F2CF07]/10 border border-[#F2CF07]/20 rounded-full text-sm text-[#F2CF07] mb-4">
                For Task Posters
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Get Any Digital Task Done at <span className="text-[#F2CF07]">10X the Speed</span>
              </h2>
              <p className="text-xl text-white/60 mb-8">
                Post a task, get matched with AI-powered doers, and receive high-quality work in hours, not days.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "AI matches you with the perfect doer instantly",
                  "Fixed pricing - $15-50 per task, no surprises",
                  "Quality guaranteed or money back",
                  "Track progress in real-time dashboard",
                  "Doers use cutting-edge AI tools (Claude, Midjourney, etc.)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F2CF07]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#F2CF07]"></div>
                    </div>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/sign-up?role=poster"
                className="gradient-btn px-8 py-4 rounded-lg font-semibold text-[#0a0a0a] inline-flex items-center gap-2"
              >
                Post Your First Task
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="fade-in-on-scroll glass p-8 rounded-lg">
              <div className="space-y-6">
                {[
                  { icon: Shield, title: 'Escrow Protection', description: 'Payment held until you approve the work' },
                  { icon: Star, title: 'AI-Vetted Doers', description: 'Every doer is assessed and rated by our AI' },
                  { icon: Zap, title: 'Lightning Fast', description: 'Average match time: 10 minutes' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-[#0a0a0a]/50 rounded-lg">
                    <item.icon className="w-6 h-6 text-[#6AC670] flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Task Doers */}
      <section id="for-doers" className="py-20 px-4 bg-white/5 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 fade-in-on-scroll glass p-8 rounded-lg">
              <div className="space-y-4">
                {[
                  { label: 'Video Editing Task', amount: '+$45' },
                  { label: 'Market Research', amount: '+$30' },
                  { label: 'Logo Design', amount: '+$50' },
                  { label: 'Data Analysis', amount: '+$40' },
                ].map((project, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-[#0a0a0a]/50 rounded-lg">
                    <span className="text-sm text-white/60">{project.label}</span>
                    <span className="text-[#6AC670] font-semibold">{project.amount}</span>
                  </div>
                ))}

                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">This Week</span>
                    <span className="text-2xl font-heading font-bold text-[#6AC670]">$165</span>
                  </div>
                  <p className="text-xs text-white/40 mt-1">4 tasks completed • AI assisted</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 fade-in-on-scroll">
              <div className="inline-block px-4 py-2 bg-[#6AC670]/10 border border-[#6AC670]/20 rounded-full text-sm text-[#6AC670] mb-4">
                For Task Doers
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Build Skills + Earn Money With <span className="text-[#6AC670]">AI As Your Co-Pilot</span>
              </h2>
              <p className="text-xl text-white/60 mb-8">
                Browse tasks, work with our built-in AI assistant, and deliver professional results—even while you're still learning.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "AI workspace guides you through every task",
                  "Learn new skills while getting paid",
                  "No experience required - AI helps you level up",
                  "Build a portfolio of real work",
                  "Flexible schedule - work on your time"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#6AC670]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#6AC670]"></div>
                    </div>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/sign-up?role=doer"
                className="gradient-btn px-8 py-4 rounded-lg font-semibold text-[#0a0a0a] inline-flex items-center gap-2"
              >
                Start Earning Today
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#6AC670]/10 via-[#F2CF07]/10 to-[#6AC670]/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
                Ready to Get Things Done?
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Join the marketplace where tasks meet AI. Post your first task or start earning today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/sign-up?role=poster"
                  className="gradient-btn px-10 py-5 rounded-lg text-lg font-semibold text-[#0a0a0a] inline-flex items-center gap-2 glow-gradient"
                >
                  Post a Task
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <Link
                  href="/sign-up?role=doer"
                  className="px-10 py-5 rounded-lg text-lg font-semibold text-white bg-white/5 backdrop-blur-sm border border-white/20 hover:border-[#6AC670] hover:bg-white/10 transition-all inline-flex items-center gap-2"
                >
                  Start Earning
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6AC670] to-[#F2CF07] rounded-lg blur-md opacity-75" />
                  <div className="relative w-8 h-8 bg-gradient-to-br from-[#6AC670] to-[#F2CF07] rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#0a0a0a]" />
                  </div>
                </div>
                <span className="text-xl font-heading font-bold gradient-text">MLV Forge</span>
              </div>
              <p className="text-sm text-white/60">
                Where AI Meets Ambition
              </p>
            </div>

            {[
              {
                title: 'Product',
                links: ['How It Works', 'Pricing', 'Features']
              },
              {
                title: 'Company',
                links: ['About Us', 'Blog', 'Careers']
              },
              {
                title: 'Legal',
                links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
              }
            ].map((section, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-3">{section.title}</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link href="#" className="hover:text-[#6AC670] transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} MLV Forge. All rights reserved.</p>
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

        /* Gradient text with animation */
        .gradient-text-animated {
          background: linear-gradient(135deg, #6AC670 0%, #F2CF07 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
          position: relative;
          display: inline-block;
          min-height: 1.2em; /* Prevent layout shift during typing */
        }

        /* Gradient animation */
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Typing cursor */
        .typing-cursor {
          display: inline-block;
          width: 3px;
          height: 1em;
          background: linear-gradient(135deg, #6AC670 0%, #F2CF07 100%);
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

        /* Glow effect for gradient text */
        .gradient-text-animated::before {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          z-index: -1;
          background: linear-gradient(135deg, #6AC670 0%, #F2CF07 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: blur(20px);
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}
