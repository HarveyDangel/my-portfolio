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
    title: "Event Management System of Students Organization of BiPSU",
    description: "A web-based platform designed for Biliran Province State University (BiPSU) to simplify event scheduling, tracking, and feedback collection. It allows students, faculty, and administrators to manage events efficiently with role-based access control.",
    technologies: ["Laravel", "Tailwind CSS", "Blade", "MySQL"],
    imageUrl: "/images/EventMS.png",
    // liveUrl: "https://project-demo.com",
    githubUrl: "https://github.com/HarveyDangel/eventsmanagementsystem",
  },
  {
    id: 2,
    title: "Geo-Spatial Mapping and Monitoring System of Malnutrition Trends",
    description: "A web-based platform for mapping and monitoring malnutrition cases in Biliran Island using PHP, MySQL, and Leaflet.js with role-based access for DOH, PHO, and RHU.",
    technologies: ["HTML", "BootStrap CSS", "JavaScript", "PHP", "MySQL"],
    imageUrl: "/images/MMSGSM.png",
    // liveUrl: "https://another-project.com",
    githubUrl: "https://github.com/HarveyDangel/malnutrition-monitoring-system",
  },
  {
    id: 3,
    title: "Wordpress Personal Portfolio Website as a Web Developer",
    description: "This project is a Personal Web Portfolio designed and developed using WordPress with WordPress Local as the development environment. The portfolio serves as an online presence to showcase my skills, projects, and experiences in web development.",
    technologies: ["Wordpress", "Local WP"],
    imageUrl: "/images/WP.png",
    // liveUrl: "https://another-project.com",
    githubUrl: "https://github.com/HarveyDangel/wpPortfolio",
  },
];