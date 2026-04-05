import Footer from "../components/Footer";
import { posts } from "../index";

const categoryColors = {
  "Generative AI": { bg: "rgba(27,67,50,0.07)", text: "#1B4332" },
  Product: { bg: "rgba(44,95,138,0.07)", text: "#2c5f8a" },
  Engineering: { bg: "rgba(110,60,120,0.07)", text: "#6e3c78" },
  Design: { bg: "rgba(138,92,44,0.07)", text: "#8a5c2c" },
  "AI & Data": { bg: "rgba(46,90,122,0.07)", text: "#2e5a7a" },
  DevOps: { bg: "rgba(74,58,46,0.07)", text: "#4a3a2e" },
};

const categoryAccents = {
  "Generative AI": "#1B4332",
  Product: "#2c5f8a",
  Engineering: "#6e3c78",
  Design: "#8a5c2c",
  "AI & Data": "#2e5a7a",
  DevOps: "#4a3a2e",
};

// ─── Article Page ────────────────────────────────────────────────────────────
export const ArticlePage = ({ post, onBack }) => {
  const accent = categoryAccents[post.category] || "#1B4332";

  return (
    <>
      <style>{`
        .article-back {
          max-width: 720px;
          margin: 0 auto;
          padding: 100px 32px 0;
          display: flex;
          align-items: center;
        }
        .article-back button {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13.5px;
          font-weight: 500;
          color: #888884;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          padding: 0;
          transition: color 0.15s;
        }
        .article-back button:hover { color: #111110; }
        .article-header {
          max-width: 720px;
          margin: 0 auto;
          padding: 36px 32px 48px;
          border-bottom: 1px solid #E4E2DC;
        }
        .article-cat-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .article-title {
          font-size: clamp(26px, 4vw, 42px);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #111110;
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .article-subtitle {
          font-size: 17px;
          color: #666662;
          line-height: 1.65;
          margin-bottom: 28px;
          font-weight: 400;
        }
        .article-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          font-size: 13px;
          color: #888884;
        }
        .article-author {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .article-author-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
        }
        .article-body {
          max-width: 720px;
          margin: 0 auto;
          padding: 52px 32px 96px;
        }
        .article-body p {
          font-size: 16px;
          color: #333330;
          line-height: 1.8;
          margin-bottom: 24px;
        }
        .article-body h2 {
          font-size: 22px;
          font-weight: 700;
          color: #111110;
          letter-spacing: -0.02em;
          margin: 44px 0 16px;
          line-height: 1.25;
        }
        .article-body h3 {
          font-size: 17px;
          font-weight: 600;
          color: #111110;
          margin: 32px 0 12px;
        }
        .article-body ul {
          padding-left: 20px;
          margin-bottom: 24px;
        }
        .article-body li {
          font-size: 16px;
          color: #333330;
          line-height: 1.75;
          margin-bottom: 6px;
        }
        .article-body strong {
          font-weight: 600;
          color: #111110;
        }
      `}</style>

      <div className="article-back">
        <button onClick={onBack}>← Back to Resources</button>
      </div>

      <header className="article-header">
        <span
          className="article-cat-badge"
          style={{
            background: categoryColors[post.category]?.bg || "#f0f0f0",
            color: accent,
          }}
        >
          {post.category}
        </span>
        <h1 className="article-title">{post.title}</h1>
        <p className="article-subtitle">{post.subtitle}</p>
        <div className="article-meta">
          <div className="article-author">
            <div
              className="article-author-avatar"
              style={{ background: accent }}
            >
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <span>{post.author}</span>
            <span>·</span>
            <span style={{ color: "#AAAAAA" }}>{post.authorRole}</span>
          </div>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <article className="article-body">
        {post.body
          .trim()
          .split("\n")
          .map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return null;
            if (trimmed.startsWith("## "))
              return <h2 key={i}>{trimmed.slice(3)}</h2>;
            if (trimmed.startsWith("### "))
              return <h3 key={i}>{trimmed.slice(4)}</h3>;
            if (trimmed.startsWith("- ")) return null; // handled below
            // Replace **bold** with <strong>
            const parts = trimmed.split(/\*\*(.*?)\*\*/g);
            return (
              <p key={i}>
                {parts.map((part, j) =>
                  j % 2 === 1 ? <strong key={j}>{part}</strong> : part,
                )}
              </p>
            );
          })}
      </article>
    </>
  );
};

