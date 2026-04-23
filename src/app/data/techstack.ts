export interface Techitem {
	id: string;
	name: string;
	category?: "frontend" | "backend" | "development tool" | "ai tool";
}

export const techStack: Techitem[] = [
	{
		id: "html",
		name: "HTML",
		category: "frontend",
	},
	{
		id: "css",
		name: "CSS",
		category: "frontend",
	},
	{
		id: "javascript",
		name: "JavaScript",
		category: "frontend",
	},
	{
		id: "php",
		name: "PHP",
		category: "backend",
	},
	{
		id: "github",
		name: "GitHub",
		category: "development tool",
	},
	{
		id: "git",
		name: "Git",
		category: "development tool",
	},
	{
		id: "laravel",
		name: "Laravel",
		category: "backend",
	},
	{
		id: "mysql",
		name: "MySQL",
		category: "backend",
	},
	{
		id: "nextjs",
		name: "Next.js",
		category: "frontend",
	},
	{
		id: "react",
		name: "React",
		category: "frontend",
	},
	{
		id: "typescript",
		name: "TypeScript",
		category: "frontend",
	},
	{
		id: "nodejs",
		name: "Node.JS",
		category: "backend",
	},
	{
		id: "npm",
		name: "NPM",
		category: "development tool",
	},
	{
		id: "tailwindcss",
		name: "Tailwind CSS",
		category: "frontend",
	},
	{
		id: "wordpress",
		name: "WordPress",
		category: "backend",
	},
	{
		id: "composer",
		name: "Composer",
		category: "development tool",
	},
	{
		id: "figma",
		name: "Figma",
		category: "development tool",
	},
	{
		id: "canva",
		name: "Canva",
		category: "development tool",
	},
	{
		id: "googlegemini",
		name: "Google Gemini",
		category: "ai tool",
	},
	{
		id: "googlesearchconsole",
		name: "Google Search Console",
		category: "development tool",
	},
	{
		id: "claude",
		name: "Claude",
		category: "ai tool",
	},
	{
		id: "openai",
		name: "ChatGPT",
		category: "ai tool",
	},
];
