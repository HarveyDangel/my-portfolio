import GlassPane from "./glasspane";

export default function Services() {
	return (
		<>
			<div className="w-full max-w-7xl flex justify-center px-[20px] py-[50px] lg:p-[110px] place-self-center bg-[#232427] gap-[20px]">
				<div className="w-full">
					<h1 className="place-self-end text-[36px] lg:text-[40px] lg:text-left font-bold text-[#F7F9FC] mb-[20px]">
						What I do
					</h1>
					<div className="flex gap-[10px] lg:gap-[20px]">
						<GlassPane>
                     <h1 className="text-[24px] text-center lg:text-[28px] font-bold text-[#F7F9FC] mb-[20px]">
                        Web Development
                     </h1>
							lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</GlassPane>
						<GlassPane>
                     <h1 className="text-[24px] text-center lg:text-[28px] font-bold text-[#F7F9FC] mb-[20px]">
                        UI/UX Design
                     </h1>
							lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</GlassPane>
					</div>
				</div>
			</div>
		</>
	);
}
