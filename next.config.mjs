/** @type {import('next').NextConfig} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['randomuser.me'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
