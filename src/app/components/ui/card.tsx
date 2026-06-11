"use client"

import React from "react";

import { ReactNode} from "react";

interface CardProps {
   children: ReactNode;
   className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
   return (
      <div
         className={`rounded-3xl bg-card lg:text-[16px] shadow-sm text-wrap w-full border border-card
         relative
         ${className}`}
      >
         {children}
      </div>
   );
}
