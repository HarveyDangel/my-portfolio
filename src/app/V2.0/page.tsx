"use client";

import { Github, Linkedin } from "lucide-react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import TechStack from "./components/techStack";
import Portfolio from "./components/projects";

export default function Hero() {
	return (
		<>
			<div className="flex flex-col w-full text-gray-900 bg-gray-100 place-self-center max-w-8xl">
				<div className="h-full w-full mx-auto">
					<nav className="hidden md:flex justify-center gap-[40px] items-center bg-gray-100 p-4 sticky top-0 z-50">
						<a href="#about" className="hover:border-b-2 ease-in-out hover:duration-100 hover:shadow-xl">About me</a>
						<a href="#project" className="hover:border-b-2 ease-in-out hover:duration-100 hover:shadow-xl">Projects</a>
						<a href="#contact" className="hover:border-b-2 ease-in-out hover:duration-100 hover:shadow-xl">Contact me</a>
					</nav>
					<div className="max-w-6xl mx-auto">
						<div className="w-full pt-5 flex flex-col-reverse md:flex-row lg:gap-[90px]">
							{/* IMAGE */}
							<Image
								src="/images/avatar.png"
								alt="Profile Picture"
								width={500}
								height={500}
								className="object-cover overflow-visible h-[500px]"
								priority
							/>
							{/* INTRO */}
							<div className="text-gray-900 px-[12px] md:place-self-center md:h-full">
								<p className="font-semibold text-[24px] lg:text-[32px]">
									Hi, I am
								</p>
								<h1 className="text-4xl font-bold lg:text-[64px]">
									Harvey Dangel,
								</h1>
								<p className="mt-4 text-[14px] lg:text-[24px]">
									aspiring Web developer
								</p>
								<div className="flex gap-5 mt-5">
									<a
										href="https://www.linkedin.com/in/harvey-dangel-a4b09b355/"
										className="size-[48px] rounded-[12px] bg-gray-700 p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:shadow-blue-500 hover:bg-gray-900"
									>
										<Linkedin className="size-[28px] text-[#F7F9FC] text-center" />
									</a>
									<a
										href="https://github.com/HarveyDangel"
										className="size-[48px] rounded-[12px] bg-gray-700 p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:shadow-blue-500 hover:bg-gray-900"
									>
										<Github className="size-[28px] text-[#F7F9FC]" />
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* QUICK INTRO */}
					<div className=" bg-[#1C1C1C]">
						<div className="flex justify-center max-w-6xl mx-auto px-[12px] py-[24px] gap-[12px]">
							<p className="text-[128px] font-extrabold text-blue-500 -mt-5 relative">{`"`}</p>
							<p className="text-white font-semibold text-[24px] my-5 italic lg:text-[32px] ">
								{`A BS Computer Science graduate at BiPSU, specializing in web development”`}
							</p>
						</div>
					</div>

					{/* ABOUT SECTION */}
					<div id="about"></div>
					<div className="mx-auto w-full max-w-6xl lg:mt-[54px]">
						<div className="flex flex-col gap-[24px] py-[24px] md:flex-row lg:gap-[36px]">
							<h3 className="text-gray-900 text-[32px] text-nowrap font-bold p-[12px] text-center md:text-left lg:text-[40px]">
								About me
							</h3>
							<div className="flex flex-col gap-[24px]">
								<p className="text-gray-900 text-justify text-[14px] lg:text-lg p-[12px] lg:text-[16px]">
									{`I'm a passionate web developer with a BS in Computer Science degree. I specialize in building interactive and efficient web applications using Laravel, HTML, CSS, JavaScript, MySQL, and PHP. I enjoy solving complex problems and continuously learning new technologies to improve my craft.`}
								</p>
								<p className="text-gray-900 text-justify text-[14px] lg:text-lg p-[12px] lg:text-[16px]">
									{`My expertise includes developing full-stack applications, optimizing database performance, and creating responsive user interfaces. I have experience working on real-world projects, collaborating with teams, and following best coding practices to build scalable applications.`}
								</p>
							</div>
						</div>
						{/* what i do */}
						<div className="py-[24px] flex flex-col gap-[24px] lg:[54px]">
							<h3 className="text-gray-900 text-[32px] font-bold p-[12px] text-center md:text-right lg:text-[40px]">
								What I do
							</h3>
							<div className="flex flex-col gap-[24px] p-[12px] md:flex-row">
								{/* CARDS */}
								<div className="flex flex-col gap-[10px] p-[20px] bg-white rounded-lg shadow-md">
									<h4 className="p-[10px] text-center text-[24px] font-medium">
										UI/UX Design
									</h4>
									<p className="text-[14px] text-justify lg:text-[16px]">{`An effective UI/UX grabs attention and communicates a clear message. I ensure the design is both innovative and clean.`}</p>
								</div>
								<div className="flex flex-col gap-[10px] p-[20px] bg-white rounded-lg shadow-md">
									<h4 className="p-[10px] text-center text-[24px] font-medium">
										Web Developer
									</h4>
									<p className="text-[14px] text-justify lg:text-[16px]">{`If you need a developer to handle the research and development of your website, I have the skills and experience to help.`}</p>
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
					<div className=" bg-gray-900"
						id="contact">
						{/* CONTACT ME */}
						<div className="py-[36px] px-[12px] flex flex-col gap-[12px] text-white max-w-6xl mx-auto">
							<h1 className="text-[48px] text-center md:text-[128px]">
								Contact me
							</h1>
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
							<div className="py-[24px] px-[8px] flex flex-col gap-[16px] md:flex-row md:justify-between">
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
							<p className="text-[16px] font-extralight text-center">
								© 2025 All rights reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
