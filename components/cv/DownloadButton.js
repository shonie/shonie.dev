"use client";

export default function DownloadButton() {
  return (
    <button className="w-btn w-btn--solid" type="button" onClick={() => window.print()}>
      Download CV
    </button>
  );
}
