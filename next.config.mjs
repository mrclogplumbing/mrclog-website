/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/services/jett-blasting",
        destination: "/services/jet-blasting",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
