import type { Metadata } from "next";
import localFont from "next/font/local";
import { TopNavbar } from '@/components/layout/top-navbar'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sales Assistant",
  description: "AI-powered sales companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <div className="min-h-screen">
          <TopNavbar />
          <main className="pt-6 px-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
