// import type { Metadata } from "next";


// import "./globals.css";
// import { Inter } from "next/font/google";

// import { Navbar } from "./components/ui/navbar";
// import { ThemeProvider } from "./context/ThemeContext";
// import { ProjectProvider } from "./context/ProjectContext";

// import BackToTop from "./components/backtotop";

// const inter = Inter({
// 	subsets: ["latin"],
// 	display: "swap",
// 	variable: "--font-inter",
// });

// export const metadata: Metadata = {
// 	title: "Harb Coded | Harvey Dangel | Full-Stack Developer Portfolio",
// 	description:
// 		"Explore Harvey Dangel’s portfolio showcasing modern web development projects using React, Next.js, Laravel, and full-stack technologies.",
// 	verification: {
// 		google: process.env.GOOGLE_SITE_VERIFICATION,
// 	},
// };

// export default function RootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	return (
// 		<html lang="en" className={`${inter.variable} scroll-smooth`}>
// 			<body className="antialiased bg-gray-100/60">
// 				<ThemeProvider>
// 					<ProjectProvider>
// 						<Navbar />
// 						{/* <Header/> */}
// 						{children}
// 						<BackToTop />
// 					</ProjectProvider>
// 				</ThemeProvider>
// 			</body>
// 		</html>
// 	);
// }


import type { Metadata } from "next";
import { headers } from "next/headers";

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
   verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
   },
};

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   // 2. Await headers to retrieve the nonce generated in your middleware
   const headersList = await headers();
   const nonce = headersList.get("x-nonce") || undefined;

   return (
      // 3. Pass the nonce to the HTML tag so Next.js applies it to all framework inline scripts
      <html 
         lang="en" 
         className={`${inter.variable} scroll-smooth`}
         nonce={nonce} 
      >
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