export const SKILLS = [
  { 
    category: "Languages", 
    items: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++", "R", "SQL", "Haskell", "Prolog", "Shell", "MATLAB", "Bash"] 
  },
  { 
    category: "Libraries", 
    items: ["Pandas", "Matplotlib", "NumPy", "SHAP"] 
  },
  { 
    category: "Web", 
    items: [
      "React", "Django", "HTML/CSS", "Git", "GitHub", "GitLab", "Netlify",
      "SQLite", "Redis", "Celery", "Django Channels", "Daphne",
      "RESTful API Design", "WebSocket Protocol", "npm", 
    ] 
  },
  { 
    category: "Systems & AI", 
    items: [
      "Linux", "UNIX/GNU", "DevOps", "Windows", "Networking",
      "ML", "AI", "MLOps",
      "Docker", "OpenCV", "PyTorch"
    ] 
  },
  { 
    category: "Practices & Tools", 
    items: ["Testing", "CI/CD", "Technical Documentation", "Agile"] 
  },
  { 
    category: "Interpersonal", 
    items: [
      "Teamwork", "Communication", "Problem Solving", "Adaptability",
      "Leadership", "Time Management", "Critical Thinking", "Creativity"
    ] 
  },
];

export const ALL_SKILL_ITEMS = SKILLS.flatMap(s => s.items);