import { useState } from "react";
import Footer from "../components/Footer";

const openRoles = [
  {
    title: "Senior Full-Stack Engineer",
    team: "Engineering",
    location: "Remote (APAC/EU preferred)",
    type: "Full-time",
    level: "Senior",
    description:
      "Own the architecture and delivery of full-stack features across client products. Work directly with tech leads and clients. Experience with TypeScript, React, and Node.js or Go required. 5+ years expected.",
  },
  {
    title: "AI/ML Engineer",
    team: "AI & Data",
    location: "Hybrid — Kathmandu",
    type: "Full-time",
    level: "Senior",
    description:
      "Design and ship production AI systems — RAG pipelines, agentic frameworks, fine-tuning workflows. Strong Python and experience with LLM APIs (OpenAI, Anthropic, open-source) required. Prior production ML experience essential.",
  },
  {
    title: "Product Designer",
    team: "Design",
    location: "Remote",
    type: "Full-time",
    level: "Mid / Senior",
    description:
      "End-to-end product design from research to shipped UI. Comfortable running user interviews, designing systems in Figma, and doing design QA in production. You should have a portfolio demonstrating real product impact.",
  },
  {
    title: "DevOps / Platform Engineer",
    team: "DevOps & Cloud",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    description:
      "Build and maintain cloud infrastructure for our clients. Strong background in Kubernetes, Terraform, and at least one major cloud provider. Experience with observability stacks (Prometheus, Grafana, OpenTelemetry) valued.",
  },
  {
    title: "Engineering Manager",
    team: "Engineering",
    location: "Hybrid — Kathmandu",
    type: "Full-time",
    level: "Lead",
    description:
      "Lead a pod of 6–10 engineers across multiple client engagements. You'll run standups, unblock engineers, manage timelines, and represent the technical voice in client conversations. Prior engineering background required.",
  },
  {
    title: "Data Engineer",
    team: "AI & Data",
    location: "Remote",
    type: "Full-time",
    level: "Mid / Senior",
    description:
      "Build reliable data pipelines, design warehouse schemas, and implement dbt models for our data-intensive client engagements. Proficiency with Spark, Airflow or Dagster, and SQL at scale required.",
  },
];

const values = [
  {
    title: "We take craft seriously.",
    body: "We care about the quality of what we ship — code, design, and communication. We've built a culture where taking care with your work is respected, not treated as a bottleneck.",
  },
  {
    title: "Ownership without permission.",
    body: "Engineers don't wait to be told what to fix. Designers push back on briefs when the problem definition is wrong. Everyone acts like it's their company.",
  },
  {
    title: "Honest in both directions.",
    body: "We tell clients when we think their approach is wrong. We expect our team to tell us the same. Comfortable conversations aren't how we get better.",
  },
  {
    title: "Growth is a shared investment.",
    body: "Learning budget, conference attendance, 20% time for personal projects, and access to senior engineers who will actually spend time with you.",
  },
];

const fellowshipFaqs = [
  {
    q: "Who is the fellowship for?",
    a: "Final-year students and recent graduates with strong fundamentals and exceptional curiosity. We're less interested in your resume and more interested in how you think.",
  },
  {
    q: "How does selection work?",
    a: "A written application, a technical problem set, and a 90-minute conversation with two members of our team. We run two cohorts per year, 8–12 fellows each.",
  },
  {
    q: "What will I actually work on?",
    a: "Real client projects, not intern work. You'll be paired with a senior engineer who acts as your technical mentor for the full 6 months.",
  },
  {
    q: "What happens after?",
    a: "Top-performing fellows receive a full-time offer. We've converted 70% of fellows in the last two cohorts.",
  },
];

