import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

// import Header from "./components/header";
import { ThemeProvider } from './context/ThemeContext'
import { ProjectProvider } from './context/ProjectContext'

import BackToTop from "./components/backtotop";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
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
		<html lang="en" className="scroll-smooth">
			<body className={`${inter} antialiased`}>
        <ThemeProvider>
          <ProjectProvider>
            {/* <Header/> */}
            {children}
				<BackToTop />
          </ProjectProvider>
        </ThemeProvider>
      </body>
		</html>
	);
}
