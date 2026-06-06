import Button from './Button';

interface HeroData {
  name: string;
  title: string;
  summary: string;
}

interface HeroProps {
  data: HeroData;
  onNav: (id: string) => void;
}

export default function Hero({ data, onNav }: HeroProps) {
  return (
    <section className="w-hero" id="top" data-screen-label="Hero">
      <div className="w-hero__text">
        <p className="w-eyebrow">Independent contractor · The Hague, Netherlands · Available now</p>
        <h1 className="w-display">{data.name}</h1>
        <p className="w-hero__role">{data.title}</p>
        <p className="w-lead">{data.summary}</p>
        <div className="w-hero__cta">
          <Button variant="solid" onClick={() => onNav('contact')}>
            Get in touch
          </Button>
          <Button variant="link" as="a" href="/cv">
            View CV →
          </Button>
        </div>
      </div>
      <div className="w-hero__photo" aria-label="Portrait of Oleksandr Starnikov" />
    </section>
  );
}
