import "./Skills.css";
import { SKILLS } from "../../skills.js";

export default function Skills() {
  return (
    <section id="skills" className="page-section fade-slide-in">
      <div className="page-inner">
        <div className="section-header">
          <h1>Skills</h1>
        </div>

        <div className="skills-card">
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
