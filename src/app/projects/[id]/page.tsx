import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

// Make the component async
export default async function ProjectDetail({ params }: { params: { id: string } }) {
  // Wait for params to be available
  const id = await params.id;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full max-w-[1280px] py-12 px-4 sm:px-6 lg:px-8 place-self-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
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
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p>{project.description}</p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded"
              >
                {tech}
              </span>
            ))}
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
                className="btn btn-secondary"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}