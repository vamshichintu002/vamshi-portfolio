import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
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
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
