import { useState } from "react";
import Footer from "../components/Footer";
import { services, team } from "../index";

const Home = ({ setCurrentPage }) => {
  const [activeService, setActiveService] = useState(0);

  const stats = [
    { num: "16+", label: "Years in operation" },
    { num: "450+", label: "Skilled professionals" },
    { num: "81", label: "Net promoter score" },
    { num: "250+", label: "Projects delivered" },
  ];

  const clients = [
    "HealthBridge",
    "FleetCore",
    "NovaPay",
    "CareCircle",
    "Meridian Finance",
    "Crestline SaaS",
    "Lantern HR",
    "Volta",
  ];

  const icons = {
    "generative-ai": "✦",
    "product-development": "◈",
    "staff-augmentation": "⬡",
    design: "◐",
    "ai-data": "◎",
    "devops-cloud": "⬢",
    "healthcare-technology": "◉",
  };

  const testimonials = [
    {
      quote:
        "archive became an extension of our team within the first two weeks. The quality of engineers they placed and the speed at which they moved was genuinely unlike any vendor relationship we'd had.",
      author: "Sarah Chen",
      title: "VP Engineering, FleetCore",
    },
    {
      quote:
        "We came to archive with a rough idea and a six-month deadline. They pushed back on our assumptions in week one, redesigned our architecture, and we launched on time. That kind of honest partnership is rare.",
      author: "Marcus Obi",
      title: "CTO, NovaPay",
    },
    {
      quote:
        "The AI system they built processes 2 million documents a day with accuracy that exceeded what our internal team had achieved after 18 months of iteration. I'd work with archive again without hesitation.",
      author: "Dr. Ritu Sharma",
      title: "Head of Digital, HealthBridge",
    },
  ];

  return (
    <>
      <style>{`
        /* ─── HERO ─────────────────────────── */
        .hero {
          padding: 148px 32px 96px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(27,67,50,0.07);
          border: 1px solid rgba(27,67,50,0.14);
          border-radius: 100px;
          padding: 5px 14px;
          margin-bottom: 28px;
        }
        .hero-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #52B788;
        }
        .hero-badge span {
          font-size: 12.5px;
          font-weight: 500;
          color: #1B4332;
        }
        .hero h1 {
          font-size: clamp(38px, 5.5vw, 70px);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #111110;
          max-width: 760px;
          margin-bottom: 24px;
        }
        .hero h1 em {
          font-style: normal;
          color: #2D6A4F;
        }
        .hero-sub {
          font-size: 17px;
          color: #777773;
          line-height: 1.65;
          max-width: 480px;
          margin-bottom: 40px;
          font-weight: 400;
        }
        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }
        .btn-solid {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 12px 24px;
          background: #1B4332;
          color: #FAFAF8;
          border: none;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          transition: background 0.15s;
        }
        .btn-solid:hover { background: #2D6A4F; }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 12px 24px;
          background: none;
          color: #333330;
          border: 1.5px solid #DDDBD4;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          transition: border-color 0.15s, color 0.15s;
        }
        .btn-outline:hover { border-color: #1B4332; color: #1B4332; }

        /* ─── STATS ────────────────────────── */
        .stats-bar {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px 80px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #E4E2DC;
          border-bottom: 1px solid #E4E2DC;
        }
        .stat-item {
          padding: 36px 24px;
          border-right: 1px solid #E4E2DC;
        }
        .stat-item:last-child { border-right: none; }
        .stat-num {
          font-size: 44px;
          font-weight: 700;
          color: #1B4332;
          letter-spacing: -0.04em;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label {
          font-size: 13.5px;
          color: #888884;
          font-weight: 400;
        }

        /* ─── CLIENTS ──────────────────────── */
        .clients-section {
          background: #F0EDE6;
          padding: 48px 32px;
        }
        .clients-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .clients-label {
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #AAAAAA;
          text-align: center;
          margin-bottom: 28px;
        }
        .clients-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 32px;
          justify-content: center;
          align-items: center;
        }
        .client-name {
          font-size: 15px;
          font-weight: 600;
          color: rgba(0,0,0,0.2);
        }

        /* ─── WHAT WE DO ───────────────────── */
        .what-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 96px 32px;
        }
        .section-label {
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1B4332;
          margin-bottom: 12px;
        }
        .section-title {
          font-size: clamp(26px, 3.5vw, 42px);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #111110;
          line-height: 1.15;
          margin-bottom: 56px;
          max-width: 460px;
        }
        .what-layout {
          display: grid;
          grid-template-columns: 240px 1fr;
          border: 1px solid #E4E2DC;
          border-radius: 16px;
          overflow: hidden;
        }
        .what-sidebar {
          background: #F7F5F0;
          border-right: 1px solid #E4E2DC;
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .sidebar-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 12px;
          border-radius: 7px;
          border: none;
          background: none;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          text-align: left;
          transition: background 0.12s;
        }
        .sidebar-btn.active {
          background: #fff;
          box-shadow: 0 1px 3px rgba(0,0,0,0.07);
        }
        .sidebar-icon {
          font-size: 15px;
          width: 20px;
          text-align: center;
          flex-shrink: 0;
        }
        .sidebar-label {
          font-size: 13px;
          font-weight: 500;
          color: #555551;
        }
        .sidebar-btn.active .sidebar-label {
          color: #1B4332;
          font-weight: 600;
        }
        .what-content {
          padding: 40px 44px;
          background: #fff;
        }
        .what-content h3 {
          font-size: 22px;
          font-weight: 700;
          color: #111110;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }
        .what-tagline {
          font-size: 14.5px;
          color: #2D6A4F;
          font-weight: 500;
          margin-bottom: 18px;
        }
        .what-desc {
          font-size: 14.5px;
          color: #666662;
          line-height: 1.75;
          margin-bottom: 28px;
          max-width: 540px;
        }
        .what-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 32px;
        }
        .what-tag {
          padding: 4px 12px;
          background: #F0EDE6;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 500;
          color: #444440;
        }
        .case-study-box {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 20px;
          background: rgba(27,67,50,0.04);
          border: 1px solid rgba(27,67,50,0.1);
          border-radius: 10px;
          max-width: 480px;
        }
        .case-study-box .cs-client {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #1B4332;
          margin-bottom: 4px;
        }
        .case-study-box .cs-result {
          font-size: 13px;
          color: #444440;
          line-height: 1.5;
        }

        /* ─── TESTIMONIALS ─────────────────── */
        .testimonials-section {
          background: #F0EDE6;
          padding: 80px 32px;
        }
        .testimonials-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 48px;
        }
        .testimonial-card {
          background: #fff;
          border: 1px solid #E4E2DC;
          border-radius: 14px;
          padding: 32px;
        }
        .testimonial-quote {
          font-size: 14.5px;
          color: #333330;
          line-height: 1.75;
          margin-bottom: 24px;
          font-style: italic;
        }
        .testimonial-author {
          font-size: 13.5px;
          font-weight: 600;
          color: #111110;
          margin-bottom: 2px;
        }
        .testimonial-title {
          font-size: 12.5px;
          color: #888884;
        }

        /* ─── CTA ──────────────────────────── */
        .home-cta {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 32px;
        }
        .home-cta-inner {
          background: #1B4332;
          border-radius: 18px;
          padding: 72px 60px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px;
          align-items: center;
        }
        .home-cta h2 {
          font-size: clamp(24px, 3vw, 38px);
          font-weight: 700;
          color: #FAFAF8;
          letter-spacing: -0.025em;
          max-width: 440px;
          line-height: 1.2;
          margin-bottom: 12px;
        }
        .home-cta p {
          font-size: 15px;
          color: rgba(255,255,255,0.58);
          line-height: 1.6;
          max-width: 380px;
        }
        .btn-white {
          padding: 13px 28px;
          background: #FAFAF8;
          color: #1B4332;
          border: none;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          white-space: nowrap;
          transition: background 0.15s;
          flex-shrink: 0;
        }
        .btn-white:hover { background: #fff; }

        @media (max-width: 900px) {
          .stats-bar { grid-template-columns: repeat(2, 1fr); }
          .stat-item:nth-child(2) { border-right: none; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .what-layout { grid-template-columns: 1fr; }
          .what-sidebar { flex-direction: row; flex-wrap: wrap; border-right: none; border-bottom: 1px solid #E4E2DC; }
          .home-cta-inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .stats-bar { grid-template-columns: 1fr 1fr; }
          .hero { padding: 120px 20px 64px; }
          .what-content { padding: 28px 24px; }
        }
      `}</style>

      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span>Available for new engagements in Q1 2025</span>
        </div>
        <h1>
          Trusted by <em>enterprises,</em>
          <br />
          scale-ups, and startups.
        </h1>
        <p className="hero-sub">
          archive is a technology services company. We build software, ship AI
          systems, and grow engineering teams for companies that take their
          product seriously.
        </p>
        <div className="hero-actions">
          <button
            className="btn-solid"
            onClick={() => setCurrentPage("services")}
          >
            Explore our services
          </button>
          <button
            className="btn-outline"
            onClick={() => setCurrentPage("about")}
          >
            About archive
          </button>
        </div>
      </section>

      {/* Stats */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div className="stats-bar">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Clients */}
      <div className="clients-section">
        <div className="clients-inner">
          <p className="clients-label">Companies we've built with</p>
          <div className="clients-grid">
            {clients.map((c, i) => (
              <span key={i} className="client-name">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* What We Do */}
      <section className="what-section">
        <div className="section-label">What We Do</div>
        <h2 className="section-title">
          Seven practice areas. One accountable team.
        </h2>

        <div className="what-layout">
          <div className="what-sidebar">
            {services.map((s, i) => (
              <button
                key={i}
                className={`sidebar-btn${activeService === i ? " active" : ""}`}
                onClick={() => setActiveService(i)}
              >
                <span className="sidebar-icon">{icons[s.id]}</span>
                <span className="sidebar-label">{s.shortName}</span>
              </button>
            ))}
          </div>
          <div className="what-content">
            <div key={activeService}>
              <h3>{services[activeService].name}</h3>
              <p className="what-tagline">{services[activeService].tagline}</p>
              <p className="what-desc">{services[activeService].overview}</p>
              <div className="what-tags">
                {services[activeService].deliverables
                  .slice(0, 5)
                  .map((d, i) => (
                    <span key={i} className="what-tag">
                      {d}
                    </span>
                  ))}
              </div>
              <div className="case-study-box">
                <div
                  style={{
                    width: 3,
                    borderRadius: 3,
                    background: "#52B788",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}
                />
                <div>
                  <div className="cs-client">
                    {services[activeService].caseStudy.client}
                  </div>
                  <div className="cs-result">
                    {services[activeService].caseStudy.result}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ marginTop: 28, display: "flex", justifyContent: "flex-end" }}
        >
          <button
            className="btn-outline"
            onClick={() => setCurrentPage("services")}
          >
            See all services and case studies →
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <div className="testimonials-section">
        <div className="testimonials-inner">
          <div className="section-label">Client Perspective</div>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            What our partners say.
          </h2>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">{t.author}</div>
                <div className="testimonial-title">{t.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="home-cta">
        <div className="home-cta-inner">
          <div>
            <h2>Ready to start building?</h2>
            <p>
              Tell us what you're working on. We'll tell you honestly how we can
              help — and whether we're the right fit.
            </p>
          </div>
          <button
            className="btn-white"
            onClick={() => setCurrentPage("contact")}
          >
            Get in touch →
          </button>
        </div>
      </div>

      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Home;
