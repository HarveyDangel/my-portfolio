'use client';

import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import  React  from "react";

interface ProjectHeroProps {
  project: {
    title: string;
	 description: string;
    githubUrl: string;
    imageUrl: string;
  };
}

export default function ProjectHero({project}: ProjectHeroProps) {
	return (
		<>
			<div className="max-w-6xl mx-auto">
				<div className="w-full pt-5 flex flex-col-reverse md:flex-row lg:gap-[80px] h-full">
					{/* IMAGE */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<Image
							src={project.imageUrl}
							alt="Profile Picture"
							width={2200}
							height={400}
							className="object-cover h-[300px]"
							priority
						/>
					</motion.div>
					{/* INTRO */}
					<div className="text-gray-900 px-[12px] md:place-self-center md:h-full">
						<motion.div
							className="text-4xl font-bold"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
						>
							
							<h2 className="text-xl font-bold lg:text-[32px] mb-2">
								{project.title}
							</h2>
							<p className="text-[14px] font-normal">{project.description}</p>
							
						</motion.div>
						<motion.div
							className="flex gap-5 mt-5"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<a
								href="https://github.com/HarveyDangel/eventsmanagementsystem"
								className="flex gap-1 text-[14px] rounded-[12px] text-[#F7F9FC] bg-gray-800 p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:shadow-amber-400 hover:bg-amber-400 hover:ring hover:ring-amber-50 active:scale-50"
							>
								<Github className="size-[20px]" />Source Code
							</a>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
}
