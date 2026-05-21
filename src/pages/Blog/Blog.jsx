import { useState } from "react";
import "./Blog.css";
import ReactMarkdown from "react-markdown";
import { parse as parseYaml } from "yaml";

function parseFrontMatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { attributes: {}, body: raw };
  return { attributes: parseYaml(match[1]), body: match[2] };
}

const postFiles = import.meta.glob('/src/pages/Blog/posts/*.md', { eager: true, query: '?raw', import: 'default' });

const imageFiles = import.meta.glob('/src/pages/Blog/pics/*.{jpg,png,gif,svg,webp}', { eager: true });

const imageLookup = {};
for (const [key, mod] of Object.entries(imageFiles)) {
  const filename = key.split('/').pop();
  imageLookup[filename] = mod.default;
}

const POSTS = Object.entries(postFiles).map(([path, raw]) => {
  const { attributes, body } = parseFrontMatter(raw);
  return { ...attributes, content: body };
});

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
                  <div className="blog-preview">
                    <ReactMarkdown
                      components={{
                        img: ({ src, alt }) => (
                          <img src={imageLookup[src] || src} alt={alt || ''} />
                        ),
                      }}
                    >
                      {post.content}
                    </ReactMarkdown>
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
