import { Heading } from '@radix-ui/themes';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionHeading = ({
  children,
  className = '',
}: SectionHeadingProps) => {
  return (
    <Heading
      size={{
        initial: '4',
        md: '8',
      }}
      mb="5"
      as="h1"
      className={`text-center ${className}`}
    >
      {children}
    </Heading>
  );
};
