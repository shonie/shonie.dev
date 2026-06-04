/* global React */
// Shonie.dev — shared UI. Lifted from the design-system kit, evolved.
const { useState, useEffect, useRef } = React;

/* ----------------------------------------------------------- Wordmark */
function Wordmark({ onClick }) {
  return (
    <button onClick={onClick} aria-label="Shonie.dev — home" style={{
      margin: 0, padding: 0, background: 'transparent', border: 0, cursor: 'pointer',
      fontFamily: 'var(--font-roboto)', fontWeight: 700, fontSize: 26,
      letterSpacing: '-0.02em', color: '#fff', lineHeight: 1,
    }}>
      Shonie<span style={{ color: 'var(--mint)' }}>.dev</span>
    </button>
  );
}
window.Wordmark = Wordmark;

/* ----------------------------------------------------------- Buttons */
function BookMeetingButton({ onClick, full, label = 'Book meeting' }) {
  const [hover, setHover] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        fontFamily: 'var(--font-roboto)', fontWeight: 500, fontSize: 15, letterSpacing: '0.5px',
        border: 0, cursor: 'pointer', borderRadius: 4, padding: '11px 18px',
        width: full ? '100%' : 'auto',
        background: hover ? 'var(--mint-soft)' : 'var(--mint)', color: 'var(--on-mint)',
        transition: 'background .2s ease, transform .2s ease',
        transform: hover ? 'translateY(-1px)' : 'none',
      }}>
      <i data-lucide="message-circle" style={{ width: 16, height: 16 }}></i>
      {label}
    </button>
  );
}
window.BookMeetingButton = BookMeetingButton;

function GhostButton({ onClick, children, href, download }) {
  const [hover, setHover] = useState(false);
  const style = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontFamily: 'var(--font-roboto)', fontWeight: 500, fontSize: 15, letterSpacing: '0.5px',
    cursor: 'pointer', borderRadius: 4, padding: '11px 18px', textDecoration: 'none', whiteSpace: 'nowrap',
    background: hover ? 'rgba(12,208,156,0.08)' : 'transparent', color: 'var(--mint)',
    border: `1px solid ${hover ? 'var(--mint)' : 'var(--color-grey-600)'}`,
    transition: 'border-color .2s ease, background .2s ease',
  };
  const evts = { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) };
  if (href) return <a href={href} download={download} style={style} {...evts}>{children}</a>;
  return <button onClick={onClick} style={style} {...evts}>{children}</button>;
}
window.GhostButton = GhostButton;

/* ----------------------------------------------------------- Badge + Card */
function Badge({ icon, children, variant = 'soft' }) {
  const soft = variant === 'soft';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      background: soft ? 'rgba(12,208,156,0.12)' : 'transparent',
      color: soft ? 'var(--mint-soft)' : 'var(--color-secondary-250)',
      border: soft ? '1px solid rgba(12,208,156,0.18)' : '1px solid var(--color-secondary-300)',
      borderRadius: 999, padding: '9px 15px', fontSize: 14, fontWeight: 500,
      letterSpacing: '0.4px', fontFamily: 'var(--font-roboto)', whiteSpace: 'nowrap',
    }}>
      {icon && <i data-lucide={icon} style={{ width: 15, height: 15 }}></i>}
      {children}
    </span>
  );
}
window.Badge = Badge;

