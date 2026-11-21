
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Lightbulb,
  GraduationCap
} from "lucide-react";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React", "Python", "Django", "Git", "GitHub"
];

function About() {
  return (
    <section className="page-section section-container">
      <div className="page-heading">
        <span className="eyebrow">GET TO KNOW ME</span>
        <h1>About <span className="gradient-text">Me</span></h1>
        <p>A little introduction about who I am and what I do.</p>
      </div>

      <div className="about-grid">
        <motion.div
          className="about-card about-main"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="card-icon"><Code2 /></span>
          <h2>My Journey</h2>
          <p>
            I'm Sadin Thapa, an aspiring web developer who enjoys
            turning ideas into functional and beautiful digital
            experiences.
          </p>
          <p>
            I enjoy exploring new technologies, solving problems
            and building projects that help me grow as a developer.
          </p>
        </motion.div>

        <motion.div
          className="about-card"
          whileHover={{ y: -6 }}
        >
          <span className="card-icon"><Palette /></span>
          <h3>Creative Thinking</h3>
          <p>I enjoy designing clean interfaces and exploring creative solutions.</p>
        </motion.div>

        <motion.div
          className="about-card"
          whileHover={{ y: -6 }}
        >
          <span className="card-icon"><Lightbulb /></span>
          <h3>Continuous Learning</h3>
          <p>Always learning new technologies and improving my development skills.</p>
        </motion.div>
      </div>

      <div className="skills-section">
        <div className="section-title">
          <h2>My <span className="gradient-text">Skills</span></h2>
          <p>Technologies and tools I work with.</p>
        </div>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="skill-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="education-card">
        <span className="card-icon"><GraduationCap /></span>
        <div>
          <h2>Education</h2>
          <p>Bachelor in Computer Engineering from Pokhara Engineering College (2021 - 2026)</p>
        </div>
      </div>
    </section>
  );
}

export default About;
