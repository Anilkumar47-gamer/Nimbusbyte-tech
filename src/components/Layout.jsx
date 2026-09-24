import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer.jsx';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

function Layout() {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle route change and hash navigation
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    setNavOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname, location.hash]);

  // Scroll listener for header shadow & progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 8);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations (.reveal) & counter stats ([data-count])
  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll('.reveal'));
    let revealObserver;
    if ('IntersectionObserver' in window && revealEls.length) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(el => revealObserver.observe(el));
    } else {
      revealEls.forEach(el => el.classList.add('in'));
    }

    const counters = Array.from(document.querySelectorAll('[data-count]'));
    let counterObserver;
    if ('IntersectionObserver' in window && counters.length) {
      counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-count'));
          const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1200;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = target * eased;
            el.textContent = value.toFixed(decimals) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          counterObserver.unobserve(el);
        });
      }, { threshold: 0.6 });
      counters.forEach(counter => counterObserver.observe(counter));
    }

    return () => {
      if (revealObserver) revealObserver.disconnect();
      if (counterObserver) counterObserver.disconnect();
    };
  }, [location.pathname]);

  const toggleNav = () => {
    setNavOpen(prev => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  const closeNav = () => {
    setNavOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <div
        className="scroll-progress"
        aria-hidden="true"
        style={{ width: `${scrollProgress}%` }}
      />
      <header
        className="site-header"
        style={{
          boxShadow: isScrolled ? '0 8px 24px -16px rgba(0,0,0,0.6)' : 'none'
        }}
      >
        <nav className="nav" aria-label="Main navigation">
          <Link to="/" className="brand" onClick={closeNav}>
            <img src="/assets/logo.png" alt="NimbusByte Technology logo" />
            <span className="brand-text">
              nimbus<span className="b2">byte</span>
              <span className="brand-sub">TECHNOLOGY</span>
            </span>
          </Link>

          <ul className={`nav-links ${navOpen ? 'open' : ''}`} role="menubar">
            {navItems.map(item => (
              <li key={item.path} role="none">
                <NavLink
                  to={item.path}
                  role="menuitem"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={closeNav}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <Link to="/contact" className="btn btn-primary btn-sm" onClick={closeNav}>
              Start a project <span className="btn-arrow">→</span>
            </Link>
            <button
              className={`nav-toggle ${navOpen ? 'open' : ''}`}
              aria-label="Toggle menu"
              aria-expanded={navOpen}
              onClick={toggleNav}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />

      <div className="fab-actions" aria-label="Quick actions">
        <Link to="/contact" className="fab-btn fab-primary" aria-label="Book a call">✆</Link>
        <button
          className="fab-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </>
  );
}

export default Layout;
