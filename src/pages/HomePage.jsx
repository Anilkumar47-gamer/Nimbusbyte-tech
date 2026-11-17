import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  CheckIcon,
  DesktopIcon,
  WebIcon
} from '../components/Icons.jsx';

const services = [
  {
    id: 'web-app',
    title: 'Web Applications & Services',
    icon: WebIcon,
    description:
      'Custom websites, web applications, and API-backed services designed around your users and business requirements.',
    highlights: ['Responsive user experiences', 'Reliable API integrations', 'Maintainable, secure foundations']
  },
  {
    id: 'desktop-app',
    title: 'Desktop Applications',
    icon: DesktopIcon,
    description:
      'Desktop software for Windows, macOS, and Linux, from focused internal tools to cross-platform product experiences.',
    highlights: ['Platform-appropriate user interfaces', 'Local data and device integrations', 'Packaging and release support']
  }
];

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Web &amp; Desktop Software Development</div>
            <h1>
              Practical software, <span className="grad">built for real work.</span>
            </h1>
            <p className="lead">
              NimbusByte designs and develops web applications, web services, and desktop
              software with a focus on usability, reliability, and maintainability.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Discuss your project <ArrowRightIcon size={14} className="btn-arrow" />
              </Link>
              <Link to="/services" className="btn btn-ghost">
                Explore services
              </Link>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-visual">
              <img
                src="/assets/home-datacenter-hero.svg"
                alt=""
                className="hero-main-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">What we build</div>
            <h2>Two focused areas of software development</h2>
            <p>
              We help teams turn product requirements into dependable web and desktop
              software, from initial planning through delivery.
            </p>
          </div>
          <div className="grid grid-2">
            {services.map(({ id, title, icon: Icon, description, highlights }) => (
              <article className="card reveal" key={id}>
                <div className="icon-node">
                  <Icon size={22} />
                </div>
                <span className="tag">{title}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                  {highlights.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <CheckIcon size={15} /> {item}
                    </li>
                  ))}
                </ul>
                <Link to={`/services#${id}`} className="btn btn-ghost" style={{ marginTop: 20 }}>
                  Learn more <ArrowRightIcon size={12} className="btn-arrow" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="band reveal">
            <div className="band-row">
              <div>
                <h2>Have a web or desktop software project in mind?</h2>
                <p>
                  Share the problem you are solving, the people who will use the software,
                  and any requirements you already have.
                </p>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Start a conversation <ArrowRightIcon size={14} className="btn-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
