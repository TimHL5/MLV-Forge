// NIDA Brand Constants
// Complete brand identity, colors, copy, and configuration
// DO NOT modify backend-related constants (see BACKEND section)

// ============================================================================
// BRAND IDENTITY
// ============================================================================

export const BRAND = {
  name: 'Nida',
  legalName: 'Nidavellir Inc.',
  dba: 'Nida',
  domain: 'buildnida.com',
  tagline: 'Build on Nida. Forge your future.',
  description: 'The AI-native workforce platform where students build careers and companies build teams.',
  positioning: 'Fiverr with native AI integration',

  social: {
    twitter: 'https://twitter.com/buildnida',
    linkedin: 'https://linkedin.com/company/buildnida',
    instagram: 'https://instagram.com/buildnida',
  },

  email: {
    support: 'support@buildnida.com',
    hello: 'hello@buildnida.com',
    press: 'press@buildnida.com',
  },
} as const;

// ============================================================================
// DARK THEME COLORS (Nida Color Palette)
// ============================================================================

export const COLORS = {
  // Background Colors (Dark Foundation)
  voidBlack: '#0A0E14',      // Primary background - deep space
  deepNavy: '#0F1419',       // Secondary background - cards, panels
  forgeDark: '#1A1F2E',      // Tertiary background - hover states

  // Accent Colors (Neon Against Dark)
  electricBlue: '#0066FF',   // Primary accent - CTAs, links, highlights
  cyberCyan: '#00D9FF',      // Interactive blue - hover states, AI indicators
  moltenOrange: '#FF6B35',   // Secondary accent - hot actions, emphasis

  // Text Colors
  white: '#FFFFFF',          // Primary text
  steelGray: '#8B92A6',      // Secondary text, captions
  slateBlue: '#64748B',      // Tertiary text, disabled

  // Semantic Colors
  successGreen: '#00FF88',   // Success states with neon glow
  warningAmber: '#FFB800',   // Warnings, pending states
  errorRed: '#FF3366',       // Errors with neon glow

  // Mythological Accent Colors (Use Sparingly)
  norseGold: '#FFD700',      // Premium features, legendary badges
  auroraPurple: '#9D4EDD',   // Special states, premium content

  // Border Colors
  borderPrimary: '#1F2937',          // Subtle borders
  borderGlow: 'rgba(0, 102, 255, 0.3)', // Emphasized borders with glow
} as const;

// ============================================================================
// GLOW EFFECTS
// ============================================================================

