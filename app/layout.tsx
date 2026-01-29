import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { Footer } from "@/components/footer";


export const metadata: Metadata = {
  title: "Site Name",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans relative bg-black antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
