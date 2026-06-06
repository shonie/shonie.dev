type ButtonVariant = 'solid' | 'outline' | 'link';

type ButtonAsButton = {
  as?: 'button';
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: never;
};

type ButtonAsAnchor = {
  as: 'a';
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: never;
  type?: never;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button({
  children,
  variant = 'outline',
  onClick,
  type,
  as = 'button',
  href,
}: ButtonProps) {
  const cls = `w-btn w-btn--${variant}`;
  if (as === 'a') {
    return (
      <a className={cls} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  );
}
