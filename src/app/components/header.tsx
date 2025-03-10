export default function Header() {
	return (
		<div className="flex justify-center w-full lg:max-h-[96px] top-0">
			<header className="w-full lg:max-w-[1280px] h-full lg:p-[30px] flex lg:items-center lg:justify-between justify-center">
				<h1 className="text-[40px] font-bold animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">HARBs</h1>
				<div className="hidden text-[24px] lg:flex items-center lg:gap-[30px]">
					<a href="#home" className="hover:text-indigo-500">
						Home
					</a>
					<a href="#about" className="hover:text-indigo-500">
						About
					</a>
					<a href="#project" className="hover:text-indigo-500">
						Projects
					</a>
					<a href="#contact" className="hover:text-indigo-500">
						Contact
					</a>
				</div>
			</header>
		</div>
	);
}
