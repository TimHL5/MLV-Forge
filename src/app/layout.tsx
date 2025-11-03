import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MLV Forge - Where AI Meets Ambition",
  description: "AI-powered student workforce platform connecting college students with companies for real projects. Gen Z talent, AI powered, real results.",
  keywords: ["student workforce", "AI platform", "college students", "freelance", "gig economy", "Gen Z talent"],
  authors: [{ name: "MLV Forge" }],
  openGraph: {
    title: "MLV Forge - Where AI Meets Ambition",
    description: "Turn your AI skills into real work. Get paid. Build your portfolio.",
    type: "website",
  },
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
          // MLV Brand Colors
          colorPrimary: '#6AC670',
          colorSuccess: '#6AC670',
          colorWarning: '#F2CF07',
          colorDanger: '#dc2626',

          // Dark Backgrounds
          colorBackground: '#0a0a0a',
          colorInputBackground: '#1a1a1a',

          // Text Colors
          colorText: '#FFFFFF',
          colorTextSecondary: '#B0B0B0',

          // Borders
          colorInputText: '#FFFFFF',
          colorNeutral: 'rgba(255, 255, 255, 0.1)',

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
          // Root container
          rootBox: {
            boxShadow: '0 0 40px rgba(106, 198, 112, 0.2)',
          },

          // Main card with glassmorphism
          card: {
            backgroundColor: 'rgba(26, 26, 26, 0.7)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          },

          // Header with gradient
          headerTitle: {
            background: 'linear-gradient(135deg, #6AC670 0%, #F2CF07 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '2rem',
            fontWeight: 700,
            filter: 'drop-shadow(0 0 20px rgba(106, 198, 112, 0.3))',
          },

          headerSubtitle: {
            color: '#B0B0B0',
            fontSize: '1rem',
          },

          // Social buttons
          socialButtonsBlockButton: {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#FFFFFF',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: '#6AC670',
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

          // Form fields
          formFieldLabel: {
            color: '#FFFFFF',
            fontWeight: 500,
            marginBottom: '0.5rem',
          },

          formFieldInput: {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#FFFFFF',
            fontSize: '1rem',
            '&:focus': {
              borderColor: '#6AC670',
              boxShadow: '0 0 0 3px rgba(106, 198, 112, 0.2)',
            },
            '&::placeholder': {
              color: '#808080',
            },
          },

          // Primary button with gradient and glow
          formButtonPrimary: {
            background: 'linear-gradient(135deg, #6AC670 0%, #F2CF07 100%)',
            color: '#0a0a0a',
            fontWeight: 600,
            fontSize: '1rem',
            border: 'none',
            boxShadow: '0 0 20px rgba(106, 198, 112, 0.4), 0 0 40px rgba(242, 207, 7, 0.3)',
            '&:hover': {
              background: 'linear-gradient(135deg, #5AB560 0%, #E2BF07 100%)',
              boxShadow: '0 0 30px rgba(106, 198, 112, 0.6), 0 0 60px rgba(242, 207, 7, 0.4)',
            },
          },

          // Footer links
          footerActionText: {
            color: '#B0B0B0',
          },

          footerActionLink: {
            color: '#6AC670',
            fontWeight: 600,
            '&:hover': {
              color: '#5AB560',
              textDecoration: 'underline',
            },
          },

          // Error messages
          formFieldErrorText: {
            color: '#dc2626',
            fontSize: '0.875rem',
          },

          // Alert banners
          alert: {
            backgroundColor: 'rgba(242, 207, 7, 0.1)',
            border: '1px solid rgba(242, 207, 7, 0.3)',
            color: '#FFFFFF',
          },

          // User button popover
          userButtonPopoverCard: {
            backgroundColor: 'rgba(26, 26, 26, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          },

          userButtonPopoverActionButton: {
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          },

          // Identity preview
          identityPreviewText: {
            color: '#FFFFFF',
          },

          identityPreviewEditButton: {
            color: '#6AC670',
            '&:hover': {
              color: '#5AB560',
            },
          },
        },
      }}
    >
      <html lang="en">
        <body
          className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
