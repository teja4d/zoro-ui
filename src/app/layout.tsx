import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav-bar/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZORO UK",
  description: "ZORO Uk Take Home Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen ">
        <div className="flex flex-col">
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
