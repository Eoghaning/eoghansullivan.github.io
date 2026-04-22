export const project = {
  preview: {
    title: "Lifestyle & Life Expectancy Analysis",
    subtitle: "Machine Learning Project",
    desc: "Group project using K-Means clustering and Random Forest with SHAP to analyse how lifestyle factors affect life expectancy.",
    tags: [
      "Python", "ML", "Teamwork", "Communication", "Agile", "Technical Documentation", "Matplotlib", "Pandas", "NumPy", "scikit-learn"
    ],
    detail: "Lifestyle & Life Expectancy Analysis",
  },
  full: (
    <>
      <h2 className="modal-title">Lifestyle & Life Expectancy Analysis</h2>
      <h3 className="modal-subtitle">Machine Learning Project</h3>
      
      <hr className="modal-divider" />
      
      <p>Group project for CSC1044 Machine Learning course. Uses K-Means clustering and Random Forest with SHAP analysis to explore how lifestyle factors - occupation, work hours, sleep, exercise, and rest - affect life expectancy across 10,000 individuals.</p>
      
      <p>The model clusters individuals into 6 lifestyle groups based on daily habits, then uses Random Forest regression to predict age at death. SHAP analysis quantifies each feature's impact, showing both the magnitude and direction of effect on life expectancy. Results showed K-Means produces distinct lifestyle patterns, and the Random Forest achieved R-squared of 0.53 with mean absolute error of 6.74 years.</p>
      
      <p>Note: The original Kaggle dataset has since been removed and is no longer available.</p>
      
      <p>Technologies:</p>
      <ul>
        <li>Python with scikit-learn for machine learning</li>
        <li>SHAP for model interpretability</li>
        <li>Pandas for data manipulation</li>
        <li>Matplotlib for visualization</li>
        <li>Jupyter Notebook for development</li>
      </ul>
      
      <hr className="modal-divider" />
      
      <div className="modal-tags">
        <span className="modal-tag">Python</span>
        <span className="modal-tag">ML</span>
        <span className="modal-tag">Teamwork</span>
        <span className="modal-tag">Communication</span>
        <span className="modal-tag">Agile</span>
        <span className="modal-tag">Technical Documentation</span>
        <span className="modal-tag">Matplotlib</span>
        <span className="modal-tag">Pandas</span>
        <span className="modal-tag">NumPy</span>
        <span className="modal-tag">scikit-learn</span>
      </div>
      
      <hr className="modal-divider" />
      
      <div className="modal-links">
        <a href="https://github.com/Eoghaning/lifestyle-life-expectancy-analysis" target="_blank" rel="noopener noreferrer" className="modal-link">GitHub Repo</a>
      </div>
    </>
  ),
};