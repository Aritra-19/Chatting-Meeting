/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          has: [
            {
              type: 'cookie',
              key: 'next-auth.session-token', // For HTTP
              value: '^(?!.*)' // No token
            },
            {
              type: 'cookie',
              key: '__Secure-next-auth.session-token', // For HTTPS (used by Vercel, etc.)
              value: '^(?!.*)'
            }
          ],
          destination: '/user-auth',
          permanent: false,
        },
      ];
    },
  };
  
  export default nextConfig;
  