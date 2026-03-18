export const project = {
  preview: {
    title: "Custom Shell",
    subtitle: "Unix-like Shell in C",
    desc: "Functional Unix shell from scratch in C with Makefile build system.",
    tags: ["C", "Linux", "Systems", "UNIX/GNU", "Git"],
    detail: "Interactive + batch modes",
  },
  full: (
    <>
      <h2 className="modal-title">Custom Shell</h2>
      <h3 className="modal-subtitle">Unix-like Shell in C</h3>
      
      <hr className="modal-divider" />
      
      <p>Functional Unix shell from scratch in C with Makefile build system supporting both interactive and batch modes. Implemented core internal commands (cd, clr, dir, environ, echo, help, pause, quit) and external program execution via process forking. Added file redirection handling, error management, and comprehensive user input parsing.</p>
      
      <p>Supported commands:</p>
      <ul>
        <li>cd, clr, dir, environ, echo, help, pause, quit</li>
        <li>External program execution with arguments</li>
        <li>File redirection (&gt;, &lt;, &gt;&gt;)</li>
      </ul>
      
      <hr className="modal-divider" />
      
      <div className="modal-tags">
        <span className="modal-tag">C</span>
        <span className="modal-tag">Linux</span>
        <span className="modal-tag">Systems</span>
        <span className="modal-tag">UNIX/GNU</span>
        <span className="modal-tag">Git</span>
      </div>
      
      <hr className="modal-divider" />
      
      <div className="modal-links">
        <a href="https://github.com/Eoghaning/custom-shell" target="_blank" rel="noopener noreferrer" className="modal-link">GitHub</a>
      </div>
    </>
  ),
};