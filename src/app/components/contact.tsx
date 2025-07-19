import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Github, Linkedin } from "lucide-react";

export default function Contact() {
	return (
		<>
			<footer
				id="contact"
				className="flex w-full bg-[#232C3D]"
			>
				<div className="w-full max-w-[1200px] mx-auto flex flex-col px-[20px] py-[50px] lg:p-[20px]">
					{/* title */}
					<div className="mb-[20px] flex justify-center">
						<h1 className="flex items-center text-[36px] lg:text-[40px] font-bold">
							Contact Me
						</h1>
					</div>
					{/* main contact details */}
					<div className="flex flex-col lg:flex-row gap-[20px] lg:justify-between py-[20px] font-normal">
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

					<div className="flex flex-col-reverse items-center lg:flex-row lg:items-end gap-[20px] lg:justify-between pt-[70px] font-thin text-[24]">
						<p>© 2025 All rights reserved.</p>
						<div className="flex gap-[40px]">
							{/* <a
							href="https://www.facebook.com/profile.php?id=100007451268533"
							className="size-[68px] rounded-full bg-[#545F7F] p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
						>
							<Facebook className="size-[48px] text-[#F7F9FC]" />
						</a> */}
							<a
								href="https://www.linkedin.com/in/harvey-dangel-a4b09b355/"
								className="size-[68px] rounded-full bg-[#545F7F] p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
							>
								<Linkedin className="size-[48px] text-[#F7F9FC]" />
							</a>
							<a
								href="https://github.com/HarveyDangel"
								className="size-[68px] rounded-full bg-[#545F7F] p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
							>
								<Github className="size-[48px] text-[#F7F9FC]" />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
