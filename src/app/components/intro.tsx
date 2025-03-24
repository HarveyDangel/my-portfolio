export default function Intro() {
	return (
		<div
			id="home"
			className="w-full px-[20px] py-[50px] lg:max-w-[1280px] lg:h-[75vh] flex items-center justify-center lg:px-[70px] place-self-center"
		>
			<div className="flex flex-col-reverse gap-[20px] w-full items-center lg:flex-row lg:justify-between">
				{/* group 1 */}
				<div>
					<h1 className="text-[36px] text-center lg:text-left font-bold lg:text-[64px]">
						Hi! I&apos;m <span className="text-amber-500">Harvey Dangel</span>,
					</h1>
					<h1 className="text-[24px] text-center lg:text-left lg:text-[40px]">an aspiring Web Developer.</h1>
					{/* <p className="text-center lg:text-[20px] lg:text-left mb-[10px]">
						A 4th-year BSCS student at BiPSU, specializing in web development
						using Laravel, HTML, CSS, JavaScript, MySQL, and PHP.
					</p> */}
					<br />
					<div className="flex gap-[30px] justify-center lg:justify-start">
						<a
							href="#contact"
							className="rounded-[8px] bg-gradient-to-bl from-amber-300/50 to-amber-950/50 border border-amber-300/50
							p-[10px] text-[15px] lg:text-[20px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-amber-300 hover:bg-amber-300/70"
						>
							Contact me
						</a>
						<a
							href="#project"
							className="rounded-[8px] bg-gradient-to-bl from-amber-300/50 to-amber-950/50 border border-amber-300/50 p-[10px] text-[15px] lg:text-[20px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-amber-300  hover:bg-amber-300/70"
						>
							View Projects
						</a>
					</div>
				</div>
				{/* group 2 */}
				<div>
					<div className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full border-12 border-amber-500 text-center text-[220px] overflow-hidden">
						<div className="avatar size-full"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
