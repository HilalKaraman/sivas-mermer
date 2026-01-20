import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/iletisim.html',
        destination: '/iletisim', // Yeni sitendeki doğru adres
        permanent: true,
      },
      {
        source: '/sayfalar-1-hakkimizda.html',
        destination: '/hakkimizda', // Yeni sitendeki doğru adres
        permanent: true,
      },
      {
        source: '/urun-1-0-tum_urunlerimiz.html',
        destination: '/urunler', // Yeni sitendeki doğru adres
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
