
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design';
  level: number; // 1-100
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Neon Cyber Dashboard",
    description: "A futuristic analytics dashboard featuring real-time data visualization, dark mode aesthetics, and interactive charts.",
    tags: ["React", "D3.js", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Redux",
    description: "A modern shopping experience with seamless cart management, payment integration, and responsive product grids.",
    tags: ["Next.js", "Redux", "Stripe", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1472851294608-415522f96319?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    featured: true
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "An interface for generating creative artwork using stable diffusion models with custom parameter controls.",
    tags: ["React", "Python", "FastAPI", "AI"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    link: "#",
    featured: false
  },
  {
    id: 4,
    title: "Social Connect App",
    description: "A social networking platform focused on community building with real-time chat and event planning features.",
    tags: ["Vue.js", "Firebase", "Socket.io"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    link: "#",
    featured: false
  },
  {
    id: 5,
    title: "Crypto Portfolio Tracker",
    description: "Track your cryptocurrency investments in real-time with detailed profit/loss analysis and market trends.",
    tags: ["React Native", "CoinGecko API", "Chart.js"],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1974&auto=format&fit=crop",
    link: "#",
    featured: true
  }
];

export const skills: Skill[] = [
  { name: "React", category: "Frontend", level: 95 },
  { name: "TypeScript", category: "Frontend", level: 90 },
  { name: "Tailwind CSS", category: "Frontend", level: 95 },
  { name: "Three.js", category: "Frontend", level: 75 },
  { name: "Node.js", category: "Backend", level: 85 },
  { name: "PostgreSQL", category: "Backend", level: 80 },
  { name: "GraphQL", category: "Backend", level: 70 },
  { name: "Figma", category: "Design", level: 85 },
  { name: "Git", category: "Tools", level: 90 },
  { name: "Docker", category: "Tools", level: 75 }
];

export const timeline = [
  {
    year: "2024",
    title: "Senior Frontend Engineer",
    company: "TechFlow Solutions",
    description: "Leading the frontend team in building next-gen web applications using React and AI integration."
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "Creative Digital Agency",
    description: "Developed and maintained multiple client projects ranging from e-commerce sites to corporate portals."
  },
  {
    year: "2020",
    title: "Junior Web Developer",
    company: "StartUp Inc.",
    description: "Collaborated with designers to implement responsive UI components and optimize website performance."
  }
];
