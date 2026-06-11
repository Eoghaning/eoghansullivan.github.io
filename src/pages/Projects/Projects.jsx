import { useState, useRef, useEffect, useMemo } from "react";
import "./Projects.css";
import ReactMarkdown from "react-markdown";
import { parse as parseYaml } from "yaml";
import { ALL_SKILL_ITEMS } from "../../skills.js";
import EmotionDetector from "../EmotionDetector/EmotionDetector.jsx";

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
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDemo, setShowDemo] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [skillTags, setSkillTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const inputRef = useRef(null);
  const announceRef = useRef(null);
  const [dotCount, setDotCount] = useState(1);
  useEffect(() => {
    if (skillTags.length > 0 || inputValue !== "") {
      setDotCount(1);
      return;
    }
    const interval = setInterval(() => {
      setDotCount(prev => (prev % 3) + 1);
    }, 500);
    return () => clearInterval(interval);
  }, [skillTags.length, inputValue]);

  const allTags = useMemo(() => {
    const tagSet = new Set(ALL_SKILL_ITEMS);
    ALL_PROJECTS.forEach(p =>
      (p.tags || []).forEach(t => tagSet.add(t))
    );
    return [...tagSet];
  }, []);

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

  useEffect(() => {
    if (announceRef.current && skillTags.length > 0) {
      announceRef.current.textContent = `Filtering by ${skillTags.length} skill${skillTags.length > 1 ? 's' : ''}`;
    }
  }, [skillTags]);

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
    if (announceRef.current) {
      announceRef.current.textContent = 'Skill removed';
    }
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
  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closePane = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    if (!selectedProject) return;
    const handler = (e) => { if (e.key === 'Escape') closePane(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedProject]);

  const relatedProjects = useMemo(() => {
    if (!selectedProject) return [];
    const currentTags = selectedProject.tags || [];
    return ALL_PROJECTS
      .filter(p => p.title !== selectedProject.title)
      .map(p => ({
        ...p,
        _matchCount: (p.tags || []).filter(t => currentTags.includes(t)).length,
      }))
      .filter(p => p._matchCount > 0)
      .sort((a, b) => b._matchCount - a._matchCount)
      .slice(0, 3);
  }, [selectedProject]);

  const renderProjectCard = (project, index) => {
    const allTags = project.tags || [];
    const MAX_VISIBLE_TAGS = 5;
    const visibleTags = allTags.slice(0, MAX_VISIBLE_TAGS);
    const remaining = allTags.length - MAX_VISIBLE_TAGS;

    return (
      <div
        key={project.title}
        className={`project-card clickable-card${project.status === 'coming-soon' ? ' project-card-coming' : ''}`}
        onClick={() => openProject(project)}
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(project); } }}
      >
        {project.status === 'coming-soon' && (
          <div className="project-coming-badge">Coming Soon</div>
        )}
        <div className="project-top">
          <span className="project-num">0{index + 1}</span>
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
    <>
      <section id="projects" className="page-section fade-slide-in">
        <div aria-live="polite" aria-atomic="true" ref={announceRef} className="sr-only" />
        <div className="page-inner">
          <div className="section-header">
            <h1>My Projects</h1>
          </div>

          <div className="search-container">
            <div className="skill-input-wrapper" onClick={() => inputRef.current?.focus()}>
              {skillTags.map((tag, i) => (
                <span key={i} className="skill-chip">
                  {tag}
                  <button className="skill-chip-remove" onClick={(e) => { e.stopPropagation(); removeTag(i); }} tabIndex={0}>×</button>
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
                    Filter by skills<span className="dot-anim"><span style={{ opacity: dotCount >= 1 ? 1 : 0 }}>.</span><span style={{ opacity: dotCount >= 2 ? 1 : 0 }}>.</span><span style={{ opacity: dotCount >= 3 ? 1 : 0 }}>.</span></span>{" "}
                    <span className="skill-placeholder-example">(e.g. React, Python, Docker)</span>
                  </span>
                )}
              </div>
            </div>
            {suggestions.length > 0 && (
              <ul className="skill-suggestions" role="listbox">
                {suggestions.map((s, i) => (
                  <li key={i} className="skill-suggestion-item" role="option" tabIndex={0} onMouseDown={() => addTag(s)} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTag(s); } }}>
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

          <div className="project-count-pill">
            {skillTags.length > 0
              ? `${totalFiltered} filtered`
              : `${totalFiltered} projects`}
          </div>
          <h2 className="projects-heading" style={{ textAlign: 'center' }}>Main Projects</h2>

          <div className="projects-grid">
            {filteredMain.map((p, i) => renderProjectCard(p, i))}
          </div>

          {filteredMore.length > 0 && (
            <div className="more-section">
              <button className="more-toggle" onClick={() => setMoreOpen(o => !o)} aria-expanded={moreOpen}>
                <span className="more-toggle-icon" style={{ display: 'inline-block', transform: moreOpen ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }}>↓</span>
                More Projects
              </button>
              {moreOpen && (
                <div className="projects-grid">
                  {filteredMore.map((p, i) => renderProjectCard(p, i))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <div className="mini-overlay" onClick={closePane}>
          <div className="mini-card" onClick={(e) => e.stopPropagation()}>
            <button className="mini-close-btn" onClick={closePane} aria-label="Close detail">&times;</button>
            <h2 className="mini-title">{selectedProject.title}</h2>
            <h3 className="mini-subtitle">{selectedProject.subtitle}</h3>
            <hr className="mini-divider" />
            <ReactMarkdown
              components={{
                img: ({ src, alt }) => (
                  <img src={imageLookup[src] || src} alt={alt || ''} loading="lazy" />
                ),
              }}
            >
              {selectedProject.content}
            </ReactMarkdown>
            <hr className="mini-divider" />
            <div className="mini-tags">
              {(selectedProject.tags || []).map(tag => (
                <span key={tag} className="mini-tag">{tag}</span>
              ))}
            </div>
            <hr className="mini-divider" />
            <div className="mini-links">
              {Object.entries(selectedProject.links || {}).map(([label, url]) =>
                url === "#emotion-detector-demo" ? (
                  <button key={label} className="mini-link mini-link-demo" onClick={() => setShowDemo(true)}>
                    {label}
                  </button>
                ) : (
                  <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="mini-link">
                    {label}
                  </a>
                )
              )}
            </div>
            {relatedProjects.length > 0 && (
              <>
                <hr className="mini-divider" />
                <div className="mini-related">
                  <span className="mini-related-title">More Like This</span>
                  {relatedProjects.map(rp => (
                    <button key={rp.title} className="mini-related-item" onClick={() => openProject(rp)}>
                      {rp.title} <span className="mini-related-sub">{rp.subtitle}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {showDemo && <EmotionDetector onClose={() => setShowDemo(false)} />}
    </>
  );
}