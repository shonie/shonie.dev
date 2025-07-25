interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  color: 'primary' | 'secondary' | 'tertiary' | 'grey';
}

const colors = {
  primary: 'bg-primary text-on-primary',
  secondary: 'bg-secondary text-on-secondary',
  tertiary: 'bg-tertiary text-on-tertiary',
  grey: 'bg-grey text-on-grey',
};

export const Button = ({ children, onClick, color }: ButtonProps) => {
  return (
    <button
      className={`${colors[color]} p-2 cursor-pointer rounded-sm hover:brightness-110`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
