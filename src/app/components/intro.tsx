import Button from "./button";
import GlassPane from "./glasspane";
import Image from "next/image";

export default function Intro() {
	return (
		<div
			id="home"
			className="w-full px-[18px] py-[48px] lg:max-w-[1280px] lg:h-[75vh] flex items-center justify-center lg:px-[112px] place-self-center"
		>
			<div className="flex flex-col-reverse gap-[16px] w-full items-center lg:flex-row lg:justify-between">
				{/* group 1 */}
				<div>
					<h1 className="text-[36px] text-center lg:text-left font-bold lg:text-[58px]">
						{`Hi! I'm `}
						<span className="text-[#D5FF4B]">{`Harvey Dangel`}</span>,
					</h1>
					<h1 className="text-[24px] text-center lg:text-left lg:text-[40px]">
						{`an aspiring Software Developer.`}
					</h1>
					<br />
					<div className="flex gap-[30px] justify-center lg:justify-start">
						<Button>
							<a href="#project">View Projects</a>
						</Button>
					</div>
				</div>
				{/* group 2 */}
				<div className="">
					<GlassPane
						className="rounded-full"
					>
						<Image
							src="/images/avatar.png"
							alt="Profile Picture"
							width={300}
							height={300}
							className="object-cover border-1 border-white/60 rounded-full w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]"
							priority
						/>
						{/* <div className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full border-1 border-white/60 text-center text-[220px] overflow-hidden">
							<div className="avatar size-full rounded-full"></div>
						</div> */}
					</GlassPane>
				</div>
			</div>
		</div>
	);
}
