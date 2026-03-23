import senseAImImg from "../pics/senseAIm.png";

export const project = {
  preview: {
    title: "SenseAIm",
    subtitle: "CS2 Anti-Cheat Platform",
    desc: "Community platform with ML-based gameplay analysis to detect cheating in uploaded CS2 clips.",
    tags: [
      "Django", "React", "Python", "SQL", "ML", "AI", "PyTorch", "OpenCV", "GitLab", "JavaScript",
      "SQLite", "Redis", "Celery", "Django Channels", "Daphne",
      "RESTful API Design", "WebSocket Protocol", "npm", "Docker", "DevOps",
      "Testing", "CI/CD", "Technical Documentation", "Agile",
      "Teamwork", "Communication", "Creativity", "Time Management",
      "Leadership", "Critical Thinking"
    ],
    detail: "2-person team · 53 passing tests",
  },
  full: (
    <>
      <h2 className="modal-title">SenseAIm</h2>
      <h3 className="modal-subtitle">CS2 Anti-Cheat Platform</h3>
      
      <hr className="modal-divider" />
      
      <p>Community platform with ML-based gameplay analysis to detect cheating in uploaded CS2 clips. Combined traditional detection with AI predictions, plus social features — posts, reactions, comments, real-time DMs. Built as a 2-person team using Django/React with 53 passing tests.</p>
      
      <img 
        src={senseAImImg} 
        alt="SenseAIm dashboard screenshot" 
        style={{ maxWidth: '80%', borderRadius: '8px', margin: '1em auto', display: 'block', border: '2px solid var(--accent)' }} 
      />
      
      <br/>
      <p>Key features:</p>
      <ul>
        <li>ML model trained on 10k+ clips</li>
        <li>Real-time chat and notifications</li>
        <li>User‑generated content with moderation</li>
      </ul>
      
      <hr className="modal-divider" />
      
      <div className="modal-tags">
        <span className="modal-tag">Django</span>
        <span className="modal-tag">React</span>
        <span className="modal-tag">Python</span>
        <span className="modal-tag">SQL</span>
        <span className="modal-tag">ML</span>
        <span className="modal-tag">AI</span>
        <span className="modal-tag">PyTorch</span>
        <span className="modal-tag">OpenCV</span>
        <span className="modal-tag">GitLab</span>
        <span className="modal-tag">JavaScript</span>
        <span className="modal-tag">SQLite</span>
        <span className="modal-tag">Redis</span>
        <span className="modal-tag">Celery</span>
        <span className="modal-tag">Django Channels</span>
        <span className="modal-tag">Daphne</span>
        <span className="modal-tag">RESTful API Design</span>
        <span className="modal-tag">WebSocket Protocol</span>
        <span className="modal-tag">npm</span>
        <span className="modal-tag">Docker</span>
        <span className="modal-tag">DevOps</span>
        <span className="modal-tag">Testing</span>
        <span className="modal-tag">CI/CD</span>
        <span className="modal-tag">Technical Documentation</span>
        <span className="modal-tag">Agile</span>
        <span className="modal-tag">Teamwork</span>
        <span className="modal-tag">Communication</span>
        <span className="modal-tag">Problem Solving</span>
        <span className="modal-tag">Adaptability</span>
        <span className="modal-tag">Creativity</span>
        <span className="modal-tag">Time Management</span>
        <span className="modal-tag">Leadership</span>
        <span className="modal-tag">Critical Thinking</span>
      </div>
      
      <hr className="modal-divider" />
      
      <div className="modal-links">
        <a href="https://gitlab.computing.dcu.ie/shielse9/2026-csc1049-eoinshielslloret-aianticheat" target="_blank" rel="noopener noreferrer" className="modal-link">
          GitLab Repository
        </a>
        <a href="https://www.youtube.com/watch?v=Oc9A_waSNRk" target="_blank" rel="noopener noreferrer" className="modal-link">
          Walkthrough Video
        </a>
      </div>
    </>
  ),
};