/** @type {import('next').NextConfig} */
const nextConfig = {
  theme: {
    extend: {
      fontFamily: {
        arabic: ['GE ', 'sans-serif'],
        english: ['optima', 'sans-serif'],
      },
    },
  },

  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;
