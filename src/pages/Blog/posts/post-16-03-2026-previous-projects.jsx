export const post = {
  date: "2026-03-15",
  title: "Previous Projects",
  content: (
    <>
      <h3>Previous Projects</h3>
      <p>A look back at my main projects:</p>
      <ul>
        <li>
          <strong>SenseAIm</strong> – a CS2 anti-cheat platform built with Django and React. 
          It combines traditional detection with ML‑based gameplay analysis on uploaded clips. 
          The platform includes social features (posts, reactions, comments) and real‑time 
          direct messages. As a two‑person team, we delivered 53 passing tests and used 
          technologies like Redis, Celery, and WebSockets for a responsive experience.
        </li>
        <br/>
        <li>
          <strong>VibeCoder AI</strong> – a Gemini‑powered code generator that produces 
          JavaScript, canvas drawings, and simple games from natural language prompts. 
          It offers three generation modes, conversation memory, a live iframe preview, 
          and a random idea generator with curated prompts. Mode‑specific validation 
          ensures reliable output across code, canvas, and game modes.
        </li>
        <br/>
        <li>
          <strong>Custom Shell</strong> – a Unix‑like shell written in C with both interactive 
          and batch modes. It implements built‑in commands (<code>cd, clr, dir, environ, echo, help, pause, quit</code>) 
          and executes external programs via process forking. Features include file redirection 
          (<code>&gt;, &gt;&gt;, &lt;</code>) and comprehensive error handling.
        </li>
        <br/>
      </ul>
      <p>
        Each project pushed me to learn full‑stack architecture (SenseAIm), API integration 
        and prompt engineering (VibeCoder), and low‑level systems programming (Custom Shell). 
        These experiences have solidified my skills and taught me to work effectively both 
        independently and in teams.
      </p>
    </>
  ),
};