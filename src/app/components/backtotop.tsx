"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
		<motion.button
			initial={{ opacity: 0, scale: 0.9 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.1 }}
			viewport={{ once: false }}
			onClick={scrollToTop}
			className={`fixed bottom-6 right-6 p-3 rounded-[8px] bg-gray-800 text-white shadow-lg hover:bg-amber-500 hover:ring hover:ring-white hover:shadow-amber-400 transition ${
				visible ? "block" : "hidden"
			}`}
		>
			↑
		</motion.button>
	);
}
