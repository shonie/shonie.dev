'use client';

import { usePathname } from 'next/navigation';
import { config } from '@/app-config';
import { Link } from './Link';
import { BookMeetingButton } from './BookMeetingButton';

const links = [
  { href: '/cv', label: 'CV' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6 bg-surface-variant">
      <span className="font-bold text-[42px] text-bold text-secondary cursor-default underline">
        {config.siteName}
      </span>
      <nav className="flex gap-6 items-center">
        <BookMeetingButton />
        {links.map(link => (
          <Link
            href={link.href}
            key={link.href}
            active={pathname === link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
