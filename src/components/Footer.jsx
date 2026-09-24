import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img src="/assets/logo.png" alt="NimbusByte Technology logo" />
              <span className="brand-text">
                nimbus<span className="b2">byte</span>
                <span className="brand-sub">TECHNOLOGY</span>
              </span>
            </Link>
            <p>Software engineering &amp; IT consulting studio building mobile apps, web SaaS, desktop software, and multi-language automated QA suites.</p>
            <div className="social-row" style={{ marginTop: 20 }}>
              <a href="https://www.linkedin.com/company/109881245" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
              <a href="mailto:support@nimbusbyte.com" aria-label="Email">em</a>
              <a href="tel:+919169681462" aria-label="Phone">ph</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About &amp; Team</Link>
            <Link to="/work">Case Studies</Link>
            <Link to="/careers">Careers &amp; Openings</Link>
            <Link to="/contact">Book Consultation</Link>
          </div>
          <div className="footer-col">
            <h4>Engineering Disciplines</h4>
            <Link to="/services#mobile-app">Mobile Applications</Link>
            <Link to="/services#web-app">Web Applications &amp; SaaS</Link>
            <Link to="/services#desktop-app">Desktop Software</Link>
            <Link to="/services#automation-testing">Multi-Language QA &amp; Testing</Link>
            <Link to="/services#cloud-consulting">IT Consulting &amp; Cloud</Link>
            <Link to="/services#security-compliance">Security &amp; Compliance</Link>
          </div>
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <a href="mailto:support@nimbusbyte.com">support@nimbusbyte.com</a>
            <a href="tel:+919169681462">+91 9169681462</a>
            <Link to="/contact">Sector 62, Noida, UP, India</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} NimbusByte Technology. All rights reserved.</span>
          <span>Engineered with precision by the NimbusByte team.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
