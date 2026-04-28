interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-3.5 text-gold text-[11px] tracking-widest3 font-medium mb-6 uppercase">
      <span className="block w-8 h-px bg-gold flex-shrink-0" />
      {children}
    </div>
  );
}
