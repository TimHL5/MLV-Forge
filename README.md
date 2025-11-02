# MLV Forge

**Where AI Meets Ambition**

MLV Forge is an AI-native workforce platform connecting college students with companies seeking high-quality, cost-effective work. Students join virtual "startup teams" to execute real business projects using cutting-edge AI tools built directly into the platform.

## 🚀 Vision

- **For Companies**: Get marketing, research, and analysis work done at 80% lower cost with AI-augmented Gen Z talent
- **For Students**: Earn $20-30/hour while building your portfolio through real client work guided by AI mentors
- **For MLV**: Generate $50K+ MRR within 6 months through transaction fees (25%) and SaaS subscriptions

## 📋 Project Status

### ✅ Completed (Phase 1: Foundation)

- [x] Next.js 16 project setup with TypeScript
- [x] Tailwind CSS v4 with custom design system
- [x] Comprehensive Prisma database schema (20+ models)
- [x] Core utility libraries (AI, Stripe, database)
- [x] Landing page with MLV Forge branding
- [x] Environment configuration
- [x] Git repository initialization

### 🔄 In Progress

- [ ] Clerk authentication integration
- [ ] Company dashboard and profile setup
- [ ] Student dashboard and profile setup

### 📅 Upcoming (Phase 2-6)

**Phase 2: Project Posting & Browsing** (Weeks 4-5)
- Company project posting form with AI assistance
- Student project browsing interface
- File upload system (S3/R2)
- Project filtering and search

**Phase 3: Applications & Matching** (Week 6)
- Student application flow
- AI matching algorithm
- Team formation system
- Email notifications

**Phase 4: Project Workspace** (Weeks 7-8)
- Real-time chat with Pusher
- File sharing system
- Task management
- AI assistant integration
- Deliverable submission

**Phase 5: Payments & Reviews** (Weeks 9-10)
- Stripe Connect escrow system
- Student payout system
- Rating and review system
- Earnings dashboard

**Phase 6: Polish & Launch** (Weeks 11-12)
- Comprehensive testing
- Performance optimization
- Analytics and monitoring
- Beta user onboarding

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router, React 19)
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter, Space Grotesk, JetBrains Mono
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod

### Backend
- **Runtime**: Node.js 20+
- **Database**: PostgreSQL (with pgvector extension)
- **ORM**: Prisma
- **Authentication**: Clerk
- **AI**: Anthropic Claude 3.5 Sonnet
- **Payments**: Stripe + Stripe Connect
- **Real-time**: Pusher
- **Storage**: AWS S3 / Cloudflare R2

### Infrastructure
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry
- **Analytics**: Vercel Analytics

## 🎨 Design System

### Colors
```css
Primary: #0066FF (Electric Blue)
Secondary: #6B46FF (Deep Purple)
Accent: #00F0FF (Cyber Cyan)
Success: #00FF88 (Neon Green)
Warning: #FF6B35 (Warning Orange)
Error: #FF3366 (Error Red)
```

### Typography
- **Headings**: Space Grotesk (Bold/Medium)
- **Body**: Inter (Regular/Medium/SemiBold)
- **Code**: JetBrains Mono

### Design Principles
- Dark-mode first
- Glassmorphism effects
- Subtle gradients
- Neumorphic elements
- Smooth micro-interactions

## 🗄️ Database Schema

The platform uses 20+ interconnected models:

### Core Models
- **Users**: Both companies and students
- **CompanyProfile**: Company information and subscription
- **StudentProfile**: Student details, skills, and earnings
- **Projects**: Posted projects with AI embeddings
- **Applications**: Student applications to projects
- **Teams**: Project teams (solo or multi-person)

### Workflow Models
- **WorkspaceMessages**: Real-time chat
- **WorkspaceFiles**: Shared files during projects
- **Tasks**: Project task management
- **Deliverables**: Final submissions
- **Reviews**: Post-project ratings

### Transaction Models
- **Payments**: Escrow and payment tracking
- **Transactions**: Student earning history

### AI Models
- **AIConversation**: Persistent AI chat history

## 🚦 Getting Started

### Prerequisites
- Node.js 20+
- PostgreSQL with pgvector extension
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/TimHL5/MLV-Forge.git
cd MLV-Forge

# Install dependencies
npm install

# Set up environment variables
cp .env.local .env.local.example
# Edit .env.local with your API keys

# Set up database
npx prisma generate
npx prisma db push

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

### Environment Variables

The `.env.local` file should include:

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Database
DATABASE_URL=postgresql://...

# Anthropic AI
ANTHROPIC_API_KEY=

# Stripe
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# File Storage
S3_ACCESS_KEY=
S3_SECRET_KEY=
S3_BUCKET_NAME=
S3_REGION=

# Pusher
PUSHER_APP_ID=
NEXT_PUBLIC_PUSHER_KEY=
PUSHER_SECRET=
NEXT_PUBLIC_PUSHER_CLUSTER=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📊 Success Metrics (MVP)

### Phase 1 Goals (First 30 Days)
- 5 active companies
- 25 active students
- 10 projects posted
- 5 projects completed
- $3,000 platform GMV
- $2,500 MRR

### Phase 2 Goals (Days 31-90)
- 20 active companies
- 100 active students
- 50 projects posted
- 30 projects completed
- $21,000 platform GMV
- $10,000 MRR
- NPS: 50+ (students), 60+ (companies)

## 🤝 Contributing

This is currently a private project in active development. Contribution guidelines will be added once the MVP is complete.

## 📝 License

Proprietary - All rights reserved.

---

**Built with ❤️ using AI-powered development**
