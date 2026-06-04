/* global React, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle,
   Header, Hero, Expertise, Approach, Reviews, CVSection, Contact, BookModal */
const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "split",
  "headingFont": "roboto",
  "glow": true
}/*EDITMODE-END*/;

const SECTION_IDS = ['hero', 'expertise', 'approach', 'reviews', 'cv', 'contact'];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = useState('hero');
  const [booking, setBooking] = useState(false);

  // (re)bind lucide icons after every render
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  // active-section tracking (scroll-based; IO callbacks don't fire reliably in preview)
  useEffect(() => {
    const onScroll = () => {
      const mid = (window.innerHeight || 800) * 0.4;
      let cur = 'hero';
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= mid) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    const target = id === 'top' ? 'hero' : id;
    const el = document.getElementById(target);
    if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
  };

  const navActive = active === 'hero' ? '' : active;

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header active={navActive} onNav={go} onBook={() => setBooking(true)} />

      <main>
        <Hero direction={t.direction} headingFont={t.headingFont} glow={t.glow}
          onBook={() => setBooking(true)} onNav={go} />
        <Expertise headingFont={t.headingFont} />
        <Approach headingFont={t.headingFont} />
        <Reviews headingFont={t.headingFont} />
        <CVSection headingFont={t.headingFont} onBook={() => setBooking(true)} />
        <Contact headingFont={t.headingFont} onBook={() => setBooking(true)} />
      </main>

      <BookModal open={booking} onClose={() => setBooking(false)} />

      <TweaksPanel>
        <TweakSection label="Overall direction" />
        <TweakRadio label="Hero composition" value={t.direction}
          options={['split', 'centered', 'editorial']}
          onChange={(v) => setTweak('direction', v)} />
        <TweakSection label="Type" />
        <TweakRadio label="Headings" value={t.headingFont}
          options={['roboto', 'ultra']}
          onChange={(v) => setTweak('headingFont', v)} />
        <TweakSection label="Atmosphere" />
        <TweakToggle label="Mint glow behind hero" value={t.glow}
          onChange={(v) => setTweak('glow', v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
