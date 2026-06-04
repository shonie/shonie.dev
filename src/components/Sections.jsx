/* global React, Reveal, Badge, Card, SectionHeading, Eyebrow, BookMeetingButton, GhostButton */
// Shonie.dev — page sections. Content tightened within the brand voice.

/* ----------------------------------------------------------- data */
const CAPABILITIES = [
  { icon: 'triangle', name: 'Cloud architecture & scaling' },
  { icon: 'users', name: 'Team leadership & mentoring' },
  { icon: 'laptop', name: 'Full-stack development' },
  { icon: 'wand-sparkles', name: 'AI-powered solutions' },
  { icon: 'database', name: 'Data engineering' },
  { icon: 'workflow', name: 'Automation & integration' },
];

const STACK = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Radix UI'] },
  { group: 'Backend & cloud', items: ['Node.js', 'AWS', 'Serverless', 'Docker', 'Terraform'] },
  { group: 'Data', items: ['PostgreSQL', 'Redshift', 'Snowflake', 'DynamoDB', 'Neo4j', 'ETL pipelines'] },
];

const BRING = [
  { icon: 'cloud', title: 'Cloud architecture', accent: 'var(--mint)',
    body: 'Design and ship hugely scalable, cloud-native applications on AWS — sustainable, cost-aware, built to grow with you.',
    chips: ['AWS Solutions Architect Pro', 'Serverless', 'Terraform'] },
  { icon: 'database', title: 'Data engineering', accent: 'var(--color-tertiary-300)',
    body: 'Reliable ETL pipelines that deliver data in real time, plus enterprise database design, migration and tuning.',
    chips: ['Redshift', 'Snowflake', 'PostgreSQL', 'Neo4j'] },
  { icon: 'wand-sparkles', title: 'AI & automation', accent: 'var(--color-secondary-300)',
    body: 'AI-driven workflows that diagnose and resolve issues automatically — from chatbots with analysis to self-healing systems.',
    chips: ['LLM workflows', 'Self-healing systems', 'CI/CD'] },
];

const REVIEWS = [
  { quote: 'Oleksandr re-architected our reporting platform and cut cloud spend by a fifth without dropping a single feature. Rare blend of pragmatism and depth.',
    name: 'VP of Engineering', meta: 'ESG analytics scale-up' },
  { quote: 'He led our Snowflake-to-Redshift migration end-to-end and the team trusted the numbers again. Calm, clear, and relentlessly tidy.',
    name: 'Head of Data', meta: 'Climate reporting product' },
  { quote: 'The kind of architect who makes complex things feel simple. Mentored our juniors and left the codebase better than he found it.',
    name: 'CTO', meta: 'Consulting firm' },
];

/* ----------------------------------------------------------- shell */
function Section({ id, label, children, style = {} }) {
  return (
    <section id={id} data-screen-label={label} style={{
      minHeight: '100vh', scrollSnapAlign: 'start',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: 'calc(var(--header-height) + 40px) 24px 56px', boxSizing: 'border-box', ...style,
    }}>
      <div style={{ maxWidth: 'var(--container-max-width)', margin: '0 auto', width: '100%' }}>
        {children}
      </div>
    </section>
  );
}
window.PageSection = Section;

