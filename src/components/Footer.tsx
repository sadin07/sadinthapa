
import { Github, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <Link to="/" className="logo">
            SADIN<span>.</span>
          </Link>
          <p>Building digital experiences with creativity.</p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github />
          </a>
          <a href="https://instagram.com/sadin_thapa" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram />
          </a>
          <a href="mailto:sadinthapa@email.com" aria-label="Email">
            <Mail />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sadin. All rights reserved.</p>
        <Link to="/contact">
          Get in touch <ArrowUpRight size={14} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
