import { Heading } from '@radix-ui/themes';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionHeading = ({
  children,
  className = '',
  ...rest
}: SectionHeadingProps) => {
  return (
    <Heading
      size={{
        initial: '7',
        md: '8',
      }}
      mb="5"
      as="h1"
      {...rest}
      className={`text-center ${className}`}
    >
      {children}
    </Heading>
  );
};
