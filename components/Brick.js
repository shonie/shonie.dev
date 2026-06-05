import { shonieBrick } from "@/lib/brick-logo";

export default function Brick({ size = 24, fg = "#000", bg = "#fff" }) {
  return (
    <span
      className="w-brick"
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: shonieBrick({ finish: "solid", fg, bg }) }}
    />
  );
}
