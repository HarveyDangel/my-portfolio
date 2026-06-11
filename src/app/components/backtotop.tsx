"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 100) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		};
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button
			onClick={scrollToTop}
			className={`fixed bottom-6 right-6 p-3 rounded-[8px] bg-gray-800 text-white shadow-lg hover:bg-amber-500 hover:ring hover:ring-white hover:shadow-amber-400 transition-all duration-100 ${
				visible ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"
			}`}
		>
			↑
		</button>
	);
}
