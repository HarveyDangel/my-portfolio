import Glasspane from "./glasspane";

export default function Project() {
	return (
		<>
			<div
				id="project"
				className="w-full max-w-[1280px] lg:h-screen flex flex-col px-[20px] py-[50px] lg:p-[70px] place-self-center"
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

				<div className="flex flex-col lg:flex-row lg:justify-between gap-[20px] w-full">
					{/* Project Cards*/}
					<div className="flex lg:w-1/3 flex-grow flex-col rounded-[8px] transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 ">
						<Glasspane>
							{/* Image */}

							<div className="flex w-full overflow-hidden text-center eventms-pic">
								{/* <div className=""></div> */}
							</div>
							{/* Details */}
							<div className="h-min-[200px] flex h-auto flex-grow flex-col text-[20px] font-bold text-[#F7F9FC]">
								<p className="">
									Project Title: <span>EventMS</span>
								</p>
								<p className="truncate text-[16px] font-normal">
									<span>
										An event management system for BiPSU Organization{" "}
									</span>
								</p>
							</div>
						</Glasspane>
					</div>

					<div className="flex lg:w-1/3 flex-grow flex-col rounded-[8px] transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 ">
						<Glasspane>
					{/* Image */}

					<div
								className="flex w-full overflow-hidden text-center mmsgsm-pic"
							>
								<div className=""></div>
							</div>
					{/* Details */}
					<div className="h-min-[200px] flex h-auto flex-grow flex-col text-[20px] font-bold text-[#F7F9FC]">
								<p className="">
									Project Title: <span>MMSGSM</span>
								</p>
								<p className="truncate text-[16px] font-normal">
									<span>
										A malnutrition monitoring system for Biliran Provincial
										Health Office
									</span>
								</p>
							</div>
						</Glasspane>
					</div>

					<div className="flex lg:w-1/3 flex-grow flex-col rounded-[8px] transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 ">
						<Glasspane>
					{/* Image */}

					<div
								className="flex w-full overflow-hidden text-center wpportfolio-pic"
							>
								<div className=""></div>
							</div>
					{/* Details */}
					<div className="h-min-[200px] flex h-auto flex-grow flex-col text-[20px] font-bold text-[#F7F9FC]">
								<p className="">
									Project Title: <span>{`HARB's`}</span>
								</p>
								<p className="truncate text-[16px] font-normal">
									<span>
										A Wordpress personal portfolio website.
									</span>
								</p>
							</div>
						</Glasspane>
					</div>

				</div>
			</div>
		</>
	);
}
