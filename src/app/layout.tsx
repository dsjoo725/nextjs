import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="flex space-x-4 p-4 border-b-2">
          <Link href={"/rcc"}>RCC</Link>
          <Link href={"/rsc"}>RSC</Link>
          <Link href={"/rsc+suspense"}>RSC + Suspense</Link>
          <Link href={"/rsc+rcc"}>RSC + RCC</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
