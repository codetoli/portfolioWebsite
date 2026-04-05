import { useState } from "react";
import Footer from "../components/Footer";
import { services } from "../index";

const icons = {
  "generative-ai": "✦",
  "product-development": "◈",
  "staff-augmentation": "⬡",
  design: "◐",
  "ai-data": "◎",
  "devops-cloud": "⬢",
  "healthcare-technology": "◉",
};

const accentColors = {
  "generative-ai": {
    bg: "rgba(27,67,50,0.06)",
    border: "rgba(27,67,50,0.14)",
    text: "#1B4332",
  },
  "product-development": {
    bg: "rgba(44,95,138,0.06)",
    border: "rgba(44,95,138,0.14)",
    text: "#2c5f8a",
  },
  "staff-augmentation": {
    bg: "rgba(110,60,120,0.06)",
    border: "rgba(110,60,120,0.14)",
    text: "#6e3c78",
  },
  design: {
    bg: "rgba(138,92,44,0.06)",
    border: "rgba(138,92,44,0.14)",
    text: "#8a5c2c",
  },
  "ai-data": {
    bg: "rgba(46,90,122,0.06)",
    border: "rgba(46,90,122,0.14)",
    text: "#2e5a7a",
  },
  "devops-cloud": {
    bg: "rgba(74,58,46,0.06)",
    border: "rgba(74,58,46,0.14)",
    text: "#4a3a2e",
  },
  "healthcare-technology": {
    bg: "rgba(27,67,50,0.06)",
    border: "rgba(27,67,50,0.14)",
    text: "#185c44",
  },
};

