import { Github, Linkedin } from "lucide-react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";

import Hero from "./components/hero";
import WhatIDoCards from "./components/whatido-cards";

const Portfolio = dynamic(() => import("./components/projects"));
const TechStack = dynamic(() => import("./components/techstack"));

export default function Home() {
	return (
		<>
			<main className="flex flex-col w-full text-primary bg-page place-self-center max-w-8xl">
				<div className="h-full w-full mx-auto">
					<Hero />
					{/* QUICK INTRO */}
					<div className="bg-inverse">
						<div className="flex justify-center max-w-6xl mx-auto px-[12px] py-[24px] gap-[12px]">
							<p className="text-[128px] font-extrabold text-amber-400 -mt-5 -mb-20 relative">{`"`}</p>
							<p className="text-inverse font-semibold text-[24px] my-5 italic lg:text-[32px] ">
								{`Building Scalable Solutions, One Line at a Time.`}
							</p>
						</div>
					</div>

					{/* ABOUT SECTION */}
					<div id="about" className="scroll-mt-16"></div>
					<div className="mx-auto w-full max-w-6xl lg:mt-[54px]">
						<div className="flex flex-col gap-[24px] py-[24px] md:flex-row lg:gap-[36px]">
							<h3 className="text-primary text-[32px] text-nowrap font-bold p-[12px] text-center md:text-left lg:text-[40px]">
								About me
							</h3>
							<div className="flex flex-col gap-8">
								<p className="text-primary text-justify text-lg px-8 leading-relaxed">
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
								<p className="text-primary text-justify text-lg px-8 leading-relaxed">
									{`My expertise includes developing full-stack applications, optimizing database performance, and creating responsive user interfaces. I have experience working on collaborative projects, and following best coding practices in building scalable applications.`}
								</p>
							</div>
						</div>
						{/* what i do */}
						<div className="py-[24px] flex flex-col gap-[24px] lg:[54px]">
							<h3 className="text-primary text-[32px] font-bold p-[12px] text-center md:text-right lg:text-[40px]">
								What I do
							</h3>
							<WhatIDoCards />
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
					<div className="bg-inverse scroll-mt-16" id="contact">
						{/* CONTACT ME */}
						<div className="py-[36px] px-[12px] flex flex-col gap-[12px] text-inverse max-w-6xl mx-auto">
							<h2 className="text-[48px] text-center md:text-[128px]">
								Contact me
							</h2>
							<div className="py-[16px] flex gap-[36px] justify-center">
								<a
									aria-label="LinkedIn Profile"
									href="https://www.linkedin.com/in/harvey-dangel-a4b09b355/"
									className="size-[48px] rounded-[12px] text-primary hover:text-inverse bg-card p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 hover:shadow-amber-400 hover:ring hover:ring-white active:scale-50"
								>
									<Linkedin className="size-[28px] text-center" />
								</a>
								<a
									aria-label="Github Profile"
									href="https://github.com/HarveyDangel"
									className="size-[48px] rounded-[12px] text-primary hover:text-inverse bg-card p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 hover:shadow-amber-400 hover:ring hover:ring-white active:scale-50"

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
			</main>
		</>
	);
}
