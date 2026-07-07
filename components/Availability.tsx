import type { AvailPref } from '@/lib/cv-data';

interface AvailabilityProps {
  prefs: AvailPref[];
}

export default function Availability({ prefs }: AvailabilityProps) {
  return (
    <section className="w-avail" id="availability" data-screen-label="Availability">
      <div className="w-avail__inner">
        <h2 className="w-h2 w-avail__h2">Availability</h2>
        <p className="w-avail__big">
          Available for new work — I can start within one to two weeks.
        </p>
        <div className="w-avail__grid">
          {prefs.map((p, i) => (
            <div className="w-avail__cell" key={i}>
              <span className="w-avail__k">{p.label}</span>
              <span className="w-avail__v">{p.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
