export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics?: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number; icon: string }[];
}

export const portfolioData = {
  name: "Muhammed Shuhiab U",
  title: "Full-Stack Developer & BCA Student",
  tagline: "Final-year BCA student building modern, responsive web applications and scalable APIs.",
  status: "Open to Software Internships & Full-Time Developer Roles",
  bio: "I'm a final-year Bachelor of Computer Applications (BCA) student at Kannur University with a deep passion for full-stack software development. I specialize in building responsive React and Next.js user interfaces, RESTful backend APIs, and database-driven web applications.",
  email: "ujampadyshuahib@gmail.com",
  phone: "+91 9400376093",
  github: "https://github.com/ujampadyshuhaib-cpu",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  location: "Kasaragod, Kerala, India (Open to Remote & Relocation)",
  stats: [
    { label: "Academic Standing", value: "BCA Final Year" },
    { label: "University", value: "Kannur Univ" },
    { label: "Projects Completed", value: "10+" },
    { label: "Core Focus", value: "Full-Stack Web" },
  ],
  skills: [
    {
      name: "Frontend",
      skills: [
        { name: "React.js & Next.js", level: 90, icon: "atom" },
        { name: "JavaScript (ES6+) & TypeScript", level: 88, icon: "code" },
        { name: "HTML5 & Modern CSS3", level: 95, icon: "palette" },
        { name: "Tailwind CSS & Bootstrap", level: 92, icon: "palette" },
        { name: "Responsive & Mobile-First Design", level: 90, icon: "sparkles" },
      ],
    },
    {
      name: "Backend & Databases",
      skills: [
        { name: "Node.js & Express.js", level: 85, icon: "server" },
        { name: "Python / Core Programming", level: 82, icon: "terminal" },
        { name: "MongoDB & Mongoose", level: 84, icon: "database" },
        { name: "MySQL / Relational DBMS", level: 86, icon: "database" },
        { name: "RESTful API Architecture", level: 88, icon: "network" },
      ],
    },
    {
      name: "Tools & Fundamentals",
      skills: [
        { name: "Git & GitHub Version Control", level: 88, icon: "git-merge" },
        { name: "Object-Oriented Programming (OOP)", level: 85, icon: "cpu" },
        { name: "Data Structures & Algorithms", level: 80, icon: "cpu" },
        { name: "Postman & API Testing", level: 85, icon: "zap" },
      ],
    },
  ],
  projects: [
    {
      id: "campus-connect",
      title: "Campus Connect Portal",
      description: "College management and student collaboration portal featuring announcements, event schedules, and resource sharing.",
      longDescription: "Developed a centralized student-faculty web platform with user authentication, departmental notice boards, and document sharing using React, Node.js, and MongoDB.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      metrics: "Live student collaboration tool",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      id: "quick-cart",
      title: "QuickCart E-Commerce",
      description: "Full-stack responsive e-commerce web application with product search, filtering, shopping cart state management, and checkout.",
      longDescription: "Implemented a full-featured shopping storefront with dynamic category filters, persistent cart state, user auth, and an administrative product catalog manager.",
      tags: ["Next.js", "JavaScript", "Tailwind CSS", "REST API"],
      metrics: "Sub-second page navigation & cart sync",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      id: "task-flow",
      title: "TaskFlow Productivity Hub",
      description: "Intuitive kanban board and personal task management web app with drag-and-drop workflow and priority labels.",
      longDescription: "Engineered a reactive productivity dashboard enabling students to track assignments, set deadlines, and organize study goals with local and cloud data persistence.",
      tags: ["React", "TypeScript", "Tailwind CSS", "LocalStorage API"],
      metrics: "100% responsive cross-device layout",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      id: "weather-pulse",
      title: "WeatherPulse Live Dashboard",
      description: "Interactive real-time weather forecasting application with location search, 7-day forecast cards, and animated weather metrics.",
      longDescription: "Integrated third-party OpenWeather REST APIs to deliver instant meteorological data, UV index, humidity graphs, and dynamic weather condition backgrounds.",
      tags: ["JavaScript", "OpenWeather API", "CSS Grid", "Axios"],
      metrics: "Instant live API data fetching",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
    },
  ],
  experiences: [
    {
      role: "Bachelor of Computer Applications (BCA) — 3rd Year",
      company: "Kannur University",
      period: "2023 — 2026 (Expected)",
      location: "Kannur, Kerala, India",
      highlights: [
        "Pursuing comprehensive coursework in Data Structures, Database Management Systems (DBMS), Web Technologies, Software Engineering, and Computer Networks.",
        "Developing hands-on full-stack academic and independent projects with React, Node.js, JavaScript, and SQL.",
        "Actively participating in technical seminars, coding challenges, and college software development initiatives.",
      ],
    },
    {
      role: "Independent Full-Stack Web Projects",
      company: "Self-Directed Software Development",
      period: "2023 — Present",
      location: "Kerala, India",
      highlights: [
        "Built and deployed responsive web applications adopting modern design principles, clean code structure, and Git version control.",
        "Designed RESTful APIs, handled frontend state management, and connected applications to relational and NoSQL databases.",
      ],
    },
  ],
};
