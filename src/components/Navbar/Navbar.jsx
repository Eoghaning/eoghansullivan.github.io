import { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "View Projects", section: "Projects" },
  { label: "Download CV", section: "CV" },
  { label: "View Blogs", section: "Blog" }
];

const scrollTo = (id) => {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar({ activeSection, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={"nav" + (scrolled ? " nav--scrolled" : "")}>
      <div className="nav-logo" onClick={() => scrollTo("about")}>
        <img src="/eoghanlogo.png" alt="Eoghan Sullivan logo" className="nav-logo-img" />
        </div>
        <h2>Eoghan Sullivan Portfolio</h2>
      
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <button
            key={l.label}
            className={`nav-link ${activeSection === l.section.toLowerCase() ? "active" : ""}`}
            onClick={() => { scrollTo(l.section); setMenuOpen(false); }}
          >
            {l.label}
          </button>
        ))}
      </div>
      <ThemeToggle />
      <button className={"hamburger" + (menuOpen ? " open" : "")} onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}