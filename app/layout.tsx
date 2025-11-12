import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { CartProvider } from "./contexts/CartContext";
import Footer from "./components/Footer";
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: "Blackdrop Apparel",
  description: "E-commerce Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CartProvider>
        <body>
          <Navbar/>
          <Suspense>
          {children}
          </Suspense>
        </body>
        <Footer/>
      </CartProvider>
    </html>
  );
}
