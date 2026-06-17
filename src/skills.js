export const SKILLS = [
  { 
    category: "Languages", 
    items: ["Python", "Java", "JavaScript", "TypeScript", "C", "Go", "R", "SQL", "Haskell", "Prolog", "Shell", "MATLAB", "Bash", "Rust"] 
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
      "RESTful API Design", "WebSocket Protocol", "npm", "Postman API",
      "Node.js", "GraphQL"
    ] 
  },
  { 
    category: "Systems", 
    items: [
      "Linux", "UNIX/GNU", "DevOps", "Windows", "Mac", "Networking",
      "Real-time Systems", "Docker", "eSIM/pSIM",
      "Kubernetes", "Microservices Architecture", "Observability", "Serverless Computing"
    ] 
  },
  { 
    category: "AI", 
    items: [
      "ML", "AI", "MLOps", "Computer Vision", "OpenCV", "PyTorch",
      "Generative AI", "Coding Agents"
    ] 
  },
  { 
    category: "Practices & Tools", 
    items: ["Testing", "CI/CD", "Technical Documentation", "Agile", "Jira", "Debugging", "Pseudocode", "SRE", "Prompt Engineering"] 
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