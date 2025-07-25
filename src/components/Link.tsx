import NextLink from 'next/link';
import clsx from 'clsx';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export const Link = ({ href, children, active, ...rest }: LinkProps) => {
  return (
    <NextLink
      className={clsx('text-primary hover:underline hover:text-secondary', {
        'text-secondary': active,
        underline: active,
      })}
      href={href}
      {...rest}
    >
      {children}
    </NextLink>
  );
};
