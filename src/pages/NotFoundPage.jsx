import { Link } from 'react-router-dom';
import { NotFoundIllustration, ArrowRightIcon } from '../components/Icons.jsx';

function NotFoundPage() {
  return (
    <section className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
        <NotFoundIllustration />
        <div className="eyebrow" style={{ justifyContent: 'center' }}>Error 404</div>
        <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 56px)', marginBottom: 16 }}>
          Packet <span className="grad">Dropped</span>.
        </h1>
        <p style={{ color: 'var(--slate)', fontSize: 17, marginBottom: 32 }}>
          The page or system you are looking for has been moved, de-provisioned, or does not exist in our routing table.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            Return to Home <ArrowRightIcon size={14} className="btn-arrow" />
          </Link>
          <Link to="/services" className="btn btn-ghost">
            Explore Services
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
