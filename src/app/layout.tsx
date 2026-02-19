import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "NJMHA | New Jersey Manufactured Housing Association",
    template: "%s | NJMHA"
  },
  description:
    "NJMHA provides trusted information on manufactured homes, communities, and affordable housing opportunities in New Jersey."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakartaSans.variable} bg-bg text-text-main antialiased`}>
        <div className="min-h-screen bg-bg">
          <SiteHeader />
          <main className="mx-auto w-full max-w-6xl px-6 pb-12 pt-24">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
