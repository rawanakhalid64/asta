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
 
basePath: '/next-blog',
trailingSlash: true

};

export default nextConfig;
