import Logo from "../assets/logo";

const Footer = ({ setCurrentPage }) => {
  const cols = [
    {
      heading: "Company",
      links: [
        { label: "Home", page: "home" },
        { label: "About Us", page: "about" },
        { label: "Join archive", page: "join" },
        { label: "Resources", page: "resources" },
        { label: "Contact", page: "contact" },
      ],
    },
    {
      heading: "Services",
      links: [
        { label: "Generative AI", page: "services" },
        { label: "Product Development", page: "services" },
        { label: "Staff Augmentation", page: "services" },
        { label: "Design", page: "services" },
        { label: "AI & Data", page: "services" },
        { label: "DevOps & Cloud", page: "services" },
        { label: "Healthcare Technology", page: "services" },
      ],
    },
    {
      heading: "Get Started",
      links: [
        { label: "Build with Us", page: "contact" },
        { label: "Fellowship Program", page: "join" },
        { label: "Career Openings", page: "join" },
        { label: "Case Studies", page: "resources" },
      ],
    },
  ];

  return (
    <>
      <style>{`
        .footer {
          background: #111110;
          color: #FAFAF8;
          padding: 72px 32px 36px;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          margin-bottom: 32px;
        }
        .footer-brand p {
          font-size: 14px;
          color: rgba(255,255,255,0.42);
          line-height: 1.7;
          margin-top: 20px;
          max-width: 260px;
        }
        .footer-socials {
          display: flex;
          gap: 10px;
          margin-top: 28px;
        }
        .footer-social-link {
          width: 34px;
          height: 34px;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: border-color 0.15s, color 0.15s;
          font-weight: 600;
        }
        .footer-social-link:hover {
          border-color: rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.9);
        }
        .footer-col-heading {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin-bottom: 18px;
        }
        .footer-col-links {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }
        .footer-link {
          font-size: 14px;
          color: rgba(255,255,255,0.52);
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          padding: 0;
          transition: color 0.15s;
        }
        .footer-link:hover {
          color: rgba(255,255,255,0.88);
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-bottom span {
          font-size: 13px;
          color: rgba(255,255,255,0.25);
        }
        .footer-bottom-links {
          display: flex;
          gap: 20px;
        }
        .footer-bottom-links a {
          font-size: 13px;
          color: rgba(255,255,255,0.25);
          transition: color 0.15s;
        }
        .footer-bottom-links a:hover {
          color: rgba(255,255,255,0.5);
        }
        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <Logo variant="light" />
              <p>
                A technology partner for companies that take building seriously.
                Kathmandu-based, globally distributed.
              </p>
              <div className="footer-socials">
                {[
                  ["𝕏", "#"],
                  ["in", "#"],
                  ["gh", "#"],
                ].map(([label, href], i) => (
                  <a
                    key={i}
                    href={href}
                    className="footer-social-link"
                    rel="noreferrer"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {cols.map((col, i) => (
              <div key={i}>
                <p className="footer-col-heading">{col.heading}</p>
                <div className="footer-col-links">
                  {col.links.map((link, j) => (
                    <button
                      key={j}
                      className="footer-link"
                      onClick={() => setCurrentPage(link.page)}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <span>© 2024 archive. All rights reserved.</span>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
