import { useState, useRef, useEffect, useMemo } from "react";
import "./Projects.css";
import ReactMarkdown from "react-markdown";
import { parse as parseYaml } from "yaml";
import { ALL_SKILL_ITEMS } from "../../skills.js";

function parseFrontMatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { attributes: {}, body: raw };
  return { attributes: parseYaml(match[1]), body: match[2] };
}

const projectFiles = import.meta.glob('/src/pages/Projects/content/*.md', { eager: true, query: '?raw', import: 'default' });

const imageFiles = import.meta.glob('/src/pages/Projects/pics/*.{jpg,png,gif,svg,webp}', { eager: true });

const imageLookup = {};
for (const [key, mod] of Object.entries(imageFiles)) {
  const filename = key.split('/').pop();
  imageLookup[filename] = mod.default;
}

const ALL_PROJECTS = Object.entries(projectFiles).map(([path, raw]) => {
  const { attributes, body } = parseFrontMatter(raw);
  return { ...attributes, content: body };
});

const MAIN_PROJECTS = ALL_PROJECTS.filter(p => p.type === 'main');
const MORE_PROJECTS = ALL_PROJECTS.filter(p => p.type === 'more');

const TAG_ALIASES = {
  "machine learning":        "ML",
  "machine":                 "ML",
  "artificial":              "AI",
  "artificial intelligence": "AI",
  "continuous integration":  "CI/CD",
  "continuous deployment":   "CI/CD",
  "rest":                    "RESTful API Design",
  "restful":                 "RESTful API Design",
  "api":                     "RESTful API Design",
  "websocket":               "WebSocket Protocol",
  "web socket":              "WebSocket Protocol",
  "js":                      "JavaScript",
  "javascript":              "JavaScript",
  "python":                  "Python",
  "docker":                  "Docker",
  "react":                   "React",
  "django":                  "Django",
  "pytorch":                 "PyTorch",
  "opencv":                  "OpenCV",
  "mlops":                   "MLOps",
  "unix":                    "UNIX/GNU",
  "gnu":                     "UNIX/GNU",
  "html":                    "HTML/CSS",
  "css":                     "HTML/CSS",
};

