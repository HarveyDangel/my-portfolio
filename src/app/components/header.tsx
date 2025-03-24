export default function Header() {
	return (
		<div className="flex justify-center w-full lg:max-h-[96px] top-0">
			<header className="w-full lg:max-w-[1280px] h-full lg:p-[30px] lg:items-center lg:justify-between justify-center">
				<div>
					<h1 className="text-[36px] font-bold bg-clip-text text-transparent  bg-gradient-to-bl from-amber-500 from-10% to-teal-500 to-90%">
						HARBs
					</h1>
				</div>
				<div className="hidden text-[18px] lg:flex items-center lg:gap-[30px] place-self-center">
					<a href="#home" className="hover:text-amber-400">
						Home
					</a>
					<a href="#about" className="hover:text-amber-400">
						About
					</a>
					<a href="#project" className="hover:text-amber-400">
						Projects
					</a>
					<a href="#contact" className="hover:text-amber-400">
						Contact
					</a>
				</div>
			</header>
		</div>
	);
}
