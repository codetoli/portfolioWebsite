import { useState } from "react";
import Footer from "../components/Footer";
import { services } from "../index";

const Contact = ({ setCurrentPage }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !form.email.includes("@"))
      e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  };

  const set = (key, val) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  if (submitted)
    return (
      <>
        <style>{`
        .success-wrap {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 32px;
          text-align: center;
        }
        .success-box {
          max-width: 440px;
        }
        .success-check {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: rgba(27,67,50,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin: 0 auto 24px;
          color: #1B4332;
        }
        .success-box h2 {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #111110;
          margin-bottom: 10px;
        }
        .success-box p {
          font-size: 15px;
          color: #777773;
          line-height: 1.6;
          margin-bottom: 28px;
        }
        .success-btn {
          padding: 11px 24px;
          background: #1B4332;
          color: #FAFAF8;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
        <div className="success-wrap">
          <div className="success-box">
            <div className="success-check">✓</div>
            <h2>We'll be in touch soon.</h2>
            <p>
              Thanks for reaching out. Someone from our team will respond within
              one business day — usually faster.
            </p>
            <button
              className="success-btn"
              onClick={() => setCurrentPage("home")}
            >
              Back to home
            </button>
          </div>
        </div>
      </>
    );

  return (
    <>
      <style>{`
        .contact-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 148px 32px 96px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .contact-left {}
        .contact-label {
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1B4332;
          margin-bottom: 14px;
        }
        .contact-left h1 {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #111110;
          line-height: 1.15;
          margin-bottom: 18px;
          max-width: 400px;
        }
        .contact-left p {
          font-size: 15px;
          color: #777773;
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 380px;
        }
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .contact-detail-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #AAAAAA;
          margin-bottom: 3px;
        }
        .contact-detail-value {
          font-size: 14.5px;
          font-weight: 500;
          color: #333330;
        }
        .contact-divider {
          width: 40px;
          height: 1px;
          background: #E4E2DC;
          margin: 8px 0;
        }
        .contact-promise {
          padding: 20px;
          background: #F0EDE6;
          border-radius: 12px;
          margin-top: 32px;
        }
        .contact-promise p {
          font-size: 13.5px;
          color: #555551;
          line-height: 1.65;
          margin: 0;
        }
        .contact-promise strong { font-weight: 600; color: #111110; }

        /* ─── Form ─── */
        .contact-form {
          background: #fff;
          border: 1px solid #E4E2DC;
          border-radius: 18px;
          padding: 40px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.05);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .form-group {
          margin-bottom: 18px;
        }
        .form-label {
          display: block;
          font-size: 12.5px;
          font-weight: 600;
          color: #333330;
          margin-bottom: 6px;
        }
        .form-label span { color: #888884; font-weight: 400; }
        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 11px 14px;
          font-size: 14px;
          font-family: 'Poppins', sans-serif;
          color: #111110;
          background: #FAFAF8;
          border: 1.5px solid #E4E2DC;
          border-radius: 8px;
          outline: none;
          transition: border-color 0.15s;
          display: block;
        }
        .form-input::placeholder, .form-textarea::placeholder { color: #BBBBBB; }
        .form-input:focus, .form-select:focus, .form-textarea:focus { border-color: #1B4332; background: #fff; }
        .form-input.error, .form-select.error, .form-textarea.error { border-color: #c0392b; }
        .form-error { font-size: 12px; color: #c0392b; margin-top: 4px; }
        .form-select { cursor: pointer; }
        .form-textarea { resize: vertical; min-height: 120px; }
        .form-submit {
          width: 100%;
          padding: 13px;
          background: #1B4332;
          color: #FAFAF8;
          border: none;
          border-radius: 9px;
          font-size: 14.5px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          margin-top: 6px;
          transition: background 0.15s;
        }
        .form-submit:hover { background: #2D6A4F; }
        .form-note {
          font-size: 12px;
          color: #AAAAAA;
          text-align: center;
          margin-top: 12px;
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .contact-wrap { grid-template-columns: 1fr; gap: 48px; }
          .contact-left h1 { max-width: none; }
        }
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr; }
          .contact-form { padding: 28px 20px; }
        }
      `}</style>

      <div className="contact-wrap">
        {/* Left */}
        <div className="contact-left">
          <p className="contact-label">Contact</p>
          <h1>Let's talk about what you're building.</h1>
          <p>
            No pitch, no sales pressure. Tell us what you're working on and
            we'll give you an honest assessment of how we can help.
          </p>

          <div className="contact-details">
            <div>
              <p className="contact-detail-label">Email</p>
              <p className="contact-detail-value">hello@archive.dev</p>
            </div>
            <div className="contact-divider" />
            <div>
              <p className="contact-detail-label">Location</p>
              <p className="contact-detail-value">
                Kathmandu, Nepal — Remote-first
              </p>
            </div>
            <div className="contact-divider" />
            <div>
              <p className="contact-detail-label">Response time</p>
              <p className="contact-detail-value">Within 1 business day</p>
            </div>
          </div>

          <div className="contact-promise">
            <p>
              <strong>What happens after you reach out:</strong> A member of our
              team (not an SDR) reviews your inquiry and responds with a short
              note about whether we're a good fit. If we are, we schedule a
              45-minute call to understand your situation in more depth. No
              decks, no demos — just a conversation.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Name *</label>
              <input
                className={`form-input${errors.name ? " error" : ""}`}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
              />
              {errors.name && <div className="form-error">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label className="form-label">
                Company <span>(optional)</span>
              </label>
              <input
                className="form-input"
                placeholder="Company name"
                value={form.company}
                onChange={(e) => set("company", e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Work email *</label>
            <input
              type="email"
              className={`form-input${errors.email ? " error" : ""}`}
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
            />
            {errors.email && <div className="form-error">{errors.email}</div>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                Service area <span>(optional)</span>
              </label>
              <select
                className="form-select"
                value={form.service}
                onChange={(e) => set("service", e.target.value)}
              >
                <option value="">Select a service...</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">
                Rough budget <span>(optional)</span>
              </label>
              <select
                className="form-select"
                value={form.budget}
                onChange={(e) => set("budget", e.target.value)}
              >
                <option value="">Prefer not to say</option>
                <option value="<25k">Under $25K</option>
                <option value="25-75k">$25K – $75K</option>
                <option value="75-200k">$75K – $200K</option>
                <option value="200k+">$200K+</option>
                <option value="ongoing">Ongoing / retainer</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">What are you working on? *</label>
            <textarea
              className={`form-textarea${errors.message ? " error" : ""}`}
              placeholder="Tell us about your project, timeline, current situation, and what outcome you're looking for..."
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
            />
            {errors.message && (
              <div className="form-error">{errors.message}</div>
            )}
          </div>

          <button className="form-submit" onClick={handleSubmit}>
            Send message
          </button>
          <p className="form-note">
            We respond to every submission. Usually within a few hours.
          </p>
        </div>
      </div>

      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Contact;
