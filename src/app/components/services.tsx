import GlassPane from "./glasspane";
import Icon from "./icon";
import TechStack from "./techstack";

export default function Services() {
	return (
		<>
			<div className="w-full max-w-7xl flex justify-center px-[20px] py-[50px] lg:px-[110px] lg: place-self-center bg-[#232427] gap-[20px]">
				<div className="w-full">
					<h1 className="place-self-end text-[36px] lg:text-[40px] lg:text-left font-bold text-[#F7F9FC] mb-[20px]">
						What I do
					</h1>
					<div className="flex gap-[10px] lg:gap-[20px]">
						<GlassPane>
                     <h1 className="text-[24px] text-center lg:text-[28px] font-bold text-[#F7F9FC] mb-[20px]">
                        Web Development
                     </h1>
							{`If you need a developer to handle the research and development of your website, I have the skills and experience to help.`}
						</GlassPane>
						<GlassPane>
                     <h1 className="text-[24px] text-center lg:text-[28px] font-bold text-[#F7F9FC] mb-[20px]">
                        UI/UX Design
                     </h1>
							{`An effective UI/UX grabs attention and communicates a clear message. I ensure the design is both innovative and clean.`}
						</GlassPane>
					</div>
					<div className="flex justify-center gap[10px] lg:gap-[20px] flex-col pt-[50px]">
						<div>
							<TechStack></TechStack>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
