import {
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiWordpress,
	SiFigma,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiGithub,
	SiGit,
	SiLaravel,
	SiMysql,
	SiCanva,
	SiPhp,
	SiNodedotjs,
	SiNpm,
	SiComposer,
	SiGooglegemini,
	SiClaude,
	SiGooglesearchconsole,
	SiOpenai,
   SiExpo,
} from "react-icons/si";
import { Terminal } from "lucide-react";

// 1. Define the Map outside the component so it's only created once
const ICON_MAP: Record<string, React.ReactNode> = {
	react: <SiReact size={16} />,
	"next.js": <SiNextdotjs size={16} />,
	php: <SiPhp size={16} />,
	mysql: <SiMysql size={16} />,
	tailwindcss: <SiTailwindcss size={16} />,
	typescript: <SiTypescript size={16} />,
	expo: <SiExpo size={16} />,
   "wordpress": <SiWordpress size={16} />,
   "figma": <SiFigma size={16} />,
   "html": <SiHtml5 size={16} />,
   "css": <SiCss3 size={16} />,
   "javascript": <SiJavascript size={16} />,
   "github": <SiGithub size={16} />,
   "git": <SiGit size={16} />,
   "laravel": <SiLaravel size={16} />,
   "node.js": <SiNodedotjs size={16} />,
   "npm": <SiNpm size={16} />,
   "composer": <SiComposer size={16} />,
   "googlegemini": <SiGooglegemini size={16} />,
   "claude": <SiClaude size={16} />,
   "googlesearchconsole": <SiGooglesearchconsole size={16} />,
   "openai": <SiOpenai size={16} />,
   "canva": <SiCanva size={16} />,
	// Fallback icon for anything else
	default: <Terminal size={16} />,
};

// 2. The actual component
export default function TechIcon({ id, className }: { id: string; className?: string }) {
	// We check if the name exists in our map, otherwise use default
	const icon = ICON_MAP[id.toLowerCase()] || ICON_MAP["default"];

	return (
		<span className={`flex items-center justify-center text-inherit ${className || ""}`}>
			{icon}
		</span>
	);
}
