import Button from "./button";

export default function Header() {
	return (
		<div className="flex justify-center w-full lg:max-h-[96px] top-0">
			<header className="w-full lg:max-w-[1280px] h-full lg:p-[30px] flex flex-col lg:flex-row justify-between items-center">
				<div>
					<h1 className="text-[36px] font-bold bg-clip-text text-transparent bg-gradient-to-bl from-amber-500 from-10% to-teal-500 to-90%">
						HARBs
					</h1>
				</div>

				<div className="flex items-center gap-6 lg:gap-[30px]">
					<nav className="hidden lg:flex gap-[30px] text-[18px]">
						<a href="#home" className="hover:text-amber-400 transition-colors">
							Home
						</a>
						<a href="#about" className="hover:text-amber-400 transition-colors">
							About
						</a>
						<a
							href="#project"
							className="hover:text-amber-400 transition-colors"
						>
							Projects
						</a>
						<a
							href="#contact"
							className="hover:text-amber-400 transition-colors"
						>
							Contact
						</a>
					</nav>
				</div>
				<Button className="lg:ml-4">
					<a href="#contact">Contact me</a>
				</Button>
			</header>
		</div>
	);
}
