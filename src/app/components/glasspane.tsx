"use client"

import React from "react";

import { ReactNode, useEffect, useRef } from "react";

interface GlassPaneProps {
	children: ReactNode;
	className?: string;
}

export default function GlassPane({ children, className = "" }: GlassPaneProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const handleMouseMove = (e: MouseEvent) => {
			const rect = container.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			container.style.setProperty("--x", `${x}px`);
			container.style.setProperty("--y", `${y}px`);
		};

		container.addEventListener("mousemove", handleMouseMove);
		return () => container.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div
			ref={containerRef}
			className={`rounded-[8px] border-1 border-white/60 bg-gradient-to-tr from-white/10 to-white/20 lg:text-[16px] shadow-lg text-wrap w-full
         relative
         before:absolute before:content-[''] before:w-[100px] before:h-[100px] 
         before:bg-white/20 before:rounded-full before:blur-[50px] 
         before:opacity-0 before:transition-opacity before:duration-300
         before:-z-10 before:left-[var(--x,50%)] before:top-[var(--y,50%)] 
         before:-translate-x-1/2 before:-translate-y-1/2
         hover:before:opacity-100 
         ${className}`}
		>
			{children}
		</div>
	);
}
