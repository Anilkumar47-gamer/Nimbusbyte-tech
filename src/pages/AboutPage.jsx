import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About</span>
            </div>
            <div className="eyebrow">Our Story &amp; Team</div>
            <h1>Engineers who build <br /><span className="highlight">software you can rely on</span>.</h1>
            <p className="lead">NimbusByte is an engineering studio dedicated to building high-performance mobile, web, and desktop applications, coupled with multi-language QA automation and elite IT consulting.</p>
          </div>
          <div className="hero-visual">
            <img
              src="/assets/about-heritage-engineering.svg"
              alt="NimbusByte Professional Engineering Team Heritage"
              className="hero-main-img"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap story-grid">
          <div className="story-content reveal">
            <div className="eyebrow">Engineering Heritage</div>
            <h2>Built by practitioners, not sales executives.</h2>
            <p>NimbusByte was founded by engineers who were tired of seeing companies get handed bloated, fragile software with no test suites and architectures that no one could maintain.</p>
            <p>We built NimbusByte to deliver the full spectrum of software excellence: intuitive <strong>mobile applications</strong> on iOS and Android, modern <strong>web platforms</strong>, high-performance <strong>desktop software</strong>, and comprehensive <strong>multi-language test automation</strong> spanning Python, Java, TypeScript, and C#.</p>
            <div style={{ marginTop: 20, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <span className="tag-pill">Senior Engineering Hands Only</span>
              <span className="tag-pill">Cross-Platform Specialists</span>
              <span className="tag-pill">Multi-Language QA Lab</span>
              <span className="tag-pill">Global Client Portfolio</span>
            </div>
          </div>

          <div className="timeline reveal">
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-body">
                <h3>Engineering Foundation</h3>
                <p>NimbusByte launches as an agile engineering team tackling cloud architecture, mobile builds, and automated testing.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-body">
                <h3>Multi-Platform Expansion</h3>
                <p>Expanded dedicated practices for native &amp; cross-platform Mobile (Flutter/Swift), Desktop (Tauri/.NET), and multi-language automated QA.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2026</div>
              <div className="timeline-body">
                <h3>40+ Shipped Systems</h3>
                <p>Crossed 40 production systems shipped globally with zero critical security regressions and verified 99.9%+ uptime SLAs.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">Now</div>
              <div className="timeline-body">
                <h3>Accountable by Design</h3>
                <p>A senior, specialized engineering roster providing high-touch partnership for ambitious product teams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap"><div className="divider"></div></div>

      {/* Core Engineering Principles */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Our Delivery Code</div>
            <h2>Four principles behind every line of code we write.</h2>
            <p>Our engineering commitments ensure you get scalable software with zero technical debt.</p>
          </div>
          <div className="values-grid">
            <div className="value-card reveal">
              <span className="value-num">01</span>
              <h3>Full Automated QA Built-in</h3>
              <p>No feature ships without automated test suites in Python, Java, TypeScript, or C#. We protect you from regression bugs.</p>
            </div>
            <div className="value-card reveal">
              <span className="value-num">02</span>
              <h3>Total Source Ownership</h3>
              <p>You own 100% of your source code, CI/CD configs, and architecture documentation. Zero proprietary vendor lock-in.</p>
            </div>
            <div className="value-card reveal">
              <span className="value-num">03</span>
              <h3>Senior Hands on Every Build</h3>
              <p>No junior bait-and-switch. The engineers who architect your systems are the ones writing your code and reviewing your PRs.</p>
            </div>
            <div className="value-card reveal">
              <span className="value-num">04</span>
              <h3>Observable &amp; Measurable</h3>
              <p>We instrument real-time telemetry, crash reporting, and load profiling from day one so performance is verified by data.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap"><div className="divider"></div></div>

      {/* Professional Leadership & Engineering Team */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">The Engineering Team</div>
            <h2>Meet our senior leadership &amp; domain leads.</h2>
            <p>A seasoned team of architects, mobile engineers, full-stack builders, and test automation specialists.</p>
          </div>
          <div className="team-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            <div className="team-card reveal">
              <div className="team-avatar">AK</div>
              <h3>Anil Kumar</h3>
              <span>Founder &amp; Principal Systems Architect</span>
              <p style={{ color: 'var(--slate)', fontSize: 13, marginTop: 8 }}>
                10+ years architecting resilient cloud systems, Kubernetes clusters, and enterprise infrastructure for high-growth tech companies.
              </p>
              <div className="team-cert-row">
                <span className="team-cert-tag">AWS Architect Pro</span>
                <span className="team-cert-tag">CKA Kubernetes</span>
              </div>
            </div>

            <div className="team-card reveal">
              <div className="team-avatar">MS</div>
              <h3>Man Singh</h3>
              <span>Co-Founder &amp; Mobile Engineering Lead</span>
              <p style={{ color: 'var(--slate)', fontSize: 13, marginTop: 8 }}>
                Specialist in high-velocity iOS &amp; Android applications using Flutter, React Native, and native Swift/Kotlin with 25+ published apps.
              </p>
              <div className="team-cert-row">
                <span className="team-cert-tag">Flutter / React Native</span>
                <span className="team-cert-tag">iOS / Android Native</span>
              </div>
            </div>

            <div className="team-card reveal">
              <div className="team-avatar">AB</div>
              <h3>Anjali Bharti</h3>
              <span>Lead &amp; Head of Operations &amp; HR</span>
              <p style={{ color: 'var(--slate)', fontSize: 13, marginTop: 8 }}>
                Orchestrates engineering talent, client delivery alignment, and rigorous operational efficiency across all remote development pods.
              </p>
              <div className="team-cert-row">
                <span className="team-cert-tag">Client Success</span>
                <span className="team-cert-tag">Agile Operations</span>
              </div>
            </div>

            <div className="team-card reveal">
              <div className="team-avatar">SM</div>
              <h3>Saurabh Mishra</h3>
              <span>Vice President, Strategic Partnerships</span>
              <p style={{ color: 'var(--slate)', fontSize: 13, marginTop: 8 }}>
                Drives enterprise client partnerships, technical scope advisory, and technology transformation roadmaps globally.
              </p>
              <div className="team-cert-row">
                <span className="team-cert-tag">Enterprise Strategy</span>
                <span className="team-cert-tag">IT Consulting</span>
              </div>
            </div>

            <div className="team-card reveal">
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)' }}>QA</div>
              <h3>QA &amp; Automation Squad</h3>
              <span>Multi-Language Test Architects</span>
              <p style={{ color: 'var(--slate)', fontSize: 13, marginTop: 8 }}>
                Leads parallel automated test frameworks in Python, Java, TypeScript, and C# across Web, Appium Mobile, and APIs.
              </p>
              <div className="team-cert-row">
                <span className="team-cert-tag">ISTQB Certified</span>
                <span className="team-cert-tag">Selenium / Playwright</span>
              </div>
            </div>

            <div className="team-card reveal">
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>FS</div>
              <h3>Full-Stack &amp; Desktop Team</h3>
              <span>Software Engineering Leads</span>
              <p style={{ color: 'var(--slate)', fontSize: 13, marginTop: 8 }}>
                Crafts blazing-fast Next.js 15 web SaaS and cross-platform Tauri / .NET 8 desktop software with low-memory footprints.
              </p>
              <div className="team-cert-row">
                <span className="team-cert-tag">Next.js 15 / Node</span>
                <span className="team-cert-tag">Tauri / .NET 8</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-tight">
        <div className="wrap">
          <div className="cta-banner reveal">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Work With Us</div>
            <h2>Ready to put a world-class team on your next project?</h2>
            <p>Tell us what you're building — our senior engineers will review your requirements and reply with a tailored roadmap within 24 hours.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Start a project <span className="btn-arrow">→</span></Link>
              <Link to="/work" className="btn btn-ghost">Explore case studies</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
