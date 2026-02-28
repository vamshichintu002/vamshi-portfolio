import type { Metadata } from "next";
import { Geist_Mono, Lobster_Two, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const lobsterTwo = Lobster_Two({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vamshi Sudula — Portfolio",
  description:
    "AI & ML Engineer portfolio of Vamshi Sudula — projects, skills, resume, and contact.",
  metadataBase: new URL("https://web-three-gilt-30.vercel.app"),
  openGraph: {
    title: "Vamshi Sudula — Portfolio",
    description:
      "AI & ML Engineer portfolio of Vamshi Sudula — projects, skills, resume, and contact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lobsterTwo.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
