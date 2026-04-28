/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'haaqtnq6favvrbuh.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default config;
