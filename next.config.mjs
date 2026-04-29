/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'haaqtnq6favvrbuh.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'img-res.pitchero.com',
      },
      {
        protocol: 'https',
        hostname: 'www.lighthousesafety.co.uk',
      },
    ],
  },
};

export default config;
