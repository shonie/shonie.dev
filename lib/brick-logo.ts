// shonie.dev — LEGO-brick logo generator.
// Builds a precise dimetric 2x2 brick mark as an inline SVG string.
// Finishes: "solid" (black silhouette, white separators) and "line" (blueprint outline).

type Point = [number, number];

interface Geo {
  cx: number;
  rx: number;
  ry: number;
  topY: number;
  d: number;
  T: Point;
  R: Point;
  B: Point;
  L: Point;
  Lp: Point;
  Bp: Point;
  Rp: Point;
}

export interface BrickOptions {
  finish?: 'solid' | 'line';
  fg?: string;
  bg?: string;
  sw?: number;
}

function geo(): Geo {
  const cx = 100;
  const rx = 70,
    ry = 35; // top diamond half-w / half-h (2:1 dimetric)
  const topY = 80; // diamond vertical centre
  const d = 56; // body depth
  const T: Point = [cx, topY - ry]; // back corner
  const R: Point = [cx + rx, topY]; // right corner
  const B: Point = [cx, topY + ry]; // front corner
  const L: Point = [cx - rx, topY]; // left corner
  const Lp: Point = [L[0], L[1] + d];
  const Bp: Point = [B[0], B[1] + d];
  const Rp: Point = [R[0], R[1] + d];
  return { cx, rx, ry, topY, d, T, R, B, L, Lp, Bp, Rp };
}

// Point on the top face in (a,b) square coords (a along T->R, b along T->L)
function onTop(g: Geo, a: number, b: number): Point {
  return [g.cx + g.rx * a - g.rx * b, g.topY - g.ry + g.ry * a + g.ry * b];
}

function studCenters(g: Geo): Point[] {
  const s0 = 0.27,
    s1 = 0.73;
  return [
    onTop(g, s0, s0), // back
    onTop(g, s0, s1), // left
    onTop(g, s1, s0), // right
    onTop(g, s1, s1), // front
  ];
}

const STUD_RX = 13,
  STUD_RY = 6.5,
  STUD_H = 12;

function studPath(c: Point): { wall: string; capX: number; capY: number } {
  const [x, y] = c;
  const topYc = y - STUD_H;
  const wall = `M ${x - STUD_RX} ${topYc} L ${x - STUD_RX} ${y} A ${STUD_RX} ${STUD_RY} 0 0 0 ${x + STUD_RX} ${y} L ${x + STUD_RX} ${topYc} Z`;
  return { wall, capX: x, capY: topYc };
}

// opts: { finish:'solid'|'line', fg, bg, sw }
export function shonieBrick(opts?: BrickOptions): string {
  const o = Object.assign({ finish: 'solid', fg: '#000', bg: '#fff', sw: 2 }, opts);
  const g = geo();
  const { T, R, B, L, Lp, Bp, Rp } = g;
  const P = (p: Point) => `${p[0]} ${p[1]}`;
  const studs = studCenters(g);

  let body: string, seps: string, studEls: string;

  if (o.finish === 'line') {
    const stroke = `stroke="${o.fg}" stroke-width="${o.sw}" stroke-linejoin="round" stroke-linecap="round" fill="none"`;
    body = `
      <path d="M ${P(T)} L ${P(R)} L ${P(Rp)} L ${P(Bp)} L ${P(Lp)} L ${P(L)} Z" ${stroke} />
      <path d="M ${P(L)} L ${P(B)} L ${P(R)}" ${stroke} />
      <path d="M ${P(B)} L ${P(Bp)}" ${stroke} />`;
    studEls = studs
      .map((c) => {
        const s = studPath(c);
        return `<path d="${s.wall}" ${stroke} /><ellipse cx="${s.capX}" cy="${s.capY}" rx="${STUD_RX}" ry="${STUD_RY}" ${stroke} />`;
      })
      .join('');
    return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="shonie.dev brick">${body}${studEls}</svg>`;
  }

  // solid silhouette
  body = `
    <path d="M ${P(T)} L ${P(R)} L ${P(B)} L ${P(L)} Z" fill="${o.fg}" />
    <path d="M ${P(L)} L ${P(B)} L ${P(Bp)} L ${P(Lp)} Z" fill="${o.fg}" />
    <path d="M ${P(B)} L ${P(R)} L ${P(Rp)} L ${P(Bp)} Z" fill="${o.fg}" />`;
  seps = `
    <path d="M ${P(L)} L ${P(B)} L ${P(R)}" stroke="${o.bg}" stroke-width="${o.sw}" fill="none" stroke-linejoin="round" stroke-linecap="round" />
    <path d="M ${P(B)} L ${P(Bp)}" stroke="${o.bg}" stroke-width="${o.sw}" fill="none" stroke-linecap="round" />`;
  studEls = studs
    .map((c) => {
      const s = studPath(c);
      return `<g>
      <path d="${s.wall}" fill="${o.fg}" stroke="${o.bg}" stroke-width="${o.sw}" stroke-linejoin="round" />
      <ellipse cx="${s.capX}" cy="${s.capY}" rx="${STUD_RX}" ry="${STUD_RY}" fill="${o.fg}" stroke="${o.bg}" stroke-width="${o.sw}" />
    </g>`;
    })
    .join('');
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="shonie.dev brick">${body}${seps}${studEls}</svg>`;
}
