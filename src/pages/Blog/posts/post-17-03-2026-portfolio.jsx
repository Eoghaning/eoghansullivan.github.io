import portfolioImg from "../pics/portfolio-screenshot.jpg";

export const post = {
  date: "2026-03-17",
  title: "Portfolio Website",
  content: (
    <>
      <p>Today, I have finally managed to launch my portfolio website! Built with React and deployed on Netlify, it showcases my projects, skills, and CV. It features a dark theme, responsive design, and smooth scrolling navigation.</p>
      <img src={portfolioImg} alt="Portfolio screenshot" style={{ maxWidth: '100%', borderRadius: '8px', margin: '1em auto', display: 'block' }} />
    </>
  ),
};