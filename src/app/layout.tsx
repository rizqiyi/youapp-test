import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/utils/AuthProvider";
import ProfileProvider from "@/contexts/Profile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouApp Coding Test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`wrapper bg-[#0E191F] min-h-[100vh] ${inter.className}`}>
        <AuthProvider>
          <ProfileProvider>{children}</ProfileProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
