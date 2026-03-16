import "./Blog.css";

const POSTS = [
  {
    date: "Coming soon",
    title: "My first post",
    preview: "I'll be writing about tech, projects, and life as a CS student at DCU. Check back soon!",
    tag: "Life",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="page-section">
      <div className="page-inner">
        <div className="section-header">
          <h1>My Blog</h1>
          
        </div>
        <div className="blog-list">
          {POSTS.map((post) => (
            <article key={post.title} className="blog-card">
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <span className="blog-tag">{post.tag}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-preview">{post.preview}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}