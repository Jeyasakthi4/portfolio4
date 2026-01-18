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
    default: "Jeyasakthi P - Frontend Developer & Cybersecurity Enthusiast",
    template: "%s | Jeyasakthi P",
  },
  description: "Computer Science undergraduate skilled in frontend development, web technologies, and cybersecurity. Passionate about building responsive user interfaces and collaborative coding.",
  keywords: ["Jeyasakthi P", "Jeyasakthi", "frontend developer", "web developer", "cybersecurity", "HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "student management system", "Chennai"],
  authors: [{ name: "Jeyasakthi P" }],
  creator: "Jeyasakthi P",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lingala-bishma-goud-portfolio.vercel.app",
    title: "Lingala Bishma Goud - Frontend Developer & Cybersecurity Enthusiast",
    description: "Computer Science undergraduate skilled in frontend development, web technologies, and cybersecurity. Passionate about building responsive user interfaces and collaborative coding.",
    siteName: "Lingala Bishma Goud Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lingala Bishma Goud - Frontend Developer & Cybersecurity Enthusiast",
    description: "Computer Science undergraduate skilled in frontend development, web technologies, and cybersecurity. Passionate about building responsive user interfaces and collaborative coding.",
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
