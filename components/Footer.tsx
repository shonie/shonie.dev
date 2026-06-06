import Brick from './Brick';
import { LEGAL } from '@/lib/cv-data';

export default function Footer() {
  return (
    <footer className="w-footer w-invert" data-screen-label="Footer">
      <div className="w-footer__brand">
        <span className="w-wordmark w-wordmark--sm">
          <Brick size={20} fg="#fff" bg="#000" />
          <span>
            shonie<span className="w-wordmark__dev">.dev</span>
          </span>
        </span>
        <span className="w-footer__meta">Oleksandr Starnikov © 2026</span>
      </div>
      <dl className="w-footer__legal">
        <div>
          <dt>Location</dt>
          <dd>{LEGAL.office}</dd>
        </div>
        <div>
          <dt>VAT</dt>
          <dd>{LEGAL.vat}</dd>
        </div>
        <div>
          <dt>KVK</dt>
          <dd>{LEGAL.kvk}</dd>
        </div>
      </dl>
    </footer>
  );
}
