import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from "next/font/google";

import Header from "./components/header";


const lexend = Lexend({
	variable: "--font-lexend",
	subsets: ["latin"],
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
			<body className={`${lexend} antialiased`}>
        <Header/>
        {children}
      </body>
		</html>
	);
}