// ─── Resources List Page ──────────────────────────────────────────────────────
const Resources = ({ setCurrentPage, setActivePost }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(posts.map((p) => p.category))),
  ];
  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <style>{`
        .resources-hero {
          padding: 148px 32px 72px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .resources-hero .section-label {
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1B4332;
          margin-bottom: 14px;
        }
        .resources-hero h1 {
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #111110;
          line-height: 1.1;
          margin-bottom: 16px;
          max-width: 580px;
        }
        .resources-hero p {
          font-size: 16px;
          color: #777773;
          max-width: 440px;
          line-height: 1.65;
        }

        /* ─── Filter bar ─── */
        .filter-bar {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px 40px;
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 7px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          color: #666662;
          background: #F0EDE6;
          border: none;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          transition: background 0.12s, color 0.12s;
        }
        .filter-btn.active, .filter-btn:hover {
          background: #1B4332;
          color: #FAFAF8;
        }

        /* ─── Featured ─── */
        .featured-card {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px 40px;
        }
        .featured-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid #E4E2DC;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          background: #fff;
        }
        .featured-visual {
          background: #1B4332;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          min-height: 280px;
          position: relative;
        }
        .featured-visual::before {
          content: '';
          position: absolute;
          top: -40px; right: -40px;
          width: 200px; height: 200px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.07);
        }
        .featured-tag {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(82,183,136,0.2);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #52B788;
          position: relative;
        }
        .featured-text {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .featured-text h2 {
          font-size: clamp(18px, 2.5vw, 26px);
          font-weight: 700;
          color: #111110;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
          line-height: 1.25;
        }
        .featured-text p {
          font-size: 14.5px;
          color: #666662;
          line-height: 1.65;
          margin-bottom: 24px;
        }
        .featured-meta {
          font-size: 12.5px;
          color: #AAAAAA;
        }
        .featured-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13.5px;
          font-weight: 600;
          color: #1B4332;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          padding: 0;
          margin-top: 20px;
        }

        /* ─── Grid ─── */
        .posts-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px 80px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .post-card {
          background: #fff;
          border: 1px solid #E4E2DC;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          transition: border-color 0.15s;
        }
        .post-card:hover { border-color: #BBBBB8; }
        .post-card-top {
          padding: 24px 24px 20px;
          flex: 1;
        }
        .post-cat-badge {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .post-title {
          font-size: 15px;
          font-weight: 700;
          color: #111110;
          line-height: 1.4;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .post-subtitle {
          font-size: 13px;
          color: #777773;
          line-height: 1.6;
        }
        .post-card-footer {
          padding: 14px 24px;
          border-top: 1px solid #F0EDE6;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .post-author {
          font-size: 12.5px;
          font-weight: 600;
          color: #555551;
        }
        .post-meta {
          font-size: 12px;
          color: #AAAAAA;
        }

        @media (max-width: 900px) {
          .featured-inner { grid-template-columns: 1fr; }
          .posts-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .posts-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero */}
      <section className="resources-hero">
        <p className="section-label">Resources</p>
        <h1>Insights from sixteen years of building.</h1>
        <p>
          Practical guides, engineering opinions, and case study breakdowns from
          the archive team.
        </p>
      </section>

      {/* Featured */}
      <div className="featured-card">
        <div className="featured-inner" onClick={() => setActivePost(featured)}>
          <div className="featured-visual">
            <span className="featured-tag">{featured.category}</span>
          </div>
          <div className="featured-text">
            <h2>{featured.title}</h2>
            <p>{featured.subtitle}</p>
            <div className="featured-meta">
              {featured.author} · {featured.date} · {featured.readTime}
            </div>
            <button className="featured-cta">Read article →</button>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn${activeCategory === cat ? " active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="posts-grid">
        {(activeCategory === "All" ? rest : filtered).map((post, i) => {
          const c = categoryColors[post.category] || {
            bg: "#f0f0f0",
            text: "#333",
          };
          return (
            <div
              key={i}
              className="post-card"
              onClick={() => setActivePost(post)}
            >
              <div className="post-card-top">
                <span
                  className="post-cat-badge"
                  style={{ background: c.bg, color: c.text }}
                >
                  {post.category}
                </span>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-subtitle">{post.subtitle}</p>
              </div>
              <div className="post-card-footer">
                <span className="post-author">{post.author}</span>
                <span className="post-meta">{post.readTime}</span>
              </div>
            </div>
          );
        })}
      </div>

      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};

// Need useState imported here since it's used in Resources
import { useState } from "react";
export default Resources;
