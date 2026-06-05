export default function Availability({ prefs }) {
  return (
    <section className="w-avail" data-screen-label="Availability">
      <div className="w-avail__inner">
        <p className="w-avail__big">Can start working at any time.</p>
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
