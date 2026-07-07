import type { Metadata } from 'next';
import Link from 'next/link';
import './cv.css';
import CvDoc from '@/components/cv/CvDoc';
import DownloadButton from '@/components/cv/DownloadButton';
import Brick from '@/components/Brick';

const CV_TITLE = 'shonie.dev — CV · Oleksandr Starnikov';
const CV_DESCRIPTION = 'Curriculum vitae of Oleksandr Starnikov — cloud / technical architect.';

export const metadata: Metadata = {
  title: CV_TITLE,
  description: CV_DESCRIPTION,
  alternates: { canonical: '/cv' },
  openGraph: {
    type: 'profile',
    url: '/cv',
    title: CV_TITLE,
    description: CV_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: CV_TITLE,
    description: CV_DESCRIPTION,
  },
};

export default function CvPage() {
  return (
    <div className="cv-route">
      <header className="cv-topbar">
        <Link className="w-wordmark w-wordmark--sm" href="/">
          <Brick size={20} />
          <span>
            shonie<span className="w-wordmark__dev">.dev</span>
          </span>
        </Link>
        <div className="cv-topbar__actions">
          <Link className="cv-back" href="/">
            ← Back to site
          </Link>
          <DownloadButton />
        </div>
      </header>
      <CvDoc />
    </div>
  );
}
