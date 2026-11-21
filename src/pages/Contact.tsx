
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram
} from "lucide-react";

function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  const name = data.get("name");
  const email = data.get("email");
  const subject = data.get("subject");
  const message = data.get("message");

  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=YOUR_EMAIL@gmail.com&su=${encodeURIComponent(
    String(subject)
  )}&body=${encodeURIComponent(body)}`;

  window.open(gmailUrl, "_blank", "noopener,noreferrer");
};

  return (
    <section className="page-section section-container">
      <div className="page-heading">
        <span className="eyebrow">GET IN TOUCH</span>
        <h1>Let's <span className="gradient-text">Connect</span></h1>
        <p>Have a project or opportunity? I'd love to hear from you.</p>
      </div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2>Let's build something great together.</h2>
          <p>
            Feel free to reach out for collaboration, opportunities
            or just to say hello.
          </p>

          <div className="contact-detail">
            <Mail />
            <div>
              <span>Email</span>
              <a href="mailto:your@email.com">sadinthapa@email.com</a>
            </div>
          </div>

          <div className="contact-detail">
            <MapPin />
            <div>
              <span>Location</span>
              <p>Sarangkot, Pokhara-18, Nepal</p>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/sadin07" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a href="https://instagram.com/sadin_thapa" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram />
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="What is this about?"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            rows={5}
            required
          />

          <button type="submit" className="btn btn-primary">
            Send Message <Send size={17} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
