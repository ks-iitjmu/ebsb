import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Audiowide,
  Poppins,
  Bowlby_One,
} from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const audioWide = Audiowide({
  weight: "400",
  variable: "--font-audio-wide",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"],
});

const bowlbyOne = Bowlby_One({
  weight: "400",
  variable: "--font-bowlby-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EBSB IITJMU",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${audioWide.variable} ${poppins.variable} ${bowlbyOne.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
