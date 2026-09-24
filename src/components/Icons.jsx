import React from 'react';

export function MobileIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-mobile ${className}`}
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" className="svg-anim-pulse" />
      <path d="M9 5h6" opacity="0.6" />
    </svg>
  );
}

export function WebIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-web ${className}`}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" className="svg-anim-dash" />
    </svg>
  );
}

export function DesktopIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-desktop ${className}`}
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <circle cx="12" cy="10" r="1.5" fill="currentColor" className="svg-anim-blink" />
    </svg>
  );
}

export function QaIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-qa ${className}`}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m9 15 2 2 4-4" stroke="var(--mint, #6ee7c4)" strokeWidth="2.2" className="svg-anim-pulse" />
    </svg>
  );
}

export function CloudIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-cloud ${className}`}
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      <circle cx="12" cy="12" r="1" fill="var(--mint, #6ee7c4)" className="svg-anim-blink" />
    </svg>
  );
}

export function SecurityIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-security ${className}`}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" stroke="var(--mint, #6ee7c4)" strokeWidth="2" className="svg-anim-pulse" />
    </svg>
  );
}

export function RocketIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-rocket ${className}`}
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <circle cx="15" cy="9" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function CpuIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-cpu ${className}`}
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" fill="var(--mint-glow, rgba(110,231,196,0.2))" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  );
}

export function DatabaseIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-database ${className}`}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export function TelemetryIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-telemetry ${className}`}
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" stroke="var(--sky, #3fa9f5)" strokeWidth="2" className="svg-anim-dash" />
      <circle cx="19" cy="9" r="2" fill="var(--mint, #6ee7c4)" className="svg-anim-pulse" />
    </svg>
  );
}

export function CheckIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--mint, #6ee7c4)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-check ${className}`}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ShieldCheckIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-shield-check ${className}`}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" stroke="var(--mint, #6ee7c4)" strokeWidth="2.2" />
    </svg>
  );
}

export function TerminalIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-terminal ${className}`}
    >
      <polyline points="4 17 10 11 4 5" stroke="var(--sky, #3fa9f5)" strokeWidth="2" />
      <line x1="12" y1="19" x2="20" y2="19" stroke="var(--mint, #6ee7c4)" strokeWidth="2.5" className="svg-anim-blink" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-arrow ${className}`}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function ArrowUpIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-arrow-up ${className}`}
    >
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

export function PhoneIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-phone ${className}`}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function MailIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-mail ${className}`}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function LocationIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-location ${className}`}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" fill="var(--mint, #6ee7c4)" />
    </svg>
  );
}

export function LinkedInIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-linkedin ${className}`}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function UsersIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon svg-icon-users ${className}`}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function NotFoundIllustration({ className = '' }) {
  return (
    <div className={`not-found-svg-wrap ${className}`} style={{ width: '100%', maxWidth: 440, margin: '0 auto 28px' }}>
      <svg viewBox="0 0 440 260" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="nfBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0a172c" />
            <stop offset="100%" stopColor="#050e1c" />
          </linearGradient>
          <linearGradient id="nfCyan" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3fa9f5" />
            <stop offset="100%" stopColor="#6ee7c4" />
          </linearGradient>
          <filter id="nfGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Frame */}
        <rect x="20" y="20" width="400" height="220" rx="16" fill="url(#nfBg)" stroke="#1a3558" strokeWidth="1.5" />

        {/* Ambient Glow */}
        <circle cx="120" cy="110" r="60" fill="#3fa9f5" opacity="0.12" filter="url(#nfGlow)" />
        <circle cx="320" cy="140" r="70" fill="#6ee7c4" opacity="0.1" filter="url(#nfGlow)" />

        {/* Window Bar */}
        <rect x="20" y="20" width="400" height="34" rx="16" fill="#081424" />
        <rect x="20" y="42" width="400" height="12" fill="#081424" />
        <circle cx="42" cy="37" r="4.5" fill="#ef4444" opacity="0.8" />
        <circle cx="58" cy="37" r="4.5" fill="#f59e0b" opacity="0.8" />
        <circle cx="74" cy="37" r="4.5" fill="#10b981" opacity="0.8" />
        <text x="100" y="41" fill="#7cc4f8" fontFamily="'JetBrains Mono', monospace" fontSize="10.5">packet_route_error // 404_NOT_FOUND</text>

        {/* Radar Rings & 404 Display */}
        <g transform="translate(220, 140)">
          <circle cx="0" cy="0" r="64" stroke="#1c3a64" strokeWidth="1" strokeDasharray="4 4" className="svg-anim-rotate" />
          <circle cx="0" cy="0" r="44" stroke="#254d80" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="24" fill="#0c1e38" stroke="#3fa9f5" strokeWidth="1.5" />
          
          {/* Pulsing signal node */}
          <circle cx="0" cy="0" r="6" fill="#6ee7c4" className="svg-anim-pulse" />
          
          {/* Signal connection rays */}
          <line x1="-80" y1="0" x2="-24" y2="0" stroke="url(#nfCyan)" strokeWidth="1.5" strokeDasharray="4 4" className="svg-anim-dash" />
          <line x1="24" y1="0" x2="80" y2="0" stroke="url(#nfCyan)" strokeWidth="1.5" strokeDasharray="4 4" className="svg-anim-dash" />

          {/* Big 404 Text */}
          <text x="0" y="70" textAnchor="middle" fill="#ffffff" fontFamily="'Space Grotesk', sans-serif" fontSize="26" fontWeight="bold" letterSpacing="3">404</text>
          <text x="0" y="86" textAnchor="middle" fill="#6ee7c4" fontFamily="'JetBrains Mono', monospace" fontSize="9.5">ROUTE UNREACHABLE</text>
        </g>
      </svg>
    </div>
  );
}
