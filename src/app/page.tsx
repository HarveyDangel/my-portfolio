"use client";

import { Github, Linkedin } from "lucide-react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import Portfolio from "./components/projects";
import TechStack from "./components/techstack";
import Hero from "./components/hero";

export default function Home() {
	return (
		<>
			<div className="flex flex-col w-full text-gray-900 bg-gray-100 place-self-center max-w-8xl">
				<div className="h-full w-full mx-auto">
					<nav className="hidden md:flex justify-between items-center bg-gray-100 p-4 sticky top-0 z-50 max-w-8xl">
						<div className="w-full max-w-6xl mx-auto grid grid-cols-3 gap-[40px]  items-center">
							<h1 className="font-bold text-xl">
								Harb <br /> Coded
							</h1>
							<div className="flex gap-[24px] justify-center text-gray-900 text-[16px]">
								<a
									href="#about"
									className="hover:border-b-2 ease-in-out hover:duration-100 hover:shadow-xl"
								>
									About me
								</a>
								<a
									href="#project"
									className="hover:border-b-2 ease-in-out hover:duration-100 hover:shadow-xl"
								>
									Projects
								</a>
								<a
									href="#contact"
									className="hover:border-b-2 ease-in-out hover:duration-100 hover:shadow-xl"
								>
									Contact me
								</a>
							</div>
						</div>
					</nav>
					<Hero />
					{/* QUICK INTRO */}
					<div className=" bg-[#1C1C1C]">
						<div className="flex justify-center max-w-6xl mx-auto px-[12px] py-[24px] gap-[12px]">
							<p className="text-[128px] font-extrabold text-amber-400 -mt-5 -mb-20 relative">{`"`}</p>
							<p className="text-white font-semibold text-[24px] my-5 italic lg:text-[32px] ">
								{`Building Scalable Solutions, One Line at a Time.`}
							</p>
						</div>
					</div>
					{/* <About/> */}

					{/* ABOUT SECTION */}
					<div id="about" className="scroll-mt-16"></div>
					<div className="mx-auto w-full max-w-6xl lg:mt-[54px]">
						<div className="flex flex-col gap-[24px] py-[24px] md:flex-row lg:gap-[36px]">
							<h3 className="text-gray-900 text-[32px] text-nowrap font-bold p-[12px] text-center md:text-left lg:text-[40px]">
								About me
							</h3>
							<div className="flex flex-col gap-[24px]">
								<p className="text-gray-900 text-justify text-[14px] lg:text-lg p-[12px] lg:text-[16px]">
									{`I specialize in building interactive and efficient web applications using `}
									<strong className="italic">
										Laravel, HTML, CSS, JavaScript, MySQL, and PHP.
									</strong>
									{` I am also familiar with `}
									<strong className="italic">
										Node.js, Tailwind CSS, React library
									</strong>
									{`, and on top of that, `}
									<strong className="italic">Next.js framework</strong>
									{`. I enjoy solving complex problems and continuously learning
									new technologies to improve my craft.`}
								</p>
								<p className="text-gray-900 text-justify text-[14px] lg:text-lg p-[12px] lg:text-[16px]">
									{`My expertise includes developing full-stack applications, optimizing database performance, and creating responsive user interfaces. I have experience working on collaborative projects, and following best coding practices in building scalable applications.`}
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
								{/* Slide In Section */}
								<motion.div
									className="flex flex-col flex-1/2 gap-[10px] p-[20px] bg-white rounded-lg shadow-md"
									initial={{ opacity: 0, x: -100 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.8 }}
									viewport={{ once: true, amount: 0.3 }}
								>
									<h4 className="p-[10px] text-center text-[24px] font-medium">
										Software Development
									</h4>
									{/* <h6 className="text-[18px] font-medium">
										The Engine Under the Hood
									</h6> */}
									{/* <p className="text-[14px] text-justify lg:text-[16px]">{`If you need someone to handle the research and development of your application, I’d be glad to help with my skills and experience.`}</p> */}
									<p className="text-[14px] text-justify lg:text-[16px]">{`I build robust, scalable applications with a focus on performance and maintainability. From architecting cross-platform mobile solutions to streamlining deployment pipelines, I ensure the logic is as seamless as the user experience.`}</p>
									{/* <p className="text-[14px] text-justify lg:text-[16px]">{`Mobile & Web Apps: Crafting high-performance applications using modern frameworks like Expo and React Native.`}</p> */}
								</motion.div>
								<motion.div
									className="flex flex-col flex-1/2 gap-[10px] p-[20px] bg-white rounded-lg shadow-md"
									initial={{ opacity: 0, x: -100 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.8 }}
									viewport={{ once: true, amount: 0.3 }}
								>
									<h4 className="p-[10px] text-center text-[24px] font-medium">
										UX/UI Design
									</h4>
									{/* <p className="text-[14px] text-justify lg:text-[16px]">{`An effective UI/UX not only captures attention but also conveys a clear message. I focus on delivering designs that are both innovative and streamlined.`}</p> */}
									<p className="text-[14px] text-justify lg:text-[16px]">{`Design is more than just aesthetics, it’s about how a product feels and functions. I focus on creating intuitive interfaces that turn complex data into actionable insights through thoughtful interaction and visual clarity.`}</p>
								</motion.div>
							</div>
						</div>
					</div>
					{/* TECH STACK */}
					<div>
						<TechStack />
					</div>
					{/* PROJECTS */}
					<div id="project" className="scroll-mt-16">
						<Portfolio />
					</div>
					<div className=" bg-gray-900 scroll-mt-16" id="contact">
						{/* CONTACT ME */}
						<div className="py-[36px] px-[12px] flex flex-col gap-[12px] text-white max-w-6xl mx-auto">
							<h1 className="text-[48px] text-center md:text-[128px]">
								Contact me
							</h1>
							<div className="py-[16px] flex gap-[36px] justify-center">
								<a
									href="https://www.linkedin.com/in/harvey-dangel-a4b09b355/"
									className="size-[48px] rounded-[12px] text-gray-800 hover:text-white bg-white p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 hover:shadow-amber-400 hover:ring hover:ring-white active:scale-50"
								>
									<Linkedin className="size-[28px] text-center" />
								</a>
								<a
									href="https://github.com/HarveyDangel"
									className="size-[48px] rounded-[12px] text-gray-800 hover:text-white bg-white p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 hover:shadow-amber-400 hover:ring hover:ring-white active:scale-50"
								>
									<Github className="size-[28px]" />
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
										className=" hover:underline hover:text-amber-500"
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
								© 2026 All rights reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
