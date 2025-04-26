import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/ab-logo.jpg";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex felx-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/amandeep-bollampalli/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/amandeep265"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://github.com/Amandeep563"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/amandeep_bollampalli/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};