const resolveTag = (input, allTags) => {
  const lower = input.trim().toLowerCase();
  if (TAG_ALIASES[lower]) return TAG_ALIASES[lower];
  const exact = allTags.find(t => t.toLowerCase() === lower);
  if (exact) return exact;
  return null;
};

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [skillTags, setSkillTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const inputRef = useRef(null);
  const moreHeadingRef = useRef(null);

  const allTags = useMemo(() => {
    const tagSet = new Set(ALL_SKILL_ITEMS);
    ALL_PROJECTS.forEach(p =>
      (p.tags || []).forEach(t => tagSet.add(t))
    );
    return [...tagSet];
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [selectedProject]);

  useEffect(() => {
    const val = inputValue.trim().toLowerCase();
    setNotFound(false);
    if (!val) {
      setSuggestions([]);
      return;
    }
    const tagSuggestions = allTags.filter(tag =>
      tag.toLowerCase().startsWith(val) &&
      !skillTags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
    );
    const aliasSuggestions = Object.entries(TAG_ALIASES)
      .filter(([alias, resolved]) =>
        alias.startsWith(val) &&
        !skillTags.map(t => t.toLowerCase()).includes(resolved.toLowerCase()) &&
        !tagSuggestions.find(t => t.toLowerCase() === resolved.toLowerCase())
      )
      .map(([, resolved]) => resolved);

    const combined = [...new Set([...tagSuggestions, ...aliasSuggestions])];
    setSuggestions(combined.slice(0, 5));
  }, [inputValue, skillTags]);

  const addTag = (rawInput) => {
    const trimmed = rawInput.trim();
    if (!trimmed) return;
    const resolved = resolveTag(trimmed, allTags);
    if (!resolved) {
      setNotFound(true);
      return;
    }
    if (skillTags.map(t => t.toLowerCase()).includes(resolved.toLowerCase())) return;
    setSkillTags(prev => [...prev, resolved]);
    setInputValue("");
    setSuggestions([]);
    setNotFound(false);
    inputRef.current?.focus();
  };

  const removeTag = (index) => {
    setSkillTags(prev => prev.filter((_, i) => i !== index));
    setNotFound(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (suggestions.length === 1) {
        addTag(suggestions[0]);
      } else if (inputValue.trim()) {
        addTag(inputValue.trim());
      }
    } else if (e.key === "Backspace" && inputValue === "" && skillTags.length > 0) {
      removeTag(skillTags.length - 1);
    } else {
      setNotFound(false);
    }
  };

  const filterProjects = (projects) => {
    if (skillTags.length === 0) return projects;
    const terms = skillTags.map(t => t.toLowerCase());
    return projects.filter(project =>
      terms.every(term =>
        (project.tags || []).some(tag => tag.toLowerCase() === term)
      )
    );
  };

  const filteredMain = useMemo(() => filterProjects(MAIN_PROJECTS), [skillTags]);
  const filteredMore = useMemo(() => filterProjects(MORE_PROJECTS), [skillTags]);

  const totalFiltered = filteredMain.length + filteredMore.length;
  const isSearchActive = skillTags.length > 0;

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

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  const renderProjectCard = (project, index, baseNumber) => {
    const allTags = project.tags || [];
    const MAX_VISIBLE_TAGS = 5;
    const visibleTags = allTags.slice(0, MAX_VISIBLE_TAGS);
    const remaining = allTags.length - MAX_VISIBLE_TAGS;

    return (
      <div
        key={project.title}
        className="project-card clickable-card"
        onClick={() => openModal(project)}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="project-top">
          <span className="project-num">0{baseNumber + index + 1}</span>
          <span className="project-detail">{project.detail}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <div className="project-subtitle">{project.subtitle}</div>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tags">
          {visibleTags.map((t) => (
            <span key={t} className="project-tag">{t}</span>
          ))}
          {remaining > 0 && (
            <span className="project-tag project-tag-more">+{remaining} more</span>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="page-section">
      <div className="page-inner">
        <div className="section-header">
          <h1>
            My Projects – <span className="heading-small">Click to view</span>
          </h1>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div className="project-count-badge">
              Total: {ALL_PROJECTS.length} projects
            </div>
            <div className="project-count-badge project-count-badge--filtered">
              Filtered: {totalFiltered} projects
            </div>
          </div>
        </div>

        <div className="search-container">
          <div className="skill-input-wrapper" onClick={() => inputRef.current?.focus()}>
            {skillTags.map((tag, i) => (
              <span key={i} className="skill-chip">
                {tag}
                <button className="skill-chip-remove" onClick={(e) => { e.stopPropagation(); removeTag(i); }}>×</button>
              </span>
            ))}
            <div style={{ position: 'relative', flex: 1, minWidth: '80px' }}>
              <input
                ref={inputRef}
                type="text"
                placeholder=""
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="skill-search-inner"
              />
              {skillTags.length === 0 && inputValue === "" && (
                <span className="skill-placeholder">
                  Filter by skills...{" "}
                  <span className="skill-placeholder-example">(e.g. React, Python, Docker)</span>
                </span>
              )}
            </div>
          </div>
          {suggestions.length > 0 && (
            <ul className="skill-suggestions">
              {suggestions.map((s, i) => (
                <li key={i} className="skill-suggestion-item" onMouseDown={() => addTag(s)}>
                  {s}
                </li>
              ))}
            </ul>
          )}
          {notFound && (
            <div className="skill-not-found">Skill not found</div>
          )}
          {!notFound && (
            <div className="search-hint">(space or enter to add — backspace to remove last)</div>
          )}
        </div>

        <h2 className="projects-heading" style={{ textAlign: 'center' }}>Main Projects</h2>

        <div className="projects-grid">
          {filteredMain.map((p, i) => renderProjectCard(p, i, 0))}
        </div>

        {filteredMore.length > 0 && (
          <div className="more-section">
            <h2 ref={moreHeadingRef} className="projects-heading">More Projects</h2>
            <div className="toggle-container">
              <button className="btn-primary toggle-more-btn" onClick={handleToggle}>
                {showMore ? "▲ Hide" : "▼ Show"}
              </button>
            </div>
            {(isSearchActive || showMore) && (
              <div className="projects-grid">
                {filteredMore.map((p, i) => renderProjectCard(p, i, filteredMain.length))}
              </div>
            )}
          </div>
        )}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleBackdropClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-inner">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <h3 className="modal-subtitle">{selectedProject.subtitle}</h3>
              <hr className="modal-divider" />

              <ReactMarkdown
                components={{
                  img: ({ src, alt }) => (
                    <img src={imageLookup[src] || src} alt={alt || ''} />
                  ),
                }}
              >
                {selectedProject.content}
              </ReactMarkdown>

              <hr className="modal-divider" />

              <div className="modal-tags">
                {(selectedProject.tags || []).map(tag => (
                  <span key={tag} className="modal-tag">{tag}</span>
                ))}
              </div>

              <hr className="modal-divider" />

              <div className="modal-links">
                {Object.entries(selectedProject.links || {}).map(([label, url]) => (
                  <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="modal-link">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
