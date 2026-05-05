import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ICSMAI 2025 | The 2nd International Conference on Smart Medical, IoT & Artificial Intelligence",
  description: "Join us for the International Conference on Smart Medical, IoT & Artificial Intelligence (ICSMAI 2025)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}  ${geistMono.variable} antialiased`}
      >
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
