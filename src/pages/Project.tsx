
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  X,
  Info,
} from "lucide-react";
import { projects } from "../data/projects";

function Projects() {
  const [showDemoNotice, setShowDemoNotice] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");

  const handleDemoClick = (projectTitle: string) => {
    setSelectedProject(projectTitle);
    setShowDemoNotice(true);
  };

  const closeDemoNotice = () => {
    setShowDemoNotice(false);
  };

  return (
    <section className="page-section section-container">
      {/* Page Heading */}
      <div className="page-heading">
        <span className="eyebrow">MY RECENT WORK</span>
        <h1>
          Featured <span className="gradient-text">Projects</span>
        </h1>
        <p>Some projects I've built and worked on.</p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            whileHover={{ y: -8 }}
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />

              <span className="project-number">
                {String(project.id).padStart(2, "0")}
              </span>
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              {/* Technologies */}
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {/* Project Links */}
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={17} />
                    GitHub
                  </a>
                )}

                <a
                  href={project.demo || "#"}
                  target={project.demo ? "_blank" : undefined}
                  rel={project.demo ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (!project.demo) {
                      e.preventDefault();
                      handleDemoClick(project.title);
                    }
                  }}
                >
  Live Demo <ExternalLink size={16} />
</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* More Projects */}
      <div className="projects-more">
        <p>Have an interesting project in mind?</p>
        <a href="#/contact">
          Let's work together <ArrowUpRight size={17} />
        </a>
      </div>

      {/* Demo Unavailable Modal */}
      <AnimatePresence>
        {showDemoNotice && (
          <motion.div
            className="demo-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDemoNotice}
          >
            <motion.div
              className="demo-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="demo-modal-title"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="demo-modal-close"
                onClick={closeDemoNotice}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              <div className="demo-modal-icon">
                <Info size={27} />
              </div>

              <h2 id="demo-modal-title">
                Demo Currently Unavailable
              </h2>

              <p>
                The live demo for <strong>{selectedProject}</strong> is
                currently unavailable. Thank you for your interest!
                Please check back later.
              </p>

              <button
                className="btn btn-primary demo-modal-button"
                onClick={closeDemoNotice}
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
