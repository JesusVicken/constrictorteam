import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import { AosInit } from "./_components/aos-init";
import LoadingScreen from "./_components/LoadingScreen";
// import Whatsapp from "./_components/whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Constrictor Team",
  description: "Constrictor Team - Jiu-Jitsu, MMA, Judô, Luta Livre",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingScreen />
        <Header />
        {children}
        {/* <Whatsapp /> */}
        <AosInit />
      </body>
    </html>
  );
}