export const GLOWS = {
  primary: '0 0 20px rgba(0, 102, 255, 0.5), 0 4px 12px rgba(0, 0, 0, 0.6)',
  primaryHover: '0 0 30px rgba(0, 102, 255, 0.7), 0 6px 16px rgba(0, 0, 0, 0.8)',
  secondary: '0 0 20px rgba(255, 107, 53, 0.4)',
  success: '0 0 15px rgba(0, 255, 136, 0.4)',
  error: '0 0 15px rgba(255, 51, 102, 0.4)',
  text: '0 0 30px rgba(0, 102, 255, 0.3)',
  textStrong: '0 0 40px rgba(0, 102, 255, 0.5)',
  icon: 'drop-shadow(0 0 8px rgba(0, 102, 255, 0.6))',
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

export const SHADOWS = {
  low: '0 1px 3px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
  medium: '0 4px 12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 102, 255, 0.2), 0 0 20px rgba(0, 102, 255, 0.1)',
  high: '0 12px 24px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 102, 255, 0.3), 0 0 40px rgba(0, 102, 255, 0.2)',
  card: '0 2px 8px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
  cardHover: '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 102, 255, 0.1)',
  modal: '0 20px 48px rgba(0, 0, 0, 0.8), 0 0 60px rgba(0, 102, 255, 0.2)',
} as const;

// ============================================================================
// GRADIENTS
// ============================================================================

export const GRADIENTS = {
  hero: 'linear-gradient(135deg, #0A0E14 0%, #0F1419 50%, #1A1F2E 100%)',
  electric: 'linear-gradient(90deg, #0066FF 0%, #00D9FF 100%)',
  forge: 'linear-gradient(90deg, #FF6B35 0%, #FFB800 100%)',
  cosmic: 'radial-gradient(ellipse at top, #1A1F2E 0%, #0A0E14 100%)',
  nebula: 'linear-gradient(135deg, #0A0E14 0%, #1A1F2E 40%, #0066FF 100%)',
} as const;

// ============================================================================
// COPY & MESSAGING
// ============================================================================

export const COPY = {
  hero: {
    headline: 'Build on Nida.\nForge your future.',
    subheadline: 'The AI-native workforce platform where students build careers and companies build teams. Fiverr with AI built-in.',
  },

  cta: {
    student: {
      primary: 'Start Building',
      secondary: 'Join the Forge',
    },
    company: {
      primary: 'Hire Talent',
      secondary: 'Build Your Team',
    },
    generic: 'Get Started',
  },

  stats: {
    students: '10,000+',
    studentsLabel: 'Students on platform',
    projects: '500+',
    projectsLabel: 'Projects completed',
    volume: '$250K+',
    volumeLabel: 'Paid to students',
    rating: '4.9/5',
    ratingLabel: 'Average rating',
  },

  footer: {
    tagline: 'Build on Nida. Forge your future.',
    builtWith: 'Built with ⚡ in Boston',
    copyright: `© ${new Date().getFullYear()} Nidavellir Inc. All rights reserved.`,
  },
} as const;

// ============================================================================
// PRICING
// ============================================================================

export const PRICING = {
  student: {
    min: 300,
    max: 800,
    avg: 500,
    display: '$300-800',
  },
  company: {
    min: 400,
    max: 1000,
    avg: 650,
    display: '$400-1,000',
  },
  platformFee: 0.25,
  platformFeeDisplay: '25%',
} as const;

// ============================================================================
// FEATURES
// ============================================================================

export const FEATURES = {
  students: [
    {
      icon: 'DollarSign',
      title: 'Get paid',
      description: 'Earn $300-800 per project. Weekly payouts. Build your income while in school.',
    },
    {
      icon: 'Sparkles',
      title: 'Work with AI',
      description: 'Built-in AI copilots help you research, write, analyze, and create like a pro.',
    },
    {
      icon: 'Briefcase',
      title: 'Build portfolio',
      description: 'Every project becomes a portfolio piece. Show companies what you can do.',
    },
    {
      icon: 'Clock',
      title: 'Work your schedule',
      description: 'Nights, weekends, between classes. Work from anywhere, on your terms.',
    },
  ],

  companies: [
    {
      icon: 'Zap',
      title: 'Fast',
      description: 'From project post to delivery in 72 hours. No lengthy hiring process.',
    },
    {
      icon: 'TrendingDown',
      title: 'Affordable',
      description: '60% cheaper than freelancers. $300-800 per project, not $150/hour.',
    },
    {
      icon: 'Sparkles',
      title: 'AI-Powered',
      description: 'Students work with built-in AI copilots. Consistent, professional-grade output.',
    },
  ],
} as const;

// ============================================================================
// VALUE PROPS
// ============================================================================

export const VALUE_PROPS = {
  vsUpwork: 'No AI tools, inconsistent quality → We have built-in AI copilots',
  vsFiverr: 'Transactional, no AI → We forge talent with AI integration',
  vsToptal: 'Expensive, slow, no students → We\'re 60% cheaper with vetted students',

  percentCheaper: '60%',
  deliveryTime: '72 hours',
  avgMatchTime: '10 minutes',
} as const;

// ============================================================================
// BACKEND CONSTANTS (DO NOT MODIFY - PRESERVED FROM MLV FORGE)
// ============================================================================

// These constants are tied to backend systems and should NOT be changed
// during the rebrand. They preserve all existing functionality.

export const BACKEND = {
  // Database role types (Prisma schema)
  roles: {
    POSTER: 'POSTER',
    DOER: 'DOER',
    ADMIN: 'ADMIN',
  } as const,

  // Task status types (Prisma schema)
  taskStatus: {
    DRAFT: 'DRAFT',
    OPEN: 'OPEN',
    IN_PROGRESS: 'IN_PROGRESS',
    UNDER_REVIEW: 'UNDER_REVIEW',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED',
  } as const,

  // Payment status (Stripe integration)
  paymentStatus: {
    PENDING: 'PENDING',
    PROCESSING: 'PROCESSING',
    COMPLETED: 'COMPLETED',
    FAILED: 'FAILED',
    REFUNDED: 'REFUNDED',
  } as const,

  // File upload limits (R2 integration)
  upload: {
    maxFileSize: 50 * 1024 * 1024, // 50MB
    maxFiles: 10,
    allowedTypes: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'video/mp4',
      'video/quicktime',
    ],
  } as const,

  // API rate limits
  rateLimits: {
    default: 100,  // requests per minute
    auth: 10,      // authentication attempts per minute
    upload: 20,    // file uploads per minute
  } as const,
} as const;

// ============================================================================
// ROUTES
// ============================================================================

export const ROUTES = {
  // Public routes
  home: '/',
  howItWorks: '/how-it-works',
  forStudents: '/for-students',
  forCompanies: '/for-companies',
  pricing: '/pricing',
  about: '/about',
  contact: '/contact',

  // Auth routes (Clerk managed)
  signIn: '/sign-in',
  signUp: '/sign-up',

  // Protected routes
  dashboard: '/dashboard',
  onboarding: '/onboarding',
  admin: '/admin',

  // Student routes
  studentDashboard: '/dashboard/student',
  studentProjects: '/dashboard/student/projects',
  studentEarnings: '/dashboard/student/earnings',
  studentProfile: '/dashboard/student/profile',

  // Company routes
  companyDashboard: '/dashboard/company',
  companyProjects: '/dashboard/company/projects',
  companyPostTask: '/dashboard/company/post-task',
  companyTeam: '/dashboard/company/team',
} as const;

// ============================================================================
// TYPE EXPORTS
// ============================================================================

// Export types for TypeScript usage
export type BrandName = typeof BRAND.name;
export type ColorName = keyof typeof COLORS;
export type GradientName = keyof typeof GRADIENTS;
export type Role = typeof BACKEND.roles[keyof typeof BACKEND.roles];
export type TaskStatus = typeof BACKEND.taskStatus[keyof typeof BACKEND.taskStatus];
export type PaymentStatus = typeof BACKEND.paymentStatus[keyof typeof BACKEND.paymentStatus];
