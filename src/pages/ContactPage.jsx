import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  CheckIcon,
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
  LocationIcon
} from '../components/Icons.jsx';

const quickAnswers = [
  { question: 'What do you develop?', answer: 'We focus on web applications, web services, and desktop applications. The right technology and scope depend on your product requirements.' },
  { question: 'How long does a project take?', answer: 'Timelines depend on features, integrations, platforms, and project readiness. We agree on scope and milestones after an initial discussion.' },
  { question: 'Can you work with our existing team?', answer: 'Yes. We can coordinate with your team, work within an existing codebase, or help define a new application from the ground up.' },
  { question: 'Can we discuss confidentiality?', answer: 'Please let us know if your project requires a confidentiality agreement before sharing sensitive information.' },
];

const consultationTypes = [
  { id: 'web', label: 'Web Applications & Services', desc: 'Websites, applications, APIs, and integrations' },
  { id: 'desktop', label: 'Desktop Applications', desc: 'Software for Windows, macOS, and Linux' },
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
    service: 'Web Applications & Services',
    timeline: '',
    message: '',
  });

  // Pre-populate service from query params
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const timelineParam = searchParams.get('timeline');

    if (serviceParam) {
      const lower = serviceParam.toLowerCase();
      if (lower.includes('web')) {
        setFormState(prev => ({ ...prev, service: 'Web Applications & Services' }));
        setConsultType('web');
      } else if (lower.includes('desktop')) {
        setFormState(prev => ({ ...prev, service: 'Desktop Applications' }));
        setConsultType('desktop');
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

    const emailBody = [
      `Name: ${formState.name.trim()}`,
      `Email: ${formState.email.trim()}`,
      `Company: ${formState.company.trim() || 'Not provided'}`,
      `Service: ${formState.service}`,
      formState.timeline.trim() ? `Target timeline: ${formState.timeline.trim()}` : '',
      '',
      'Project details:',
      formState.message.trim()
    ].filter(Boolean).join('\n');

    window.location.href = `mailto:support@nimbusbyte.com?subject=${encodeURIComponent(
      `Project inquiry: ${formState.service}`
    )}&body=${encodeURIComponent(emailBody)}`;
    setSubmitted(true);
    setToast('Your email app should open with a draft. Review it and send to complete your inquiry.');
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormState({
      name: '',
      email: '',
      company: '',
      service: 'Web Applications & Services',
      timeline: '',
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
            <h1>Tell us about your web or desktop software project.</h1>
            <p className="lead">Share your goals, requirements, and any constraints. We’ll follow up to discuss a practical next step.</p>
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
            <h2 style={{ fontSize: 'clamp(24px,3vw,30px)', marginBottom: 20 }}>Project inquiry</h2>

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
                  <CheckIcon size={24} className="svg-anim-pulse" />
                </div>
                <h3>Email draft prepared</h3>
                <p>
                  Thank you, <strong>{formState.name}</strong>. Your email application should open with your project details.
                </p>
                <p style={{ marginTop: 10, fontSize: 14, color: 'var(--slate)' }}>
                  Your inquiry is not sent until you review and send the draft. If no email application opened, contact us at <a href="mailto:support@nimbusbyte.com">support@nimbusbyte.com</a>.
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
              <form id="contact-form" onSubmit={handleSubmit}>
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
                      <option>Web Applications &amp; Services</option>
                      <option>Desktop Applications</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="message">Project details and goals *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="What are you looking to build or improve? Include users, key features, integrations, and target platforms."
                  />
                </div>
                <p className="form-note">This form opens a prefilled email draft in your email application. It does not send your information automatically.</p>
                <button type="submit" className="btn btn-primary">
                  Prepare email inquiry <ArrowRightIcon size={14} className="btn-arrow" />
                </button>
              </form>
            )}
          </div>

          <div className="reveal">
            <div className="eyebrow">Direct Contact Channels</div>
            <div className="contact-card">
              <div className="icon-node">
                <MailIcon size={20} className="svg-anim-pulse" />
              </div>
              <div>
                <h4>Email Support</h4>
                <p><a href="mailto:support@nimbusbyte.com" style={{ color: 'var(--sky-soft)' }}>support@nimbusbyte.com</a></p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-node">
                <PhoneIcon size={20} className="svg-anim-pulse" />
              </div>
              <div>
                <h4>Phone</h4>
                <p><a href="tel:+919169681462" style={{ color: 'var(--sky-soft)' }}>+91 9169681462</a></p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-node">
                <LocationIcon size={20} className="svg-anim-float" />
              </div>
              <div>
                <h4>Headquarters &amp; Studio</h4>
                <p>Sector 62, Noida, Uttar Pradesh, India — Client visits by appointment</p>
              </div>
            </div>

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
