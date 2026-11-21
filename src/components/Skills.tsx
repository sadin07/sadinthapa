
import {
  motion
} from "framer-motion";

import {
  Code2,
  Database,
  Server,
  Terminal
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive interfaces.",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React"]
  },
  {
    title: "Backend Development",
    description: "Creating APIs and server-side applications.",
    icon: Server,
    skills: ["Python", "Django", "REST API"]
  },
  {
    title: "Database Management",
    description: "Working with structured data and storage.",
    icon: Database,
    skills: ["PostgreSQL", "SQLite", "SQL"]
  },
  {
    title: "Tools & Technologies",
    description: "Development tools and workflow management.",
    icon: Terminal,
    skills: ["Git", "GitHub", "VS Code", "npm"]
  }
];

function Skills() {
  return (
    <section className="skills-section section-container">
      <div className="section-heading">
        <span className="eyebrow">MY TECH STACK</span>
        <h2>
          Technologies I <span className="gradient-text">Work With</span>
        </h2>
        <p>Tools and technologies I use to bring ideas to life.</p>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              className="skill-group-card"
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -7 }}
            >
              <div className="skill-group-icon">
                <Icon size={25} />
              </div>

              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
