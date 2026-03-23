import vibeCoderImg from "../pics/VibeCoder.png";

export const project = {
  preview: {
    title: "VibeCoder AI",
    subtitle: "Gemini-Powered Code Generator",
    desc: "Interactive web app using Google's Gemini API to generate JavaScript code, canvas drawings, and games from natural language prompts.",
    tags: ["JavaScript", "Gemini API", "AI", "HTML/CSS", "Technical Documentation", "Problem Solving", "Adaptability", "Creativity"],
    detail: "3 generation modes · Live preview",
  },
  full: (
    <>
      <h2 className="modal-title">VibeCoder AI</h2>
      <h3 className="modal-subtitle">Gemini-Powered Code Generator</h3>
      
      <hr className="modal-divider" />
      
      <p>My Project "VibeCoder" is an interactive web app that uses Google's Gemini API to generate JavaScript code, canvas drawings, and games from natural language prompts. You choose one of three modes, enter a prompt (or get a random one), and the AI produces code that runs live in an iframe. It features conversation memory, mode‑specific validation, and a random idea generator for inspiration.</p>
      
      <img 
        src={vibeCoderImg} 
        alt="VibeCoder AI screenshot" 
        style={{ maxWidth: '64%', maxHeight: '52%', borderRadius: '8px', margin: '1em auto', display: 'block', border: '5px solid var(--accent)' }}
      />
      
      <p><strong>How to use:</strong></p>
      <ul>
        <li>Choose one of the three modes below</li>
        <li>Enter a prompt or click the random idea button</li>
        <li>Click "Generate" to create the code</li>
        <li>See the generated code and live preview instantly</li>
        <li>Add more to the input to continue, or clear memory to start fresh</li>
      </ul>
      
      <p><strong>Modes:</strong></p>
      <ul>
        <li><strong>Code mode</strong> – generate JavaScript snippets</li>
        <li><strong>Canvas mode</strong> – create drawings with code</li>
        <li><strong>Game mode</strong> – build simple games from prompts</li>
      </ul>
      
      <hr className="modal-divider" />
      
      <div className="modal-tags">
        <span className="modal-tag">JavaScript</span>
        <span className="modal-tag">Gemini API</span>
        <span className="modal-tag">AI</span>
        <span className="modal-tag">HTML/CSS</span>
        <span className="modal-tag">Technical Documentation</span>
        <span className="modal-tag">Problem Solving</span>
        <span className="modal-tag">Adaptability</span>
        <span className="modal-tag">Creativity</span>
      </div>
      
      <hr className="modal-divider" />
      
      <div className="modal-links">
        <a href="https://run.ancientbrain.com/run.php?world=6017687883" target="_blank" rel="noopener noreferrer" className="modal-link">
          Try VibeCoder on Ancient Brain
        </a>
      </div>
    </>
  ),
};