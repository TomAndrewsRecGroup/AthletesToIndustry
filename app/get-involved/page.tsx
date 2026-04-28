import type { Metadata } from 'next';
import { GetInvolvedClient } from './GetInvolvedClient';

export const metadata: Metadata = {
  title: 'Get Involved',
  description:
    'Four ways to step in: as an athlete, employer, club or training provider. Learn how each partner role works and how to come in.',
};

export default function GetInvolvedPage() {
  return <GetInvolvedClient />;
}
