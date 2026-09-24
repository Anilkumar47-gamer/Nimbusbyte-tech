import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const quickAnswers = [
  { question: 'What software platforms and languages do you support?', answer: 'We build native and cross-platform Mobile apps (Flutter, React Native, Swift, Kotlin), modern Web platforms (Next.js, React, Node.js, Python FastAPI), Desktop software (Tauri/Rust, Electron, .NET 8), and multi-language automated QA test suites (Python, Java, TypeScript, C#).' },
  { question: 'What is your typical project timeline?', answer: 'Focused modules and architecture audits run 2–4 weeks. Complete full-stack Web, Mobile, or Desktop builds typically run 6–12 weeks with two-week demo milestones.' },
  { question: 'Do you execute mutual NDAs prior to technical discussions?', answer: 'Always. We are happy to execute mutual NDAs before any proprietary codebases, Figma designs, or cloud credentials are shared.' },
  { question: 'Can you work alongside our existing development team?', answer: 'Yes — we regularly operate as specialized co-engineering squads, handling dedicated mobile, desktop, or QA automation tracks while upskilling your in-house engineers.' },
];

const consultationTypes = [
  { id: 'mobile', label: 'Mobile App Development', desc: 'iOS, Android & Flutter architecture & builds' },
  { id: 'web', label: 'Web Application / SaaS', desc: 'Next.js 15, React, Python FastAPI & Cloud' },
  { id: 'desktop', label: 'Cross-Platform Desktop', desc: 'Tauri (Rust), Electron & .NET 8 apps' },
  { id: 'qa', label: 'Multi-Language QA Automation', desc: 'Python, Java, TS, C# test pipelines' },
  { id: 'consulting', label: 'IT & Cloud Architecture', desc: 'System audits, FinOps & Kubernetes' },
];

