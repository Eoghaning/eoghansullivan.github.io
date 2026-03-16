import "./About.css";

const SKILLS = [
  { 
    category: "Languages", 
    items: ["Python", "Java", "JavaScript", "C", "C++", "R", "SQL", "Haskell", "Prolog", "Shell", "MATLAB", "Bash"] 
  },
  { 
    category: "Web", 
    items: ["React", "HTML/CSS", "Git", "Django", "GitLab"] 
  },
  { 
    category: "Systems", 
    items: ["Linux", "UNIX/GNU", "DevOps", "Windows", "Networking"] 
  },
  { 
    category: "Interpersonal", 
    items: ["Teamwork", "Communication", "Problem Solving", "Adaptability", "Time Management", "Leadership", "Critical Thinking"] 
  },
];

export default function About() {
  return (
    <section id="about" className="hero-section">
      <div className="hero-left">
        <div className="hero-tag">Computer Science · DCU</div>
        <h1>Eoghan Sullivan</h1>
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
          <button className="btn-primary" onClick={() => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" })}>
            View Blogs
          </button>
        </div>

        <div className="contact-section">
          <div className="contact-item">
            <span className="contact-text">💼 LinkedIn</span>
            <a href="https://www.linkedin.com/in/eoghanksullivan" target="_blank" rel="noreferrer" className="btn-primary btn-small">
              Visit
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-text">📧 Personal Email</span>
            <a href="mailto:eoghanksullivan100@gmail.com" className="btn-primary btn-small">
              Email
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-text">📧 Academic Email</span>
            <a href="mailto:eoghan.sullivan4@mail.dcu.ie" className="btn-primary btn-small">
              Email
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-text">🐙 GitHub</span>
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