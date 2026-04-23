
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

import { Navbar } from "./components/ui/navbar";
import { ThemeProvider } from './context/ThemeContext'
import { ProjectProvider } from './context/ProjectContext'

import BackToTop from "./components/backtotop";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // This allows us to use it in Tailwind
});

export const metadata: Metadata = {
	title: "Harb Coded | Harvey Dangel | Full-Stack Developer Portfolio",
	description: "Explore Harvey Dangel’s portfolio showcasing modern web development projects using React, Next.js, Laravel, and full-stack technologies.",
	verification: {
	  google: "VBKAxCSDS72vHDR-AKQm3fuiTZuLVI8V9GyL6KTAZHI"},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${inter.variable} scroll-smooth`}>
			<body className="antialiased bg-gray-100/60">
        <ThemeProvider>
          <ProjectProvider>
			<Navbar />
            {/* <Header/> */}
            {children}
			<BackToTop />
          </ProjectProvider>
        </ThemeProvider>
      </body>
		</html>
	);
}
