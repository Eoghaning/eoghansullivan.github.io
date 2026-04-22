import { useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "View Projects", section: "Projects" },
  { label: "Download CV", section: "CV" },
  { label: "View Blogs", section: "Blog" }
];

const scrollTo = (id) => {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => scrollTo("about")}>
        <img src="/eoghanlogo.png" alt="Logo" className="nav-logo-img" />
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
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}