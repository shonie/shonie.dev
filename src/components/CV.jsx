/* global React */
// Shonie.dev — print-ready A4 CV. Work Sans (display) + Roboto (body), black on white.
// Data sourced from the design-system CV. Two A4 pages, window.print() → clean PDF.
const { useEffect } = React;

const JOBS = [
  { role: 'Technical lead / architect, Rio ESG', period: '2021 – present', bullets: [
    'Developed a chatbot with data-analysis capabilities',
    'Coordinated a migration from Snowflake to AWS Redshift to raise trust in data reporting',
    'Implemented AI-driven workflows that automatically diagnose and resolve runtime errors',
    'Led a major product redesign',
    'Migrated CI/CD to GitHub Actions for a higher level of automation',
  ] },
  { role: 'Full-stack developer, Rio ESG', period: '2019 – 2021', bullets: [
    'Actively contributed to the codebase of the ESG product',
    'Promoted simple solutions to complex problems wherever possible',
    'Designed database schemas with relationship diagrams',
    'Built effective, reliable ETL pipelines delivering data in real time',
    'Applied serverless computing to keep the system sustainable and cost-effective',
  ] },
  { role: 'Node.js developer, SoftServe', period: '2018 – 2019', bullets: [
    'Managed a Terraform deployment spanning SQS, DynamoDB, EC2 and S3',
    'Developed a pool of data-processing services with Node.js on EC2',
    'Increased the test-coverage threshold to 90%',
    'Programmed a RESTful API with supplementary OpenAPI documentation',
  ] },
  { role: 'Frontend developer, SoftServe', period: '2017 – 2018', bullets: [
    'Mentored 3 junior frontend developers',
    'Kicked off a data-visualisation project for a leading consulting firm',
    'Elaborated a fat-client architecture with offline-mode support',
    'Implemented pixel-perfect layouts from the given Sketch files',
  ] },
  { role: 'Junior full-stack developer, Icecat.biz', period: '2016 – 2017', bullets: [
    'Developed an isomorphic JavaScript application for an eCommerce platform',
  ] },
];

function Job({ role, period, bullets }) {
  return (
    <div style={{ marginBottom: '6mm', breakInside: 'avoid' }}>
      <div style={{ fontFamily: 'var(--font-cv-body)', fontWeight: 600, fontSize: '3.6mm', color: '#000' }}>{role}</div>
      <div style={{ fontFamily: 'var(--font-cv-body)', fontWeight: 400, fontSize: '2.9mm', color: '#444', margin: '0.5mm 0 1.6mm' }}>{period}</div>
      <ul style={{ margin: 0, paddingLeft: '4mm' }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ fontFamily: 'var(--font-cv-body)', fontWeight: 400, fontSize: '2.85mm', color: '#1a1a1a', lineHeight: 1.5, marginBottom: '0.8mm' }}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function Title({ children }) {
  return <h2 style={{ fontFamily: 'var(--font-cv-display)', fontWeight: 600, fontSize: '5mm', margin: '0 0 3mm', color: '#000', letterSpacing: 0 }}>{children}</h2>;
}

function Block({ title, children }) {
  return (
    <div style={{ marginBottom: '6mm', breakInside: 'avoid' }}>
      <Title>{title}</Title>
      <div style={{ fontFamily: 'var(--font-cv-body)', fontWeight: 400, fontSize: '2.85mm', color: '#1a1a1a', lineHeight: 1.55 }}>{children}</div>
    </div>
  );
}

function ContactRow({ icon, pin, children, underline }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2.6mm', marginBottom: '1.8mm' }}>
      {pin
        ? <svg width="3.4mm" height="3.4mm" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" style={{ flex: 'none' }}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        : <img src={icon} alt="" style={{ width: '3.4mm', height: '3.4mm', flex: 'none' }} />}
      <span style={{ fontFamily: 'var(--font-cv-body)', fontWeight: 400, fontSize: '2.85mm', color: '#000', textDecoration: underline ? 'underline' : 'none' }}>{children}</span>
    </div>
  );
}

function Page({ children, last }) {
  return (
    <div className="page" style={{
      width: '210mm', minHeight: '297mm', background: '#fff', color: '#000',
      padding: '16mm', boxSizing: 'border-box', margin: '0 auto',
      breakAfter: last ? 'auto' : 'page',
    }}>{children}</div>
  );
}

function PageOne() {
  return (
    <Page>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '11mm' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-cv-display)', fontWeight: 600, fontSize: '12mm', lineHeight: 1.04, margin: 0, letterSpacing: '-0.01em' }}>
            Oleksandr<br />Starnikov
          </h1>
          <div style={{ fontFamily: 'var(--font-cv-display)', fontWeight: 400, fontSize: '5.5mm', marginTop: '3mm', color: '#333' }}>
            Technical architect
          </div>
        </div>
        <img src="assets/portrait.jpeg" alt="Oleksandr Starnikov" style={{
          width: '44mm', height: '52mm', objectFit: 'cover', boxShadow: '0 1mm 1mm rgba(0,0,0,0.25)', flex: 'none',
        }} />
      </div>
      <Title>Career</Title>
      <div style={{ columnCount: 2, columnGap: '9mm' }}>
        {JOBS.map((j) => <Job key={j.role} {...j} />)}
      </div>
    </Page>
  );
}

