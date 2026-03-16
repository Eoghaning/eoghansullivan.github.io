import { useState } from "react";
import "./Blog.css";

const POSTS = [
  {
    date: "2026-03-16",
    title: "About Me",
    preview: "Computer Science student at DCU with a passion for software development. Proactive learner, team player, and problem solver. Currently in 3rd year with results including UI Design 64, OO Analysis 60, and Advanced Algorithms 60. Experienced in Python, Java, C, React, and more.",
    tag: "Personal",
  },
  {
    date: "2026-03-15",
    title: "Previous Projects",
    preview: "A look back at my main projects: SenseAIm – a CS2 anti-cheat platform with ML analysis; VibeCoder AI – a Gemini-powered code generator; Custom Shell – a Unix-like shell written in C. Each project taught me valuable lessons in full-stack development, API integration, and systems programming.",
    tag: "Projects",
  },
];

export default function Blog() {
  const [sortOrder, setSortOrder] = useState("newest");

  const sortedPosts = [...POSTS].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (sortOrder === "newest") {
      return dateB - dateA;
    } else {
      return dateA - dateB;
    }
  });

  const toggleSort = () => {
    setSortOrder(prev => (prev === "newest" ? "oldest" : "newest"));
  };

  return (
    <section id="blog" className="page-section">
      <div className="page-inner">
        <div className="blog-outer-box">
          <div className="section-header">
            <h1>Blogs</h1>
            <button className="sort-toggle" onClick={toggleSort}>
              Sort: {sortOrder === "newest" ? "Newest First" : "Oldest First"}
            </button>
          </div>
          <div className="blog-list">
            {sortedPosts.map((post) => (
              <article key={post.title} className="blog-card">
                <div className="blog-meta">
                  <span className="blog-date">{new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="blog-tag">{post.tag}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-preview">{post.preview}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}