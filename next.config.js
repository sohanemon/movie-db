/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ia.media-imdb.com',
      },
      {
        protocol: 'http',
        hostname: 'ia.media-imdb.com',
      },
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
      },
    ],
  },
};

module.exports = nextConfig;
