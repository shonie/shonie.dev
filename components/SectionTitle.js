export default function SectionTitle({ kicker, children }) {
  return (
    <div className="w-sectiontitle">
      {kicker && <span className="w-kicker">{kicker}</span>}
      <h2 className="w-h2">{children}</h2>
    </div>
  );
}
