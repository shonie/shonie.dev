import { shonieBrick } from '@/lib/brick-logo';

interface BrickProps {
  size?: number;
  fg?: string;
  bg?: string;
}

export default function Brick({ size = 24, fg = '#000', bg = '#fff' }: BrickProps) {
  return (
    <span
      className="w-brick"
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: shonieBrick({ finish: 'solid', fg, bg }) }}
    />
  );
}
