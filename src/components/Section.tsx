import {
  Section as RadixSection,
  SectionProps as RadixSectionProps,
  Box,
} from '@radix-ui/themes';
import { HEADER_HEIGHT } from './Header';

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
      pt={HEADER_HEIGHT}
      pb="0"
      className={`snap-start snap-always h-screen flex flex-col justify-center items-center ${className}`}
      {...props}
    >
      <Box flexGrow="1">{children}</Box>
    </RadixSection>
  );
};
