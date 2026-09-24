import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../components/Icons.jsx';

const caseStudies = [
  {
    id: 'fintech-mobile-app',
    category: 'Mobile App',
    tag: 'FINTECH — MOBILE APPLICATION',
    image: '/assets/fintech-mobile-app.svg',
    title: 'Cross-Platform Mobile Fintech & Asset Portfolio App',
    description: 'A growing wealthtech company needed a high-performance iOS and Android mobile app with biometric login, real-time market data streaming, offline transaction queues, and sub-100ms trade executions.',
    beforeAfter: {
      before: 'Fragmented separate native apps, 4.2s startup lag, frequent offline sync data losses',
      after: 'Unified Flutter/Dart engine, 60 FPS charts, offline SQLite queue, 0.4s instant app launch',
    },
    techStack: ['Flutter', 'Dart', 'WebSockets', 'SQLite Cipher', 'Fastlane CI/CD', 'Appium'],
    badges: ['60 FPS Fluid UI', '4.9★ App Store Rating', '0% Offline Data Loss'],
  },
  {
    id: 'enterprise-web-saas',
    category: 'Web App',
    tag: 'ENTERPRISE SAAS — FULL-STACK WEB',
    image: '/assets/retail-saas-dashboard.svg',
    title: 'Multi-Tenant Operations & Real-Time Analytics SaaS',
    description: 'An enterprise logistics operator struggled with disconnected manual spreadsheets and slow legacy web pages. We engineered a modern Next.js 15 and Python FastAPI web platform with sub-second search and automated workflows.',
    beforeAfter: {
      before: '14 disconnected legacy spreadsheets, 12% stockout errors, 6-second page load times',
      after: 'Edge-rendered Next.js + Postgres hub, live WebSockets, automated reorder triggers',
    },
    techStack: ['Next.js 15', 'React', 'TypeScript', 'Python FastAPI', 'PostgreSQL', 'Redis'],
    badges: ['8 hrs/week saved per user', 'Sub-second search latency', '99.99% Availability'],
  },
  {
    id: 'cross-platform-desktop',
    category: 'Desktop App',
    tag: 'INDUSTRIAL IOT — DESKTOP SOFTWARE',
    image: '/assets/iot-telemetry-console.svg',
    title: 'High-Throughput Hardware Telemetry & Controller App',
    description: 'An industrial hardware manufacturer required a cross-platform desktop application (Windows, macOS, Linux) to interface with serial USB bus controllers and process high-speed sensor streams with minimal CPU overhead.',
    beforeAfter: {
      before: 'Legacy heavy software consuming 650MB RAM with high input lag and unhandled crashes',
      after: 'Lightweight Tauri & Rust desktop client with <38MB RAM footprint and 60 FPS hardware graph rendering',
    },
    techStack: ['Tauri (Rust)', 'TypeScript', 'C++ Serial APIs', '.NET 8 / WPF', 'SQLite'],
    badges: ['94% Lower RAM usage', '< 0.8ms I/O Latency', 'Auto-Update Pipeline'],
  },
  {
    id: 'multi-lang-qa-automation',
    category: 'QA Automation',
    tag: 'QUALITY ASSURANCE — TEST AUTOMATION',
    image: '/assets/qa-e2e-pipeline.svg',
    title: 'Multi-Language Parallel Test Matrix for Omnichannel Platform',
    description: 'An e-commerce giant was suffering from production regression bugs caused by manual QA bottlenecks. We designed and deployed a multi-language automated test suite across Python, Java, TypeScript, and C# executing 1,800+ parallel tests in CI.',
    beforeAfter: {
      before: '4 days of manual regression testing per release, 18% bug escape rate to production',
      after: 'Automated 12-minute parallel CI matrix across Web, Mobile (Appium), and REST APIs',
    },
    techStack: ['Python (PyTest)', 'Java (TestNG)', 'Playwright (TS)', 'C# SpecFlow', 'Appium Mobile', 'GitHub Actions'],
    badges: ['Regression time: 4 days → 12 min', '0 Escape bugs in 6 months', '100% CI Coverage'],
  },
  {
    id: 'cloud-aws-migration',
    category: 'Cloud & IT Consulting',
    tag: 'FINOPS — CLOUD MIGRATION & CONSULTING',
    image: '/assets/aws-finops-migration.svg',
    title: 'Zero-Downtime Multi-Region AWS Migration & Cost FinOps',
    description: 'A SaaS provider was running on single-region infrastructure prone to outages and spiraling cloud costs. We redesigned their multi-region AWS topology with Terraform IaC, slashing monthly infrastructure bills by 41%.',
    beforeAfter: {
      before: 'Single physical server failure risk, 4.5h unplanned downtime per month, bloated monthly bill',
      after: 'Multi-region AWS Kubernetes ECS cluster, auto-scaling, automated disaster recovery failover',
    },
    techStack: ['AWS ECS', 'Terraform', 'PostgreSQL Multi-AZ', 'Docker', 'Cloudflare WAF'],
    badges: ['99.98% SLA delivered', '41% Lower hosting spend', '0 sec disruption migration'],
  },
  {
    id: 'healthtech-soc2-compliance',
    category: 'Security & Compliance',
    tag: 'HEALTHTECH — SECURITY & SOC 2',
    image: '/assets/soc2-compliance-shield.svg',
    title: 'SOC 2 Type II Readiness & Zero-Trust Architecture',
    description: 'A healthcare analytics startup needed SOC 2 compliance to unlock major enterprise hospital contracts. We conducted gap audits, set up AWS KMS envelope encryption, and engineered an automated auditor evidence trail.',
    beforeAfter: {
      before: 'Unencrypted database dumps, shared root access tokens, no automated SIEM audit trail',
      after: 'Zero-trust IAM least privilege, HashiCorp Vault secrets, automated real-time auditor evidence',
    },
    techStack: ['AWS KMS', 'HashiCorp Vault', 'Datadog SIEM', 'Terraform', 'Drata'],
    badges: ['Certified on 1st audit pass', 'Major hospital deal signed', '10-Week delivery'],
  },
];

