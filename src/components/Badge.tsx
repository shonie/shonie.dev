import {
  Badge as RadixBadge,
  BadgeProps as RadixBadgeProps,
} from '@radix-ui/themes';

export interface BadgeProps extends RadixBadgeProps {
  children: React.ReactNode;
}

export const Badge = ({ children, ...props }: BadgeProps) => {
  return (
    <RadixBadge
      highContrast
      radius="large"
      variant="soft"
      size="3"
      style={{
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
      }}
      {...props}
    >
      {children}
    </RadixBadge>
  );
};
