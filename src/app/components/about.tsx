export default function About() {
	return (
		<>
			<div
				id="about"
				className="w-full max-w-7xl flex flex-col items-center justify-center px-[20px] py-[50px] lg:p-[70px] place-self-center bg-[#232427] shadow-lg"
			>
				{/* Container */}
				<div className="mb-[20px] flex w-full justify-center lg:justify-start">
					<h1 className="flex items-center text-[36px] lg:text-[40px] lg:text-left font-bold text-[#F7F9FC]">
						About me
					</h1>
				</div>
				{/* Cards flex-row*/}
				<div className="w-full flex flex-col lg:flex-row justify-between gap-[10px] lg:gap-[20px]">
					{/*Cards-left flex-column */}
					<div className="flex flex-col gap-[10px] lg:gap-[20px] lg:w-1/2">
						{/* Cards */}
						<div
							className="flex h-auto min-h-[350px] w-auto flex-grow rounded-[24px] border-2 border-[#D9D9D9] text-center text-[220px] animate-pulse"
							//style={backgroundStyle}
						></div>
						<div className="rounded-[24px] border border-[#d9d9d970] bg-[#D9D9D930] p-[20px] text-[20px] text-wrap shadow-md">
							<p className="text-wrap">
								{`I'm a passionate web developer and a 4th-year BSCS student at
								BiPSU. I specialize in building interactive and efficient web
								applications using Laravel, HTML, CSS, JavaScript, MySQL, and
								PHP. I enjoy solving complex problems and continuously learning
								new technologies to improve my craft.`}
							</p>
						</div>
					</div>

					{/* Cards-right flex-column */}
					<div className="flex flex-col gap-[10px] lg:gap-[20px] lg:w-1/2">
						{/* cards */}
						<div className="rounded-[24px] border border-[#d9d9d970] bg-[#D9D9D930] p-[20px] text-[20px] text-wrap shadow-md">
							<p className="">
								{`I have experience in developing user interfaces for web
								applications, focusing on creating responsive and intuitive
								designs. Additionally, I have worked with databases to manage
								and retrieve data efficiently. As part of the Malnutrition
								Monitoring System (MMSGSM) project in collaboration with the
								Provincial Health Office (PHO), I have contributed to building a
								system that helps track and analyze nutritional data. Through
								this project, I have collaborated with teams using version
								control systems, followed coding standards to maintain clean and
								organized code, and implemented best practices to enhance both
								performance and user experience.`}
							</p>
						</div>
						<div className="rounded-[24px] border border-[#d9d9d970] bg-[#D9D9D930] p-[20px] text-[20px] text-wrap shadow-md">
							<p className="">
								{`Beyond coding, I enjoy playing strategy games like Command &
								Conquer: Generals, which challenges my tactical thinking and
								resource management skills. I love the thrill of building bases,
								managing armies, and executing strategic attacks to outmaneuver
								opponents. The game’s diverse factions and unique playstyles
								keep every match engaging and dynamic. When it comes to physical
								activities, I prefer swimming because it’s both refreshing and a
								full-body workout, helping me stay active without feeling overly
								strenuous. The weightless feeling in the water also makes it a
								great way to relax and clear my mind.`}
							</p>
						</div>
						<div className="rounded-[24px] border border-[#d9d9d970] bg-[#D9D9D930] p-[20px] text-[20px] text-wrap shadow-md">
							<p className="">
								{`My goal is to become a skilled full-stack developer and
								eventually contribute to large-scale software solutions that
								make a difference. I'm always open to new opportunities,
								collaborations, and exciting challenges in the field of web
								development. `}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
