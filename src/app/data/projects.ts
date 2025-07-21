export interface ProjectDetails {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: ProjectDetails[] = [
  {
    id: 1,
    title: "Event Management System",
    description: "An event management system for BiPSU Organization.",
    technologies: ["Laravel", "Tailwind CSS", "Blade", "MySQL"],
    imageUrl: "/images/EventMS.png",
    // liveUrl: "https://project-demo.com",
    githubUrl: "https://github.com/HarveyDangel/eventsmanagementsystem",
  },
  {
    id: 2,
    title: "Geo-Spatial Mapping and Monitoring System of Malnutrition Trends",
    description: "A malnutrition mapping and monitoring system for Biliran Provincial Health Office.",
    technologies: ["HTML", "BootStrap CSS", "JavaScript", "PHP", "MySQL"],
    imageUrl: "/images/MMSGSM.png",
    // liveUrl: "https://another-project.com",
    githubUrl: "https://github.com/HarveyDangel/malnutrition-monitoring-system",
  },
  {
    id: 3,
    title: "Another Project",
    description: "A Wordpress personal portfolio website.",
    technologies: ["Wordpress", "Local WP"],
    imageUrl: "/images/WP.png",
    // liveUrl: "https://another-project.com",
    githubUrl: "https://github.com/HarveyDangel/wpPortfolio",
  },
];