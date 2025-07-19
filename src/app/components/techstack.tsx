// components/TechStack.tsx
import {
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiWordpress,
	SiFigma,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiGithub,
	SiGit,
	SiLaravel,
	SiMysql,
	SiCanva,
	SiPhp,
} from "react-icons/si";

import { TechItem } from "./types/techStack";
import GlassPane from "./glasspane";

const TechStack = () => {
	const techStack: TechItem[] = [
		{
			id: "html",
			name: "HTML",
			icon: <SiHtml5 className="text-orange-500" />,
			category: "frontend",
		},
		{
			id: "css",
			name: "CSS",
			icon: <SiCss3 className="text-blue-600" />,
			category: "frontend",
		},
		{
			id: "javascript",
			name: "JavaScript",
			icon: <SiJavascript className="text-yellow-500" />,
			category: "language",
		},
		{
			id: "php",
			name: "PHP",
			icon: <SiPhp className="text-indigo-400" />,
			category: "language",
		},
		{
			id: "github",
			name: "GitHub",
			icon: <SiGithub className="text-gray-800" />,
			category: "tool",
		},
		{
			id: "git",
			name: "Git",
			icon: <SiGit className="text-orange-600" />,
			category: "tool",
		},
		{
			id: "laravel",
			name: "Laravel",
			icon: <SiLaravel className="text-red-600" />,
			category: "backend",
		},
		{
			id: "mysql",
			name: "MySQL",
			icon: <SiMysql className="text-blue-700" />,
			category: "backend",
		},
		{
			id: "nextjs",
			name: "Next.js",
			icon: <SiNextdotjs className="text-gray-800 dark:text-white" />,
			category: "frontend",
		},
		{
			id: "react",
			name: "React",
			icon: <SiReact className="text-blue-500" />,
			category: "frontend",
		},
		{
			id: "typescript",
			name: "TypeScript",
			icon: <SiTypescript className="text-blue-600" />,
			category: "language",
		},

		{
			id: "tailwindcss",
			name: "Tailwind CSS",
			icon: <SiTailwindcss className="text-blue-400" />,
			category: "frontend",
		},
		{
			id: "wordpress",
			name: "WordPress",
			icon: <SiWordpress className="text-blue-600" />,
			category: "backend",
		},
		{
			id: "figma",
			name: "Figma",
			icon: <SiFigma className="text-pink-500" />,
			category: "tool",
		},
		{
			id: "canva",
			name: "Canva",
			icon: <SiCanva className="text-blue-500" />,
			category: "tool",
		},
		// Add more items...
	];

	 // Group tech items by category
    const groupedTech = techStack.reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {} as Record<string, TechItem[]>);

	     // Capitalize category names
    const formatCategory = (category: string) => {
        return category.charAt(0).toUpperCase() + category.slice(1);
    };

	return (
        <div className="max-w-6xl mx-auto py-16">
            <h2 className="text-3xl font-bold mb-12 text-center">
                My Tech Stack
            </h2>
            
            <div className="space-y-12">
                {Object.entries(groupedTech).map(([category, items]) => (
                    <div key={category} className="flex flex-col lg:flex-row gap-6">
                        <div className="lg:w-1/6 flex flex-col justify-center lg:items-start">
                            <h3 className="text-xl font-semibold mb-4 lg:mb-0 text-center lg:text-right">
                                {formatCategory(category)}
                            </h3>
                        </div>
                        <div className="lg:w-5/6">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {items.map((tech) => (
                                    <TechCard key={tech.id} tech={tech} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Separate card component for better typing
type TechCardProps = {
	tech: TechItem;
};

const TechCard = ({ tech }: TechCardProps) => {
	return (
		<div className="hover:scale-105 transition-transform duration-200 ease-in-out">
			<GlassPane>
            <div className="flex flex-col items-center justify-center p-[16px]">
				<span className="text-3xl mb-2 text-center">{tech.icon}</span>
				<span className="text-sm font-medium text-center">{tech.name}</span>

            </div>
			</GlassPane>
		</div>
	);
};

export default TechStack;
