'use client';

import { useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';
import type { Testimonial } from '@/lib/cv-data';

interface ProofProps {
  items: Testimonial[];
}

function Quote({ t }: { t: Testimonial }) {
  return (
    <li className="w-testi__item">
      <blockquote className="w-testi__quote">{t.quote}</blockquote>
      <footer className="w-testi__by">
        <span className="w-testi__author">{t.author}</span>
        {t.role && <span className="w-testi__role">{t.role}</span>}
      </footer>
    </li>
  );
}

export default function Proof({ items }: ProofProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const SPEED = 40; // px/s — a slow right-to-left drift
    let raf = 0;
    let last = performance.now();

    // The track is two identical halves, so resetting by one half-width keeps the
    // loop seamless whether it is drifting on its own or being hand-scrolled.
    const wrap = () => {
      const half = el.scrollWidth / 2;
      if (half <= 0) return;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
      else if (el.scrollLeft < 0) el.scrollLeft += half;
    };

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused.current) {
        el.scrollLeft += SPEED * dt;
        wrap();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const pause = () => {
      paused.current = true;
    };
    // Resume the drift once the pointer lets go or leaves.
    const resume = () => {
      paused.current = false;
    };

    // Mouse users drag to scroll (touch/trackpad use native scrolling); either
    // way the drift is paused while held and picks back up on release.
    let dragging = false;
    let startX = 0;
    let startLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
      pause();
      if (e.pointerType === 'mouse') {
        dragging = true;
        startX = e.clientX;
        startLeft = el.scrollLeft;
        el.setPointerCapture(e.pointerId);
      }
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      el.scrollLeft = startLeft - (e.clientX - startX);
      wrap();
    };
    const onPointerUp = () => {
      dragging = false;
      resume();
    };
    const onPointerLeave = () => {
      if (!dragging) resume();
    };

    el.addEventListener('scroll', wrap, { passive: true });
    el.addEventListener('pointerenter', pause);
    el.addEventListener('pointerleave', onPointerLeave);
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);
    el.addEventListener('focusin', pause);
    el.addEventListener('focusout', resume);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('scroll', wrap);
      el.removeEventListener('pointerenter', pause);
      el.removeEventListener('pointerleave', onPointerLeave);
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
      el.removeEventListener('focusin', pause);
      el.removeEventListener('focusout', resume);
    };
  }, [items.length]);

  if (items.length === 0) return null;

  // The track holds two identical groups; the clone (aria-hidden) is what makes
  // the drift and the manual scroll loop endlessly without a visible seam.
  return (
    <section className="w-section" id="testimonials" data-screen-label="Praise">
      <SectionTitle>What colleagues say</SectionTitle>
      <div className="w-testi" ref={scrollerRef}>
        <div className="w-testi__track">
          <ul className="w-testi__group">
            {items.map((t, i) => (
              <Quote key={`a-${i}`} t={t} />
            ))}
          </ul>
          <ul className="w-testi__group" aria-hidden="true">
            {items.map((t, i) => (
              <Quote key={`b-${i}`} t={t} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
