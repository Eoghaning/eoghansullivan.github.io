import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import CV from "./pages/CV/CV";
import Blog from "./pages/Blog/Blog";
import "./App.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="site">
      <Navbar activeSection={activeSection} />
      <About />
      <Projects />
      <CV />
      <Blog />
    </div>
  );
}