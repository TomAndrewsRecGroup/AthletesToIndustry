import Image from 'next/image';

const ATI_LOGO = 'https://haaqtnq6favvrbuh.public.blob.vercel-storage.com/Athletes%20To%20Industry%20Option%20A.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const dims = { sm: 36, md: 56, lg: 120 } as const;

export function Logo({ size = 'sm' }: LogoProps) {
  const dim = dims[size];
  return (
    <Image
      src={ATI_LOGO}
      alt="Athletes To Industry"
      width={dim}
      height={dim}
      className="object-contain"
      priority={size === 'sm'}
    />
  );
}
