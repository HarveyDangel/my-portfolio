import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<>
			<div className="max-w-6xl  mx-auto">
				<div className="w-full pt-5 flex flex-col-reverse md:flex-row lg:gap-[90px] h-full">
					{/* IMAGE */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<Image
							src="/images/avatar.png"
							alt="Profile Picture"
							width={500}
							height={500}
							className="object-cover overflow-visible h-[500px]"
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
							<h2 className="font-semibold text-[24px] lg:text-[32px]">
								Hi, I am
							</h2>
							<h2 className="text-4xl font-bold lg:text-[64px]">
								Harvey Dangel,
							</h2>
							<h2 className="mt-4 text-[14px] lg:text-[24px]">
								Software Engineer
							</h2>
						</motion.div>
						<motion.div
							className="flex gap-5 mt-5"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<a
								href="https://www.linkedin.com/in/harvey-dangel-a4b09b355/"
								className="size-[48px] rounded-[12px] bg-gray-800 p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:shadow-amber-400 hover:bg-amber-400 hover:ring hover:ring-amber-50 active:scale-50"
							>
								<Linkedin className="size-[28px] text-[#F7F9FC] text-center" />
							</a>
							<a
								href="https://github.com/HarveyDangel"
								className="size-[48px] rounded-[12px] bg-gray-800 p-[10px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:shadow-amber-400 hover:bg-amber-400 hover:ring hover:ring-amber-50 active:scale-50"
							>
								<Github className="size-[28px] text-[#F7F9FC]" />
							</a>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
}
