import "@/app/globals.css";
import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "ラギ☆ラギ",
  description: "Vtuber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