function ContactPage() {
  const [searchParams] = useSearchParams();
  const [toast, setToast] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [consultType, setConsultType] = useState('web');

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Full-Stack Web & Mobile App Development',
    timeline: '6–10 Weeks',
    message: '',
  });

  // Pre-populate service from query params
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const timelineParam = searchParams.get('timeline');

    if (serviceParam) {
      const lower = serviceParam.toLowerCase();
      if (lower.includes('mobile')) {
        setFormState(prev => ({ ...prev, service: 'Mobile Application (iOS / Android / Flutter)' }));
        setConsultType('mobile');
      } else if (lower.includes('web')) {
        setFormState(prev => ({ ...prev, service: 'Full-Stack Web Application (Next.js / Python)' }));
        setConsultType('web');
      } else if (lower.includes('desktop')) {
        setFormState(prev => ({ ...prev, service: 'Cross-Platform Desktop App (Tauri / Electron / .NET)' }));
        setConsultType('desktop');
      } else if (lower.includes('qa') || lower.includes('automation') || lower.includes('test')) {
        setFormState(prev => ({ ...prev, service: 'Multi-Language QA & Test Automation' }));
        setConsultType('qa');
      } else if (lower.includes('cloud') || lower.includes('consulting')) {
        setFormState(prev => ({ ...prev, service: 'IT Consulting & Cloud Architecture' }));
        setConsultType('consulting');
      }
    }

    if (timelineParam) {
      setFormState(prev => ({
        ...prev,
        message: prev.message ? prev.message : `[Target Timeline: ${timelineParam}]\n\nWe would like to discuss engineering requirements for our project...`
      }));
    }
  }, [searchParams]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(''), 4200);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requiredOk = ['name', 'email', 'service', 'message'].every(key => formState[key].trim().length > 0);
    if (!requiredOk) {
      setToast('Please complete all required fields.');
      return;
    }
    setSubmitted(true);
    setToast("Consultation request received — our senior architects will reply within 24 hours.");
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormState({
      name: '',
      email: '',
      company: '',
      service: 'Full-Stack Web & Mobile App Development',
      timeline: '6–10 Weeks',
      message: ''
    });
  };

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </div>
            <div className="eyebrow">Direct Engineering Consultation</div>
            <h1>Tell us what you're building. We'll show you how to engineer and test it for scale.</h1>
            <p className="lead">Every consultation connects you directly with a senior systems architect, mobile lead, or QA specialist — no sales fluff, no junior triage.</p>
          </div>
          <div className="hero-visual">
            <img
              src="/assets/contact-consultation-portal.svg"
              alt="NimbusByte Systems Engineering and Support Operations"
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

      <section className="section">
        <div className="wrap two-col">
          <div className="reveal">
            <div className="eyebrow">Direct Consultation</div>
            <h2 style={{ fontSize: 'clamp(24px,3vw,30px)', marginBottom: 20 }}>Book Technical Discovery Call</h2>

            {/* Consultation Type Selector */}
            <div className="consult-type-grid">
              {consultationTypes.map(type => (
                <button
                  key={type.id}
                  type="button"
                  className={`consult-type-card ${consultType === type.id ? 'active' : ''}`}
                  onClick={() => {
                    setConsultType(type.id);
                    setFormState(prev => ({ ...prev, service: type.label }));
                  }}
                >
                  <strong>{type.label}</strong>
                  <span>{type.desc}</span>
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="submission-success-card">
                <div className="icon-node" style={{ margin: '0 auto 16px' }}>
                  ✓
                </div>
                <h3>Consultation Request Confirmed</h3>
                <p>
                  Thank you, <strong>{formState.name}</strong>. We have logged your request for <em>{consultationTypes.find(t => t.id === consultType)?.label || formState.service}</em>.
                </p>
                <p style={{ marginTop: 10, fontSize: 14, color: 'var(--slate)' }}>
                  A calendar invite and technical preparation checklist will be sent to <strong>{formState.email}</strong> within one business day.
                </p>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  style={{ marginTop: 24 }}
                  onClick={resetForm}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form id="contact-form" noValidate onSubmit={handleSubmit}>
                <div className="two-col" style={{ gap: 20 }}>
                  <div className="form-field">
                    <label htmlFor="name">Full name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Work email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="two-col" style={{ gap: 20 }}>
                  <div className="form-field">
                    <label htmlFor="company">Company / Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme HealthTech"
                      autoComplete="organization"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="service">Primary Area of Interest *</label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      required
                    >
                      <option>Mobile Application (iOS / Android / Flutter)</option>
                      <option>Full-Stack Web Application (Next.js / Python)</option>
                      <option>Cross-Platform Desktop App (Tauri / Electron / .NET)</option>
                      <option>Multi-Language QA &amp; Test Automation</option>
                      <option>IT Consulting &amp; Cloud Architecture</option>
                      <option>Cybersecurity &amp; SOC 2 Compliance</option>
                      <option>24/7 Managed IT Support</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="message">Project details, stack &amp; goals *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us what you're building, target platforms (iOS, Android, Web, Desktop), test automation needs, or cloud goals."
                  />
                </div>
                <p className="form-note">Guaranteed reply under 24 hours. All information is protected under mutual non-disclosure.</p>
                <button type="submit" className="btn btn-primary">
                  Request Free Technical Consultation <span className="btn-arrow">→</span>
                </button>
              </form>
            )}
          </div>

          <div className="reveal">
            <div className="eyebrow">Direct Contact Channels</div>
            {[
              { title: 'Email Support', value: 'support@nimbusbyte.com', href: 'mailto:support@nimbusbyte.com', icon: 'M3 6l9 7 9-7M3 6v12h18V6H3z' },
              { title: 'Direct Engineering Hotline', value: '+91 9169681462 (Mon–Fri, 10am–7pm IST)', href: 'tel:+919169681462', icon: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z' },
              { title: 'Headquarters & Studio', value: 'Sector 62, Noida, Uttar Pradesh, India — Client visits by appointment', icon: 'M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' },
              { title: 'Multi-Language QA & Delivery SLA', value: 'Under 24 hours on standard inquiries. Dedicated on-call priority triage active 24/7 for retained clients.', icon: 'M12 12m-9 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0 M12 7v5l3 3' },
            ].map(item => (
              <div key={item.title} className="contact-card">
                <div className="icon-node">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.href ? <a href={item.href} style={{ color: 'var(--sky-soft)' }}>{item.value}</a> : item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="section-head center" style={{ maxWidth: 580 }}>
            <div className="eyebrow">Frequently Asked</div>
            <h2>Quick answers before we speak</h2>
          </div>
          <div className="grid grid-2">
            {quickAnswers.map(item => (
              <div key={item.question} className="card reveal">
                <h3 style={{ fontSize: 16 }}>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {toast && <div className="toast show" role="status">{toast}</div>}
    </>
  );
}

export default ContactPage;
