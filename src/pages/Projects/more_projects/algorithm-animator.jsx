export const project = {
  preview: {
    title: "Algorithm Animator",
    subtitle: "Visualization Tool",
    desc: "Web-based tool to visualize sorting and searching algorithms in action with interactive controls.",
    tags: [
      "JavaScript", "HTML/CSS", "Git", "React", "Agile", "Creativity"
    ],
    detail: "Algorithm Animator",
  },
  full: (
    <>
      <h2 className="modal-title">Algorithm Animator</h2>
      <h3 className="modal-subtitle">Visualization Tool</h3>
      
      <hr className="modal-divider" />
      
      <p>Web-based tool to visualize common sorting and searching algorithms in action.</p>
      
      <p><strong>Sorting Algorithms:</strong> Bubble Sort, Selection Sort, Insertion Sort, Quick Sort (with more coming soon).</p>
      
      <p><strong>Searching Algorithms:</strong> Linear Search, Binary Search.</p>
      
      <p><strong>Features:</strong></p>
      <ul>
        <li>Interactive Controls: Adjust array size, animation speed, and manually pause/resume the process</li>
        <li>Audio Feedback: Sound effects for comparisons, swaps, and completion</li>
        <li>Real-time Stats: Track comparisons, swaps, and steps as they happen</li>
      </ul>
      
      <p><strong>Project Structure:</strong></p>
      <ul>
        <li>/css: Consolidated styles.css for all pages</li>
        <li>/js: Modular JavaScript logic (core.js, sorting.js, searching.js)</li>
        <li>/pages: Algorithm-specific visualization pages</li>
        <li>index.html: Main landing page</li>
      </ul>
      
      <p>Simply open index.html in any modern web browser. No local server or build step required.</p>
      
      <hr className="modal-divider" />
      
      <div className="modal-tags">
        <span className="modal-tag">JavaScript</span>
        <span className="modal-tag">HTML/CSS</span>
        <span className="modal-tag">Git</span>
        <span className="modal-tag">React</span>
        <span className="modal-tag">Agile</span>
        <span className="modal-tag">Creativity</span>
      </div>
      
      <hr className="modal-divider" />
      
      <div className="modal-links">
        <a href="https://github.com/Eoghaning/AlgorithmAnimator" target="_blank" rel="noopener noreferrer" className="modal-link">GitHub Repo</a>
      </div>
    </>
  ),
};