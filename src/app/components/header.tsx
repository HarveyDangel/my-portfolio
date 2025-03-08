export default function Header() {
	return (
		<div className="flex justify-center w-full max-h-[96px] top-0">
			<header className="w-full max-w-[1280px] h-full p-[30px] flex items-center justify-between">
				<h1 className="text-[40px] font-bold animate-pulse">HARBs</h1>
				<div className="text-[24px] flex items-center gap-[30px]">
					<a href="#" className="hover:text-indigo-500">
						Home
					</a>
					<a href="#" className="hover:text-indigo-500">
						About
					</a>
					<a href="#" className="hover:text-indigo-500">
						Projects
					</a>
					<a href="#" className="hover:text-indigo-500">
						Contact
					</a>
				</div>
			</header>
		</div>
	);
}
