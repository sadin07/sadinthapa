

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Student Management System",
    description: "A system for managing student information and records.",
    image: "/images/studentmanagement.png",
    technologies: ["Django","Python", "HTML", "CSS"],
    github: "https://github.com/",
    demo: "",
  },
  {
    id: 2,
    title: "RaktaKhoj",
    description: "A blood donation platform connecting donors and recipients.",
    image: "/images/raktakhoj.png",
    technologies: ["Django","Python", "HTML", "CSS"],
    github: "https://github.com/",
    demo: "",
  },
  {
    id: 3,
    title: "Book Review Hub",
    description: "A web application for reviewing and rating books.",
    image: "/images/bookreview.png",
    technologies: ["Django","Python", "HTML", "CSS"],
    github: "https://github.com/",
    demo: "",
  },
  {
    id: 4,
    title: "SkillFuel",
    description: "A skill-learning platform featuring video tutorials, live classes, learner discussions, progress tracking and certificates.",
    image: "/images/skillfuel-logo.png",
    technologies: ["Django","Python","React","Typescript", "HTML", "CSS"],
    github: "https://github.com/",
    demo: "",
  },
  {
    id: 5,
    title: "Riverview Restaurant",
    description: "A restaurant website for a local eatery.",
    image: "/images/portfolio.png",
    technologies: ["React","Typescript", "HTML", "CSS"],
    github: "https://github.com/",
    demo: "https://sadin07.github.io/Riverview/",
  },
  {
    id: 6,
    title: "Portfolio",
    description: "A personal portfolio website showcasing my projects and skills.",
    image: "/images/portfolio.png",
    technologies: ["React","Typescript", "HTML", "CSS"],
    github: "https://github.com/",
    demo: "#",
  },

];
