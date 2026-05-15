"use client"

import React from "react";

import { ReactNode, useEffect, useRef } from "react";

interface CardProps {
   children: ReactNode;
   className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
   return (
      <div
         className={`rounded-3xl bg-gradient-to-br from-slate-50 to-white lg:text-[16px] shadow-sm text-wrap w-full border border-slate-200
         relative
         ${className}`}
      >
         {children}
      </div>
   );
}
