import { config } from '@/app/config';

export const Header = () => {
  return (
    <header className="flex">
      <span className="font-bold text-primary">{config.siteName}</span>
    </header>
  );
};
