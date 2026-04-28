'use client';

import { useEffect, useState } from 'react';

/**
 * Athlete silhouettes that form from the smoke backdrop using screen blend mode.
 * The blob SVG filter (Gaussian blur + alpha threshold) merges body segments into
 * smooth filled shapes. Screen blending makes the smoke intensify in the silhouette
 * area rather than overlaying a separate white layer.
 */

const W = '#ffe8b0'; // warm amber-cream — matches smoke palette

type Athlete = { sport: string; viewBox: string; el: React.ReactNode };

const Seg = ({
  ox, oy, deg = 0, w, len, r,
}: {
  ox: number; oy: number; deg?: number; w: number; len: number; r?: number;
}) => (
  <g transform={`translate(${ox},${oy}) rotate(${deg})`}>
    <rect x={-w / 2} y={0} width={w} height={len} rx={r ?? w / 2} fill={W} />
  </g>
);

const J = ({ cx, cy, r }: { cx: number; cy: number; r: number }) => (
  <circle cx={cx} cy={cy} r={r} fill={W} />
);

const ATHLETES: Athlete[] = [
  /* ── 1. Rugby — low passing stance ─────────────────────────────────── */
  {
    sport: 'rugby',
    viewBox: '-12 0 224 308',
    el: (
      <>
        <ellipse cx={90} cy={26} rx={19} ry={22} fill={W} />
        <Seg ox={90} oy={46} w={15} len={14} r={5} />
        <path d="M 68,56 C 78,53 110,52 118,56 L 112,148 C 108,152 72,152 68,148 Z" fill={W} />
        <Seg ox={70} oy={62} deg={-68} w={17} len={54} />
        <Seg ox={28} oy={92} deg={-62} w={15} len={46} />
        <ellipse cx={8} cy={118} rx={15} ry={9} transform="rotate(-25,8,118)" fill={W} />
        <Seg ox={118} oy={62} deg={24} w={17} len={52} />
        <Seg ox={132} oy={110} deg={30} w={15} len={44} />
        <Seg ox={80} oy={150} deg={-14} w={24} len={76} r={11} />
        <Seg ox={68} oy={224} deg={-7} w={20} len={68} r={10} />
        <ellipse cx={62} cy={294} rx={25} ry={10} transform="rotate(5,62,294)" fill={W} />
        <Seg ox={108} oy={150} deg={10} w={24} len={76} r={11} />
        <Seg ox={118} oy={224} deg={6} w={20} len={68} r={10} />
        <ellipse cx={122} cy={294} rx={25} ry={10} transform="rotate(-4,122,294)" fill={W} />
        {/* Joint connectors */}
        <J cx={90} cy={56} r={10} />
        <J cx={70} cy={62} r={12} />
        <J cx={118} cy={62} r={12} />
        <J cx={28} cy={92} r={10} />
        <J cx={132} cy={110} r={10} />
        <J cx={80} cy={150} r={14} />
        <J cx={108} cy={150} r={14} />
        <J cx={68} cy={224} r={12} />
        <J cx={118} cy={224} r={12} />
      </>
    ),
  },

  /* ── 2. Football — kicking pose ──────────────────────────────────────── */
  {
    sport: 'football',
    viewBox: '0 0 220 308',
    el: (
      <>
        <ellipse cx={84} cy={26} rx={19} ry={22} fill={W} />
        <Seg ox={84} oy={46} w={15} len={14} r={5} />
        <path d="M 62,56 C 72,53 104,53 112,57 L 108,148 C 104,152 68,152 64,148 Z" fill={W} />
        <Seg ox={64} oy={64} deg={-36} w={17} len={50} />
        <Seg ox={40} oy={106} deg={-26} w={15} len={44} />
        <Seg ox={112} oy={64} deg={30} w={17} len={50} />
        <Seg ox={130} oy={108} deg={22} w={15} len={44} />
        <Seg ox={76} oy={150} deg={-5} w={24} len={78} r={11} />
        <Seg ox={72} oy={226} deg={-3} w={20} len={68} r={10} />
        <ellipse cx={70} cy={296} rx={26} ry={10} fill={W} />
        <Seg ox={100} oy={150} deg={-46} w={24} len={78} r={11} />
        <Seg ox={144} oy={200} deg={-22} w={20} len={68} r={10} />
        <ellipse cx={158} cy={264} rx={26} ry={10} transform="rotate(-14,158,264)" fill={W} />
        <circle cx={164} cy={246} r={18} fill={W} />
        {/* Joint connectors */}
        <J cx={84} cy={54} r={10} />
        <J cx={64} cy={64} r={12} />
        <J cx={112} cy={64} r={12} />
        <J cx={40} cy={106} r={10} />
        <J cx={130} cy={108} r={10} />
        <J cx={76} cy={150} r={14} />
        <J cx={100} cy={150} r={14} />
        <J cx={72} cy={226} r={12} />
        <J cx={144} cy={200} r={12} />
      </>
    ),
  },

  /* ── 3. Tennis — serve, racket overhead ──────────────────────────────── */
  {
    sport: 'tennis',
    viewBox: '0 -28 200 340',
    el: (
      <>
        <ellipse cx={92} cy={34} rx={19} ry={22} fill={W} />
        <Seg ox={92} oy={54} w={15} len={14} r={5} />
        <path d="M 70,62 C 80,58 112,60 120,64 L 116,158 C 112,162 76,162 72,158 Z" fill={W} />
        <Seg ox={120} oy={68} deg={-48} w={17} len={54} />
        <Seg ox={136} oy={32} deg={-42} w={15} len={44} />
        <ellipse cx={148} cy={-10} rx={16} ry={20} transform="rotate(18,148,-10)" fill={W} />
        <Seg ox={72} oy={68} deg={-30} w={17} len={52} />
        <Seg ox={54} oy={114} deg={-20} w={15} len={44} />
        <Seg ox={80} oy={160} deg={-6} w={24} len={78} r={11} />
        <Seg ox={76} oy={236} deg={-4} w={20} len={68} r={10} />
        <ellipse cx={72} cy={306} rx={26} ry={10} fill={W} />
        <Seg ox={108} oy={160} deg={8} w={24} len={78} r={11} />
        <Seg ox={116} oy={236} deg={5} w={20} len={68} r={10} />
        <ellipse cx={120} cy={306} rx={22} ry={9} transform="rotate(-5,120,306)" fill={W} />
        {/* Joint connectors */}
        <J cx={92} cy={62} r={10} />
        <J cx={72} cy={68} r={12} />
        <J cx={120} cy={68} r={12} />
        <J cx={54} cy={114} r={10} />
        <J cx={136} cy={32} r={10} />
        <J cx={80} cy={160} r={14} />
        <J cx={108} cy={160} r={14} />
        <J cx={76} cy={236} r={12} />
        <J cx={116} cy={236} r={12} />
      </>
    ),
  },

  /* ── 4. Sprint — full mid-stride, forward lean ───────────────────────── */
  {
    sport: 'sprint',
    viewBox: '0 0 200 308',
    el: (
      <>
        <ellipse cx={114} cy={24} rx={19} ry={22} fill={W} />
        <Seg ox={114} oy={44} deg={5} w={15} len={14} r={5} />
        <path d="M 90,46 C 100,42 128,46 136,52 L 124,144 C 120,148 88,146 86,142 Z" fill={W} />
        <Seg ox={134} oy={58} deg={32} w={17} len={50} />
        <Seg ox={152} oy={100} deg={26} w={15} len={44} />
        <Seg ox={90} oy={56} deg={-30} w={17} len={50} />
        <Seg ox={70} oy={100} deg={-24} w={15} len={44} />
        <Seg ox={110} oy={146} deg={-30} w={24} len={78} r={11} />
        <Seg ox={92} oy={220} deg={-14} w={20} len={70} r={10} />
        <ellipse cx={86} cy={292} rx={26} ry={10} transform="rotate(5,86,292)" fill={W} />
        <Seg ox={102} oy={146} deg={36} w={24} len={78} r={11} />
        <Seg ox={136} oy={210} deg={56} w={20} len={65} r={10} />
        {/* Joint connectors */}
        <J cx={114} cy={52} r={10} />
        <J cx={90} cy={56} r={12} />
        <J cx={134} cy={58} r={12} />
        <J cx={70} cy={100} r={10} />
        <J cx={152} cy={100} r={10} />
        <J cx={102} cy={146} r={14} />
        <J cx={110} cy={146} r={14} />
        <J cx={92} cy={220} r={12} />
        <J cx={136} cy={210} r={12} />
      </>
    ),
  },

  /* ── 5. Cricket — on-drive, bat raised in follow-through ─────────────── */
  {
    sport: 'cricket',
    viewBox: '0 0 200 308',
    el: (
      <>
        <ellipse cx={100} cy={26} rx={19} ry={22} fill={W} />
        <Seg ox={100} oy={46} w={15} len={14} r={5} />
        <path d="M 76,56 C 86,53 118,53 124,57 L 118,150 C 114,154 80,154 76,150 Z" fill={W} />
        <Seg ox={78} oy={62} deg={-50} w={17} len={52} />
        <Seg ox={48} oy={100} deg={-46} w={15} len={44} />
        <Seg ox={122} oy={64} deg={-30} w={17} len={52} />
        <Seg ox={96} oy={108} deg={-36} w={15} len={44} />
        <g transform="translate(32,142) rotate(-68)">
          <rect x={-6} y={-8} width={12} height={22} rx={4} fill={W} />
          <rect x={-9} y={14} width={18} height={88} rx={4} fill={W} />
        </g>
        <Seg ox={86} oy={152} deg={-8} w={24} len={78} r={11} />
        <Seg ox={80} oy={228} deg={-5} w={20} len={68} r={10} />
        <ellipse cx={76} cy={298} rx={26} ry={10} fill={W} />
        <Seg ox={112} oy={152} deg={12} w={24} len={78} r={11} />
        <Seg ox={122} oy={228} deg={8} w={20} len={68} r={10} />
        <ellipse cx={128} cy={298} rx={26} ry={10} fill={W} />
        {/* Joint connectors */}
        <J cx={100} cy={54} r={10} />
        <J cx={78} cy={62} r={12} />
        <J cx={122} cy={62} r={12} />
        <J cx={48} cy={100} r={10} />
        <J cx={96} cy={108} r={10} />
        <J cx={86} cy={152} r={14} />
        <J cx={112} cy={152} r={14} />
        <J cx={80} cy={228} r={12} />
        <J cx={122} cy={228} r={12} />
      </>
    ),
  },
];

