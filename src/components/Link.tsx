import NextLink from 'next/link';
import { Link as RadixLink } from '@radix-ui/themes';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export const Link = ({ href, children, active }: LinkProps) => {
  return (
    <RadixLink
      color="mint"
      weight="medium"
      underline={active ? 'always' : 'none'}
      asChild
    >
      <NextLink href={href}>{children}</NextLink>
    </RadixLink>
  );
};
