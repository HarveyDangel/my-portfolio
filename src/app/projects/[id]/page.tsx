"use server";

import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";

import Card from "@/app/components/ui/card";
import ProjectHero from "../components/projectHero";
import ProjectBento from "../components/projectBento";

// Make the component async
export default async function ProjectDetail({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	// Await the entire params object, not individual properties
	const resolvedParams = await params;
	const id = resolvedParams.id;

	const project = projects.find((p) => p.id === parseInt(id));

	if (!project) {
		notFound(); // Use Next.js notFound() instead of custom div
	}

	return (
		<>
			<div className="min-h-screen w-full max-w-8xl place-self-center">
				<div className=" mx-auto gap-8 flex flex-col">
					<div className=" max-w-6xl mx-auto mb-5 md:mb-27">
						<ProjectHero project={project} />
					</div>
					<div className="bg-gray-900 text-white font-light text-[12px] md:text-[14px]">
						<div className="md:flex justify-around p-5">
							<p>Role: {project.role}</p>
							<p>Platform: {project.platform}</p>
							<p>Timeline: {project.timeline}</p>
							<div className="flex gap-1">
								<h2>Technologies Used:</h2>
								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech, index) => (
										<span
											key={index}
											className="bg-gray-100 text-gray-900 rounded px-1 font-semibold text-[10px] md:text-[12px]"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
					{/*Bento section */}
					<div className="max-w-6xl mx-auto w-full p-5 lg:p-0">
						<ProjectBento
							theProblem={project.theProblem}
							theSolution={project.theSolution}
							theChallenges={project.theChallenges} // This is an array of {title, description}
							features={project.features}
						/>
						{/* Project Gallery */}
						<div className="scroll-mt-25" id="gallery">
							<h3 className="text-2xl font-semibold mb-4">Gallery</h3>
							{/* Project Images */}
							<Card className="p-4 h-200">
								<h3>Picture 1</h3>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
