import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

import Header from "./components/header";
import { ThemeProvider } from './context/ThemeContext'
import { ProjectProvider } from './context/ProjectContext'


const lexend = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Harb Coded",
	description: "Havey Dangel's portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${lexend} antialiased`}>
        <ThemeProvider>
          <ProjectProvider>
            {/* <Header/> */}
            {children}
          </ProjectProvider>
        </ThemeProvider>
      </body>
		</html>
	);
}