const Services = ({ setCurrentPage }) => {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  return (
    <>
      <style>{`
        .services-hero {
          padding: 148px 32px 72px;
          max-width: 1200px;
          margin: 0 auto;
          border-bottom: 1px solid #E4E2DC;
          margin-bottom: 0;
        }
        .services-hero .section-label {
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1B4332;
          margin-bottom: 14px;
        }
        .services-hero h1 {
          font-size: clamp(30px, 4.5vw, 56px);
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #111110;
          line-height: 1.1;
          margin-bottom: 18px;
          max-width: 640px;
        }
        .services-hero p {
          font-size: 16px;
          color: #777773;
          max-width: 500px;
          line-height: 1.65;
        }

        /* ─── Service Cards ─────────────── */
        .services-list {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px 80px;
        }
        .service-row {
          border-bottom: 1px solid #E4E2DC;
        }
        .service-header {
          display: grid;
          grid-template-columns: 52px 1fr auto;
          align-items: center;
          gap: 20px;
          padding: 28px 0;
          cursor: pointer;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          font-family: 'Poppins', sans-serif;
        }
        .service-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }
        .service-header-text {}
        .service-header-name {
          font-size: 17px;
          font-weight: 600;
          color: #111110;
          margin-bottom: 3px;
        }
        .service-header-tagline {
          font-size: 13.5px;
          color: #888884;
          font-weight: 400;
        }
        .service-toggle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid #DDDBD4;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #888884;
          font-size: 18px;
          font-weight: 300;
          line-height: 1;
          transition: border-color 0.15s, color 0.15s, background 0.15s;
        }
        .service-row.open .service-toggle {
          background: #1B4332;
          border-color: #1B4332;
          color: #fff;
        }

        .service-body {
          padding: 0 0 36px 64px;
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 48px;
          align-items: start;
        }
        .service-body-overview {
          font-size: 15px;
          color: #444440;
          line-height: 1.75;
          margin-bottom: 20px;
        }
        .service-body-detail {
          font-size: 14px;
          color: #666662;
          line-height: 1.75;
          margin-bottom: 28px;
        }
        .service-deliverables-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #AAAAAA;
          margin-bottom: 12px;
        }
        .service-deliverables {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .service-deliverable {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: #444440;
        }
        .service-deliverable-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #52B788;
          flex-shrink: 0;
          margin-top: 7px;
        }
        .service-cta-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .service-case-box {
          background: #F7F5F0;
          border: 1px solid #E4E2DC;
          border-radius: 12px;
          padding: 20px;
        }
        .service-case-label {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1B4332;
          margin-bottom: 8px;
        }
        .service-case-client {
          font-size: 13.5px;
          font-weight: 600;
          color: #111110;
          margin-bottom: 6px;
        }
        .service-case-result {
          font-size: 13px;
          color: #666662;
          line-height: 1.55;
        }
        .service-cta-btn {
          width: 100%;
          padding: 11px 18px;
          background: #1B4332;
          color: #FAFAF8;
          border: none;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          transition: background 0.15s;
        }
        .service-cta-btn:hover { background: #2D6A4F; }

        /* ─── Process ───────────────────── */
        .process-section {
          background: #F0EDE6;
          padding: 80px 32px;
        }
        .process-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #DDDBD4;
          border-radius: 14px;
          overflow: hidden;
          margin-top: 48px;
        }
        .process-step {
          background: #FAFAF8;
          padding: 32px 28px;
        }
        .process-num {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #BBBBBB;
          margin-bottom: 20px;
        }
        .process-step h3 {
          font-size: 16px;
          font-weight: 600;
          color: #111110;
          margin-bottom: 10px;
        }
        .process-step p {
          font-size: 13.5px;
          color: #777773;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .service-body { grid-template-columns: 1fr; padding-left: 0; }
          .process-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 500px) {
          .process-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero */}
      <section className="services-hero">
        <p className="section-label">Services</p>
        <h1>End-to-end technology, built for how companies actually work.</h1>
        <p>
          We don't believe in narrow specialization or endless handoffs. Seven
          practice areas, one team accountable for the outcome.
        </p>
      </section>

      {/* Services list */}
      <div className="services-list">
        {services.map((s) => {
          const isOpen = activeId === s.id;
          const c = accentColors[s.id];
          return (
            <div key={s.id} className={`service-row${isOpen ? " open" : ""}`}>
              <button className="service-header" onClick={() => toggle(s.id)}>
                <div
                  className="service-icon-wrap"
                  style={{ background: c.bg, border: `1px solid ${c.border}` }}
                >
                  <span style={{ color: c.text }}>{icons[s.id]}</span>
                </div>
                <div className="service-header-text">
                  <div className="service-header-name">{s.name}</div>
                  <div className="service-header-tagline">{s.tagline}</div>
                </div>
                <div className="service-toggle">{isOpen ? "−" : "+"}</div>
              </button>

              {isOpen && (
                <div className="service-body">
                  <div>
                    <p className="service-body-overview">{s.overview}</p>
                    <p className="service-body-detail">{s.detail}</p>
                    <p className="service-deliverables-label">
                      What we deliver
                    </p>
                    <div className="service-deliverables">
                      {s.deliverables.map((d, i) => (
                        <div key={i} className="service-deliverable">
                          <span className="service-deliverable-dot" />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="service-cta-col">
                    <div className="service-case-box">
                      <p className="service-case-label">Case study</p>
                      <p className="service-case-client">
                        {s.caseStudy.client}
                      </p>
                      <p className="service-case-result">
                        {s.caseStudy.result}
                      </p>
                    </div>
                    <button
                      className="service-cta-btn"
                      onClick={() => setCurrentPage("contact")}
                    >
                      Discuss this service →
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* How we work */}
      <div className="process-section">
        <div className="process-inner">
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
              fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#111110",
              maxWidth: 400,
              lineHeight: 1.15,
            }}
          >
            A model built around delivery, not process.
          </h2>
          <div className="process-grid">
            {[
              {
                n: "01",
                title: "Discovery & Scoping",
                body: "We spend the first one to two weeks understanding your business goals, technical constraints, and existing systems before writing a single line of code. Most teams rush this. We don't.",
              },
              {
                n: "02",
                title: "Architecture & Planning",
                body: "We design systems that account for your current requirements and your next two years of growth. Every architecture decision is documented and explained, not handed down.",
              },
              {
                n: "03",
                title: "Iterative Delivery",
                body: "Weekly shipped increments. Every Friday you see working software. Every Monday you tell us what to prioritize. The feedback loop is the product.",
              },
              {
                n: "04",
                title: "Launch & Continuity",
                body: "We don't disappear after launch. Ongoing support, knowledge transfer, and the option to retain a maintenance team are part of every engagement.",
              },
            ].map((step, i) => (
              <div key={i} className="process-step">
                <div className="process-num">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Services;
