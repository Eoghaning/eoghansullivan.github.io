import { useState, useRef } from "react";
import "./Projects.css";

const MAIN_PROJECTS = [
  {
    title: "SenseAIm",
    subtitle: "CS2 Anti-Cheat Platform",
    desc: "Community platform with ML-based gameplay analysis to detect cheating in uploaded CS2 clips. Combined traditional detection with AI predictions, plus social features — posts, reactions, comments, real-time DMs.",
    tags: ["Django", "React", "Python", "ML"],
    detail: "2-person team · 53 passing tests",
  },
  {
    title: "VibeCoder AI",
    subtitle: "Gemini-Powered Code Generator",
    desc: "Interactive web app using Google's Gemini API to generate JavaScript code, canvas drawings, and games from natural language prompts across three modes, with conversation memory and live iframe preview.",
    tags: ["JavaScript", "Gemini API", "AI"],
    detail: "3 generation modes · Live preview",
  },
  {
    title: "Custom Shell",
    subtitle: "Unix-like Shell in C",
    desc: "Functional Unix shell from scratch in C with Makefile build system. Supports interactive and batch modes, internal commands, process forking, and file redirection.",
    tags: ["C", "Linux", "Systems"],
    detail: "Interactive + batch modes",
  },
];

const MORE_PROJECTS = [
  {
    title: "Portfolio Website",
    subtitle: "React Portfolio Site",
    desc: "Custom-built portfolio website to showcase projects, skills, and CV. Features a dark theme, responsive design, and interactive sections. Deployed via Netlify with continuous integration.",
    tags: ["React", "JavaScript", "CSS", "Netlify"],
    detail: "Portfolio Website",
  },
];

const TOTAL_PROJECTS = MAIN_PROJECTS.length + MORE_PROJECTS.length;

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const moreHeadingRef = useRef(null);

  const handleToggle = () => {
    const nextShowMore = !showMore;
    setShowMore(nextShowMore);
    if (nextShowMore) {
      // Only scroll when expanding (showing projects)
      setTimeout(() => {
        if (moreHeadingRef.current) {
          const yOffset = -80; 
          const y = moreHeadingRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <section id="projects" className="page-section">
      <div className="page-inner">
        <div className="section-header">
          <h1>My Projects</h1>
          <div className="project-count-badge">
            Total: {TOTAL_PROJECTS} projects
          </div>
        </div>

        <h2 style={{ textAlign: 'center' }}>Main Projects</h2>
        <br/>
        <div className="projects-grid">
          {MAIN_PROJECTS.map((p, i) => (
            <div key={p.title} className="project-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="project-top">
                <span className="project-num">0{i + 1}</span>
                <span className="project-detail">{p.detail}</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <div className="project-subtitle">{p.subtitle}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <br/><br/>
        <div style={{ textAlign: 'center' }}>
          <h2 ref={moreHeadingRef}>More Projects</h2>
          <button className="btn-primary toggle-more-btn" onClick={handleToggle}>
            {showMore ? "▲ Hide" : "▼ Show"}
          </button>
        </div>

        {showMore && (
          <div className="projects-grid">
            {MORE_PROJECTS.map((p, i) => (
              <div key={p.title} className="project-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="project-top">
                  <span className="project-num">0{MAIN_PROJECTS.length + i + 1}</span>
                  <span className="project-detail">{p.detail}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <div className="project-subtitle">{p.subtitle}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}