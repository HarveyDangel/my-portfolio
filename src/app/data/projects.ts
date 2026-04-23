export interface ProjectDetails {
	id: number;
	title: string;
	description: string;
	role: string;
	timeline: string;
	platform: string;
	technologies: string[];
	technicalMetrics: {
		schema: {
			title: string;
			metric: string;
			details: string;
		};
		architecture: {
			title: string;
			metric: string;
			details: string;
		};
		security: {
			title: string;
			metric: string;
			details: string;
		};
		responsiveness: {
			title: string;
			metric: string;
			details: string;
		};
	};
	// schemaComplexity: string[];
	// buildArchitecture: string[];
	// securityAudit: string[];
	// responsiveness: string[];
	theProblem: string;
	theSolution: string;
	features: {
		title: string;
		detail: string;
	}[];
	theChallenges: {
		title: string;
		description: string;
	}[];
	imageUrl: string;
	liveUrl?: string;
	githubUrl?: string;
}

export const projects: ProjectDetails[] = [
	{
		id: 1,
		title: "Event Management System of Students Organization of BiPSU",
		description:
			"A web-based platform designed to simplify event scheduling, tracking, and feedback collection. It allows students, faculty, and administrators to manage events efficiently with role-based access control.",
		role: "Lead Developer",
		timeline: "7 weeks",
		platform: "Web",
		technologies: ["Laravel", "Tailwind CSS", "Blade", "MySQL"],
		technicalMetrics: {
			schema: {
				title: "Schema Complexity",
				metric: "+12 Relational Tables",
				details:
					"Normalized MySQL structure with optimized indexing for relational queries.",
			},
			architecture: {
				title: "Build Architecture",
				metric: "Monolithic Design",
				details:
					"80% Backend Logic, Modular PHP classes following MVC pattern for high maintainability.",
			},
			security: {
				title: "Security Audit",
				metric: "4 Layer Protection",
				details:
					"Implement CSRF tokens, SQL Injection prevention, and bcrypt password hashing.",
			},
			responsiveness: {
				title: "Responsiveness",
				metric: "3 Breakpoints",
				details:
					"Fully fluid layout optimized for Mobile, Tablet, and Desktop views.",
			},
		},
		theProblem:
			"Student organizations at Biliran Province State University frequently encountered scheduling conflicts when booking campus venues. Without a centralized system, venues were often double-booked for the same time slot, or overlapping durations led to logistical chaos. These bottlenecks created significant administrative strain and unnecessary stress for student organizers, often forcing last-minute event cancellations or venue changes.",
		theSolution:
			"I developed a comprehensive Event Management System designed to act as a single source of truth for campus resources. The system features a real-time availability checker and a robust scheduling engine that mathematically prevents overlapping bookings. By providing organizers with a transparent view of upcoming events and venue statuses, the tool eliminated scheduling uncertainty and streamlined the entire event planning lifecycle.",
		features: [
			{
				title: "Request Management",
				detail:
					"Capture venue, date, time, and duration with integrated constraint checking.",
			},
			{
				title: "Admin Audit Portal",
				detail:
					"Strategic dashboard for administrators to verify and approve scheduling requests.",
			},
			{
				title: "Consolidated Timeline",
				detail: "A streamlined public view of all upcoming confirmed events.",
			},
			{
				title: "Real-time Feedback",
				detail:
					"Instant system status and booking notifications for event organizers.",
			},
		],
		theChallenges: [
			{
				title: "Defining Administrative Hierarchy",
				description:
					"One of the primary challenges was translating university policy into code. Specifically, determining which administrative branch held the authority to finalize bookings. I had to design a permission-based workflow that could handle competing requests based on organizational priority.",
			},
			{
				title: "Handling Priority Conflicts",
				description:
					"Given the university’s limited physical space, I had to implement a 'Pending Request' logic. This allowed administrators to evaluate and prioritize high-impact events over routine meetings when multiple organizations vied for the same high-demand venue.",
			},
		],
		// theChallenges:["", ""],
		imageUrl: "/images/EventMS.png",
		// liveUrl: "https://project-demo.com",
		githubUrl: "https://github.com/HarveyDangel/eventsmanagementsystem",
	},
	{
		id: 2,
		title: "Geo-Spatial Mapping and Monitoring System of Malnutrition Trends",
		description:
			"A web-based platform for mapping and monitoring malnutrition cases in Biliran Island using PHP, MySQL, and Leaflet.js with role-based access for DOH, PHO, and RHU.",
		role: "Lead Developer",
		timeline: "16 weeks",
		platform: "Web",
		technologies: ["HTML", "BootStrap CSS", "JavaScript", "PHP", "MySQL"],
		technicalMetrics: {
			schema: {
				title: "Schema Complexity",
				metric: "+10 Relational Tables",
				details:
					"Normalized MySQL structure with optimized indexing for relational queries.",
			},
			architecture: {
				title: "Build Architecture",
				metric: "Monolithic Design",
				details:
					"90% Backend Logic, Modular PHP classes for high maintainability.",
			},
			security: {
				title: "Security Audit",
				metric: "4 Layer Protection",
				details:
					"Implement SQL Injection prevention, and bcrypt password hashing.",
			},
			responsiveness: {
				title: "Responsiveness",
				metric: "No Breakpoints",
				details:
					"The UX/UI design is focused in Desktop view",
			},
		},
		theProblem:
			"The Provincial Health Office (PHO) of Biliran struggled with a fragmented and time-consuming reporting process for child malnutrition. Staff were forced to manually audit local files to identify which municipalities had failed to submit consolidated data or which barangays had missing records. This lack of centralized visibility delayed critical health interventions and increased the risk of data inaccuracies.",
		theSolution:
			"I developed a centralized Malnutrition Monitoring System that automates data consolidation for the Biliran PHO. By integrating Geo-spatial Mapping, the system provides real-time visibility into provincial health status, allowing administrators to instantly identify reporting gaps and malnutrition 'hotspots' through an interactive visual interface.",
		theChallenges: [
			{
				title: "Late-Stage UI Pivot",
				description:
					"When the project was near completion, stakeholder requirements shifted, necessitating a major UI overhaul. I navigated this by decoupling the frontend components from the core logic, allowing for a rapid redesign without breaking the existing PHP reporting engine.",
			},
			{
				title: "Infrastructure Limitations",
				description:
					"The PHO lacked the high-end server hardware and cloud budget typical of modern web apps. I engineered the system to be 'resource-light,' optimizing database queries and asset delivery so the platform could run reliably on local intranets and modest hardware.",
			},
		],
		features: [
			{
				title: "Geospatial Mapping",
				detail:
					"Interactive visual tracking of malnutrition hotspots across the province.",
			},
			{
				title: "Trend Analytics",
				detail:
					"Statistical monitoring of child health metrics over specific periods.",
			},
			{
				title: "Automated Reporting",
				detail:
					"Instant generation of consolidated municipal and provincial records.",
			},
			{
				title: "User Audit Logs",
				detail:
					"Comprehensive tracking of administrative actions for data security.",
			},
		],
		imageUrl: "/images/MMSGSM.png",
		// liveUrl: "https://another-project.com",
		githubUrl: "https://github.com/HarveyDangel/malnutrition-monitoring-system",
	},
	// {
	//   id: 3,
	//   title: "Wordpress Personal Portfolio Website as a Web Developer",
	//   description: "This project is a Personal Web Portfolio designed and developed using WordPress with WordPress Local as the development environment. The portfolio showcases my skills, projects, and experience as a web developer, providing a platform to highlight my work and connect with potential clients or employers.",
	//   role: "Owner/Developer",
	//   technologies: ["Wordpress", "Local WP"],
	//   imageUrl: "/images/WP.png",
	//   // liveUrl: "https://another-project.com",
	//   githubUrl: "https://github.com/HarveyDangel/wpPortfolio",
	// },
];
