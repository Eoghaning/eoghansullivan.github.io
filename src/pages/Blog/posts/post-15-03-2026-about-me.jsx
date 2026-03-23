import faceImg from "../pics/face.jpg";

export const post = {
  date: "2026-03-16",
  title: "About Me",
  content: (
    <>
      <p>
        Hey there! I'm Eoghan Sullivan, a Computer Science student at Dublin City University. 
        I've always been fascinated by how code can turn ideas into reality—whether it's building a full‑stack platform, experimenting with AI, or diving into low‑level systems programming.
      </p>
      <img 
        src={faceImg} 
        alt="Eoghan Sullivan" 
        style={{ 
          maxWidth: '200px', 
          borderRadius: '50%', 
          margin: '1em auto', 
          display: 'block', 
          border: '2px solid var(--accent)' 
        }} 
      />
      <br />
      <p>
        My journey so far has been shaped by hands‑on projects like <strong>SenseAIm</strong>, a CS2 anti‑cheat platform where I worked with Django, React, and machine learning; <strong>VibeCoder AI</strong>, a Gemini‑powered code generator that explores prompt engineering; and a <strong>Custom Shell</strong> in C that taught me the beauty (and challenges) of systems programming. Each project pushed me to think critically, collaborate effectively, and embrace new technologies.
      </p>
      <br />
      <p>
        I'm passionate about software engineering and problem‑solving. I thrive in team environments, love sharing knowledge, and am always eager to learn. Outside of coding, you'll probably find me exploring new tech, contributing to open source, or just enjoying a good coffee while brainstorming my next project.
      </p>
      <br />
      <p>
        Thanks for stopping by—I hope you enjoy following along with my progress and insights!
      </p>
    </>
  ),
};