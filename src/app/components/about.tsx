export default function About() {
	return (
		<>
			<div
				id="about"
				className="w-full max-w-7xl flex flex-col items-center justify-center p-[70px] place-self-center bg-[#232427] shadow-lg"
			>
				{/* Container */}
				<div className="mb-[20px] w-full">
					<h1 className="flex items-center text-[40px] font-bold text-[#F7F9FC]">
						About me
					</h1>
				</div>
				{/* Cards flex-row*/}
				<div className="w-full flex justify-between gap-[20px]">
					{/*Cards-left flex-column */}
					<div className="flex flex-col gap-[20px] w-1/2">
						{/* Cards */}
						<div
							className="flex h-auto min-h-[350px] w-auto flex-grow rounded-[24px] border-2 border-[#D9D9D9] text-center text-[220px] animate-pulse"
							//style={backgroundStyle}
						></div>
						<div className="rounded-[24px] border border-[#d9d9d970] bg-[#D9D9D930] p-[20px] text-[20px] text-wrap shadow-md">
							<p className="text-wrap">
								I'm a passionate web developer and a 4th-year BSCS student at
								BiPSU. I specialize in building interactive and efficient web
								applications using Laravel, HTML, CSS, JavaScript, MySQL, and
								PHP. I enjoy solving complex problems and continuously learning
								new technologies to improve my craft.
							</p>
						</div>
					</div>

					{/* Cards-right flex-column */}
					<div className="flex flex-col gap-[20px] w-1/2">
						{/* cards */}
						<div className="rounded-[24px] border border-[#d9d9d970] bg-[#D9D9D930] p-[20px] text-[20px] text-wrap shadow-md">
							<p className="">
								My expertise includes developing full-stack applications,
								optimizing database performance, and creating responsive user
								interfaces. I have experience working on real-world projects,
								collaborating with teams, and following best coding practices to
								build scalable applications.
							</p>
						</div>
						<div className="rounded-[24px] border border-[#d9d9d970] bg-[#D9D9D930] p-[20px] text-[20px] text-wrap shadow-md">
							<p className="">
								Beyond coding, I love exploring new tech trends, participating
								in hackathons, and contributing to open-source projects. In my
								free time, I enjoy playing strategy games, reading about AI
								advancements, and hiking to reconnect with nature.
							</p>
						</div>
						<div className="rounded-[24px] border border-[#d9d9d970] bg-[#D9D9D930] p-[20px] text-[20px] text-wrap shadow-md">
							<p className="">
								My goal is to become a skilled full-stack developer and
								eventually contribute to large-scale software solutions that
								make a difference. I'm always open to new opportunities,
								collaborations, and exciting challenges in the field of web
								development.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
