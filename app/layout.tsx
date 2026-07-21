import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ParticleBackground } from "@/components/effects/particle-background";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { VoiceOverProvider } from "@/components/providers/voice-over-provider";
import { VoiceOverControl } from "@/components/effects/voice-over-control";
import { profile } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://sivaprakash-ai-ops.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — AI Operations Leader & Automation Specialist`,
    template: `%s — ${profile.name}`,
  },
  description: profile.subheading,
  keywords: [
    "AI Operations Manager",
    "Operations Manager",
    "AI Transformation Lead",
    "AI Transformation",
    "Workflow Automation",
    "Business Process Automation",
    "Business Process Automation Manager",
    "Generative AI",
    "Artificial Intelligence",
    "Operational Excellence",
    "Process Excellence Manager",
    "Automation Leader",
    "Digital Transformation",
    "Digital Transformation Consultant",
    "Prompt Engineering",
    "Claude AI",
    "ChatGPT Automation",
    "Sivaprakash Settu",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — AI Operations Leader`,
    description: profile.subheading,
    url: siteUrl,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI Operations Leader`,
    description: profile.subheading,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Team Lead, Operations",
  url: siteUrl,
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressCountry: "IN",
  },
  sameAs: [profile.linkedin],
  worksFor: {
    "@type": "Organization",
    name: "Opendoor",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="relative min-h-screen bg-background font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <VoiceOverProvider>
          <ScrollProgress />
          <ParticleBackground />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <VoiceOverControl />
        </VoiceOverProvider>
      </body>
    </html>
  );
}
