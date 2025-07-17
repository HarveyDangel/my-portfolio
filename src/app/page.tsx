import Intro from "./components/intro";
import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Loading from "./components/loading";
import { Suspense } from "react";

export default function Home() {
	return (
		<Suspense fallback={<Loading />}>
			<div className="w-screen h-screen">
				<div className="flex flex-col lg:h-screen w-screen bg-fixed">
					<Intro />
				</div>
				<About />
				<Services />
				<Portfolio />
				<Contact />
			</div>
		</Suspense>
	);
}

