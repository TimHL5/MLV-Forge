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
        baseTheme: undefined, // Don't use Clerk's base themes
        variables: {
          // Primary brand colors
          colorPrimary: '#6AC670', // MLV Green
          colorSuccess: '#6AC670', // MLV Green
          colorWarning: '#F2CF07', // MLV Yellow
          colorDanger: '#dc2626', // Red for errors

          // Background colors
          colorBackground: '#FCFCFC', // Off-white
          colorInputBackground: '#FFFFFF', // Pure white for inputs

          // Text colors
          colorText: '#060606', // Pure black
          colorTextSecondary: '#484848', // Dark gray

          // Border colors
          colorInputText: '#060606', // Black text in inputs
          colorNeutral: '#F3F3F1', // Light gray for borders

          // Spacing
          borderRadius: '0.5rem', // 8px

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
          // Root card container
          rootBox: {
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          },

          // Main card
          card: {
            backgroundColor: '#FFFFFF',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
            border: '1px solid #F3F3F1',
          },

          // Header with gradient
          headerTitle: {
            background: 'linear-gradient(135deg, #6AC670 0%, #F2CF07 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '2rem',
            fontWeight: 700,
          },

          headerSubtitle: {
            color: '#484848',
            fontSize: '1rem',
          },

          // Social buttons (Google, LinkedIn)
          socialButtonsBlockButton: {
            backgroundColor: '#FFFFFF',
            border: '2px solid #F3F3F1',
            color: '#060606',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: '#F3F3F1',
              borderColor: '#6AC670',
            },
          },

          socialButtonsBlockButtonText: {
            color: '#060606',
            fontWeight: 500,
          },

          // Divider
          dividerLine: {
            backgroundColor: '#F3F3F1',
          },

          dividerText: {
            color: '#484848',
            fontSize: '0.875rem',
          },

          // Form fields
          formFieldLabel: {
            color: '#060606',
            fontWeight: 500,
            marginBottom: '0.5rem',
          },

          formFieldInput: {
            backgroundColor: '#FFFFFF',
            border: '2px solid #F3F3F1',
            color: '#060606',
            fontSize: '1rem',
            '&:focus': {
              borderColor: '#6AC670',
              boxShadow: '0 0 0 3px rgba(106, 198, 112, 0.1)',
            },
            '&::placeholder': {
              color: '#484848',
            },
          },

          // Primary button (Continue, Sign in, Sign up)
          formButtonPrimary: {
            background: 'linear-gradient(135deg, #6AC670 0%, #F2CF07 100%)',
            color: '#060606',
            fontWeight: 600,
            fontSize: '1rem',
            border: 'none',
            boxShadow: '0 4px 12px rgba(106, 198, 112, 0.3)',
            '&:hover': {
              background: 'linear-gradient(135deg, #5AB560 0%, #E2BF07 100%)',
              boxShadow: '0 6px 16px rgba(106, 198, 112, 0.4)',
            },
            '&:active': {
              transform: 'translateY(1px)',
            },
          },

          // Footer link (Don't have an account? Sign up)
          footerActionText: {
            color: '#484848',
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

          // Alert/notification banners
          alert: {
            backgroundColor: '#FFFDF5', // Cream
            border: '1px solid #F2CF07',
            color: '#060606',
          },

          // User button (after sign-in)
          userButtonPopoverCard: {
            backgroundColor: '#FFFFFF',
            border: '1px solid #F3F3F1',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          },

          userButtonPopoverActionButton: {
            color: '#060606',
            '&:hover': {
              backgroundColor: '#F3F3F1',
            },
          },

          // Identity preview (user info display)
          identityPreviewText: {
            color: '#060606',
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
      <html lang="en" className="dark">
        <body
          className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
