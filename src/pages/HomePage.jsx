import { useState } from 'react';
import { Link } from 'react-router-dom';

const disciplines = [
  {
    id: 'mobile',
    title: 'Mobile Applications',
    tag: 'iOS · ANDROID · FLUTTER',
    heading: 'High-Performance Mobile Apps Built for Retention & Speed',
    description: 'From cross-platform Flutter and React Native apps to pure Swift and Kotlin native builds. Engineered with offline-first SQLite caching, biometric security, and fluid 60 FPS interfaces.',
    image: '/assets/mobile-app-dev.svg',
    highlights: ['iOS & Android Dual-Release', 'Biometric & FinTech Security', 'Offline-First Data Sync', 'Fastlane Automated CI/CD'],
    link: '/services#mobile-app'
  },
  {
    id: 'web',
    title: 'Web Applications',
    tag: 'NEXT.JS · REACT · NODE · PYTHON',
    heading: 'Enterprise Web SaaS & Scalable Cloud Platforms',
    description: 'Modern, edge-rendered web applications built with Next.js 15, TypeScript, and microservice backends. Designed to handle massive traffic spikes with sub-second response times.',
    image: '/assets/web-app-dev.svg',
    highlights: ['Server-Side Rendered (SSR)', 'Multi-Tenant Architecture', 'Real-Time WebSockets', 'Zero-Downtime Deployments'],
    link: '/services#web-app'
  },
  {
    id: 'desktop',
    title: 'Desktop Software',
    tag: 'TAURI · ELECTRON · .NET · C++',
    heading: 'Cross-Platform Native Desktop Applications',
    description: 'Blazing fast desktop software for Windows, macOS, and Linux built using Tauri (Rust), Electron, .NET 8, and C++/Qt. Direct hardware communication, serial I/O, and low memory footprints.',
    image: '/assets/desktop-app-dev.svg',
    highlights: ['Ultra-Low RAM Footprint (<40MB)', 'Native OS & Hardware I/O', 'Standalone Offline Execution', 'Signed & Notarized Installers'],
    link: '/services#desktop-app'
  },
  {
    id: 'qa',
    title: 'Automation Testing',
    tag: 'PYTHON · JAVA · TYPESCRIPT · C#',
    heading: 'Multi-Language QA & End-to-End Test Automation',
    description: 'Eliminate regression bugs with automated test suites written in Python, Java, TypeScript, or C#. Automated coverage for Mobile (Appium), Web (Playwright/Selenium/Cypress), Desktop, and APIs.',
    image: '/assets/automation-testing-suite.svg',
    highlights: ['Multi-Language Frameworks', 'Parallel CI/CD Pipelines', 'Omnichannel Cross-Device Grid', 'Load & Security Penetration'],
    link: '/services#automation-testing'
  },
  {
    id: 'consulting',
    title: 'IT & Cloud Consulting',
    tag: 'AWS · AZURE · GCP · KUBERNETES',
    heading: 'Enterprise Architecture & Strategic Cloud Infrastructure',
    description: 'Comprehensive system audits, zero-downtime cloud migrations, and FinOps cost optimization that lower infrastructure bills by 25–40% while raising uptime SLAs.',
    image: '/assets/cloud-network-architecture.svg',
    highlights: ['Multi-Cloud & Hybrid Topology', 'Terraform Infrastructure as Code', '25–40% Cost Reductions', 'SOC 2 & ISO 27001 Readiness'],
    link: '/services#cloud-consulting'
  }
];

