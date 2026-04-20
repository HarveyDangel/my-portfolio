"use server";

import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

import Card from "@/app/components/ui/card";

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
			<div className="min-h-screen w-full max-w-8xl py-12 px-4 sm:px-6 lg:px-8 place-self-center">
				<div className="max-w-6xl mx-auto">
					{/* Project Title */}
					<h2 className="text-3xl font-bold mb-6">{project.title}</h2>
					{/* Project Preview Image */}
					<div className="mb-8">
						<Image
							src={project.imageUrl}
							alt={project.title}
							width={800}
							height={600}
							className="w-full rounded-lg"
							priority
						/>
					</div>
					{/* Project Description and Details */}
					<div
						className="prose dark:prose-invert max-w-none scroll-mt-25"
						id="description"
					>
						<h2 className="text-2xl font-semibold mb-4">Description</h2>
						<p>{project.description}</p>
					</div>
					{/*Project Summary */}
					<div>
						<h3 className="text-2xl font-semibold mb-4">Summary</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>

					{/* Technologies Used */}
					<div className="scroll-mt-25" id="technology">
						<h2 className="text-2xl font-semibold mb-4 mt-8">
							Technologies Used
						</h2>
						<div className="flex flex-wrap gap-2 mb-8">
							{project.technologies.map((tech, index) => (
								<span
									key={index}
									className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded"
								>
									{tech}
								</span>
							))}
						</div>
					</div>

					{/* Project Gallery */}
					<div className="scroll-mt-25" id="gallery">
						<h3 className="text-2xl font-semibold mb-4">Gallery</h3>
						{/* Project Images */}
						<Card className="p-4 h-200">
							<h3>Picture 1</h3>
						</Card>
					</div>

					<div className="flex space-x-4 mt-8">
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-primary"
							>
								View Live Demo
							</a>
						)}
						{project.githubUrl && (
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline"
							>
								View on GitHub
							</a>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
