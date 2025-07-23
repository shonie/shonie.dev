import { config } from '@/config';

export const Header = () => {
  return (
    <header className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
      <h1 className="font-bold text-primary">{config.siteName}</h1>
    </header>
  );
};
