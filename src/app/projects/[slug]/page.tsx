'use server';
import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";


// import Card from "@/app/components/ui/card";
import ProjectHero from "../components/projectHero";
import ProjectBento from "../components/projectBento";
import Gallery from "../components/gallery";

// Make the component async
export default async function ProjectDetail({
	params
}: {
	// params: Promise<{ id: string; slug: string }>;
	params: Promise<{ slug: string }>;
}) {
	// Await the entire params object, not individual properties
	const resolvedParams = await params;
	// const id = resolvedParams.id;
	const slug = resolvedParams.slug;

	// const project = projects.find((p) => p.id === parseInt(id) && p.slug === slug);
	const project = projects.find((p) =>  p.slug === slug);

	if (!project) {
		notFound(); // Use Next.js notFound() instead of custom div
	}

	return (
		<main>
			<div className="min-h-screen w-full max-w-8xl place-self-center">
				<div className=" mx-auto gap-8 flex flex-col">
					<div className=" max-w-6xl mx-auto mb-5 md:mb-20">
						<ProjectHero project={project} />
					</div>
					<div className="bg-gray-900 text-white font-light text-[12px] md:text-[14px]">
						<div className="md:flex justify-around p-5">
							<p>Role: {project.role}</p>
							<p>Platform: {project.platform}</p>
							<p>Timeline: {project.timeline}</p>
						</div>
					</div>
					{/*Bento section */}
					<div className="max-w-6xl mx-auto w-full p-5 lg:p-0">
						<ProjectBento
							theProblem={project.theProblem}
							theSolution={project.theSolution}
							theChallenges={project.theChallenges} // This is an array of {title, description}
							features={project.features}
							metrics={project.technicalMetrics}
							technologies={project.technologies}
						/>
						{/* Project Gallery */}
						<Gallery images={project.galleryUrls ?? [] } />
					</div>
				</div>
			</div>
		</main>
	);
}
