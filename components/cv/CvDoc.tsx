import Image from 'next/image';
import { CV_DATA, ICONS } from '@/lib/cv-data';
import type { CareerItem, TitledItem, WorkPref, Contact, IconKey } from '@/lib/cv-data';

const D = CV_DATA;

function RoleBlock({ role, dates, bullets }: CareerItem) {
  return (
    <div className="cv-role">
      <h3 className="cv-h2">{role}</h3>
      <h3 className="cv-h2">{dates}</h3>
      <ul className="cv-list">
        {bullets.map(([lead, rest], i) => (
          <li key={i}>
            <strong>{lead}</strong>
            {rest}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TitledBlock({ title, bullets }: TitledItem) {
  return (
    <div className="cv-role">
      <h3 className="cv-h2">{title}</h3>
      <ul className="cv-list">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="cv-list cv-list--plain">
      {items.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  );
}

function Portrait() {
  return (
    <Image
      className="cv-portrait"
      src="/portrait.jpg"
      alt="Portrait of Oleksandr Starnikov"
      width={200}
      height={232}
      priority
    />
  );
}

function PrefEntry({ label, text, list }: WorkPref) {
  return (
    <div className="cv-pref">
      <h3 className="cv-h2">{label}</h3>
      {text && <p className="cv-body">{text}</p>}
      {list && (
        <ul className="cv-list cv-list--plain">
          {list.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ContactRow({ icon, text, href, underline }: Contact) {
  return (
    <a className="cv-contact" href={href}>
      <Image
        src={ICONS[icon as IconKey]}
        alt=""
        className="cv-contact__icon"
        width={16}
        height={16}
      />
      <span className={underline ? 'cv-link' : ''}>{text}</span>
    </a>
  );
}

function Page1() {
  const left = D.career.slice(0, 2);
  const right = D.career.slice(2);
  return (
    <div className="cv-page" data-screen-label="CV page 1">
      <div className="cv-top">
        <div>
          <h1 className="cv-name">{D.name}</h1>
          <h2 className="cv-h1 cv-title">{D.title}</h2>
          <p className="cv-body cv-summary">{D.summary}</p>
        </div>
        <Portrait />
      </div>
      <div className="cv-section">
        <h2 className="cv-h1">Career</h2>
        <div className="cv-cols">
          <div className="cv-col">
            {left.map((r, i) => (
              <RoleBlock key={i} {...r} />
            ))}
          </div>
          <div className="cv-col">
            {right.map((r, i) => (
              <RoleBlock key={i} {...r} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Page2() {
  return (
    <div className="cv-page" data-screen-label="CV page 2">
      <div className="cv-cols">
        <div className="cv-col">
          <div>
            <h2 className="cv-h1" style={{ marginBottom: '16px' }}>
              Education
            </h2>
            {D.education.map((e, i) => (
              <TitledBlock key={i} {...e} />
            ))}
          </div>
          <div>
            <h2 className="cv-h1" style={{ marginBottom: '16px' }}>
              Certifications and Courses
            </h2>
            <ul className="cv-list">
              {D.certifications.concat(D.courses).map((b, i) => (
                <li key={i}>
                  <strong>{b.title}</strong> - {b.bullets.join(', ')}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="cv-h1" style={{ marginBottom: '10px' }}>
              Skills
            </h2>
            <ul className="cv-skills">
              {D.skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cv-col">
          <div>
            <h2 className="cv-h1" style={{ marginBottom: '10px' }}>
              Hobbies
            </h2>
            <BulletList items={D.hobbies} />
          </div>
          <div>
            <h2 className="cv-h1" style={{ marginBottom: '10px' }}>
              Languages
            </h2>
            <BulletList items={D.languages} />
          </div>
          <div>
            <h2 className="cv-h1" style={{ marginBottom: '14px' }}>
              Work preferences
            </h2>
            <div className="cv-col" style={{ gap: '16px' }}>
              {D.workPrefs.map((p, i) => (
                <PrefEntry key={i} {...p} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="cv-h1" style={{ marginBottom: '4px' }}>
              Contacts
            </h2>
            <div className="cv-contacts">
              {D.contacts.map((c, i) => (
                <ContactRow key={i} {...c} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CvDoc() {
  return (
    <div className="cv-stage" id="cv-stage">
      <Page1 />
      <Page2 />
    </div>
  );
}
