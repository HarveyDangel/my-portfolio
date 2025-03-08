import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Facebook, Github, Linkedin } from "lucide-react";

export default function Contact() {
	return (
		<>
			<footer
				id="contact"
				className="flex w-full flex-col justify-center bg-[#232C3D] p-[70px] text-[#F7F9FC]"
			>
				{/* title */}
				<div className="mb-[20px] flex justify-center">
					<h1 className="flex items-center text-[40px] font-bold">
						Contact Me
					</h1>
				</div>
				{/* main contact details */}
				<div className="flex justify-between py-[20px] font-normal">
					<div className="flex items-center gap-[10px]">
						<MapPinIcon className="size-[38px] text-[#F7F9FC]" />
						<p>
							Brgy. Hugpa Biliran, Biliran <br /> Philippines
						</p>
					</div>
					<div className="flex items-center gap-[10px]">
						<EnvelopeIcon className="size-[38px] text-[#F7F9FC]" />
						<p>harveydangel@gmail.com</p>
					</div>
					<div className="flex items-center gap-[10px]">
						<PhoneIcon className="size-[38px] text-[#F7F9FC]" />
						<p>+6390-9999-9999</p>
					</div>
				</div>
				<div className="flex items-end justify-between pt-[70px] font-thin text-[24]">
					<p>© 2025 All rights reserved.</p>
					<div className="flex gap-[40px]">
						<a
							href="https://www.facebook.com/HarveyDangel"
							className="size-[68px] rounded-full bg-[#545F7F] p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
						>
							<Facebook className="size-[48px] text-[#F7F9FC]" />
						</a>
						<a
							href="https://www.linkedin.com/"
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
			</footer>
		</>
	);
}
