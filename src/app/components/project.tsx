import Glasspane from "./glasspane";

export default function Project() {
	return (
		<>
			<div
				id="project"
				className="w-full max-w-[1280px] lg:h-screen flex flex-col px-[20px] py-[48px] lg:p-[68px] place-self-center"
			>
				{/* Container */}
				<div className="mb-[20px] w-full flex justify-center lg:justify-start">
					<h1 className="flex items-center text-[36px] lg:text-[40px] font-bold">
						Project
					</h1>
				</div>

				{/* <div className="hover:scale-105 transition-transform duration-200 ease-in-out">
					<Glasspane>
						<div className="flex flex-col items-center justify-center">
							<span className="text-3xl mb-2 text-center eventms-pic"></span>
							<span className="text-sm font-medium text-center">Hello</span>
						</div>
					</Glasspane>
				</div> */}

				<div className="flex flex-col lg:flex-row lg:justify-between gap-[16px] w-full">
					{/* Project Cards*/}
					<div className="flex lg:w-1/3 flex-grow flex-col transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 ">
						<a href="#">
							<Glasspane>
								{/* Image */}

								<div className="flex w-full overflow-hidden eventms-pic">
									{/* <div className=""></div> */}
								</div>
								{/* Details */}
								<div className="h-min-[200px] flex h-auto flex-grow flex-col text-[24px] font-bold text-[#F7F9FC] p-[8px]">
									<p className="">
										Project Title: <span>EventMS</span>
									</p>
									<p className="truncate text-[16px] font-normal">
										<span>
											An event management system for BiPSU Organization{" "}
										</span>
									</p>
									<div className="flex flex-wrap gap-2 mt-2">
										<p className="text-[16px] font-normal bg-red-500/85 px-2  rounded-2xl">{`Laravel`}</p>
										<p className="text-[16px] font-normal bg-blue-400/85 px-2  rounded-2xl">{`Tailwind`}</p>
										<p className="text-[16px] font-normal bg-blue-800/85 px-2  rounded-2xl">{`MySQL`}</p>
									</div>
								</div>
							</Glasspane>
						</a>
					</div>

					<div className="flex lg:w-1/3 flex-grow flex-col rounded-[8px] transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 ">
						<a href="#">
							<Glasspane>
								{/* Image */}

								<div className="flex w-full overflow-hidden text-center mmsgsm-pic">
									<div className=""></div>
								</div>
								{/* Details */}
								<div className="h-min-[200px] flex h-auto flex-grow flex-col text-[24px] font-bold text-[#F7F9FC] p-[8px]">
									<p className="">
										Project Title: <span>MMSGSM</span>
									</p>
									<p className="truncate text-[16px] font-normal">
										<span>
											A malnutrition monitoring system for Biliran Provincial
											Health Office
										</span>
									</p>
									<div className="flex flex-wrap gap-2 mt-2">
										<p className="text-[16px] font-normal bg-orange-500/85 px-2  rounded-2xl">{`HTML`}</p>
										<p className="text-[16px] font-normal bg-blue-500/85 px-2 rounded-2xl">{`CSS`}</p>
										<p className="text-[16px] font-normal bg-amber-500/85 px-2 rounded-2xl">{`JS`}</p>
										<p className="text-[16px] font-normal bg-indigo-400/85 px-2  rounded-2xl">{`PHP`}</p>
										<p className="text-[16px] font-normal bg-blue-800/85 px-2  rounded-2xl">{`MySQL`}</p>
										
									</div>
								</div>
							</Glasspane>
						</a>
					</div>

					<div className="flex lg:w-1/3 flex-grow flex-col rounded-[8px] transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 ">
						<a href="#">
							<Glasspane>
								{/* Image */}

								<div className="flex w-full overflow-hidden text-center wpportfolio-pic">
									<div className=""></div>
								</div>
								{/* Details */}
								<div className="h-min-[200px] flex h-auto flex-grow flex-col text-[24px] font-bold text-[#F7F9FC] p-[8px]">
									<p className="">
										Project Title: <span>{`HARB's`}</span>
									</p>
									<p className="truncate text-[16px] font-normal">
										<span>A Wordpress personal portfolio website.</span>
									</p>
									<div className="flex flex-wrap gap-2 mt-2">
										<p className="text-[16px] font-normal bg-blue-500/85 px-2  rounded-2xl">{`WordPress`}</p>
									</div>
								</div>
							</Glasspane>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