// Brand glyphs (inlined from the design-system CV icons) — recolourable, reliable
const BRAND_PATHS = {
  linkedin: { vb: '0 0 14 14', d: 'M 3.134 14 L 0.231 14 L 0.231 4.653 L 3.134 4.653 L 3.134 14 Z M 1.681 3.378 C 0.753 3.378 0 2.609 0 1.681 C 0 1.235 0.177 0.808 0.492 0.492 C 0.808 0.177 1.235 0 1.681 0 C 2.127 0 2.555 0.177 2.87 0.492 C 3.185 0.808 3.362 1.235 3.362 1.681 C 3.362 2.609 2.609 3.378 1.681 3.378 Z M 13.997 14 L 11.1 14 L 11.1 9.45 C 11.1 8.366 11.078 6.975 9.591 6.975 C 8.081 6.975 7.85 8.153 7.85 9.372 L 7.85 14 L 4.95 14 L 4.95 4.653 L 7.734 4.653 L 7.734 5.928 L 7.775 5.928 C 8.163 5.194 9.109 4.419 10.522 4.419 C 13.459 4.419 14 6.353 14 8.866 L 14 14 L 13.997 14 Z' },
  github: { vb: '0 0 14 13.224', d: 'M 4.683 10.648 C 4.683 10.702 4.618 10.746 4.536 10.746 C 4.443 10.754 4.378 10.711 4.378 10.648 C 4.378 10.593 4.443 10.549 4.525 10.549 C 4.609 10.541 4.683 10.585 4.683 10.648 Z M 6.91 0 C 2.995 0 0 2.879 0 6.672 C 0 9.704 1.97 12.299 4.784 13.212 C 5.146 13.275 5.273 13.059 5.273 12.882 C 5.273 12.712 5.264 11.777 5.264 11.203 C 5.264 11.203 3.288 11.613 2.873 10.388 C 2.873 10.388 2.552 9.592 2.089 9.387 C 2.089 9.387 1.442 8.958 2.134 8.966 C 2.134 8.966 2.837 9.021 3.223 9.671 C 3.842 10.727 4.877 10.423 5.281 10.243 C 5.346 9.805 5.529 9.502 5.733 9.321 C 4.155 9.152 2.563 8.93 2.563 6.3 C 2.563 5.548 2.777 5.171 3.229 4.689 C 3.156 4.512 2.916 3.779 3.302 2.833 C 3.892 2.655 5.25 3.571 5.25 3.571 C 5.815 3.418 6.421 3.339 7.023 3.339 C 7.624 3.339 8.231 3.418 8.795 3.571 C 8.795 3.571 10.153 2.652 10.743 2.833 C 11.129 3.782 10.89 4.512 10.816 4.689 C 11.268 5.173 11.544 5.551 11.544 6.3 C 11.544 8.939 9.882 9.149 8.304 9.321 C 8.564 9.537 8.784 9.948 8.784 10.59 C 8.784 11.512 8.775 12.652 8.775 12.876 C 8.775 13.054 8.905 13.27 9.264 13.207 C 12.086 12.299 14 9.704 14 6.672 C 14 2.879 10.825 0 6.91 0 Z' },
};
function BrandIcon({ name, size = 22, color = 'var(--mint)' }) {
  const g = BRAND_PATHS[name];
  if (!g) return null;
  return (
    <svg width={size} height={size} viewBox={g.vb} fill={color} aria-hidden="true" style={{ flex: 'none' }}>
      <path d={g.d}></path>
    </svg>
  );
}
window.BrandIcon = BrandIcon;

function Card({ icon, title, body, chips = [], accent = 'var(--color-secondary-300)' }) {
  const [hover, setHover] = useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        border: `1px solid ${hover ? accent : 'var(--color-grey-600)'}`,
        borderRadius: 14, padding: 28, background: 'rgba(255,255,255,0.015)',
        transition: 'all .3s ease', height: '100%', boxSizing: 'border-box',
        transform: hover ? 'translateY(-4px)' : 'none',
        boxShadow: hover ? '0 18px 44px rgba(0,0,0,.45)' : 'none',
      }}>
      <i data-lucide={icon} style={{ width: 34, height: 34, color: accent, marginBottom: 14 }}></i>
      <h4 style={{ margin: '0 0 10px', fontSize: 21, fontWeight: 600, color: '#fff' }}>{title}</h4>
      <p style={{ margin: '0 0 18px', fontSize: 15, lineHeight: 1.55, color: 'var(--color-grey-200)' }}>{body}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {chips.map((c) => (
          <span key={c} style={{
            fontSize: 12, padding: '5px 11px', borderRadius: 999,
            border: `1px solid ${accent}`, color: accent, letterSpacing: '0.3px',
          }}>{c}</span>
        ))}
      </div>
    </div>
  );
}
window.Card = Card;

/* ----------------------------------------------------------- Eyebrow + heading */
function Eyebrow({ children, align = 'center' }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18,
      justifyContent: align === 'center' ? 'center' : 'flex-start',
    }}>
      <span style={{ width: 28, height: 1, background: 'var(--mint)' }}></span>
      <span style={{
        fontSize: 13, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase',
        color: 'var(--mint-soft)', fontFamily: 'var(--font-roboto)',
      }}>{children}</span>
    </div>
  );
}
window.Eyebrow = Eyebrow;

function SectionHeading({ children, font = 'roboto', align = 'center' }) {
  const ultra = font === 'ultra';
  return (
    <h2 style={{
      textAlign: align, margin: '0 0 44px',
      fontFamily: ultra ? 'var(--font-ultra)' : 'var(--font-roboto)',
      fontWeight: ultra ? 400 : 700,
      fontSize: ultra ? 'clamp(1.9rem,3.6vw,2.8rem)' : 'clamp(2rem,4vw,3rem)',
      color: '#fff', letterSpacing: ultra ? '0' : '-0.01em', lineHeight: 1.1,
    }}>{children}</h2>
  );
}
window.SectionHeading = SectionHeading;

/* ----------------------------------------------------------- Reveal (scroll-in) */
function Reveal({ children, delay = 0, y = 22, as = 'div', style = {} }) {
  const ref = useRef(null);
  const shownRef = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reveal = () => { shownRef.current = true; el.style.transform = 'none'; };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { reveal(); return; }
    let done = false;
    const cleanup = () => {
      window.removeEventListener('scroll', check, true);
      window.removeEventListener('resize', check);
    };
    function check() {
      if (done) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.92 && r.bottom > 0) { done = true; reveal(); cleanup(); }
    }
    window.addEventListener('scroll', check, true);
    window.addEventListener('resize', check);
    check();
    const tid = setTimeout(check, 90);
    return () => { clearTimeout(tid); cleanup(); };
  }, []);
  const Tag = as;
  const on = shownRef.current;
  return (
    <Tag ref={ref} style={{
      ...style,
      transform: on ? 'none' : `translateY(${y}px)`,
      transition: `transform .7s cubic-bezier(.22,.61,.36,1) ${delay}ms`,
      willChange: 'transform',
    }}>{children}</Tag>
  );
}
window.Reveal = Reveal;