/* ----------------------------------------------------------- HERO */
function Hero({ direction, headingFont, glow, onBook, onNav }) {
  const ultra = headingFont === 'ultra';
  const nameEl = (
    <h1 style={{
      margin: 0, color: '#fff', lineHeight: ultra ? 1.02 : 1.04,
      fontFamily: ultra ? 'var(--font-ultra)' : 'var(--font-roboto)',
      fontWeight: ultra ? 400 : 700,
      letterSpacing: ultra ? '0' : '-0.02em',
      fontSize: direction === 'editorial'
        ? (ultra ? 'clamp(3rem,8vw,6.4rem)' : 'clamp(3rem,8.5vw,7rem)')
        : (ultra ? 'clamp(2.4rem,5vw,4rem)' : 'clamp(2.6rem,5.5vw,4.4rem)'),
    }}>
      Oleksandr<br />Starnikov
    </h1>
  );

  const lede = (
    <p style={{
      fontSize: 'clamp(1.1rem,1.7vw,1.32rem)', lineHeight: 1.6, color: 'var(--color-grey-100)',
      margin: '22px 0 32px', maxWidth: 620,
    }}>
      Crafting software end-to-end since 2016 — now building cloud-native systems for clients across
      the globe. Infinitely scalable applications that deliver real value to real users. If that sounds
      like your project, let's have a chat.
    </p>
  );

  const ctas = (
    <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
      <BookMeetingButton onClick={onBook} />
      <GhostButton onClick={() => onNav('approach')}>See what I bring</GhostButton>
    </div>
  );

  const badgesGrid = (template, extra = {}) => (
    <div style={{ display: 'grid', gridTemplateColumns: template, gap: 12, ...extra }}>
      {CAPABILITIES.map((c, i) => (
        <Reveal key={c.name} delay={120 + i * 60}><Badge icon={c.icon}>{c.name}</Badge></Reveal>
      ))}
    </div>
  );

  const glowEl = glow ? (
    <div aria-hidden="true" style={{
      position: 'absolute', right: '-8%', top: '12%', width: 520, height: 520, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(12,208,156,0.22) 0%, rgba(12,208,156,0) 68%)',
      filter: 'blur(8px)', pointerEvents: 'none', zIndex: 0,
    }}></div>
  ) : null;

  let body;
  if (direction === 'centered') {
    body = (
      <div style={{ textAlign: 'center', maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <Reveal><Eyebrow align="center">Solution Architect · Full-Stack · Data Engineer</Eyebrow></Reveal>
        <Reveal delay={60}>{nameEl}</Reveal>
        <Reveal delay={120}><div style={{ display: 'flex', justifyContent: 'center' }}>{lede}</div></Reveal>
        <Reveal delay={180}><div style={{ display: 'flex', justifyContent: 'center', marginBottom: 44 }}>{ctas}</div></Reveal>
        {badgesGrid('repeat(auto-fit,minmax(220px,1fr))', { justifyItems: 'center' })}
      </div>
    );
  } else if (direction === 'editorial') {
    body = (
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Reveal><Eyebrow align="left">Solution Architect · Full-Stack · Data Engineer</Eyebrow></Reveal>
        <Reveal delay={60}>{nameEl}</Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: 8, marginTop: 8 }}>
          <Reveal delay={120}>{lede}</Reveal>
          <Reveal delay={180}><div style={{ marginBottom: 44 }}>{ctas}</div></Reveal>
        </div>
        <Reveal delay={220}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {CAPABILITIES.map((c) => <Badge key={c.name} icon={c.icon}>{c.name}</Badge>)}
          </div>
        </Reveal>
      </div>
    );
  } else { /* split */
    body = (
      <div className="hero-split" style={{
        display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <div>
          <Reveal><Eyebrow align="left">Solution Architect · Full-Stack · Data Engineer</Eyebrow></Reveal>
          <Reveal delay={60}>{nameEl}</Reveal>
          <Reveal delay={120}>{lede}</Reveal>
          <Reveal delay={180}>{ctas}</Reveal>
        </div>
        <div>{badgesGrid('1fr')}</div>
      </div>
    );
  }

  return (
    <Section id="hero" label="Hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {glowEl}
      {body}
    </Section>
  );
}
window.Hero = Hero;

/* ----------------------------------------------------------- EXPERTISE */
function Expertise({ headingFont }) {
  return (
    <Section id="expertise" label="Expertise">
      <Reveal><Eyebrow>Core technologies</Eyebrow></Reveal>
      <Reveal delay={60}><SectionHeading font={headingFont}>Technologies &amp; expertise</SectionHeading></Reveal>
      <div className="stack-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 24,
        maxWidth: 1040, margin: '0 auto',
      }}>
        {STACK.map((col, i) => (
          <Reveal key={col.group} delay={100 + i * 90}>
            <div style={{
              border: '1px solid var(--color-grey-600)', borderRadius: 14, padding: '26px 24px',
              background: 'rgba(255,255,255,0.015)', height: '100%', boxSizing: 'border-box',
            }}>
              <div style={{
                fontSize: 13, fontWeight: 600, letterSpacing: '1.6px', textTransform: 'uppercase',
                color: 'var(--mint-soft)', marginBottom: 16,
              }}>{col.group}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
                {col.items.map((t) => <Badge key={t}>{t}</Badge>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
window.Expertise = Expertise;

/* ----------------------------------------------------------- APPROACH */
function Approach({ headingFont }) {
  return (
    <Section id="approach" label="What I bring">
      <Reveal><Eyebrow>What I bring to your project</Eyebrow></Reveal>
      <Reveal delay={60}><SectionHeading font={headingFont}>From architecture to shipped product</SectionHeading></Reveal>
      <div className="bring-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 24,
        maxWidth: 1100, margin: '0 auto',
      }}>
        {BRING.map((c, i) => (
          <Reveal key={c.title} delay={100 + i * 90}>
            <Card icon={c.icon} title={c.title} body={c.body} chips={c.chips} accent={c.accent} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
window.Approach = Approach;

/* ----------------------------------------------------------- REVIEWS */
function Reviews({ headingFont }) {
  return (
    <Section id="reviews" label="Reviews">
      <Reveal><Eyebrow>Reviews</Eyebrow></Reveal>
      <Reveal delay={60}><SectionHeading font={headingFont}>What clients say</SectionHeading></Reveal>
      <div className="review-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 24,
        maxWidth: 1100, margin: '0 auto',
      }}>
        {REVIEWS.map((r, i) => (
          <Reveal key={i} delay={100 + i * 90}>
            <figure style={{
              margin: 0, border: '1px solid var(--color-grey-600)', borderRadius: 14, padding: 28,
              background: 'rgba(255,255,255,0.015)', height: '100%', boxSizing: 'border-box',
              display: 'flex', flexDirection: 'column',
            }}>
              <i data-lucide="quote" style={{ width: 26, height: 26, color: 'var(--mint)', marginBottom: 14 }}></i>
              <blockquote style={{ margin: '0 0 20px', fontSize: 16, lineHeight: 1.6, color: 'var(--color-grey-100)', flex: 1 }}>
                {r.quote}
              </blockquote>
              <figcaption>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{r.name}</div>
                <div style={{ fontSize: 13, color: 'var(--color-grey-300)', marginTop: 2 }}>{r.meta}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <Reveal delay={360}>
        <p style={{ textAlign: 'center', fontSize: 12.5, color: 'var(--color-grey-400)', marginTop: 26, letterSpacing: '0.4px' }}>
          Placeholder testimonials — swap in real client quotes in <code style={{ color: 'var(--color-grey-300)' }}>components/Sections.jsx</code>.
        </p>
      </Reveal>
    </Section>
  );
}
window.Reviews = Reviews;

/* ----------------------------------------------------------- CV */
function CVSection({ headingFont, onBook }) {
  const stats = [
    { n: '9+', l: 'years shipping' },
    { n: '5', l: 'roles, 2016→now' },
    { n: 'Pro', l: 'AWS architect' },
  ];
  return (
    <Section id="cv" label="CV">
      <div className="cv-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr 0.85fr', gap: 56, alignItems: 'center',
        maxWidth: 1100, margin: '0 auto',
      }}>
        <div>
          <Reveal><Eyebrow align="left">Curriculum vitae</Eyebrow></Reveal>
          <Reveal delay={60}><SectionHeading font={headingFont} align="left">The track record</SectionHeading></Reveal>
          <Reveal delay={120}>
            <p style={{ fontSize: 'clamp(1.05rem,1.5vw,1.2rem)', lineHeight: 1.6, color: 'var(--color-grey-100)', margin: '0 0 28px', maxWidth: 520 }}>
              Technical architect with a decade across full-stack, cloud and data engineering —
              from junior dev to leading product redesigns and AWS migrations. The full story,
              one page on screen, two on paper.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div style={{ display: 'flex', gap: 32, marginBottom: 32, flexWrap: 'wrap' }}>
              {stats.map((s) => (
                <div key={s.l}>
                  <div style={{ fontSize: 30, fontWeight: 700, color: 'var(--mint)', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: 13, color: 'var(--color-grey-300)', marginTop: 6 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <GhostButton href="cv.html"><i data-lucide="file-text" style={{ width: 16, height: 16 }}></i>View full CV</GhostButton>
              <GhostButton href="cv.html?print=1"><i data-lucide="download" style={{ width: 16, height: 16 }}></i>Download PDF</GhostButton>
            </div>
          </Reveal>
        </div>

        {/* stylised CV preview */}
        <Reveal delay={160}>
          <a href="cv.html" aria-label="Open CV" style={{ display: 'block', textDecoration: 'none' }}>
            <div className="cv-preview" style={{
              background: '#fff', color: '#111', borderRadius: 6, padding: '34px 32px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.5)', transform: 'rotate(-1.4deg)',
              border: '1px solid rgba(255,255,255,0.1)', aspectRatio: '794 / 560', overflow: 'hidden',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-cv-display)', fontWeight: 500, fontSize: 26, lineHeight: 1.05 }}>Oleksandr<br />Starnikov</div>
                  <div style={{ fontFamily: 'var(--font-cv-display)', fontSize: 13, marginTop: 8, color: '#333' }}>Technical architect</div>
                </div>
                <div style={{ width: 64, height: 76, background: '#e6e6e6', borderRadius: 2 }}></div>
              </div>
              <div style={{ fontFamily: 'var(--font-cv-display)', fontWeight: 500, fontSize: 16, margin: '22px 0 12px' }}>Career</div>
              {['Technical lead / architect — 2021→present', 'Full-stack developer — 2019→2021', 'Node.js developer — 2018→2019'].map((r, i) => (
                <div key={i} style={{ marginBottom: 12 }}>
                  <div style={{ fontFamily: 'var(--font-cv-body)', fontWeight: 600, fontSize: 11 }}>{r}</div>
                  <div style={{ height: 4, background: '#ededed', borderRadius: 2, marginTop: 5, width: '92%' }}></div>
                  <div style={{ height: 4, background: '#ededed', borderRadius: 2, marginTop: 4, width: '78%' }}></div>
                </div>
              ))}
            </div>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
window.CVSection = CVSection;

/* ----------------------------------------------------------- CONTACT + footer */
function ContactRow({ icon, brand, label, value, href }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 16, padding: '16px 18px', textDecoration: 'none',
        border: `1px solid ${hover ? 'var(--mint)' : 'var(--color-grey-600)'}`, borderRadius: 12,
        background: hover ? 'rgba(12,208,156,0.06)' : 'rgba(255,255,255,0.015)', transition: 'all .2s ease',
      }}>
      {brand
        ? <BrandIcon name={brand} size={20} />
        : <i data-lucide={icon} style={{ width: 22, height: 22, color: 'var(--mint)', flex: 'none' }}></i>}
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 12, color: 'var(--color-grey-300)', letterSpacing: '0.6px' }}>{label}</div>
        <div style={{ fontSize: 15.5, color: '#fff', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis' }}>{value}</div>
      </div>
      <i data-lucide="arrow-up-right" style={{ width: 16, height: 16, color: 'var(--color-grey-400)', marginLeft: 'auto', flex: 'none' }}></i>
    </a>
  );
}

function Contact({ headingFont, onBook }) {
  return (
    <Section id="contact" label="Contact" style={{ justifyContent: 'space-between' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 'var(--container-max-width)', margin: '0 auto', width: '100%' }}>
        <Reveal><Eyebrow>Get in touch</Eyebrow></Reveal>
        <Reveal delay={60}><SectionHeading font={headingFont}>Ready to build something amazing?</SectionHeading></Reveal>
        <Reveal delay={120}>
          <p style={{ textAlign: 'center', fontSize: 'clamp(1.05rem,1.5vw,1.2rem)', color: 'rgba(255,255,255,0.9)', margin: '0 auto 36px', maxWidth: 600, lineHeight: 1.55 }}>
            Let's discuss your project and how I can help you ship scalable, efficient software.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 44 }}>
            <BookMeetingButton onClick={onBook} />
          </div>
        </Reveal>
        <div className="contact-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 16,
          maxWidth: 900, margin: '0 auto', width: '100%',
        }}>
          <Reveal delay={200}><ContactRow icon="mail" label="EMAIL" value="contact@shonie.dev" href="mailto:contact@shonie.dev" /></Reveal>
          <Reveal delay={260}><ContactRow brand="linkedin" label="LINKEDIN" value="in/shonie" href="https://www.linkedin.com/in/shonie/" /></Reveal>
          <Reveal delay={320}><ContactRow brand="github" label="GITHUB" value="github.com/shonie" href="https://github.com/shonie" /></Reveal>
        </div>
      </div>
      <footer style={{
        borderTop: '1px solid var(--color-grey-600)', marginTop: 48, paddingTop: 24,
        maxWidth: 'var(--container-max-width)', width: '100%', margin: '48px auto 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
      }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Shonie<span style={{ color: 'var(--mint)' }}>.dev</span></div>
        <div style={{ fontSize: 13, color: 'var(--color-grey-300)' }}>
          Full-stack development • Cloud architecture • Data solutions
        </div>
      </footer>
    </Section>
  );
}
window.Contact = Contact;
