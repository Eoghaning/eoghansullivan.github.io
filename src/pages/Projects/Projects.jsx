import { useState, useRef } from "react";
import "./Projects.css";

import { project as senseaim } from './main_projects/senseaim.js';
import { project as vibecoder } from './main_projects/vibecoder.js';
import { project as customShell } from './main_projects/custom-shell.js';
import { project as portfolio } from './more_projects/portfolio.js';

const MAIN_PROJECTS = [senseaim, vibecoder, customShell];
const MORE_PROJECTS = [portfolio];

const TOTAL_PROJECTS = MAIN_PROJECTS.length + MORE_PROJECTS.length;

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const moreHeadingRef = useRef(null);

  const handleToggle = () => {
    const nextShowMore = !showMore;
    setShowMore(nextShowMore);
    if (nextShowMore) {
      setTimeout(() => {
        if (moreHeadingRef.current) {
          const yOffset = -80; 
          const y = moreHeadingRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  const renderProjectCard = (project, index, baseNumber) => {
    const p = project.preview;
    return (
      <div
        key={p.title}
        className="project-card clickable-card"
        onClick={() => openModal(project)}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="project-top">
          <span className="project-num">0{baseNumber + index + 1}</span>
          <span className="project-detail">{p.detail}</span>
        </div>
        <h3 className="project-title">{p.title}</h3>
        <div className="project-subtitle">{p.subtitle}</div>
        <p className="project-desc">{p.desc}</p>
        <div className="project-tags">
          {p.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="page-section">
      <div className="page-inner">
        <div className="section-header">
          <h1>
            My Projects <span className="heading-small">– Click to view</span>
          </h1>
          <div className="project-count-badge">
            Total: {TOTAL_PROJECTS} projects
          </div>
        </div>

        <h2 className="projects-heading" style={{ textAlign: 'center' }}>Main Projects</h2>
        <br/>
        <div className="projects-grid">
          {MAIN_PROJECTS.map((p, i) => renderProjectCard(p, i, 0))}
        </div>

        <br/><br/>
        <div style={{ textAlign: 'center' }}>
          <h2 ref={moreHeadingRef} className="projects-heading">More Projects</h2>
          <button className="btn-primary toggle-more-btn" onClick={handleToggle}>
            {showMore ? "▲ Hide" : "▼ Show"}
          </button>
        </div>

        {showMore && (
          <div className="projects-grid">
            {MORE_PROJECTS.map((p, i) => renderProjectCard(p, i, MAIN_PROJECTS.length))}
          </div>
        )}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleBackdropClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2 className="modal-title">{selectedProject.full.title}</h2>
            <h3 className="modal-subtitle">{selectedProject.full.subtitle}</h3>
            <p className="modal-desc">{selectedProject.full.desc}</p>
            <div className="modal-tags">
              {selectedProject.full.tags.map((t) => <span key={t} className="modal-tag">{t}</span>)}
            </div>
            <div className="modal-detail">{selectedProject.full.detail}</div>
          </div>
        </div>
      )}
    </section>
  );
}