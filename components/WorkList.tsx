import SectionTitle from './SectionTitle';
import type { CareerItem } from '@/lib/cv-data';

interface WorkListProps {
  items: CareerItem[];
}

export default function WorkList({ items }: WorkListProps) {
  return (
    <section className="w-section" id="selected-work" data-screen-label="Work">
      <SectionTitle>Selected work</SectionTitle>
      <ul className="w-work">
        {items.map((r, i) => (
          <li className="w-work__row" key={i}>
            <div className="w-work__head">
              <h3 className="w-work__role">{r.role}</h3>
              <span className="w-work__dates">{r.dates}</span>
            </div>
            <ul className="w-work__bullets">
              {r.bullets.slice(0, 3).map(([lead, rest], j) => (
                <li key={j}>
                  <strong>{lead}</strong>
                  {rest}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
