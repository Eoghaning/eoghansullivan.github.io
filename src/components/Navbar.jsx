import { useState } from "react";

const NAV_LINKS = ["About", "Projects", "CV", "Blog"];

const scrollTo = (id) => {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <span className="nav-logo" onClick={() => scrollTo("about")}>
        Eoghan Sullivan Portfolio
      </span>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <button
            key={l}
            className={`nav-link ${activeSection === l.toLowerCase() ? "active" : ""}`}
            onClick={() => { scrollTo(l); setMenuOpen(false); }}
          >
            {l}
          </button>
        ))}
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}