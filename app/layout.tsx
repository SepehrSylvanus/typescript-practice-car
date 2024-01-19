import type { Metadata } from "next";

import "./globals.css";
import { Navbar } from "@/components";
import Foofter from "@/components/Foofter";

export const metadata: Metadata = {
  title: "Cat hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Foofter />
      </body>
    </html>
  );
}
