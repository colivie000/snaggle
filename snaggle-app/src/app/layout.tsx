import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add the weights you need
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Snaggle",
  description: "Freelanceers for every task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        // className="font-montserrat"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
