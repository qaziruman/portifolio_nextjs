import type { Metadata, Viewport } from "next";
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
  title: "Qazi Ruman Ali | Flutter Developer | POS & Business Solutions",
  description:
    "Qazi Ruman Ali is a Flutter Developer specializing in POS systems, business management solutions, mobile applications and desktop applications.",
  keywords: [
    "Qazi Ruman Ali",
    "Flutter Developer",
    "POS Systems",
    "Point of Sale",
    "Business Management Solutions",
    "Desktop Applications",
    "Mobile Applications",
    "Dart",
    "React",
    "Next.js",
    "Impact IT Solution",
    "Islamabad Pakistan",
  ],
  authors: [{ name: "Qazi Ruman Ali", url: "https://github.com/qaziruman" }],
  creator: "Qazi Ruman Ali",
  openGraph: {
    title: "Qazi Ruman Ali | Flutter Developer | POS & Business Solutions",
    description:
      "Flutter Developer building scalable POS, mobile, desktop, and business management applications with clean architecture and high performance.",
    type: "website",
    locale: "en_US",
    siteName: "Qazi Ruman Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qazi Ruman Ali | Flutter Developer",
    description:
      "Flutter Developer building scalable POS, mobile, desktop, and business management solutions.",
    creator: "@qazirumanali",
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#08080a] text-zinc-100 font-sans antialiased selection:bg-zinc-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
