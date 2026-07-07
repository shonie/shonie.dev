import { ImageResponse } from 'next/og';
import { shonieBrick } from '@/lib/brick-logo';
import { CV_DATA } from '@/lib/cv-data';

// Dynamic social share card (og:image + twitter:image). On-brand monochrome
// ink-on-paper, reusing the site's brick mark. No external fonts so it renders
// reliably at build time without a network dependency.
export const alt = `${CV_DATA.name} — ${CV_DATA.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  const brick = shonieBrick({ finish: 'solid', fg: '#000000', bg: '#ffffff' });
  const brickSrc = `data:image/svg+xml;utf8,${encodeURIComponent(brick)}`;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#ffffff',
        color: '#000000',
        padding: '80px',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {}
        <img src={brickSrc} width={64} height={64} alt="" />
        <div style={{ display: 'flex', fontSize: '40px', fontWeight: 600 }}>
          <span>shonie</span>
          <span style={{ color: 'rgba(0,0,0,0.45)' }}>.dev</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: '96px', fontWeight: 600, letterSpacing: '-3px' }}>
          {CV_DATA.name}
        </div>
        <div style={{ display: 'flex', fontSize: '48px', marginTop: '8px' }}>{CV_DATA.title}</div>
        <div
          style={{
            display: 'flex',
            fontSize: '26px',
            marginTop: '28px',
            color: 'rgba(0,0,0,0.55)',
            textTransform: 'uppercase',
            letterSpacing: '3px',
          }}
        >
          Independent contractor · The Hague, Netherlands
        </div>
      </div>
    </div>,
    { ...size },
  );
}
