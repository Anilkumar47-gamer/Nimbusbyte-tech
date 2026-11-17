import { Link } from 'react-router-dom';
import { ArrowRightIcon, DesktopIcon, WebIcon } from '../components/Icons.jsx';

const services = [
  {
    id: 'web-app',
    title: 'Web Applications & Services',
    icon: WebIcon,
    description:
      'We build customer-facing applications, internal tools, and web services shaped around your product requirements and existing systems.',
    capabilities: [
      'Frontend applications and responsive websites',
      'Backend services, APIs, and third-party integrations',
      'Data-driven portals and workflow tools',
      'Maintenance and improvement of existing applications'
    ],
    approach:
      'We work with you to define the scope, user needs, integrations, and operational requirements before selecting an implementation approach.'
  },
  {
    id: 'desktop-app',
    title: 'Desktop Applications',
    icon: DesktopIcon,
    description:
      'We develop desktop software for teams that need a dedicated computer application, local workflows, or integrations with operating-system features and devices.',
    capabilities: [
      'Windows, macOS, and Linux application development',
      'Cross-platform product experiences',
      'Local data, file, and device integrations',
      'Application packaging and release preparation'
    ],
    approach:
      'We identify target operating systems, distribution needs, accessibility requirements, and device dependencies early so they inform the design and build.'
  }
];

function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Services</span>
            </div>
            <div className="eyebrow">Software Development</div>
            <h1>Web and desktop software built around your needs.</h1>
            <p className="lead">
              Focused development services for organizations building or improving
              applications their customers and teams rely on.
            </p>
          </div>
          <div className="hero-visual">
            <img
              src="/assets/web-application-showcase.svg"
              alt="Web application interface"
              className="hero-main-img"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid-2">
            {services.map(({ id, title, icon: Icon, description, capabilities, approach }) => (
              <article className="card reveal" id={id} key={id}>
                <div className="icon-node">
                  <Icon size={22} />
                </div>
                <div className="eyebrow">{title}</div>
                <h2>{title}</h2>
                <p>{description}</p>
                <h3 style={{ fontSize: 17, marginTop: 24 }}>How we can help</h3>
                <ul style={{ display: 'grid', gap: 10, marginTop: 14 }}>
                  {capabilities.map(capability => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
                <p style={{ marginTop: 20 }}>{approach}</p>
                <Link
                  to={`/contact?service=${encodeURIComponent(id)}`}
                  className="btn btn-primary btn-sm"
                  style={{ marginTop: 24 }}
                >
                  Discuss this service <ArrowRightIcon size={14} className="btn-arrow" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">A clear delivery process</div>
            <h2>From requirements to a maintainable release</h2>
            <p>
              The right process depends on the product. We start with shared expectations
              and keep decisions visible throughout delivery.
            </p>
          </div>
          <div className="grid grid-3">
            <article className="card reveal">
              <span className="value-num">01 · Understand</span>
              <h3>Agree on the problem</h3>
              <p>Clarify users, goals, constraints, integrations, and the first useful release.</p>
            </article>
            <article className="card reveal">
              <span className="value-num">02 · Build</span>
              <h3>Deliver in reviewable steps</h3>
              <p>Develop the agreed scope with regular reviews and clear communication.</p>
            </article>
            <article className="card reveal">
              <span className="value-num">03 · Support</span>
              <h3>Prepare for ongoing use</h3>
              <p>Document the solution and discuss release, handover, and future maintenance needs.</p>
            </article>
          </div>
          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <Link to="/contact" className="btn btn-primary">
              Tell us about your project <ArrowRightIcon size={14} className="btn-arrow" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
