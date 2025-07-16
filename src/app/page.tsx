import Header from "./components/header";
import Intro from "./components/intro";
import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import { Suspense } from "react";

export default function Home() {
	return (
		<Suspense fallback={<Loading />}>
			<div className="w-screen h-screen">
				<div className="flex flex-col lg:h-screen w-screen bg-fixed">
					<Header />
					<Intro />
				</div>
				<About />
				<Services />
				<Portfolio/>
				<Contact />
			</div>
		</Suspense>
	);
}

function Loading() {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
			<div className="flex flex-col items-center">
				<div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
				<h2 className="mt-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
					Loading...
				</h2>
			</div>
		</div>
	);
}