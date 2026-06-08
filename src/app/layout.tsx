import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { Inter } from "next/font/google";

import { Navbar } from "./components/ui/navbar";
import { ThemeProvider } from "./context/ThemeContext";
import { ProjectProvider } from "./context/ProjectContext";

import BackToTop from "./components/backtotop";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Harb Coded | Harvey Dangel | Full-Stack Developer Portfolio",
	description:
		"Explore Harvey Dangel's portfolio showcasing modern web development projects using React, Next.js, Laravel, and full-stack technologies.",
	metadataBase: new URL("https://harb-coded.vercel.app"),
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en",
			"fr-FR": "/fr",
		},
	},
	verification: {
		google: process.env.GOOGLE_SITE_VERIFICATION,
	},
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
						{children}
						<BackToTop />
					</ProjectProvider>
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
