'use client';

import { usePathname, useRouter } from 'next/navigation';
import { appConfig } from '@/app-config';
import { Link } from './Link';
import { BookMeetingButton } from './BookMeetingButton';
import { Container, Flex, Separator, Heading } from '@radix-ui/themes';
import { useCallback } from 'react';

const links = [
  { href: '/cv', label: 'CV' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleTitleClick = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <Container position="sticky" top="0">
      <Flex align="center" justify="between" gap="4" py="3" px="4">
        <Heading size="8" weight="bold" onClick={handleTitleClick}>
          {appConfig.siteName}
        </Heading>

        <Flex align="center" gap="4">
          <BookMeetingButton />
          <Separator orientation="vertical" size="2" />
          <Flex align="center" gap="4">
            {links.map(link => (
              <Link
                href={link.href}
                key={link.href}
                active={pathname === link.href}
              >
                {link.label}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
