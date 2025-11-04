import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { BRAND } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND.name} - ${BRAND.description}`,
  description: `${BRAND.tagline} The AI-native workforce platform where students build careers and companies build teams. ${BRAND.positioning}.`,
  keywords: [
    "AI workforce platform",
    "student jobs",
    "college freelancing",
    "AI copilot",
    "student marketplace",
    "remote work",
    "AI-powered tasks",
    "content creation",
    "research jobs",
    "data analysis",
    "gig economy",
    "student earnings",
  ],
  authors: [{ name: BRAND.legalName }],
  openGraph: {
    title: `${BRAND.name} - ${BRAND.tagline}`,
    description: BRAND.description,
    type: "website",
    url: `https://${BRAND.domain}`,
    siteName: BRAND.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} - ${BRAND.tagline}`,
    description: BRAND.description,
    site: "@buildnida",
    creator: "@buildnida",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(`https://${BRAND.domain}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: undefined,
        variables: {
          // Nida Brand Colors
          colorPrimary: '#0066FF',        // Electric Blue
          colorSuccess: '#00FF88',        // Success Green with neon
          colorWarning: '#FFB800',        // Warning Amber
          colorDanger: '#FF3366',         // Error Red with neon

          // Dark Backgrounds (Nida Theme)
          colorBackground: '#0A0E14',     // Void Black
          colorInputBackground: '#0F1419', // Deep Navy

          // Text Colors
          colorText: '#FFFFFF',
          colorTextSecondary: '#8B92A6',  // Steel Gray

          // Borders
          colorInputText: '#FFFFFF',
          colorNeutral: 'rgba(255, 255, 255, 0.05)',

          // Spacing
          borderRadius: '0.75rem',

          // Font
          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontSize: '1rem',
          fontWeight: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
          },
        },
        elements: {
          // Root container with Nida glow
          rootBox: {
            boxShadow: '0 0 40px rgba(0, 102, 255, 0.2)',
          },

          // Main card with glassmorphism - Nida Theme
          card: {
            backgroundColor: 'rgba(15, 20, 25, 0.7)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          },

          // Header with Nida Electric Blue gradient
          headerTitle: {
            background: 'linear-gradient(90deg, #0066FF 0%, #00D9FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '2rem',
            fontWeight: 700,
            filter: 'drop-shadow(0 0 20px rgba(0, 102, 255, 0.3))',
          },

          headerSubtitle: {
            color: '#B0B0B0',
            fontSize: '1rem',
          },

          // Social buttons - Nida Theme
          socialButtonsBlockButton: {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            color: '#FFFFFF',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: '#0066FF',
            },
          },

          socialButtonsBlockButtonText: {
            color: '#FFFFFF',
            fontWeight: 500,
          },

          // Divider
          dividerLine: {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },

          dividerText: {
            color: '#B0B0B0',
            fontSize: '0.875rem',
          },

          // Form fields - Nida Theme
          formFieldLabel: {
            color: '#FFFFFF',
            fontWeight: 500,
            marginBottom: '0.5rem',
          },

          formFieldInput: {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            color: '#FFFFFF',
            fontSize: '1rem',
            '&:focus': {
              borderColor: '#0066FF',
              boxShadow: '0 0 0 3px rgba(0, 102, 255, 0.2)',
            },
            '&::placeholder': {
              color: '#64748B',
            },
          },

          // Primary button with Nida Electric Blue gradient and glow
          formButtonPrimary: {
            background: 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)',
            color: '#FFFFFF',
            fontWeight: 600,
            fontSize: '1rem',
            border: 'none',
            boxShadow: '0 0 20px rgba(0, 102, 255, 0.5), 0 4px 12px rgba(0, 0, 0, 0.6)',
            '&:hover': {
              background: 'linear-gradient(135deg, #0052CC 0%, #003D99 100%)',
              boxShadow: '0 0 30px rgba(0, 102, 255, 0.7), 0 6px 16px rgba(0, 0, 0, 0.8)',
            },
          },

          // Footer links - Nida Theme
          footerActionText: {
            color: '#8B92A6',
          },

          footerActionLink: {
            color: '#0066FF',
            fontWeight: 600,
            '&:hover': {
              color: '#00D9FF',
              textDecoration: 'underline',
            },
          },

          // Error messages - Nida Theme
          formFieldErrorText: {
            color: '#FF3366',
            fontSize: '0.875rem',
          },

          // Alert banners - Nida Theme
          alert: {
            backgroundColor: 'rgba(255, 184, 0, 0.1)',
            border: '1px solid rgba(255, 184, 0, 0.3)',
            color: '#FFFFFF',
          },

          // User button popover - Nida Theme
          userButtonPopoverCard: {
            backgroundColor: 'rgba(15, 20, 25, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          },

          userButtonPopoverActionButton: {
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          },

          // Identity preview - Nida Theme
          identityPreviewText: {
            color: '#FFFFFF',
          },

          identityPreviewEditButton: {
            color: '#0066FF',
            '&:hover': {
              color: '#00D9FF',
            },
          },
        },
      }}
    >
      <html lang="en">
        <body
          className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
