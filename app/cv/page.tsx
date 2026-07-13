import type { Metadata } from 'next';
import Link from 'next/link';
import './cv.css';
import CvDoc from '@/components/cv/CvDoc';
import DownloadButton from '@/components/cv/DownloadButton';
import Brick from '@/components/Brick';

interface CvPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const CV_TITLE = 'shonie.dev - CV - Oleksandr Starnikov';

const CV_DESCRIPTION = 'Curriculum vitae of Oleksandr Starnikov - solution architect.';

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

/**
 * Reading searchParams opts this route into dynamic rendering, which is what we
 * want: `?no_contacts=true` produces a contact-free CV for platforms like Upwork
 * that reject attachments containing contact details.
 * @param param0
 * @returns
 */
export default async function CvPage({ searchParams }: CvPageProps) {
  const { no_contacts: noContacts } = await searchParams;

  const value = Array.isArray(noContacts) ? noContacts.at(-1) : noContacts;

  const hideContacts = value === 'true' || value === '1' || value === '';

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
      <CvDoc hideContacts={hideContacts} />
    </div>
  );
}
