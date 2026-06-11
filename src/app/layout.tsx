import type { Metadata } from "next";
import { headers } from "next/headers";
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
		"Explore Harvey Dangel’s portfolio showcasing modern web development projects using React, Next.js, Laravel, and full-stack technologies.",
	metadataBase: new URL("https://harb-coded.vercel.app"),
	openGraph: {
		title: "Harb Coded | Harvey Dangel | Full-Stack Developer Portfolio",
		description:
			"Explore Harvey Dangel’s portfolio showcasing modern web development projects using React, Next.js, Laravel, and full-stack technologies.",
		url: "https://harb-coded.vercel.app",
		siteName: "Harb Coded",
		images: [
			{
				url: "/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Harvey Dangel - Full-Stack Developer",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Harb Coded | Harvey Dangel | Full-Stack Developer Portfolio",
		description:
			"Explore Harvey Dangel’s portfolio showcasing modern web development projects using React, Next.js, Laravel, and full-stack technologies.",
		images: ["/og-image.webp"],
	},
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

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// 2. Await headers to retrieve the nonce generated in your proxy
	const headersList = await headers();
	const nonce = headersList.get("x-nonce") || undefined;

	return (
		// 3. Pass the nonce to the HTML tag so Next.js applies it to all framework inline scripts
		<html lang="en" className={`${inter.variable} scroll-smooth`} nonce={nonce}>
			<body className="antialiased bg-gray-100/60">
				<ThemeProvider>
					<ProjectProvider>
						<Navbar />
						{/* <Header/> */}
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
