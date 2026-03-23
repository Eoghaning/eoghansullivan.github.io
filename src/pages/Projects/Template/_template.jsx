// PROJECT TEMPLATE – copy and rename to your-project.jsx
export const project = {
  preview: {
    title: "Project Title",
    subtitle: "Short subtitle",
    desc: "A brief description (1-2 sentences) that appears on the card.",
    tags: ["Tag1", "Tag2", "Tag3"],
    detail: "Additional detail line",
  },
  full: (
    <>
      <h2 className="modal-title">Project Title</h2>
      <h3 className="modal-subtitle">Subtitle or tagline</h3>
      
      <hr className="modal-divider" />
      
      <p>Main description paragraph. You can have multiple paragraphs.</p>
      
      <p>Key features:</p>
      <ul>
        <li>Feature one</li>
        <li>Feature two</li>
      </ul>
      
      <hr className="modal-divider" />
      
      <div className="modal-tags">
        <span className="modal-tag">Tag1</span>
        <span className="modal-tag">Tag2</span>
      </div>
      
      <hr className="modal-divider" />
      
      <div className="modal-links">
        <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="modal-link">GitHub</a>
        <a href="https://live-demo.com" target="_blank" rel="noopener noreferrer" className="modal-link">Live Demo</a>
        <a href="https://blog-post.com" target="_blank" rel="noopener noreferrer" className="modal-link">Blog Post</a>
      </div>
    </>
  ),
};
//  <img src={vibeCoderImg} alt="VibeCoder AI screenshot" style={{ maxWidth: '100%', maxHeight: '80%', borderRadius: '8px', margin: '1em auto', display: 'block', border: '2px solid var(--accent)' }}/>