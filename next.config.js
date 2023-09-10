/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com","https://res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/techwithty",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
