export default function Project() {
	return (
		<>
			<div
				id="project"
				className="w-full max-w-[1280px] lg:h-screen flex flex-col px-[20px] py-[50px] lg:p-[70px] place-self-center bg-[#F7F9FC]"
			>
				{/* Container */}
				<div className="mb-[20px] w-full flex justify-center lg:justify-start">
					<h1 className="flex items-center text-[36px] lg:text-[40px] font-bold text-[#232427]">
						Project
					</h1>
				</div>

				<div className="flex flex-col lg:flex-row lg:justify-between gap-[20px] w-full h-full">

					{/* Project Cards*/}
					<div className="flex h-auto min-h-[350px] lg:w-1/3 flex-grow flex-col overflow-hidden rounded-[24px] bg-[#545F7F] shadow-lg transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#545F7FDD]">
						{/* Image */}
						<div
							className="flex min-h-[250px] h-2/3 w-full overflow-hidden text-center text-[220px]"
							//  style={backgroundStyle}
						></div>
						{/* Details */}
						<div className="h-min-[200px] flex h-auto flex-grow flex-col p-[20px] text-[20px] font-bold text-[#F7F9FC] shadow-md">
							<p className="">
								Project Title: <span>EventMS</span>
							</p>
							<p className="truncate">
								Description: <span>An event management system</span>
							</p>
						</div>
					</div>

					<div className="flex h-auto min-h-[350px] lg:w-1/3 flex-grow flex-col overflow-hidden rounded-[24px] bg-[#545F7F] shadow-lg transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#545F7FDD]">
						{/* Image */}
						<div
							className="flex min-h-[250px] h-2/3 w-full overflow-hidden text-center text-[220px]"
							//  style={backgroundStyle}
						></div>
						{/* Details */}
						<div className="h-min-[200px] flex h-auto flex-grow flex-col p-[20px] text-[20px] font-bold text-[#F7F9FC] shadow-md">
							<p className="">
								Project Title: <span>MMSGSM</span>
							</p>
							<p className="truncate">
								Description: <span>A malnutrition monitoring system</span>
							</p>
						</div>
					</div>

					<div className="flex h-auto min-h-[350px] lg:w-1/3 flex-grow flex-col overflow-hidden rounded-[24px] bg-[#545F7F] shadow-lg transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#545F7FDD]">
						{/* Image */}
						<div
							className="flex min-h-[250px] h-2/3 w-full overflow-hidden text-center text-[220px]"
							//  style={backgroundStyle}
						></div>
						{/* Details */}
						<div className="h-min-[200px] flex h-auto flex-grow flex-col p-[20px] text-[20px] font-bold text-[#F7F9FC] shadow-md">
							<p className="">
								Project Title: <span>Chirper</span>
							</p>
							<p className="truncate">
								Description: <span>Posting App</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
