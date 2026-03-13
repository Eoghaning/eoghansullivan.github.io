const SKILLS = [
  { category: "Languages", items: ["Python", "Java", "JavaScript", "C", "Haskell", "Prolog", "Shell"] },
  { category: "Web", items: ["React", "HTML/CSS", "Git", "Django"] },
  { category: "Systems", items: ["Linux", "UNIX/GNU", "DevOps", "Windows"] },
];

export default function About() {
  return (
    <section id="about" className="hero-section">
      {/* Left column: text and buttons */}
      <div className="hero-left">
        <div className="hero-tag">Computer Science · DCU</div>
        <h1 className="hero-name">Eoghan Sullivan</h1>
        <p className="hero-bio">
          Computer Science student with a passion for software development
          and engineering. Proactive learner, effective team player, and
          problem solver — eager to contribute to innovative technology projects.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View Projects
          </button>
          <button className="btn-primary" onClick={() => document.getElementById("cv")?.scrollIntoView({ behavior: "smooth" })}>
            Download CV
          </button>
        </div>
        <div className="hero-links">
          <a href="https://www.linkedin.com/in/eoghanksullivan" target="_blank" rel="noreferrer">
            💼 LinkedIn →
          </a>
          <a href="mailto:eoghan.sullivan4@mail.dcu.ie">
            📧 Email →
          </a>
        </div>
      </div>

      {/* Right column: image at top, skills below */}
      <div className="hero-right">
        <img src="/face.jpg" alt="Eoghan Sullivan" className="face-image" />
        <div className="skills-card">
          <h3 className="skills-heading">Skills</h3>
          {SKILLS.map((s) => (
            <div key={s.category} className="skill-group">
              <div className="skill-label">{s.category}</div>
              <div className="skill-tags">
                {s.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}