function PageTwo() {
  return (
    <Page last>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '11mm' }}>
        <div>
          <Block title="Skills">
            Fundamental knowledge of Node.js internals and invaluable hands-on experience writing efficient servers.
          </Block>
          <Block title="Courses">
            9-month frontend development course — Brain Academy, 2015 – 2016<br />
            HowProgrammingWorks — Kyiv Polytechnic Institute, 2017 – 2018
          </Block>
          <Block title="Education">
            Bachelor of philosophy — Ukrainian State University<br />
            Thesis on “Hyperreality in Jean Baudrillard’s work”
          </Block>
          <Block title="Certifications">
            AWS Certified Solutions Architect Professional, 2023 – 2024<br />
            AWS Certified Data Engineer
          </Block>
        </div>
        <div>
          <Block title="Work preferences">
            <strong style={{ fontWeight: 600 }}>How</strong><br />
            Part-time · Full-time · Intermittent<br /><br />
            <strong style={{ fontWeight: 600 }}>When</strong><br />
            2 months after an offer is given<br /><br />
            <strong style={{ fontWeight: 600 }}>Where</strong><br />
            Product companies · mature startups · outsourcing
          </Block>
          <Block title="Languages">
            Ukrainian (native proficiency)<br />
            English (full professional proficiency)<br />
            Russian (full professional proficiency)<br />
            Dutch (limited working proficiency)
          </Block>
          <Block title="Hobbies">
            Vinyl record collecting · Travelling · Contemporary philosophy · Sci-fi literature · Arthouse films
          </Block>
          <Title>Contacts</Title>
          <ContactRow icon="assets/cv-icons/envelope.svg">recruit@shonie.dev</ContactRow>
          <ContactRow icon="assets/cv-icons/linkedin.svg" underline>linkedin.com/in/shonie</ContactRow>
          <ContactRow icon="assets/cv-icons/github.svg">github.com/shonie</ContactRow>
          <ContactRow icon="assets/cv-icons/phone.svg">+31 6 8539 9153</ContactRow>
          <ContactRow pin>Redacted St. 00, 0000 AA City, Netherlands</ContactRow>
        </div>
      </div>
    </Page>
  );
}

function Toolbar() {
  return (
    <div className="cv-toolbar no-print" style={{
      position: 'sticky', top: 0, zIndex: 10, display: 'flex', alignItems: 'center', gap: 16,
      padding: '0 24px', height: 'var(--header-height)',
      background: 'rgba(10,10,10,0.55)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--color-grey-600)',
    }}>
      <a href="index.html" style={{
        display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--color-grey-100)',
        textDecoration: 'none', fontSize: 15, fontWeight: 500,
      }}>
        <span style={{ fontSize: 18 }}>←</span> Shonie<span style={{ color: 'var(--mint)' }}>.dev</span>
      </a>
      <div style={{ marginLeft: 'auto' }}>
        <button onClick={() => window.print()} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, border: 0, cursor: 'pointer',
          background: 'var(--mint)', color: 'var(--on-mint)', borderRadius: 4, padding: '10px 18px',
          fontFamily: 'var(--font-roboto)', fontWeight: 500, fontSize: 15, letterSpacing: '0.5px', whiteSpace: 'nowrap',
        }}>Download PDF</button>
      </div>
    </div>
  );
}

function CVApp() {
  useEffect(() => {
    document.title = 'CV — Oleksandr Starnikov';
    if (new URLSearchParams(location.search).get('print') === '1') {
      setTimeout(() => window.print(), 600);
    }
  }, []);
  return (
    <>
      <Toolbar />
      <div className="cv-stage" style={{ padding: '28px 16px 48px' }}>
        <PageOne />
        <div style={{ height: 24 }} className="no-print"></div>
        <PageTwo />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CVApp />);
