import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="section" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
      <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
        <div className="eyebrow" style={{ justifyContent: 'center' }}>Error 404</div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', marginBottom: 16 }}>
          Packet <span className="grad">Dropped</span>.
        </h1>
        <p style={{ color: 'var(--slate)', fontSize: 18, marginBottom: 32 }}>
          The page or system you are looking for has been moved, de-provisioned, or does not exist in our routing table.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            Return to Home <span className="btn-arrow">→</span>
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
