export const project = {
  preview: {
    title: "VibeCoder AI",
    subtitle: "Gemini-Powered Code Generator",
    desc: "Interactive web app using Google's Gemini API to generate JavaScript code, canvas drawings, and games from natural language prompts.",
    tags: ["JavaScript", "Gemini API", "AI", "HTML/CSS", "Git", "GitHub"],
    detail: "3 generation modes · Live preview",
  },
  full: (
    <>
      <h2 className="modal-title">VibeCoder AI</h2>
      <h3 className="modal-subtitle">Gemini-Powered Code Generator</h3>
      
      <hr className="modal-divider" />
      
      <p>Interactive web app using Google's Gemini API to generate JavaScript code, canvas drawings, and games from natural language prompts across three modes, with conversation memory and live iframe preview. Added random idea generator with curated prompts and mode-specific validation rules for reliable output.</p>
      
      <p>Modes:</p>
      <ul>
        <li>Code mode – generate JavaScript snippets</li>
        <li>Canvas mode – create drawings with code</li>
        <li>Game mode – build simple games from prompts</li>
      </ul>
      
      <hr className="modal-divider" />
      
      <div className="modal-tags">
        <span className="modal-tag">JavaScript</span>
        <span className="modal-tag">Gemini API</span>
        <span className="modal-tag">AI</span>
        <span className="modal-tag">HTML/CSS</span>
        <span className="modal-tag">Git</span>
        <span className="modal-tag">GitHub</span>
      </div>
      
      <hr className="modal-divider" />
      
      <div className="modal-links">
        <a href="https://github.com/Eoghaning/vibecoder" target="_blank" rel="noopener noreferrer" className="modal-link">GitHub</a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="modal-link">Live Demo</a>
      </div>
    </>
  ),
};