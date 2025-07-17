import React from "react";
import Image from "next/image";
import GlassPane from "./glasspane";

interface ProjectDetails {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	liveUrl?: string;
	githubUrl?: string;
}

const projects: ProjectDetails[] = [
	{
		id: 1,
		title: "Event Management System",
		description: "An event management system for BiPSU Organization.",
		technologies: ["Laravel", "Tailwind CSS", "Blade", "MySQL"],
		imageUrl: "/images/EventMS.png", // Replace with your actual image filename
		//   liveUrl: "https://project-demo.com",
		githubUrl: "https://github.com/HarveyDangel/eventsmanagementsystem",
	},
	{
		id: 2,
		title: "Geo-Spatial Mapping and Monitoring System of Malnutrition Trends",
		description:
			"A malnutrition mapping and monitoring system for Biliran Provincial Health Office.",
		technologies: ["HTML", "BootStrap CSS", "JavaScript", "PHP", "MySQL"],
		imageUrl: "/images/MMSGSM.png", // Replace with your actual image filename
		//   liveUrl: "https://another-project.com",
		githubUrl: "https://github.com/HarveyDangel/malnutrition-monitoring-system",
	},
	{
		id: 3,
		title: "Another Project",
		description: "A Wordpress personal portfolio website.",
		technologies: ["Wordpress", "Local WP"],
		imageUrl: "/images/WP.png", // Replace with your actual image filename
		//   liveUrl: "https://another-project.com",
		githubUrl: "https://github.com/HarveyDangel/wpPortfolio",
	},
];

export default function Portfolio() {
	return (
		<div
			id="project"
			className="min-h-screen w-full max-w-[1280px] py-12 px-4 sm:px-6 lg:px-8 place-self-center"
		>
			<div className="max-w-7xl mx-auto">
				<h2 className="text-center text-[36px] lg:text-[40px] font-bold text-gray-900 dark:text-white mb-8">
					My Projects
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project) => (
						<GlassPane key={project.id}>
							<div className=" rounded-lg overflow-hidden">
								<Image
									src={project.imageUrl}
									alt={project.title}
									width={400}
									height={300}
									className="w-full h-48 object-cover"
									priority
								/>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
										{project.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-300 mb-4">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.technologies.map((tech, index) => (
											<span
												key={index}
												className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded"
											>
												{tech}
											</span>
										))}
									</div>
									<div className="flex space-x-4">
										{project.liveUrl && (
											<a
												href={project.liveUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-600 dark:text-blue-400 hover:underline"
											>
												Live Demo
											</a>
										)}
										{project.githubUrl && (
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-600 dark:text-blue-400 hover:underline"
											>
												GitHub
											</a>
										)}
									</div>
								</div>
							</div>
						</GlassPane>
					))}
				</div>
			</div>
		</div>
	);
}
