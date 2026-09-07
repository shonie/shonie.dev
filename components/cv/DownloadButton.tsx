'use client';

import { track } from '@vercel/analytics';

export default function DownloadButton() {
  const onDownload = () => {
    track('cv_download');
    window.print();
  };

  return (
    <button className="w-btn w-btn--solid" type="button" onClick={onDownload}>
      Download PDF
    </button>
  );
}
