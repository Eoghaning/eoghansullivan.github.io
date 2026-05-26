import { useState, useMemo } from "react";
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

const ALL_POSTS = Object.entries(postFiles).map(([path, raw]) => {
  const { attributes, body } = parseFrontMatter(raw);
  return { ...attributes, content: body };
});

const PUBLISHED_POSTS = ALL_POSTS.filter(p => !p.draft);

const ALL_BLOG_TAGS = [...new Set(PUBLISHED_POSTS.flatMap(p => p.tags || []))].sort();

function extractHeadings(content) {
  const headings = [];
  const regex = /^(#{2,3})\s+(.+)$/gm;
  let match;
  while ((match = regex.exec(content)) !== null) {
    headings.push({ level: match[1].length, text: match[2] });
  }
  return headings;
}

export default function Blog() {
  const [sortOrder, setSortOrder] = useState("desc");
  const [expandedPost, setExpandedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTags, setActiveTags] = useState([]);

  const sortedPosts = [...PUBLISHED_POSTS].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
  });

  const tagFiltered = activeTags.length === 0
    ? sortedPosts
    : sortedPosts.filter(p =>
        activeTags.every(t => (p.tags || []).includes(t))
      );

  const visiblePosts = searchQuery.trim()
    ? tagFiltered.filter(p =>
        p.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      )
    : tagFiltered;

  const toggleSort = () => {
    setSortOrder(prev => (prev === "desc" ? "asc" : "desc"));
  };

  const handlePostClick = (index) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-GB');
  };

  const toggleTag = (tag) => {
    setActiveTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
    setExpandedPost(null);
  };

  const currentPost = expandedPost !== null ? visiblePosts[expandedPost] : null;

  const relatedPosts = useMemo(() => {
    if (!currentPost) return [];
    const currentTags = currentPost.tags || [];
    return PUBLISHED_POSTS
      .filter(p => p.title !== currentPost.title)
      .map(p => ({
        ...p,
        _matchCount: (p.tags || []).filter(t => currentTags.includes(t)).length,
      }))
      .filter(p => p._matchCount > 0)
      .sort((a, b) => b._matchCount - a._matchCount)
      .slice(0, 3);
  }, [currentPost]);

  return (
    <section id="blog" className="page-section fade-slide-in">
      <div className="page-inner">
        <div className="blog-outer-box">
          <h1>Blogs</h1>
          <div className="blog-toolbar">
            <input
              className="blog-search"
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setExpandedPost(null); }}
            />
            <button className="sort-toggle" onClick={toggleSort}>
              {sortOrder === "desc" ? "▼ Newest First" : "▲ Oldest First"}
            </button>
          </div>
          {ALL_BLOG_TAGS.length > 0 && (
            <div className="blog-tag-bar">
              <span className="blog-tag-label">Filters:</span>
              {ALL_BLOG_TAGS.map(tag => (
                <button
                  key={tag}
                  className={"blog-tag-chip" + (activeTags.includes(tag) ? " active" : "")}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
          <div className="blog-list">
            {visiblePosts.length === 0 && (
              <p className="blog-no-results">No posts found</p>
            )}
            {visiblePosts.map((post, index) => (
              <article key={post.title} className="blog-card">
                <h2 
                  onClick={() => handlePostClick(index)}
                  className="clickable-heading"
                >
                  <span className="blog-date-heading">[{formatDate(post.date)}]</span> - {post.title}
                </h2>
                {expandedPost === index && (
                  <div className="blog-preview">
                    {post.tags && post.tags.length > 0 && (
                      <div className="blog-post-tags">
                        {post.tags.map(t => <span key={t} className="blog-post-tag">{t}</span>)}
                      </div>
                    )}
                    {(() => {
                      const headings = extractHeadings(post.content);
                      if (headings.length < 2) return null;
                      return (
                        <div className="blog-toc">
                          <span className="blog-toc-title">Contents</span>
                          {headings.map((h, i) => (
                            <div key={i} className={"blog-toc-item blog-toc-lvl-" + h.level}>
                              {h.text}
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                    <ReactMarkdown
                      components={{
                        img: ({ src, alt }) => (
                          <img src={imageLookup[src] || src} alt={alt || ''} loading="lazy" />
                        ),
                      }}
                    >
                      {post.content}
                    </ReactMarkdown>
                    {relatedPosts.length > 0 && (
                      <div className="blog-related">
                        <span className="blog-related-title">Related Posts</span>
                        {relatedPosts.map(rp => (
                          <div key={rp.title} className="blog-related-item">
                            <span className="blog-related-date">[{formatDate(rp.date)}]</span>{" "}
                            {rp.title}
                          </div>
                        ))}
                      </div>
                    )}
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