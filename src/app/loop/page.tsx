import { JSX } from "react";
import Glasspane from "@/app/components/glasspane";

export default function Home() {
	const items: JSX.Element[] = [];

	for (let i = 1; i <= 50; i++) {
		const subItems: JSX.Element[] = [];

		for (let j = 1; j <= i; j++) {
			subItems.push(
				<Glasspane
					key={`sub-${i}-${j}`}
					className="w-full flex items-center p-2"
				>
					<h1 className="text-xl font-semibold">#</h1>
				</Glasspane>
			);
		}
		items.push(
			<Glasspane
				key={`group-${i}`}
				className="w-full grid grid-cols-10 p-2 gap-2"
			>
				<h1 className="text-2xl font-bold col-span-1">{i}</h1>
				<div className="grid grid-cols-8 gap-1 col-span-9">{subItems}</div>
			</Glasspane>
		);
	}
	return <>{items}</>;
}