const FADE_MS = 3000;
const HOLD_MS = 6500;

const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

export function SportsSilhouettes() {
  const [idx, setIdx]   = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let alive = true;
    async function run() {
      await sleep(1600);
      while (alive) {
        setShow(true);
        await sleep(FADE_MS + HOLD_MS);
        if (!alive) break;
        setShow(false);
        await sleep(FADE_MS + 700);
        if (!alive) break;
        setIdx(i => (i + 1) % ATHLETES.length);
        await sleep(200);
      }
    }
    run();
    return () => { alive = false; };
  }, []);

  const a = ATHLETES[idx];

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-30 flex items-center"
      style={{ justifyContent: 'flex-end', paddingRight: '26%' }}
    >
      <svg
        viewBox={a.viewBox}
        style={{
          height: '62vh',
          width: 'auto',
          opacity: show ? 0.42 : 0,
          filter: show ? 'none' : 'blur(14px)',
          transition: `opacity ${FADE_MS}ms ease-in-out, filter ${FADE_MS}ms ease-in-out`,
          mixBlendMode: 'screen',
        }}
      >
        <defs>
          {/*
            Blob filter: blurs all segments together then applies an alpha
            threshold — nearby shapes merge into one smooth filled silhouette.
            stdDeviation=7 means segments within ~14px fuse seamlessly.
          */}
          <filter id="silhouette-blob" x="-20%" y="-10%" width="140%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
            />
          </filter>
        </defs>
        <g filter="url(#silhouette-blob)">
          {a.el}
        </g>
      </svg>
    </div>
  );
}
