import { useState } from "react";
import "./Blog.css";

// Import all blog posts
import { post as post1 } from "./posts/post-15-03-2026-about-me";
import { post as post2 } from "./posts/post-16-03-2026-previous-projects";
import { post as post3 } from "./posts/post-17-03-2026-portfolio";
import { post as post4 } from "./posts/post-18-03-2026-future-projects";

const POSTS = [post1, post2, post3, post4];

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

  const renderContent = (content) => {
    if (typeof content === "string") {
      return content.split('\n\n').map((paragraph, idx) => (
        <p key={idx} className="blog-paragraph">{paragraph}</p>
      ));
    }
    return content; // JSX
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
                  <div className="blog-preview">
                    {renderContent(post.content)}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}