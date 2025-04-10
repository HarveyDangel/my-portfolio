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

				<div className="flex flex-col lg:flex-row lg:justify-between gap-[20px] w-full h-full">
					{/* Project Cards*/}
					<div className="flex h-auto lg:w-1/3 flex-grow flex-col rounded-[8px] transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 ">
						<Glasspane>
							{/* Image */}

							<div
								className="flex min-h-[250px] h-2/3 w-full overflow-hidden text-center text-[220px]"
								//  style={backgroundStyle}
							></div>
							{/* Details */}
							<div className="h-min-[200px] flex h-auto flex-grow flex-col text-[20px] font-bold text-[#F7F9FC]">
								<p className="">
									Project Title: <span>EventMS</span>
								</p>
								<p className="truncate text-[16px] font-normal">
									<span>An event management system for BiPSU Organization </span>
								</p>
							</div>
						</Glasspane>
					</div>

					<div className="flex h-auto lg:w-1/3 flex-grow flex-col rounded-[8px] transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 ">
						<Glasspane>
							{/* Image */}

							<div
								className="flex min-h-[250px] h-2/3 w-full overflow-hidden text-center text-[220px]"
								//  style={backgroundStyle}
							></div>
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

					<div className="flex h-auto lg:w-1/3 flex-grow flex-col rounded-[8px] transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 ">
						<Glasspane>
							{/* Image */}

							<div
								className="flex min-h-[250px] h-2/3 w-full overflow-hidden text-center text-[220px]"
								//  style={backgroundStyle}
							></div>
							{/* Details */}
							<div className="h-min-[200px] flex h-auto flex-grow flex-col text-[20px] font-bold text-[#F7F9FC]">
								<p className="">
									Project Title: <span>Chirper</span>
								</p>
								<p className="truncate text-[16px] font-normal">
									<span>
										A Posting App that is from Laravel bootcamp which allows users to post and share their stories
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
