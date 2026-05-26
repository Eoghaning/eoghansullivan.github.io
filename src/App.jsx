import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import CV from "./pages/CV/CV";
import Blog from "./pages/Blog/Blog";
import "./App.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "cv", "blog"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          setActiveSection(id);
          break;
        }
      }
      setShowBackToTop(window.scrollY > 400);
      setNavbarScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-slide-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">
      <a href="#about" className="skip-link">Skip to content</a>
      <Navbar activeSection={activeSection} scrolled={navbarScrolled} />
      <About />
      <Projects />
      <CV />
      <Blog />
      <button
        className={"back-to-top" + (showBackToTop ? " visible" : "")}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        &#8593;
      </button>
    </div>
  );
}