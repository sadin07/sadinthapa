

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
};

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const projects: Project[] = [
  {
    id: 1,
    title: "Student Management System",
    description: "A system for managing student information and records.",
    image: withBase("images/studentmanagement.png"),
    technologies: ["Django","Python", "HTML", "CSS"],
    github: "https://github.com/sadin07",
    demo: "",
  },
  {
    id: 2,
    title: "RaktaKhoj",
    description: "A blood donation platform connecting donors and recipients.",
    image: withBase("images/raktakhoj.png"),
    technologies: ["Django","Python", "HTML", "CSS"],
    github: "https://github.com/sadin07",
    demo: "",
  },
  {
    id: 3,
    title: "Book Review Hub",
    description: "A web application for reviewing and rating books.",
    image: withBase("images/bookreview.png"),
    technologies: ["Django","Python", "HTML", "CSS"],
    github: "https://github.com/sadin07",
    demo: "",
  },
  {
    id: 4,
    title: "SkillFuel",
    description: "A skill-learning platform featuring video tutorials, live classes, learner discussions, progress tracking and certificates.",
    image: withBase("images/skillfuel-logo.png"),
    technologies: ["Django","Python","React","Typescript", "HTML", "CSS"],
    github: "https://github.com/sadin07",
    demo: "",
  },
  {
    id: 5,
    title: "Riverview Restaurant",
    description: "A restaurant website for a local eatery.",
    image: withBase("project-placeholder.svg"),
    technologies: ["React","Typescript", "HTML", "CSS"],
    github: "https://github.com/sadin07",
    demo: "https://sadin07.github.io/Riverview/",
  },
  {
    id: 6,
    title: "Portfolio",
    description: "A personal portfolio website showcasing my projects and skills.",
    image: withBase("project-placeholder.svg"),
    technologies: ["React","Typescript", "HTML", "CSS"],
    github: "https://github.com/sadin07",
    demo: "#",
  },

];
