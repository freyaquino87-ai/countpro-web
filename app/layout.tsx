import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CountPro — the counter app that saves your counts",
  description:
    "A universal manual counter for iOS. Count anything, archive every session, share results. No account, no cloud, all local.",
  keywords: [
    "tally counter",
    "counter app",
    "manual counter",
    "inventory counter",
    "people counter",
    "event counter",
    "count tracker",
    "clicker counter",
    "counter with history",
    "counter app that saves your counts",
  ],
  openGraph: {
    title: "CountPro — the counter app that saves your counts",
    description: "Count anything. Archive every session. No account required.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CountPro — the counter app that saves your counts",
    description: "Count anything. Archive every session. No account required.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
