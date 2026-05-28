import "./About.css";
import TypingAnimation from "../../components/TypingAnimation/TypingAnimation";

export default function About() {
  return (
    <section id="about" className="hero-section fade-slide-in">
      <div className="hero-left">
        <div className="hero-card">
          <div className="about-label">About</div>
          <div className="hero-tag">
            <TypingAnimation />
          </div>
          <h1>Eoghan Sullivan</h1>
          <p className="hero-bio">
            Computer Science student with a passion for software development and engineering. Possessing a technical skillset gained through academic projects and practical application. A proactive learner and effective team player, eager to apply strong problem‑solving abilities and a collaborative mindset to contribute to innovative technology projects.
          </p>
          <br />
          <p className="hero-bio portfolio-intro">This portfolio includes:</p>
          <ul className="portfolio-bullets">
            <li>A brief introduction about me and my skillset</li>
            <li>My projects – which you can sort by technology</li>
            <li>My CV – available for download</li>
            <li>A blog where I share my progress and insights throughout my studies and career</li>
          </ul>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-stack">
          <img src="/face.jpg" alt="Eoghan Sullivan" className="face-image" loading="lazy" />
          <div className="small-images">
            <img src="/I1.png" alt="Decorative icon" className="small-image" loading="lazy" />
            <img src="/I2.jpg" alt="Decorative icon" className="small-image" loading="lazy" />
            <img src="/I3.png" alt="Decorative icon" className="small-image" loading="lazy" />
          </div>
          <img src="/I4.jpg" alt="Decorative image" className="tall-image" loading="lazy" />
        </div>
        <div className="contact-section">
          <div className="contact-item">
            <span className="contact-text">💼 Work Email: eoghansullivan.work@gmail.com</span>
            <a href="mailto:eoghansullivan.work@gmail.com" className="btn-primary btn-small" aria-label="Email eoghansullivan.work@gmail.com">
              Email
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-text">💼 LinkedIn: linkedin.com/in/eoghanksullivan</span>
            <a href="https://www.linkedin.com/in/eoghanksullivan" target="_blank" rel="noreferrer" className="btn-primary btn-small" aria-label="LinkedIn profile">
              Visit
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-text">🐙 GitHub: github.com/Eoghaning</span>
            <a href="https://github.com/Eoghaning" target="_blank" rel="noreferrer" className="btn-primary btn-small" aria-label="GitHub profile">
              Visit
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-text">🦊 GitLab: sullive4</span>
            <a href="https://gitlab.computing.dcu.ie/sullive4" target="_blank" rel="noreferrer" className="btn-primary btn-small" aria-label="GitLab profile">
              Visit
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-text">📧 Personal Email: eoghanksullivan100@gmail.com</span>
            <a href="mailto:eoghanksullivan100@gmail.com" className="btn-primary btn-small" aria-label="Email eoghanksullivan100@gmail.com">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}