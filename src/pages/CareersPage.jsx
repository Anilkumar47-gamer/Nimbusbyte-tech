import { Link } from 'react-router-dom';

const openRoles = [
  { title: 'Senior Mobile Application Engineer', description: 'Full-time · Remote (India) · Flutter / React Native / Swift / Kotlin · 4+ years exp', badge: 'Mobile Engineering' },
  { title: 'Multi-Language QA Automation Lead', description: 'Full-time · Remote · Python, Java, TypeScript, Playwright, Appium · 4+ years exp', badge: 'QA & Automation' },
  { title: 'Desktop & Cross-Platform Software Developer', description: 'Full-time · Remote · Tauri, Rust, Electron, .NET 8 / C# · 3+ years exp', badge: 'Desktop Software' },
  { title: 'Senior Full-Stack Web Engineer', description: 'Full-time · Remote (India) · Next.js 15, React, Node.js, Python FastAPI · 4+ years exp', badge: 'Web Development' },
  { title: 'Cloud DevOps & Systems Architect', description: 'Full-time · Remote (India) · AWS / Azure, Kubernetes, Terraform · 5+ years exp', badge: 'Cloud & DevOps' },
  { title: 'Security & SOC Compliance Consultant', description: 'Contract / Full-time · Remote · SOC 2, ISO 27001, Pen Testing · 3+ years exp', badge: 'Security & SOC' },
];

function CareersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Careers</span>
            </div>
            <div className="eyebrow">Join the Team</div>
            <h1>We hire senior practitioners who love craftsmanship.</h1>
            <p className="lead">NimbusByte is small by design. Every engineer shapes our architecture standards, mobile stacks, and multi-language test automation frameworks.</p>
          </div>
          <div className="hero-visual">
            <img
              src="/assets/careers-engineering-culture.svg"
              alt="NimbusByte engineering team culture and workspaces"
              className="hero-main-img"
            />
          </div>
        </div>
      </section>

      <svg className="trace-divider" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,30 L220,30 L260,10 L440,10 L480,30 L720,30 L760,50 L980,50 L1020,30 L1200,30" />
        <path className="live" d="M0,30 L220,30 L260,10 L440,10 L480,30 L720,30 L760,50 L980,50 L1020,30 L1200,30" />
        <circle cx="260" cy="10" r="4" />
        <circle cx="760" cy="50" r="4" className="node-mint" />
        <circle cx="1020" cy="30" r="4" />
      </svg>

      <section className="section-tight">
        <div className="wrap">
          <div className="grid grid-3">
            <div className="card reveal">
              <div className="icon-node">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" /></svg>
              </div>
              <h3>Remote-first</h3>
              <p>Work from anywhere in India, with quarterly in-person team offsites. We hire for engineering output, not desk hours.</p>
            </div>
            <div className="card reveal">
              <div className="icon-node">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2v20M2 12h20" /></svg>
              </div>
              <h3>Direct Architecture Impact</h3>
              <p>Small senior squads mean your name is directly on technical designs, test frameworks, and client deliverables.</p>
            </div>
            <div className="card reveal">
              <div className="icon-node">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 20V10M18 20V4M6 20v-4" /></svg>
              </div>
              <h3>Growth &amp; Tooling Budget</h3>
              <p>Annual stipend for certifications (AWS, CKA, ISTQB), premium hardware, and any technical tool that makes you faster.</p>
            </div>
          </div>

          <div className="section-head" style={{ marginTop: 48 }}>
            <div className="eyebrow">Open Roles</div>
            <h2>Current Openings Across Disciplines</h2>
            <p>Join our specialized engineering pods across Mobile, Web, Desktop, QA Automation, and Cloud Consulting.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {openRoles.map(role => (
              <div key={role.title} className="contact-card reveal" style={{ alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: 17 }}>{role.title}</h4>
                  <p>{role.description}</p>
                </div>
                <span className="badge">{role.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="band reveal">
            <div className="band-row">
              <div>
                <h2>Ready to build high-impact software with us?</h2>
                <p>Send your resume, GitHub profile, and a summary of systems you are proud of shipping.</p>
              </div>
              <a href="mailto:support@nimbusbyte.com" className="btn" style={{ background: 'var(--navy-900)', color: '#fff' }}>
                support@nimbusbyte.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CareersPage;
