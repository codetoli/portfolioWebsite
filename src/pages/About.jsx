import Footer from "../components/Footer";
import { team } from "../index";

const About = ({ setCurrentPage }) => {
  const stats = [
    { num: "16+", label: "Years in operation", sub: "Founded 2008, Kathmandu" },
    { num: "450+", label: "Skilled professionals", sub: "Across 15 countries" },
    { num: "81", label: "Net promoter score", sub: "Industry benchmark: 32" },
    { num: "250+", label: "Projects delivered", sub: "Across 40+ industries" },
  ];

  const timeline = [
    {
      year: "2008",
      event:
        "archive founded in Kathmandu with a team of four. First client: a logistics company in Germany.",
    },
    {
      year: "2012",
      event:
        "Opened our first distributed team across three countries. Grew to 40 engineers.",
    },
    {
      year: "2016",
      event:
        "Launched the Design and DevOps practices. Delivered our 100th project.",
    },
    {
      year: "2020",
      event:
        "Pivoted heavily into cloud-native and data engineering as demand shifted. Grew to 200 people.",
    },
    {
      year: "2022",
      event:
        "Launched the AI & Data practice ahead of the generative AI wave. 300 professionals across 10 countries.",
    },
    {
      year: "2024",
      event:
        "450+ professionals. Generative AI now our fastest-growing practice. Net promoter score: 81.",
    },
  ];

  return (
    <>
      <style>{`
        .about-hero {
          padding: 148px 32px 80px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .about-hero .section-label {
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1B4332;
          margin-bottom: 14px;
        }
        .about-hero h1 {
          font-size: clamp(32px, 4.5vw, 58px);
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #111110;
          line-height: 1.1;
          margin-bottom: 20px;
          max-width: 700px;
        }
        .about-hero p {
          font-size: 16px;
          color: #777773;
          max-width: 520px;
          line-height: 1.7;
        }

        /* ─── Stats ──────────────── */
        .about-stats {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px 80px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .about-stat {
          padding: 32px 28px;
          border: 1px solid #E4E2DC;
          border-radius: 12px;
          background: #fff;
        }
        .about-stat-num {
          font-size: 48px;
          font-weight: 700;
          color: #1B4332;
          letter-spacing: -0.04em;
          line-height: 1;
          margin-bottom: 8px;
        }
        .about-stat-label {
          font-size: 14px;
          font-weight: 600;
          color: #111110;
          margin-bottom: 4px;
        }
        .about-stat-sub {
          font-size: 12.5px;
          color: #888884;
        }

        /* ─── Story ──────────────── */
        .about-story {
          background: #F0EDE6;
          padding: 80px 32px;
        }
        .about-story-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }
        .about-story h2 {
          font-size: clamp(26px, 3.5vw, 40px);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #111110;
          margin-bottom: 24px;
          line-height: 1.15;
        }
        .about-story p {
          font-size: 15px;
          color: #555551;
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .about-story p:last-child { margin-bottom: 0; }

        /* Timeline */
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .timeline-item {
          display: grid;
          grid-template-columns: 52px 1fr;
          gap: 16px;
          padding-bottom: 24px;
          position: relative;
        }
        .timeline-item:last-child { padding-bottom: 0; }
        .timeline-year {
          font-size: 12px;
          font-weight: 700;
          color: #1B4332;
          padding-top: 2px;
          text-align: right;
        }
        .timeline-content {
          padding-left: 16px;
          border-left: 1px solid #DDDBD4;
          padding-bottom: 24px;
          position: relative;
        }
        .timeline-content::before {
          content: '';
          position: absolute;
          left: -4px; top: 6px;
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #1B4332;
        }
        .timeline-item:last-child .timeline-content { padding-bottom: 0; }
        .timeline-event {
          font-size: 13.5px;
          color: #555551;
          line-height: 1.6;
        }

        /* ─── Team ───────────────── */
        .about-team {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 32px 96px;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 48px;
        }
        .team-card {
          background: #fff;
          border: 1px solid #E4E2DC;
          border-radius: 14px;
          overflow: hidden;
        }
        .team-card-top {
          padding: 28px 28px 20px;
          border-bottom: 1px solid #F0EDE6;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }
        .team-avatar {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
          letter-spacing: -0.02em;
        }
        .team-name {
          font-size: 15.5px;
          font-weight: 700;
          color: #111110;
          margin-bottom: 3px;
        }
        .team-role {
          font-size: 12.5px;
          color: #888884;
          font-weight: 500;
        }
        .team-linkedin {
          width: 32px;
          height: 32px;
          border-radius: 7px;
          border: 1px solid #E4E2DC;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888884;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          flex-shrink: 0;
          transition: border-color 0.15s, color 0.15s, background 0.15s;
        }
        .team-linkedin:hover {
          border-color: #0A66C2;
          color: #0A66C2;
          background: rgba(10,102,194,0.04);
        }
        .team-card-body {
          padding: 20px 28px;
        }
        .team-bio {
          font-size: 13.5px;
          color: #555551;
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .team-edu {
          font-size: 12px;
          color: #AAAAAA;
          margin-bottom: 14px;
          font-style: italic;
        }
        .team-expertise {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .team-tag {
          padding: 3px 10px;
          background: #F0EDE6;
          border-radius: 100px;
          font-size: 11.5px;
          font-weight: 500;
          color: #555551;
        }

        /* Avatar colors */
        .avatar-0 { background: linear-gradient(135deg, #1B4332, #2D6A4F); }
        .avatar-1 { background: linear-gradient(135deg, #2c5f8a, #3a7ab5); }
        .avatar-2 { background: linear-gradient(135deg, #6e3c78, #9455a0); }
        .avatar-3 { background: linear-gradient(135deg, #8a5c2c, #b57840); }
        .avatar-4 { background: linear-gradient(135deg, #2e5a7a, #3d7aa0); }
        .avatar-5 { background: linear-gradient(135deg, #185c44, #24855f); }

        @media (max-width: 900px) {
          .about-stats { grid-template-columns: 1fr 1fr; }
          .about-story-inner { grid-template-columns: 1fr; gap: 48px; }
          .team-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .team-grid { grid-template-columns: 1fr; }
          .about-stats { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* Hero */}
      <section className="about-hero">
        <p className="section-label">About archive</p>
        <h1>We've been building things that matter since 2008.</h1>
        <p>
          archive started as a four-person engineering firm in Kathmandu. Today
          we're 450 professionals across 15 countries, with a single consistent
          focus: building technology our clients are proud of.
        </p>
      </section>

      {/* Stats */}
      <div className="about-stats">
        {stats.map((s, i) => (
          <div key={i} className="about-stat">
            <div className="about-stat-num">{s.num}</div>
            <div className="about-stat-label">{s.label}</div>
            <div className="about-stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Story + Timeline */}
      <div className="about-story">
        <div className="about-story-inner">
          <div>
            <h2>Built on 16 years of hard-won lessons.</h2>
            <p>
              We started as generalists. A small team of engineers taking on
              whatever came through the door. That taught us something
              important: the shape of a problem matters more than the technology
              you use to solve it.
            </p>
            <p>
              Over time, we built practices. We hired specialists. We developed
              opinions — about architecture, about design, about how teams
              should work. We lost clients when we told them things they didn't
              want to hear. We kept the ones who valued the honesty.
            </p>
            <p>
              Our 81 net promoter score isn't a vanity metric. It reflects a
              simple belief: we'd rather have ten long-term clients who trust us
              completely than a hundred transactional relationships. The
              partnerships that have lasted a decade with some of our original
              clients are what we measure ourselves against.
            </p>
            <p>
              Today, archive operates across seven practice areas with 450
              professionals. The company is bigger. The commitment hasn't
              changed.
            </p>
          </div>

          <div>
            <div
              style={{
                fontSize: "11.5px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#1B4332",
                marginBottom: 24,
              }}
            >
              Our timeline
            </div>
            <div className="timeline">
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <div className="timeline-event">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <section className="about-team">
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
          Leadership
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
          The people who run this company.
        </h2>
        <div className="team-grid">
          {team.map((member, i) => (
            <div key={i} className="team-card">
              <div className="team-card-top">
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div className={`team-avatar avatar-${i}`}>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="team-name">{member.name}</div>
                    <div className="team-role">{member.role}</div>
                  </div>
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="team-linkedin"
                >
                  in
                </a>
              </div>
              <div className="team-card-body">
                <p className="team-bio">{member.bio}</p>
                <p className="team-edu">{member.education}</p>
                <div className="team-expertise">
                  {member.expertise.map((tag, j) => (
                    <span key={j} className="team-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};

export default About;
