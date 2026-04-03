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
	title: "Harb Coded",
	description: "Havey Dangel's portfolio",
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
