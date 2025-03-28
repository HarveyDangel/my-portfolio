export default function About() {
	return (
		<>
			<div
				id="about"
				className="w-full max-w-7xl flex justify-center px-[20px] py-[50px] lg:p-[110px] place-self-center bg-[#232427] gap-[20px]"
			>
				{/* Container */}
				<div className="flex flex-col w-1/2 justify-center lg:justify-start">
					<h1 className="flex items-center text-[36px] lg:text-[40px] lg:text-left font-bold text-[#F7F9FC] mb-[20px]">
						About me
					</h1>
					<div className="flex gap-[10px]">
						<p className="font-bold text-[128px] text-[#e0fa8c] -mt-10">"</p>
						<p className="lg:text-[32px] shadow-text">
							A 4th-year BSCS student at BiPSU, specializing in web development
							using Laravel, HTML, CSS, JavaScript, MySQL, and PHP"
						</p>
					</div>
				</div>
				{/* Cards flex-row*/}
				<div className="w-1/2 flex flex-col lg:flex-row justify-between gap-[10px] lg:gap-[20px]">
					{/*Cards-left flex-column */}
					<div className="flex flex-col gap-[10px] lg:gap-[20px]">
						{/* Cards */}
						{/* <div
							className="flex h-auto min-h-[350px] w-auto flex-grow rounded-[8px] border border-[#D9D9D9] text-center text-[220px] about-pic"
							//style={backgroundStyle}
						></div> */}
						<div className="rounded-[8px] border-1 border-white/60 bg-gradient-to-tr from-white/10 to-white/30 p-[20px] lg:text-[16px] text-wrap">
							<p className="text-wrap">
								{`I'm a passionate web developer and a 4th-year BSCS student at
								BiPSU. I specialize in building interactive and efficient web
								applications using Laravel, HTML, CSS, JavaScript, MySQL, and
								PHP. I enjoy solving complex problems and continuously learning
								new technologies to improve my craft.`}
							</p>
						</div>
						<div className="rounded-[8px] border border-white/60 bg-gradient-to-tr from-white/10 to-white/30 p-[20px] lg:text-[16px] text-wrap shadow-lg">
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
						{/* <div className="rounded-[8px] border border-green-300/50 bg-gradient-to-tr from-green-950/50 to-green-300/50 p-[20px] lg:text-[16px] text-wrap shadow-lg">
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
						</div> */}
						<div className="rounded-[8px] border border-white/60 bg-gradient-to-tr from-white/10 to-white/30 p-[20px] lg:text-[16px] text-wrap shadow-lg">
							<p className="text-wrap">
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
