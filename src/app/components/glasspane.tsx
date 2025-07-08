import { ReactNode } from "react";

interface GlassPaneProps {
  children: ReactNode;
}

export default function GlassPane({children}: GlassPaneProps) {

   return (
      <div className="rounded-[8px] border-1 border-white/60 bg-gradient-to-tr from-white/10 to-white/30 lg:text-[16px] text-wrap w-full">
         {children}
      </div>
   );
}