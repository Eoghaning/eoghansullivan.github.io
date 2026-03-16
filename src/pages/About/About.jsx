import "./About.css";

const SKILLS = [
  { 
    category: "Languages", 
    items: ["Python", "Java", "JavaScript", "C", "C++", "R", "SQL", "Haskell", "Prolog", "Shell", "MATLAB", "Bash"] 
  },
  { 
    category: "Web", 
    items: ["React", "Django", "HTML/CSS", "Git", "GitHub", "GitLab"] 
  },
  { 
    category: "Systems & AI", 
    items: ["Linux", "UNIX/GNU", "DevOps", "Windows", "Networking", "ML", "AI"] 
  },
  { 
    category: "Interpersonal", 
    items: ["Teamwork", "Communication", "Problem Solving", "Adaptability"] 
  },
];

export default function About() {
  return (
    <section id="about" className="hero-section">
      <div className="hero-left">
        <div className="hero-card">
          <div className="hero-tag">Computer Science · DCU</div>
          <h1>Eoghan Sullivan</h1>
          <p className="hero-bio">
            Computer Science student with a passion for software development and engineering. Possessing a technical skillset gained through academic projects and practical application. A proactive learner and effective team player, eager to apply strong problem‑solving abilities and a collaborative mindset to contribute to innovative technology projects.
          </p>
        </div>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View Projects
          </button>
          <button className="btn-primary" onClick={() => document.getElementById("cv")?.scrollIntoView({ behavior: "smooth" })}>
            Download CV
          </button>
          <button className="btn-primary" onClick={() => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" })}>
            View Blogs
          </button>
        </div>

        <div className="contact-section">
          <div className="contact-item">
            <span className="contact-text">📧 Personal Email: eoghanksullivan100@gmail.com</span>
            <a href="mailto:eoghanksullivan100@gmail.com" className="btn-primary btn-small">
              Email
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-text">📧 Academic Email: eoghan.sullivan4@mail.dcu.ie</span>
            <a href="mailto:eoghan.sullivan4@mail.dcu.ie" className="btn-primary btn-small">
              Email
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-text">💼 LinkedIn: linkedin.com/in/eoghanksullivan</span>
            <a href="https://www.linkedin.com/in/eoghanksullivan" target="_blank" rel="noreferrer" className="btn-primary btn-small">
              Visit
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-text">🐙 GitHub: github.com/Eoghaning</span>
            <a href="https://github.com/Eoghaning" target="_blank" rel="noreferrer" className="btn-primary btn-small">
              Visit
            </a>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-stack">
          <img src="/face.jpg" alt="Eoghan Sullivan" className="face-image" />
          <div className="small-images">
            <img src="/I1.png" alt="Icon 1" className="small-image" />
            <img src="/I2.jpg" alt="Icon 2" className="small-image" />
            <img src="/I3.png" alt="Icon 3" className="small-image" />
          </div>
          <img src="/I4.jpg" alt="Extra image" className="tall-image" />
        </div>
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