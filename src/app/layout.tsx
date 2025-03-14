import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Lexend } from 'next/font/google';

const lexend = Lexend({ 
  
  variable: "--font-lexend",
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: "Harb",
  description: "Havey Dangel's portfolio",
};

export default function RootLayout({

  children,
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
