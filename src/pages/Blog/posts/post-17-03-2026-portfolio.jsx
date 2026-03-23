import portfolioImg from "../pics/portfolio-screenshot.jpg";

export const post = {
  date: "2026-03-17",
  title: "Portfolio Website",
  content: (
    <>
      <h3>Portfolio Website</h3>
      <p>Today marks a milestone I've been working toward for a while: my portfolio website is officially live!</p>
      <br/>
      <p>Built with <strong>React</strong> and deployed on <strong>Netlify</strong>, this site is my digital home on the web. It's where I showcase my projects, skills, and CV—all in one place. I wanted a clean, dark-themed design that feels modern but also lets the content shine. The site is fully responsive, so it looks great whether you're on a desktop, tablet, or phone.</p>
      <br/>
      <p>One of my favorite features is the smooth scrolling navigation—clicking any link instantly moves you to the right section without jarring jumps. I also added a <strong>projects filter</strong> (try it out!) so you can explore by technology, and the blog section will be regularly updated with my progress and insights.</p>
      <br/>
      <p>Building this taught me a lot about structuring a React app, handling routing, and managing state. I also focused on accessibility and performance, making sure everything loads quickly. Deploying with Netlify was a breeze—continuous deployment means any change I push to GitHub is live in seconds.</p>
      <img src={portfolioImg} alt="Portfolio screenshot" style={{ maxWidth: '80%', height: 'auto', borderRadius: '8px', margin: '1em auto', display: 'block', border: '2px solid var(--accent)' }} />
      <br/>
      <p>I'll be continuing to refine the site and add new features over time. If you have any feedback or just want to say hi, feel free to reach out via the contact links below! In the meantime, feel free to explore and let me know what you think.</p>
    </>
  ),
};