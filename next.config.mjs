/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            hostname: 'i.pinimg.com'
          },
          {
            hostname: "ik.imagekit.io"
          }
        ],
      },
};

export default nextConfig;