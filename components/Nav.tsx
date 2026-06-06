import Brick from './Brick';
import Button from './Button';

interface NavProps {
  active: string;
  onNav: (id: string) => void;
}

const links = [
  { label: 'Work', id: 'selected-work' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

export default function Nav({ active, onNav }: NavProps) {
  return (
    <header className="w-nav" data-screen-label="Nav">
      <div className="w-nav__inner">
        <a
          className="w-wordmark"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onNav('top');
          }}
        >
          <Brick size={26} />
          <span>
            shonie<span className="w-wordmark__dev">.dev</span>
          </span>
        </a>
        <nav className="w-nav__links">
          {links.map((l) => (
            <a
              key={`NavLink__${l.id}`}
              href={'#' + l.id}
              className={'w-nav__link' + (active === l.id ? ' is-active' : '')}
              onClick={(e) => {
                e.preventDefault();
                onNav(l.id);
              }}
            >
              {l.label}
            </a>
          ))}
          <Button variant="solid" onClick={() => onNav('contact')}>
            Hire me
          </Button>
        </nav>
      </div>
    </header>
  );
}