function HomePage() {
  const [activeTab, setActiveTab] = useState('mobile');
  const currentDiscipline = disciplines.find(d => d.id === activeTab) || disciplines[0];

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Software Engineering &amp; IT Consulting Studio</div>
            <h1>Software engineered to <span className="grad">scale cleanly</span> across all devices.</h1>
            <p className="lead">NimbusByte builds custom mobile applications, enterprise web platforms, high-performance desktop software, and multi-language QA automation suites backed by senior IT consulting.</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Start your project <span className="btn-arrow">→</span></Link>
              <Link to="/services" className="btn btn-ghost">Explore all capabilities</Link>
            </div>
            <div className="hero-stats">
              <div className="stat"><b data-count="50">0</b><span>SYSTEMS SHIPPED</span></div>
              <div className="stat"><b data-count="99.9" data-decimals="1">0</b><span>AVG. UPTIME DELIVERED</span></div>
              <div className="stat"><b data-count="100" data-suffix="%">0</b><span>AUTOMATED QA COVERAGE</span></div>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-visual">
              <img
                src="/assets/home-datacenter-hero.svg"
                alt="Modern mobile, web, and desktop application engineering"
                className="hero-main-img"
              />
              <div className="hero-badge-overlay">
                <span className="live-pulse"></span>
                <span>Cross-Platform &amp; QA Automation Ready</span>
              </div>
            </div>
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

      {/* Interactive Core Disciplines Showcase */}
      <section className="section-tight">
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">Complete Engineering Spectrum</div>
            <h2>Mobile, Web, Desktop, QA &amp; IT Consulting</h2>
            <p>Select any engineering discipline to see our technical capabilities, frameworks, and architecture standards.</p>
          </div>

          {/* Tab Navigation */}
          <div className="discipline-tab-nav reveal">
            {disciplines.map(item => (
              <button
                key={item.id}
                type="button"
                className={`discipline-tab-btn ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Active Discipline Feature Panel */}
          <div className="discipline-showcase-panel reveal">
            <div>
              <span className="tag">{currentDiscipline.tag}</span>
              <h3 style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', marginTop: 12 }}>
                {currentDiscipline.heading}
              </h3>
              <p style={{ color: 'var(--slate)', margin: '16px 0 20px', fontSize: 16 }}>
                {currentDiscipline.description}
              </p>

              <div className="deliverables-box" style={{ background: 'var(--navy-800)' }}>
                <h4>Core Standards:</h4>
                <ul>
                  {currentDiscipline.highlights.map(hl => (
                    <li key={hl}>✓ {hl}</li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: 24 }}>
                <Link to={currentDiscipline.link} className="btn btn-primary btn-sm">
                  View Full {currentDiscipline.title} Specifications <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>

            <div className="discipline-visual-box">
              <img
                src={currentDiscipline.image}
                alt={currentDiscipline.heading}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Language Automation Testing Lab Spotlight */}
      <section className="section-tight">
        <div className="wrap">
          <div className="feature-media-banner reveal">
            <div className="feature-media-content">
              <div className="eyebrow">Enterprise Quality Assurance</div>
              <h2>Multi-Language Automation Testing at Scale</h2>
              <p>We build robust, maintainable test automation suites written in Python, Java, TypeScript, or C#. Automated parallel execution for Web (Playwright/Selenium), Mobile (Appium), Desktop (Tauri/WinApp), and high-load APIs.</p>
              <div className="badge-row" style={{ marginTop: 16 }}>
                <span className="badge">Python PyTest</span>
                <span className="badge">Java TestNG</span>
                <span className="badge">TypeScript Playwright</span>
                <span className="badge">C# SpecFlow</span>
                <span className="badge">Appium Mobile</span>
              </div>
              <div style={{ marginTop: 24 }}>
                <Link to="/services#automation-testing" className="btn btn-primary btn-sm">
                  Explore Automation Test Matrix <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
            <div className="feature-media-visual">
              <img
                src="/assets/qa-matrix-spotlight.svg"
                alt="NimbusByte Multi-Language Automation Testing Matrix Runner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Senior Team Highlight */}
      <section className="section-tight">
        <div className="wrap">
          <div className="feature-media-banner reveal" style={{ background: 'linear-gradient(135deg, rgba(15, 32, 56, 0.95), rgba(7, 15, 30, 0.98))' }}>
            <div className="feature-media-visual">
              <img
                src="/assets/professional-team-studio.svg"
                alt="NimbusByte Professional Engineering Team Studio"
              />
            </div>
            <div className="feature-media-content">
              <div className="eyebrow">Senior Hands Only</div>
              <h2>A Dedicated Team of Seasoned Engineers &amp; Architects</h2>
              <p>No junior handoffs or bait-and-switch sales pitches. The senior engineers, mobile specialists, and QA architects who design your project are the ones who write and test your code.</p>
              <div className="badge-row" style={{ marginTop: 16 }}>
                <span className="badge">AWS Certified Architects</span>
                <span className="badge">ISTQB QA Leads</span>
                <span className="badge">Mobile &amp; Full-Stack Specialists</span>
              </div>
              <div style={{ marginTop: 24 }}>
                <Link to="/about" className="btn btn-ghost btn-sm">
                  Meet Our Engineering Team <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Principles */}
      <section className="section-tight">
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">Why clients partner with us</div>
            <h2>Engineered for reliability, performance, and long-term maintainability.</h2>
            <p>We eliminate guesswork from software engineering, testing, and cloud infrastructure so your team can deploy rapidly and rest easy.</p>
          </div>
          <div className="trust-grid">
            <div className="trust-card reveal">
              <span className="value-num">01 clear planning</span>
              <h3>We diagnose before we build</h3>
              <p>Every engagement starts with a thorough architecture assessment, timeline, and fixed scope quote.</p>
            </div>
            <div className="trust-card reveal">
              <span className="value-num">02 multi-stack excellence</span>
              <h3>End-to-end software ownership</h3>
              <p>Whether Web, Mobile, Desktop or QA Automation, you get senior specialists who write clean, maintainable code.</p>
            </div>
            <div className="trust-card reveal">
              <span className="value-num">03 long-term support</span>
              <h3>We stay involved after launch</h3>
              <p>Continuous monitoring, automated regression suites, and 24/7 SRE on-call support keep your stack healthy.</p>
            </div>
          </div>
          <div className="testimonial-row">
            <div className="testimonial-card reveal">
              <p>“NimbusByte transformed our fragmented releases into a reliable, multi-language automated CI/CD pipeline with zero downtime.”</p>
              <cite>— VP of Engineering, Global SaaS Platform</cite>
            </div>
            <div className="mini-cta-card reveal">
              <h3>Need a practical next step?</h3>
              <p>Tell us about your upcoming project or current bottlenecks and we’ll recommend the best approach.</p>
              <Link to="/contact" className="btn btn-primary">Start the conversation <span className="btn-arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Outcomes */}
      <section className="section-tight">
        <div className="wrap">
          <div className="section-head center" style={{ maxWidth: 640 }}>
            <div className="eyebrow">Selected outcomes</div>
            <h2>Proven delivery across all platforms.</h2>
            <p>From cross-platform apps to enterprise automation pipelines and cloud migrations, examine our case studies.</p>
          </div>
          <div className="grid grid-3">
            <div className="card reveal">
              <span className="tag">MOBILE &amp; FINTECH</span>
              <h3>Cross-Platform Investment App</h3>
              <p>Shipped Flutter &amp; React Native app with biometric auth and offline-first ledger syncing.</p>
              <Link to="/work" className="btn btn-ghost" style={{ marginTop: 18 }}>See case study</Link>
            </div>
            <div className="card reveal">
              <span className="tag">DESKTOP SOFTWARE</span>
              <h3>Hardware Telemetry &amp; IoT Console</h3>
              <p>High-throughput Tauri &amp; C# desktop app processing 10,000+ sensor metrics per second.</p>
              <Link to="/work" className="btn btn-ghost" style={{ marginTop: 18 }}>See case study</Link>
            </div>
            <div className="card reveal">
              <span className="tag">QA AUTOMATION</span>
              <h3>Multi-Language E2E Pipeline</h3>
              <p>Replaced flaky manual tests with automated Python &amp; Java suites running across 12 CI workers.</p>
              <Link to="/work" className="btn btn-ghost" style={{ marginTop: 18 }}>See case study</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Band */}
      <section className="section-tight">
        <div className="wrap">
          <div className="band reveal">
            <div className="band-row">
              <div>
                <h2>Ready to build high-performance software with zero compromises?</h2>
                <p>Book a direct 30-minute consultation with our senior engineering leads — get clear technical answers and realistic estimates.</p>
              </div>
              <div className="hero-actions">
                <Link to="/contact" className="btn" style={{ background: 'var(--navy-900)', color: '#fff' }}>Book the call <span className="btn-arrow">→</span></Link>
                <Link to="/work" className="btn btn-ghost">View our work</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
