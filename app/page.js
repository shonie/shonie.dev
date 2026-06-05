'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import WorkList from '@/components/WorkList';
import Skills from '@/components/Skills';
import Availability from '@/components/Availability';
import ContactFooter from '@/components/ContactFooter';
import Footer from '@/components/Footer';
import { CV_DATA, SKILL_GROUPS, AVAIL_PREFS } from '@/lib/cv-data';

export default function Home() {
  const [active, setActive] = useState('top');

  const onNav = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el)
      window.scrollTo({
        top: id === 'top' ? 0 : el.offsetTop - 70,
        behavior: 'smooth',
      });
  };

  return (
    <>
      <Nav active={active} onNav={onNav} />
      <div className="wrap">
        <Hero data={CV_DATA} onNav={onNav} />
        <WorkList items={CV_DATA.career} />
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
