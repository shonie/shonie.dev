import SectionTitle from "./SectionTitle";

export default function Skills({ groups }) {
  return (
    <section className="w-section" id="skills" data-screen-label="Skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="w-skills">
        {groups.map((g, i) => (
          <div className="w-skills__col" key={i}>
            <h4 className="w-skills__label">{g.label}</h4>
            <ul className="w-skills__list">
              {g.items.map((s, j) => (
                <li key={j}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
