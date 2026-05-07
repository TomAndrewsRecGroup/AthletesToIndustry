'use client';

import dynamic from 'next/dynamic';

const IrisShader = dynamic(
  () => import('./IrisShader').then((m) => m.IrisShader),
  { ssr: false, loading: () => null },
);

export function IrisShaderLazy() {
  return <IrisShader />;
}
