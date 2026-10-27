import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jeyasakthi P - Full Stack Developer",
    template: "%s | Jeyasakthi P",
  },
  description: "Jeyasakthi P is a B.Tech Information Technology student, aspiring full stack developer, UI/UX designer, and frontend developer creating thoughtful digital experiences.",
  keywords: ["Jeyasakthi P", "Jeyasakthi", "full stack developer", "UI/UX designer", "frontend developer", "web developer", "HTML", "CSS", "JavaScript", "React", "Chennai"],
  authors: [{ name: "Jeyasakthi P" }],
  creator: "Jeyasakthi P",
  icons: {
    icon: "/icon (2).png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-olive-omega-68.vercel.app",
    title: "Jeyasakthi P - Full Stack Developer",
    description: "A B.Tech Information Technology student and aspiring full stack developer, UI/UX designer, and frontend developer creating thoughtful digital experiences.",
    siteName: "Jeyasakthi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "jeyasakthi - Full Stack Developer ",
    description: "A B.Tech Information Technology student and aspiring full stack developer, UI/UX designer, and frontend developer creating thoughtful digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
