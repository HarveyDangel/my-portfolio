import ScrollAnimation from "./scroll-animation";

export default function WhatIDoCards() {
  return (
    <div className="flex flex-col gap-[24px] p-[12px] md:flex-row">
      <ScrollAnimation
        animation="slide-in-left"
        className="flex flex-col flex-1/2 gap-[10px] p-8 bg-card rounded-3xl shadow-sm border border-card"
      >
        <h4 className="p-[10px] text-center text-[24px] font-medium">
          Software Development
        </h4>
        <p className="text-[14px] text-justify lg:text-[16px]">{`I build robust, scalable applications with a focus on performance and maintainability. From architecting cross-platform mobile solutions to streamlining deployment pipelines, I ensure the logic is as seamless as the user experience.`}</p>
      </ScrollAnimation>
      <ScrollAnimation
        animation="slide-in-left"
        className="flex flex-col flex-1/2 gap-[10px] p-8 bg-card rounded-3xl shadow-sm border border-card"
      >
        <h4 className="p-[10px] text-center text-[24px] font-medium">
          UX/UI Design
        </h4>
        <p className="text-[14px] text-justify lg:text-[16px]">{`Design is more than just aesthetics, it's about how a product feels and functions. I focus on creating intuitive interfaces that turn complex data into actionable insights through thoughtful interaction and visual clarity.`}</p>
      </ScrollAnimation>
    </div>
  );
}
