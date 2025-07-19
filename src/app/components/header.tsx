import Button from "./button";
import Link from "next/link";

export default function Header() {
	return (
		<div className="flex justify-center w-full lg:max-h-[96px] top-0">
			<header className="w-full lg:max-w-[1280px] h-full lg:p-[28px] flex flex-col lg:flex-row justify-between items-center">
				<div>
					<h1 className="text-[36px] font-bold bg-clip-text text-transparent bg-gradient-to-bl from-amber-500 from-10% to-teal-500 to-90%">
						HARBs
					</h1>
				</div>

				<div className="flex items-center gap-6 lg:gap-[28px]">
					<nav className="hidden lg:flex gap-[30px] text-[18px]">
						<Link href="/" className="hover:text-blue-500">
							Home
						</Link>
						<Link href="/#about" className="hover:text-blue-500 transition-colors">
							About
						</Link>
						<Link
							href="/#project"
							className="hover:text-blue-500 transition-colors"
						>
							Projects
						</Link>
						<Link
							href="#contact"
							className="hover:text-blue-500 transition-colors"
						>
							Contact
						</Link>

						{/* <Link href="/project" className="hover:text-blue-500">
							Portfolio
						</Link> */}
					</nav>
				</div>
				<Button className="lg:ml-4">
					<a href="#contact">Contact me</a>
				</Button>
			</header>
		</div>
	);
}