const Join = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState("careers");
  const [expandedRole, setExpandedRole] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <>
      <style>{`
        .join-hero {
          background: #1B4332;
          padding: 148px 32px 80px;
        }
        .join-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .join-hero-label {
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #52B788;
          margin-bottom: 16px;
        }
        .join-hero h1 {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          color: #FAFAF8;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 18px;
          max-width: 680px;
        }
        .join-hero p {
          font-size: 16px;
          color: rgba(255,255,255,0.55);
          max-width: 480px;
          line-height: 1.65;
        }

        /* Values */
        .join-values {
          background: #F0EDE6;
          padding: 72px 32px;
        }
        .join-values-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 44px;
        }
        .value-card {
          background: #fff;
          border: 1px solid #E4E2DC;
          border-radius: 12px;
          padding: 28px 24px;
        }
        .value-title {
          font-size: 14.5px;
          font-weight: 600;
          color: #111110;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .value-body {
          font-size: 13.5px;
          color: #777773;
          line-height: 1.65;
        }

        /* Tabs */
        .join-tabs-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 32px 96px;
        }
        .tab-bar {
          display: flex;
          gap: 0;
          border: 1px solid #E4E2DC;
          border-radius: 9px;
          width: fit-content;
          overflow: hidden;
          margin-bottom: 52px;
        }
        .tab-btn {
          padding: 10px 28px;
          font-size: 13.5px;
          font-weight: 500;
          color: #888884;
          background: #FAFAF8;
          border: none;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          transition: background 0.15s, color 0.15s;
        }
        .tab-btn.active {
          background: #1B4332;
          color: #FAFAF8;
          font-weight: 600;
        }
        .tab-btn:first-child { border-radius: 8px 0 0 8px; }
        .tab-btn:last-child { border-radius: 0 8px 8px 0; }

        /* Careers */
        .careers-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          margin-bottom: 48px;
          align-items: end;
        }
        .careers-top h2 {
          font-size: clamp(24px, 3.5vw, 38px);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #111110;
          margin-bottom: 12px;
          line-height: 1.15;
        }
        .careers-top p {
          font-size: 14.5px;
          color: #777773;
          line-height: 1.65;
        }
        .perks-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .perk-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: #444440;
        }
        .perk-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #52B788;
          flex-shrink: 0;
          margin-top: 8px;
        }

        /* Role cards */
        .roles-list {
          display: flex;
          flex-direction: column;
          border: 1px solid #E4E2DC;
          border-radius: 14px;
          overflow: hidden;
        }
        .role-row {
          border-bottom: 1px solid #E4E2DC;
        }
        .role-row:last-child { border-bottom: none; }
        .role-header {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 20px;
          align-items: center;
          padding: 20px 24px;
          cursor: pointer;
          background: #fff;
          border: none;
          width: 100%;
          text-align: left;
          font-family: 'Poppins', sans-serif;
          transition: background 0.12s;
        }
        .role-header:hover { background: #FAFAF8; }
        .role-row.open .role-header { background: #FAFAF8; }
        .role-title {
          font-size: 15px;
          font-weight: 600;
          color: #111110;
          margin-bottom: 4px;
        }
        .role-meta {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .role-meta-item {
          font-size: 12.5px;
          color: #888884;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .role-badge {
          display: inline-block;
          padding: 2px 9px;
          background: rgba(27,67,50,0.07);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          color: #1B4332;
        }
        .role-toggle {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1.5px solid #DDDBD4;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 17px;
          font-weight: 300;
          color: #888884;
          flex-shrink: 0;
        }
        .role-row.open .role-toggle {
          background: #1B4332;
          border-color: #1B4332;
          color: #fff;
        }
        .role-body {
          padding: 0 24px 24px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 32px;
          align-items: start;
          background: #FAFAF8;
        }
        .role-desc {
          font-size: 14px;
          color: #555551;
          line-height: 1.7;
        }
        .role-apply-btn {
          padding: 10px 22px;
          background: #1B4332;
          color: #FAFAF8;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.15s;
        }
        .role-apply-btn:hover { background: #2D6A4F; }

        /* Fellowship */
        .fellowship-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
        .fellowship-card {
          background: #1B4332;
          border-radius: 18px;
          padding: 44px;
          position: relative;
          overflow: hidden;
        }
        .fellowship-card::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 240px; height: 240px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.07);
        }
        .fellowship-badge {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(82,183,136,0.2);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #52B788;
          margin-bottom: 22px;
        }
        .fellowship-card h2 {
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 700;
          color: #FAFAF8;
          letter-spacing: -0.025em;
          margin-bottom: 16px;
          line-height: 1.2;
          position: relative;
        }
        .fellowship-card p {
          font-size: 14.5px;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          margin-bottom: 32px;
          position: relative;
        }
        .fellowship-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 32px;
          position: relative;
        }
        .fellowship-stat {
          background: rgba(255,255,255,0.04);
          padding: 16px;
        }
        .fellowship-stat-num {
          font-size: 22px;
          font-weight: 700;
          color: #FAFAF8;
          margin-bottom: 2px;
        }
        .fellowship-stat-label {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          font-weight: 500;
        }
        .fellowship-apply-btn {
          padding: 12px 24px;
          background: #FAFAF8;
          color: #1B4332;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          position: relative;
          transition: background 0.15s;
        }
        .fellowship-apply-btn:hover { background: #fff; }

        /* FAQ */
        .faq-section { display: flex; flex-direction: column; gap: 1px; }
        .faq-item {
          border: 1px solid #E4E2DC;
          border-radius: 10px;
          overflow: hidden;
        }
        .faq-q {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px;
          cursor: pointer;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          font-family: 'Poppins', sans-serif;
          gap: 12px;
          background: #fff;
        }
        .faq-q span:first-child {
          font-size: 14px;
          font-weight: 600;
          color: #111110;
          line-height: 1.4;
        }
        .faq-caret {
          font-size: 20px;
          color: #888884;
          flex-shrink: 0;
          font-weight: 300;
          line-height: 1;
        }
        .faq-a {
          padding: 0 20px 18px;
          font-size: 13.5px;
          color: #666662;
          line-height: 1.7;
          background: #fff;
        }

        @media (max-width: 900px) {
          .values-grid { grid-template-columns: 1fr 1fr; }
          .careers-top { grid-template-columns: 1fr; gap: 32px; }
          .fellowship-layout { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .values-grid { grid-template-columns: 1fr; }
          .role-body { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero */}
      <section className="join-hero">
        <div className="join-hero-inner">
          <p className="join-hero-label">Join archive</p>
          <h1>Work that's worth your time.</h1>
          <p>
            We're building a company where exceptional engineers and designers
            do their best work on real problems. If that's you, read on.
          </p>
        </div>
      </section>

      {/* Values */}
      <div className="join-values">
        <div className="join-values-inner">
          <div
            style={{
              fontSize: "11.5px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#1B4332",
              marginBottom: 12,
            }}
          >
            How We Work
          </div>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 38px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#111110",
              maxWidth: 400,
              lineHeight: 1.15,
            }}
          >
            What we believe in.
          </h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-title">{v.title}</div>
                <div className="value-body">{v.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs content */}
      <section className="join-tabs-section">
        <div className="tab-bar">
          {["careers", "fellowship"].map((tab) => (
            <button
              key={tab}
              className={`tab-btn${activeTab === tab ? " active" : ""}`}
              onClick={() => setActiveTab(tab)}
              style={{ textTransform: "capitalize" }}
            >
              {tab === "careers" ? "Open Roles" : "Fellowship Program"}
            </button>
          ))}
        </div>

        {/* ─── CAREERS ─── */}
        {activeTab === "careers" && (
          <div>
            <div className="careers-top">
              <div>
                <h2>We're hiring across all practice areas.</h2>
                <p>
                  We're a remote-first company with offices in Kathmandu. We
                  hire for impact over pedigree — what you've shipped matters
                  more than where you went to school.
                </p>
              </div>
              <div className="perks-list">
                {[
                  "Competitive salary benchmarked to market",
                  "Remote-first with flexible hours",
                  "Annual learning & conference budget",
                  "Health coverage (location-dependent)",
                  "25 days PTO + local public holidays",
                  "Equipment stipend on join",
                  "20% time for personal and open-source projects",
                ].map((p, i) => (
                  <div key={i} className="perk-item">
                    <span className="perk-dot" />
                    {p}
                  </div>
                ))}
              </div>
            </div>

            <div className="roles-list">
              {openRoles.map((r, i) => {
                const isOpen = expandedRole === i;
                return (
                  <div key={i} className={`role-row${isOpen ? " open" : ""}`}>
                    <button
                      className="role-header"
                      onClick={() => setExpandedRole(isOpen ? null : i)}
                    >
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            marginBottom: 6,
                          }}
                        >
                          <span className="role-title">{r.title}</span>
                          <span className="role-badge">{r.level}</span>
                        </div>
                        <div className="role-meta">
                          <span className="role-meta-item">{r.team}</span>
                          <span className="role-meta-item">·</span>
                          <span className="role-meta-item">{r.location}</span>
                          <span className="role-meta-item">·</span>
                          <span className="role-meta-item">{r.type}</span>
                        </div>
                      </div>
                      <div className="role-toggle">{isOpen ? "−" : "+"}</div>
                    </button>
                    {isOpen && (
                      <div className="role-body">
                        <p className="role-desc">{r.description}</p>
                        <button
                          className="role-apply-btn"
                          onClick={() => setCurrentPage("contact")}
                        >
                          Apply →
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <p style={{ marginTop: 28, fontSize: 14, color: "#888884" }}>
              Don't see the right role?{" "}
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#1B4332",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 14,
                  padding: 0,
                }}
                onClick={() => setCurrentPage("contact")}
              >
                Send us a note anyway.
              </button>
            </p>
          </div>
        )}

        {/* ─── FELLOWSHIP ─── */}
        {activeTab === "fellowship" && (
          <div className="fellowship-layout">
            <div className="fellowship-card">
              <div className="fellowship-badge">Fellowship Program</div>
              <h2>An immersive start to your engineering career.</h2>
              <p>
                The archive Fellowship is a 6-month structured program for
                exceptional students and recent graduates. You'll work on real
                client engagements, alongside senior engineers who will invest
                in your growth — not just assign you tasks.
              </p>
              <div className="fellowship-stats">
                {[
                  ["6 months", "Program duration"],
                  ["Paid", "Competitive stipend"],
                  ["70%", "Full-time conversion"],
                ].map(([num, label], i) => (
                  <div key={i} className="fellowship-stat">
                    <div className="fellowship-stat-num">{num}</div>
                    <div className="fellowship-stat-label">{label}</div>
                  </div>
                ))}
              </div>
              <button
                className="fellowship-apply-btn"
                onClick={() => setCurrentPage("contact")}
              >
                Apply to the Fellowship →
              </button>
            </div>

            <div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#111110",
                  marginBottom: 8,
                  letterSpacing: "-0.015em",
                }}
              >
                Common questions
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#888884",
                  marginBottom: 28,
                  lineHeight: 1.6,
                }}
              >
                Next cohort starts March 2025. Applications close January 31.
              </p>
              <div className="faq-section">
                {fellowshipFaqs.map((faq, i) => (
                  <div key={i} className="faq-item">
                    <button
                      className="faq-q"
                      onClick={() =>
                        setExpandedFaq(expandedFaq === i ? null : i)
                      }
                    >
                      <span>{faq.q}</span>
                      <span className="faq-caret">
                        {expandedFaq === i ? "−" : "+"}
                      </span>
                    </button>
                    {expandedFaq === i && <div className="faq-a">{faq.a}</div>}
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 28,
                  padding: "20px",
                  background: "#F7F5F0",
                  border: "1px solid #E4E2DC",
                  borderRadius: 12,
                }}
              >
                <p
                  style={{
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: "#111110",
                    marginBottom: 6,
                  }}
                >
                  What we look for
                </p>
                <p style={{ fontSize: 13, color: "#666662", lineHeight: 1.65 }}>
                  Strong fundamentals over polished credentials. Genuine
                  curiosity. Evidence that you build things in your own time.
                  The ability to communicate clearly — in writing and in
                  conversation.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Join;
