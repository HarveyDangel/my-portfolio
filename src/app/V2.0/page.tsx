"use client";

import { Github, Linkedin } from "lucide-react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import TechStack from "./components/techStack";
import Portfolio from "./components/projects";

export default function Hero() {
	return (
		<>
			<div className="flex flex-col w-full text-gray-900 bg-gray-100 place-self-center">
				<div className="h-full w-full">
					<div className="w-full pt-5">
						<div className="text-gray-900 px-[12px]">
							<p className="font-semibold text-[24px]">Hi, I am</p>
							<h1 className="text-4xl font-bold">Harvey Dangel</h1>
							<p className="mt-4 text-[14px]">aspiring Web developer</p>
							<div className="flex gap-5 mt-5">
								<a
									href="https://www.linkedin.com/in/harvey-dangel-a4b09b355/"
									className="size-[48px] rounded-[12px] bg-[#545F7F] p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
								>
									<Linkedin className="size-[28px] text-[#F7F9FC] text-center" />
								</a>
								<a
									href="https://github.com/HarveyDangel"
									className="size-[48px] rounded-[12px] bg-[#545F7F] p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
								>
									<Github className="size-[28px] text-[#F7F9FC]" />
								</a>
							</div>
						</div>
						<Image
							src="/images/avatar.png"
							alt="Profile Picture"
							width={500}
							height={500}
							className="object-cover overflow-visible h-[500px]"
							priority
						/>
					</div>
					{/* QUICK INTRO */}
					<div className="flex justify-center bg-[#1C1C1C] px-[12px] py-[24px] gap-[12px]">
						<p className="text-[128px] font-extrabold text-blue-500 -mt-5">{`"`}</p>
						<p className="text-white font-semibold text-[24px] my-5 italic">
							{`A BS Computer Science graduate at BiPSU, specializing in web development”`}
						</p>
					</div>

					{/* ABOUT SECTION */}
					<div className="mx-auto w-full bg-white">
						<div className="flex flex-col gap-[24px] py-[24px]">
							<h3 className="text-gray-900 text-[32px] font-bold p-[12px] text-center">
								About me
							</h3>
							<div className="flex flex-col gap-[24px]">
								<p className="text-gray-900 text-justify text-[14px] lg:text-lg p-[12px]">
									{`I'm a passionate web developer and a BS Computer Science graduate at BiPSU. I specialize in building interactive and efficient web applications using Laravel, HTML, CSS, JavaScript, MySQL, and PHP. I enjoy solving complex problems and continuously learning new technologies to improve my craft.`}
								</p>
								<p className="text-gray-900 text-justify text-[14px] lg:text-lg p-[12px]">
									{`My expertise includes developing full-stack applications, optimizing database performance, and creating responsive user interfaces. I have experience working on real-world projects, collaborating with teams, and following best coding practices to build scalable applications.`}
								</p>
							</div>
						</div>
						{/* what i do */}
						<div className="py-[24px] flex flex-col gap-[24px]">
							<h3 className="text-gray-900 text-[32px] font-bold p-[12px] text-center">
								What I do
							</h3>
							<div className="flex flex-col gap-[24px] p-[12px]">
								{/* CARDS */}
								<div className="flex flex-col gap-[10px] p-[20px] bg-white rounded-lg shadow-md">
									<h4 className="p-[10px] text-center text-[24px] font-medium">
										UI/UX Design
									</h4>
									<p className="text-[14px] text-justify">{`An effective UI/UX grabs attention and communicates a clear message. I ensure the design is both innovative and clean.`}</p>
								</div>
								<div className="flex flex-col gap-[10px] p-[20px] bg-white rounded-lg shadow-md">
									<h4 className="p-[10px] text-center text-[24px] font-medium">
										Web Developer
									</h4>
									<p className="text-[14px] text-justify">{`If you need a developer to handle the research and development of your website, I have the skills and experience to help.`}</p>
								</div>
							</div>
						</div>
					</div>
					{/* TECH STACK */}
					<div>
						<TechStack />
					</div>
					{/* PROJECTS */}
					<div>
						<Portfolio />
					</div>
					<div className="py-[36px] px-[12px] flex flex-col gap-[12px] bg-gray-900 text-white">
						<h1 className="text-[48px] text-center">Contact me</h1>
						<div className="py-[16px] flex gap-[36px] justify-center">
							<a
								href="https://www.linkedin.com/in/harvey-dangel-a4b09b355/"
								className="size-[48px] rounded-[12px] bg-white p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
							>
								<Linkedin className="size-[28px] text-gray-800 text-center" />
							</a>
							<a
								href="https://github.com/HarveyDangel"
								className="size-[48px] rounded-[12px] bg-white p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
							>
								<Github className="size-[28px] text-gray-800" />
							</a>
						</div>
						<div className="py-[24px] px-[8px] flex flex-col gap-[16px] ">
							<div className="flex items-center gap-[10px]">
								<MapPinIcon className="size-[38px]" />
								<p>
									Biliran, Biliran <br /> Philippines
								</p>
							</div>
							<div className="flex items-center gap-[10px]">
								<EnvelopeIcon className="size-[38px]" />
								<a
									href="https://mail.google.com/mail/?view=cm&fs=1&to=harveydangel@gmail.com"
									target="_blank"
									rel="noopener noreferrer"
									className=" hover:underline hover:text-[#50E3C2]"
								>
									harveydangel@gmail.com
								</a>
							</div>
							<div className="flex items-center gap-[10px]">
								<PhoneIcon className="size-[38px]" />
								<p>+6396-7137-9690</p>
							</div>
						</div>
						<p className="text-[16px] font-extralight text-center">© 2025 All rights reserved.</p>
					</div>
				</div>
			</div>
		</>
	);
}