/* ----------------------------------------------------------- Header */
function NavLink({ children, active, onClick }) {
  const [hover, setHover] = useState(false);
  const on = active || hover;
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onClick && onClick(); }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        color: on ? 'var(--mint-soft)' : 'var(--color-grey-100)',
        textDecoration: 'none', fontWeight: 500, fontSize: 15, letterSpacing: '0.5px',
        paddingBottom: 4, borderBottom: `1px solid ${active ? 'var(--mint)' : 'transparent'}`,
        transition: 'color .2s ease',
      }}>{children}</a>
  );
}
window.NavLink = NavLink;

const NAV = [
  { id: 'expertise', label: 'Expertise' },
  { id: 'approach', label: 'Approach' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'cv', label: 'CV' },
  { id: 'contact', label: 'Contact' },
];

function Header({ active, onNav, onBook }) {
  const [open, setOpen] = useState(false);
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 30, height: 'var(--header-height)',
      borderBottom: '1px solid var(--color-grey-600)',
      backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
      background: 'rgba(10,10,10,0.34)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max-width)', margin: '0 auto', height: '100%',
        display: 'flex', alignItems: 'center', gap: 16, padding: '0 24px', boxSizing: 'border-box',
      }}>
        <div style={{ marginRight: 'auto' }}><Wordmark onClick={() => onNav('top')} /></div>
        <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {NAV.map((l) => (
            <NavLink key={l.id} active={active === l.id} onClick={() => onNav(l.id)}>{l.label}</NavLink>
          ))}
          <BookMeetingButton onClick={onBook} />
        </nav>
        <button className="show-mobile" onClick={() => setOpen(!open)} aria-label="Menu" style={{
          display: 'none', background: 'transparent', border: 0, color: '#fff', cursor: 'pointer', padding: 8,
        }}>
          <i data-lucide={open ? 'x' : 'menu'} style={{ width: 24, height: 24 }}></i>
        </button>
      </div>
      {open && (
        <div className="show-mobile" style={{
          display: 'none', flexDirection: 'column', position: 'absolute', right: 16, top: 'calc(var(--header-height) + 6px)',
          width: 220, background: 'var(--color-grey-700)', border: '1px solid var(--color-grey-600)',
          borderRadius: 10, padding: '10px 0', boxShadow: '0 12px 30px rgba(0,0,0,.5)',
        }}>
          {NAV.map((l) => (
            <div key={l.id} onClick={() => { onNav(l.id); setOpen(false); }}
              style={{ padding: '11px 18px', cursor: 'pointer' }}>
              <NavLink active={active === l.id}>{l.label}</NavLink>
            </div>
          ))}
          <div style={{ padding: '10px 18px 6px' }}>
            <BookMeetingButton full onClick={() => { onBook(); setOpen(false); }} />
          </div>
        </div>
      )}
    </header>
  );
}
window.Header = Header;
window.NAV = NAV;

/* ----------------------------------------------------------- Book modal */
function BookModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 80, background: 'rgba(0,0,0,0.65)',
      backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        width: 'min(460px,100%)', background: 'var(--color-grey-700)',
        border: '1px solid var(--color-grey-600)', borderRadius: 14, padding: 28,
        boxShadow: '0 30px 80px rgba(0,0,0,.6)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: '#fff' }}>Book a meeting</h3>
          <button onClick={onClose} style={{ background: 'transparent', border: 0, color: 'var(--color-grey-300)', cursor: 'pointer' }}>
            <i data-lucide="x" style={{ width: 22, height: 22 }}></i>
          </button>
        </div>
        <p style={{ margin: '0 0 20px', color: 'var(--color-grey-200)', fontSize: 15, lineHeight: 1.55 }}>
          Pick a time that works for you — let's talk through your project and how I can help you ship
          scalable, cloud-native software.
        </p>
        <div style={{
          border: '1px dashed var(--color-grey-500)', borderRadius: 10, padding: '28px 16px',
          textAlign: 'center', color: 'var(--color-grey-300)', marginBottom: 20,
        }}>
          <i data-lucide="calendar-clock" style={{ width: 34, height: 34, color: 'var(--mint)' }}></i>
          <div style={{ marginTop: 10, fontSize: 13 }}>calendly.com/shonie</div>
        </div>
        <BookMeetingButton full onClick={onClose} label="Confirm slot" />
      </div>
    </div>
  );
}
window.BookModal = BookModal;
