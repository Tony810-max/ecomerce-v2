/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:3000/api/:path*', // Thay đổi URL đích tới máy chủ API của bạn
        },
      ];
    },
  };
  
  export default nextConfig;
  