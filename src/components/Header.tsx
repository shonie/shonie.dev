import { useRouter } from 'next/router';
import { appConfig } from '@/app-config';
import { Link } from './Link';
import { BookMeetingButton } from './BookMeetingButton';
import { Flex, Separator, Heading, Grid } from '@radix-ui/themes';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Menu, X } from 'lucide-react';
import { useCallback, useState } from 'react';
import { Container } from './Container';

const links = [
  { href: '/cv', label: 'CV' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

export const HEADER_HEIGHT = '73px';

export const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const handleTitleClick = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Grid
      asChild
      columns={{
        initial: '1',
        sm: 'repeat(12, 1fr)',
      }}
      rows="1"
      style={{
        columnGap: '16px',
        rowGap: '0px',
      }}
    >
      <header className="flex flex-row w-full fixed top-0 rounded-xs border-b-1 min-w-100 backdrop-blur-sm transition-all duration-200 ease-in border-gray-700 z-9">
        <Container>
          <Heading
            size="8"
            weight="bold"
            onClick={handleTitleClick}
            className="inline-block grow-4 cursor-pointer"
          >
            {appConfig.siteName}
          </Heading>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <Flex
              justify="end"
              gridRow="4"
              gap="5"
              className="sm:hidden md:hidden grow-8 lg:flex"
            >
              <BookMeetingButton />
              <Separator orientation="vertical" size="2" />
              <Flex align="center" gap="6">
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
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center">
            <NavigationMenu.Root className="relative ml-4">
              <NavigationMenu.List>
                <NavigationMenu.Item>
                  <NavigationMenu.Trigger asChild>
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      aria-label="Toggle navigation menu"
                    >
                      {isOpen ? (
                        <X className="h-6 w-6" />
                      ) : (
                        <Menu className="h-6 w-6" />
                      )}
                    </button>
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-2">
                    {links.map(link => (
                      <NavigationMenu.Link asChild key={link.href}>
                        <div
                          onClick={handleLinkClick}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <Link
                            href={link.href}
                            active={pathname === link.href}
                          >
                            {link.label}
                          </Link>
                        </div>
                      </NavigationMenu.Link>
                    ))}
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>
        </Container>
      </header>
    </Grid>
  );
};
