
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Download,
  Code2,
  Database,
  Globe,
  Instagram,
 
} from "lucide-react";
import { Link } from "react-router-dom";
import  Skills  from "../components/Skills";

const floatingTech = [
  { name: "React", icon: "⚛", className: "tech-react" },
  { name: "TypeScript", icon: "TS", className: "tech-ts" },
  { name: "Python", icon: "Py", className: "tech-python" },
  { name: "Django", icon: "dj", className: "tech-django" },
];

function Home() {
  return (
    <>
    <section className="hero section-container">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />

      <div className="hero-content">
        <motion.div
          className="availability"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="status-dot" />
          Available for opportunities
        </motion.div>

        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Hello, I'm <strong>Sadin Thapa</strong>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Building digital
          <br />
          experiences with
          <br />
          <span className="gradient-text">code & creativity.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I design and develop services for customers specializing in 
          creating stylish, modern websites, web services and online stores. 
          My passion is to design digital user experiences.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/projects" className="btn btn-primary">
            Explore My Work <ArrowRight size={18} />
          </Link>

          <Link to="/contact" className="btn btn-outline">
            Let's Connect
          </Link>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span>Follow me</span>

          <a href="https:///github.com/sadin07" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github />
          </a>
          <a href="https://instagram.com/sadin_thapa" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram />
          </a>

          <a href="/resume.pdf" download className="resume-link">
            <Download size={17} /> Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="avatar-scene">
          <div className="avatar-glow" />

          {floatingTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              className={`floating-tech ${tech.className}`}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span>{tech.icon}</span>
              <small>{tech.name}</small>
            </motion.div>
          ))}

          <div className="avatar-frame">
            <img
              src="/images/profile.png"
              alt="Illustrated developer avatar of Sadin"
              className="developer-avatar"
            />
          </div>

          <div className="avatar-caption">
            <span className="status-dot" />
            Web Designer & Frontend Developer
          </div>
        </div>
      </motion.div>
    </section>

    <Skills />
    </>
  );
}

export default Home;
