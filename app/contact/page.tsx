import type { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Athletes To Industry team. Messages route to the right person based on who you are.',
};

export default function ContactPage() {
  return <ContactClient />;
}
