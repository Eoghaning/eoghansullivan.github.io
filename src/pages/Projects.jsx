const PROJECTS = [
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
    desc: "Functional Unix shell from scratch in C with Makefile build system. Supports interactive and batch modes, internal commands (cd, clr, dir, echo, help), process forking, and file redirection.",
    tags: ["C", "Linux", "Systems"],
    detail: "Interactive + batch modes",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="page-section">
      <div className="page-inner">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">Things I've built</p>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
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
      </div>
    </section>
  );
}