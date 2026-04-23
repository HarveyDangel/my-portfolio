import TechIcon from "@/app/components/techIcon";

interface TechnologiesProps {
	techIds: string[];
}

export default function Technologies( {techIds}: TechnologiesProps ) {
	return (
		<div className="flex flex-wrap gap-4 justify-between scroll-mt-35" id="technology">
			{techIds.map((technologies) => (
				<div
					key={technologies}
					className="flex items-center gap-2 p2"
				>
					<TechIcon id={technologies} className="w-6 h-6" />
					<span className="text-sm font-light">{technologies}</span>
				</div>
			))}
		</div>
	);
}
