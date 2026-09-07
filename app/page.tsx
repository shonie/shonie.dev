'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import WorkList from '@/components/WorkList';
import Proof from '@/components/Proof';
import Skills from '@/components/Skills';
import Availability from '@/components/Availability';
import ContactFooter from '@/components/ContactFooter';
import Footer from '@/components/Footer';
import { CV_DATA, SKILL_GROUPS, AVAIL_PREFS, TESTIMONIALS } from '@/lib/cv-data';

export default function Home() {
  const [active, setActive] = useState('top');

  const onNav = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el)
      window.scrollTo({
        top: id === 'top' ? 0 : el.offsetTop - 70,
        behavior: 'smooth',
      });
  };

  // Surface the top credential as a hero badge, without the trailing year range
  // (a "2023 - 2024" suffix reads as expired in a prominent badge).
  const credential = CV_DATA.certifications[0]?.title.replace(/\s*\d{4}\s*-\s*\d{4}\s*$/, '');

  return (
    <>
      <Nav active={active} onNav={onNav} />
      <div className="wrap">
        <Hero data={CV_DATA} credential={credential} onNav={onNav} />
        <WorkList items={CV_DATA.career} />
        <Proof items={TESTIMONIALS} />
        <Skills groups={SKILL_GROUPS} />
      </div>
      <Availability prefs={AVAIL_PREFS} />
      <div className="wrap">
        <ContactFooter contacts={CV_DATA.contacts} />
      </div>
      <Footer />
    </>
  );
}
