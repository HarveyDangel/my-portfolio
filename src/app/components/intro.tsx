export default function Intro() {
	return (
		<div
			id="home"
			className="w-full max-w-[1280px] h-[75vh] flex items-center justify-center px-[70px] place-self-center"
		>
			<div className="flex w-full items-center justify-between">
				<div>
					<h1 className="font-bold text-[64px]">
						Hi! I'm <span className="text-[#50E3C2]">Harvey Dangel</span>,
					</h1>
					<h1 className="text-[40px]">an aspiring Web Developer.</h1>
					<p className="text-[20px] mb-[10px]">
						A 4th-year BSCS student at BiPSU, specializing in web development
						using Laravel, HTML, CSS, JavaScript, MySQL, and PHP.
					</p>
					<div className="flex gap-[30px]">
						<a
							href="#contact"
							className="rounded-[10px] bg-indigo-500 p-[10px] text-[20px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400"
						>
							Contact me
						</a>
						<a
							href="#project"
							className="rounded-[10px] bg-indigo-500 p-[10px] text-[20px] shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400"
						>
							View Projects
						</a>
					</div>
				</div>
				<div>
					<div className="max-h-[350px] min-h-[350px] min-w-[350px] rounded-full border-12 border-[#50E3C2] text-center text-[220px] motion-safe:animate-pulse"></div>
				</div>
			</div>
		</div>
	);
}
