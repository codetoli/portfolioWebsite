import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo";
import { services } from "../data";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [currentPage]);

  const openMega = () => {
    clearTimeout(timerRef.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    timerRef.current = setTimeout(() => setMegaOpen(false), 120);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services", hasMega: true },
    { id: "join", label: "Join" },
    { id: "resources", label: "Resources" },
    { id: "about", label: "About Us" },
  ];

  const isScrolledOrOpen = scrolled || mobileOpen;

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 900;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .nav-root.scrolled {
          background: rgba(250,250,248,0.97);
          border-bottom: 1px solid #E4E2DC;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
          flex: 1;
          justify-content: center;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 7px 13px;
          border-radius: 7px;
          font-size: 14px;
          font-weight: 500;
          color: #555551;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          transition: color 0.15s, background 0.15s;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: #111110;
          background: rgba(0,0,0,0.04);
        }
        .nav-link.active {
          color: #1B4332;
          background: rgba(27,67,50,0.07);
          font-weight: 600;
        }
        .nav-caret {
          width: 12px;
          height: 12px;
          transition: transform 0.2s;
          color: #999;
        }
        .nav-caret.open {
          transform: rotate(180deg);
          color: #1B4332;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .btn-ghost {
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          color: #555551;
          background: none;
          border: none;
          border-radius: 7px;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          transition: color 0.15s, background 0.15s;
        }
        .btn-ghost:hover {
          color: #111110;
          background: rgba(0,0,0,0.04);
        }
        .btn-primary {
          padding: 9px 20px;
          font-size: 14px;
          font-weight: 600;
          color: #FAFAF8;
          background: #1B4332;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          transition: background 0.15s;
          white-space: nowrap;
        }
        .btn-primary:hover {
          background: #2D6A4F;
        }

        /* Mega Menu */
        .mega-wrap {
          position: absolute;
          top: calc(100% + 4px);
          left: 50%;
          transform: translateX(-50%);
          width: 680px;
          background: #fff;
          border: 1px solid #E4E2DC;
          border-radius: 14px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.05);
          padding: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        .mega-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 8px;
          cursor: pointer;
          background: none;
          border: none;
          text-align: left;
          font-family: 'Poppins', sans-serif;
          transition: background 0.12s;
        }
        .mega-item:hover {
          background: #F0EDE6;
        }
        .mega-icon {
          width: 32px;
          height: 32px;
          border-radius: 7px;
          background: #F0EDE6;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 14px;
          margin-top: 1px;
        }
        .mega-name {
          font-size: 13.5px;
          font-weight: 600;
          color: #111110;
          margin-bottom: 2px;
          line-height: 1.3;
        }
        .mega-desc {
          font-size: 12px;
          color: #888884;
          line-height: 1.45;
        }
        .mega-footer {
          grid-column: 1 / -1;
          padding: 10px 14px 4px;
          border-top: 1px solid #F0EDE6;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 4px;
        }
        .mega-footer-link {
          font-size: 13px;
          font-weight: 600;
          color: #1B4332;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
        }

        /* Mobile hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          padding: 6px;
          background: none;
          border: none;
          cursor: pointer;
          border-radius: 6px;
        }
        .hamburger:hover { background: rgba(0,0,0,0.05); }
        .hamburger span {
          display: block;
          height: 1.5px;
          background: #111110;
          border-radius: 2px;
          transition: transform 0.25s, opacity 0.25s, width 0.25s;
        }
        .hamburger span:nth-child(1) { width: 22px; }
        .hamburger span:nth-child(2) { width: 16px; }
        .hamburger span:nth-child(3) { width: 20px; }
        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(4.5px, 4.5px); width: 20px; }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(4.5px, -4.5px); width: 20px; }

        /* Mobile menu */
        .mobile-menu {
          background: #FAFAF8;
          border-top: 1px solid #E4E2DC;
          padding: 8px 20px 24px;
        }
        .mobile-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 13px 4px;
          font-size: 15px;
          font-weight: 500;
          color: #111110;
          background: none;
          border: none;
          border-bottom: 1px solid #F0EDE6;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          text-align: left;
        }
        .mobile-service-list {
          padding: 6px 0 10px 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .mobile-service-item {
          padding: 8px 10px;
          font-size: 13.5px;
          font-weight: 500;
          color: #555551;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          text-align: left;
          border-radius: 6px;
        }
        .mobile-service-item:hover { background: #F0EDE6; color: #111110; }
        .mobile-cta {
          margin-top: 16px;
          width: 100%;
          padding: 13px;
          background: #1B4332;
          color: #FAFAF8;
          font-size: 14px;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
        }

        @media (max-width: 860px) {
          .nav-links { display: none; }
          .nav-actions .btn-ghost { display: none; }
          .nav-actions .btn-primary { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className={`nav-root${isScrolledOrOpen ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <button
            onClick={() => setCurrentPage("home")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Logo variant="dark" />
          </button>

          {/* Desktop nav */}
          <div className="nav-links">
            {navItems.map((item) => (
              <div
                key={item.id}
                style={{ position: "relative" }}
                onMouseEnter={item.hasMega ? openMega : undefined}
                onMouseLeave={item.hasMega ? closeMega : undefined}
              >
                <button
                  className={`nav-link${currentPage === item.id ? " active" : ""}`}
                  onClick={() => !item.hasMega && setCurrentPage(item.id)}
                >
                  {item.label}
                  {item.hasMega && (
                    <svg
                      className={`nav-caret${megaOpen ? " open" : ""}`}
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2.5 4.5L6 8l3.5-3.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>

                {item.hasMega && megaOpen && (
                  <div
                    className="mega-wrap"
                    ref={megaRef}
                    onMouseEnter={openMega}
                    onMouseLeave={closeMega}
                  >
                    {services.map((s) => (
                      <button
                        key={s.id}
                        className="mega-item"
                        onClick={() => {
                          setCurrentPage("services");
                          setMegaOpen(false);
                        }}
                      >
                        <div className="mega-icon">
                          {
                            {
                              "generative-ai": "✦",
                              "product-development": "◈",
                              "staff-augmentation": "⬡",
                              design: "◐",
                              "ai-data": "◎",
                              "devops-cloud": "⬢",
                              "healthcare-technology": "◉",
                            }[s.id]
                          }
                        </div>
                        <div>
                          <div className="mega-name">{s.name}</div>
                          <div className="mega-desc">{s.tagline}</div>
                        </div>
                      </button>
                    ))}
                    <div className="mega-footer">
                      <button
                        className="mega-footer-link"
                        onClick={() => {
                          setCurrentPage("services");
                          setMegaOpen(false);
                        }}
                      >
                        View all services →
                      </button>
                      <span style={{ fontSize: 12, color: "#999" }}>
                        7 practice areas
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="btn-ghost"
              onClick={() => setCurrentPage("contact")}
            >
              Contact
            </button>
            <button
              className="btn-primary"
              onClick={() => setCurrentPage("contact")}
            >
              Build with Us
            </button>
            <button
              className={`hamburger${mobileOpen ? " open" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <div key={item.id}>
                <button
                  className="mobile-nav-item"
                  onClick={() => {
                    if (item.hasMega) {
                      setMobileServicesOpen(!mobileServicesOpen);
                      return;
                    }
                    setCurrentPage(item.id);
                  }}
                >
                  {item.label}
                  {item.hasMega && (
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 4.5L6 8l3.5-3.5"
                        stroke="#999"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          transition: "transform 0.2s",
                          display: "block",
                          transform: mobileServicesOpen
                            ? "rotate(180deg)"
                            : "none",
                        }}
                      />
                    </svg>
                  )}
                </button>
                {item.hasMega && mobileServicesOpen && (
                  <div className="mobile-service-list">
                    {services.map((s) => (
                      <button
                        key={s.id}
                        className="mobile-service-item"
                        onClick={() => {
                          setCurrentPage("services");
                          setMobileOpen(false);
                        }}
                      >
                        {s.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              className="mobile-cta"
              onClick={() => {
                setCurrentPage("contact");
                setMobileOpen(false);
              }}
            >
              Build with Us
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
