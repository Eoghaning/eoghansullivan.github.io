export const project = {
  preview: {
    title: "Portfolio Website",
    subtitle: "React Portfolio Site",
    desc: "Custom-built portfolio website to showcase projects, skills, and CV.",
    tags: ["React", "JavaScript", "CSS", "Netlify", "HTML/CSS", "Git", "GitHub"],
    detail: "Portfolio Website",
  },
  full: (
    <>
      <h2 className="modal-title">Portfolio Website</h2>
      <h3 className="modal-subtitle">React Portfolio Site</h3>
      
      <hr className="modal-divider" />
      
      <img 
        src="/images/portfolio-screenshot.jpg" 
        alt="Portfolio screenshot" 
        style={{ maxWidth: '80%', borderRadius: '8px', margin: '1em auto', display: 'block', border: '2px solid var(--accent)' }} 
      />
      
      <p>Custom-built portfolio website to showcase projects, skills, and CV. Features a dark theme, responsive design, and interactive sections. Deployed via Netlify with continuous integration. Includes project modals, blog section with expandable posts, and CV download.</p>
      
      <p>Technologies:</p>
      <ul>
        <li>React with Hooks and functional components</li>
        <li>Custom CSS with CSS variables</li>
        <li>GitHub + Netlify for CI/CD</li>
      </ul>
      
      <hr className="modal-divider" />
      
      <div className="modal-tags">
        <span className="modal-tag">React</span>
        <span className="modal-tag">JavaScript</span>
        <span className="modal-tag">CSS</span>
        <span className="modal-tag">Netlify</span>
        <span className="modal-tag">HTML/CSS</span>
        <span className="modal-tag">Git</span>
        <span className="modal-tag">GitHub</span>
      </div>
      
      <hr className="modal-divider" />
      
      <div className="modal-links">
        <a href="https://github.com/Eoghaning/portfolio" target="_blank" rel="noopener noreferrer" className="modal-link">GitHub Repo</a>
        <a href="https://eoghansullivan.netlify.app" target="_blank" rel="noopener noreferrer" className="modal-link">Live Site</a>
      </div>
    </>
  ),
};