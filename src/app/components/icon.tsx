import { ReactNode } from "react";

interface IconProps {
  children: ReactNode;
}

export default function Icon({children}: IconProps) {
   return (
      <div className="sized-[100px]">
         {children}
      </div>
   );
}