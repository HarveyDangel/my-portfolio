"use client";

import React from "react";
import Image from "next/image";
import { projects } from "../../data/projects";

export default function Portfolio() {
	return (
		<>
			<div className="py-[36px] px-[12px] flex flex-col gap-[24px] bg-white lg:py-[54px]"
            id="project">
				<div className="max-w-6xl mx-auto">
					<h3 className="text-[32px] font-bold p-[12px]">Projects</h3>

					<div className="grid grid-cols-1 gap-6">
						{projects.map((project) => (
							<div
								key={project.id}
								className="bg-[#EFEDF8] shadow-xl rounded-md text-gray-900"
							>
								<div className=" rounded-lg overflow-hidden md:grid md:grid-cols-2">
									<Image
										src={project.imageUrl}
										alt={project.title}
										width={500}
										height={400}
										className="w-full h-[256px] object-cover rounded-lg shadow-md"
										priority
									/>
									{/* PROJECT INFO */}
									<div className="p-[18px] flex flex-col gap-[12px]">
										<h3 className="text-[20px] font-bold">{project.title}</h3>
										<div className="flex flex-wrap gap-[8px] mb-[12px]">
											{project.technologies.map((tech, index) => (
												<span
													key={index}
													className="text-[8px] px-2 py-1 bg-gray-900 text-white rounded"
												>
													{tech}
												</span>
											))}
										</div>
										<p className="text-gray-700 text-[14px]">
											{project.description}
										</p>
										<div className="flex space-x-4">
											{/* {project.liveUrl && (
                                    <a
                                       href={project.liveUrl}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                       Live Demo
                                    </a>
                                 )} */}
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
											<a
												href={`/projects/${project.id}`}
												className="text-blue-600 dark:text-blue-400 hover:underline mr-4"
											>
												View Details
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
