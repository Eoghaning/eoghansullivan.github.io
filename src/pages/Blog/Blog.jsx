import { useState } from "react";
import "./Blog.css";

const POSTS = [
  {
    date: "2026-03-16",
    title: "About Me",
    preview: "This blog will help you to know a little bit more about me. Hi I'm Eoghan Sullivan. I am a Computer Science student at DCUwith a passion for software development and engineering. Possessing a technical skillset gained through academic projects and practical application. A proactive learner and effective team player, eager to apply strong problem‑solving abilities and a collaborative mindset to contribute to innovative technology projects.",
  },
  {
    date: "2026-03-15",
    title: "Previous Projects",
    preview: "Looking back over some of my past projects, I only wanted to keep the best ones on my portfolio I ended up with taking 3 projects that all demonstrate different skills and technologies. I have done a lot of projects in the past but I wanted to keep the best ones on my portfolio. I have done a lot of projects in the past but I wanted to keep the best ones on my portfolio."
  },
  {
    date: "2026-03-17",
    title: "Portfolio Website",
    preview: "Today, I have finally managed to launch my portfolio website! Built with React and deployed on Netlify, it showcases my projects, skills, and CV. It features a dark theme, responsive design, and smooth scrolling navigation. ",
  },
  {
    date: "2026-03-18",
    title: "Future Project Plans",
    preview: "There is many projects that I would like to do in the future. I am looking into building some to reinforce my skills and to gain knowledge into new areas also. I am very keen on creating some websites or apps that people could actually use or implement in there daily lives.",
  },
];

export default function Blog() {
  const [sortOrder, setSortOrder] = useState("desc");
  const [expandedPost, setExpandedPost] = useState(null);

  const sortedPosts = [...POSTS].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
  });

  const toggleSort = () => {
    setSortOrder(prev => (prev === "desc" ? "asc" : "desc"));
  };

  const handlePostClick = (index) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-GB');
  };

  return (
    <section id="blog" className="page-section">
      <div className="page-inner">
        <div className="blog-outer-box">
          <h1>Blogs</h1>
          <button className="sort-toggle" onClick={toggleSort}>
            {sortOrder === "desc" ? "▼ Newest First" : "▲ Oldest First"}
          </button>
          <div className="blog-list">
            {sortedPosts.map((post, index) => (
              <article key={post.title} className="blog-card">
                <h2 
                  onClick={() => handlePostClick(index)}
                  className="clickable-heading"
                >
                  <span className="blog-date-heading">[{formatDate(post.date)}]</span> - {post.title}
                </h2>
                {expandedPost === index && (
                  <p className="blog-preview">{post.preview}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}