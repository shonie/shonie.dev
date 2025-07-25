import Image from 'next/image';

interface ImageButtonProps {
  src: string;
  alt: string;
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'tertiary' | 'grey';
  size?: 'sm' | 'md' | 'lg';
}

const colors = {
  primary: 'bg-primary text-on-primary',
  secondary: 'bg-secondary text-on-secondary',
  tertiary: 'bg-tertiary text-on-tertiary',
  grey: 'bg-grey text-on-grey',
};

const sizes = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
};

export const ImageButton = ({
  src,
  alt,
  onClick,
  color = 'grey',
  size = 'md',
}: ImageButtonProps) => {
  return (
    <button
      className={`${colors[color]} p-2 cursor-pointer rounded-sm flex items-center justify-center`}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        className={sizes[size]}
        width={24}
        height={24}
      />
    </button>
  );
};
