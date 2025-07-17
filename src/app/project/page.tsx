import Portfolio from "../components/portfolio";
import Loading from "../components/loading";
import { Suspense } from "react";
import Contact from "../components/contact";

export default function ProjectPage() {
	return (
		<Suspense fallback={<Loading/>}>
			<div>
				<Portfolio />
				<Contact />
			</div>
		</Suspense>
	);
}