const categories = ['All', 'Mobile App', 'Web App', 'Desktop App', 'QA Automation', 'Cloud & IT Consulting', 'Security & Compliance'];

function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const filteredStudies = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.category === activeCategory);

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Work</span>
            </div>
            <div className="eyebrow">Proven Engineering Outcomes</div>
            <h1>Verified systems, rigorous tests, and measurable business impact.</h1>
            <p className="lead">A curated portfolio of our mobile apps, web SaaS platforms, desktop software, multi-language QA automation suites, and cloud consulting engagements.</p>
          </div>
          <div className="hero-visual">
            <img
              src="/assets/case-studies-portfolio.svg"
              alt="NimbusByte deployed systems architecture and case studies"
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

      {/* Category Filter Tabs */}
      <section className="section-tight" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="filter-tab-bar reveal">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section">
        <div className="wrap">
          <div className="grid grid-2">
            {filteredStudies.map(work => {
              const isExpanded = expandedId === work.id;
              return (
                <div key={work.id} className="card case-study-card reveal">
                  <div className="case-study-thumbnail" style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid var(--line)' }}>
                    <img
                      src={work.image}
                      alt={work.title}
                      style={{ width: '100%', height: 220, objectFit: 'cover' }}
                    />
                  </div>
                  <div className="case-study-header" style={{ marginTop: 18 }}>
                    <span className="tag">{work.tag}</span>
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>
                  </div>

                  <div className="badge-row">
                    {work.badges.map(badge => (
                      <span key={badge} className="badge">{badge}</span>
                    ))}
                  </div>

                  {/* Architecture & Before/After Drilldown */}
                  {isExpanded && (
                    <div className="case-study-expanded">
                      <div className="impact-comparison">
                        <div className="impact-box before">
                          <span className="impact-title">Before:</span>
                          <p>{work.beforeAfter.before}</p>
                        </div>
                        <div className="impact-box after">
                          <span className="impact-title">After NimbusByte:</span>
                          <p>{work.beforeAfter.after}</p>
                        </div>
                      </div>
                      
                      <div className="tech-stack-row">
                        <span className="tech-label">Technologies Deployed:</span>
                        <div className="tech-chips">
                          {work.techStack.map(tech => (
                            <span key={tech} className="tech-chip">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="case-study-actions">
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm"
                      onClick={() => toggleExpand(work.id)}
                    >
                      {isExpanded ? 'Collapse Architecture Specs ↑' : 'View Architecture Breakdown ↓'}
                    </button>
                    <Link
                      to={`/contact?service=${encodeURIComponent(work.category)}`}
                      className="btn-link"
                    >
                      Have a similar project? Talk to us <ArrowRightIcon size={12} className="btn-arrow" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Feedback Section */}
      <section className="section-tight">
        <div className="wrap">
          <div className="section-head center" style={{ maxWidth: 580 }}>
            <div className="eyebrow">Client Feedback</div>
            <h2>What engineering leaders say about NimbusByte</h2>
          </div>
          <div className="grid grid-2">
            <div className="card reveal">
              <div className="quote-block">
                <p>“NimbusByte engineered our cross-platform mobile application and automated test matrix from scratch. We achieved 60 FPS rendering and eliminated regression bugs before our Series A launch.”</p>
                <cite>— Chief Technology Officer, WealthTech Platform</cite>
              </div>
            </div>
            <div className="card reveal">
              <div className="quote-block">
                <p>“Their multi-language QA suite in Python &amp; Playwright shortened our CI regression runs from days to minutes. Hands down the most competent engineering partner we’ve worked with.”</p>
                <cite>— VP of Engineering, Global Enterprise SaaS</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="section-tight">
        <div className="wrap">
          <div className="band reveal">
            <div className="band-row">
              <div>
                <h2>Have a system you'd like engineered with this level of stability?</h2>
                <p>Let's review your stack and define clear milestones for lower spend and guaranteed uptime.</p>
              </div>
              <Link to="/contact" className="btn" style={{ background: 'var(--navy-900)', color: '#fff' }}>
                Start Consultation <ArrowRightIcon size={14} className="btn-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkPage;
