import {
  Section as RadixSection,
  SectionProps as RadixSectionProps,
} from '@radix-ui/themes';

interface SectionProps extends RadixSectionProps {
  className?: string;
}

export const Section = ({
  children,
  className = '',
  ...props
}: SectionProps) => {
  return (
    <RadixSection
      className={`snap-start snap-always h-screen flex flex-col justify-center items-center ${className}`}
      {...props}
    >
      {children}
    </RadixSection>
  );
};
