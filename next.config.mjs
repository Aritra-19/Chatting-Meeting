/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          has: [
            {
              type: 'cookie',
              key: 'next-auth.session-token',
              value: '^(?!.*)' // match when token is NOT present
            }
          ],
          destination: '/user-auth',
          permanent: false,
        },
        {
          source: '/',
          has: [
            {
              type: 'cookie',
              key: '__Secure-next-auth.session-token',
              value: '^(?!.*)' // for secure environments
            }
          ],
          destination: '/user-auth',
          permanent: false,
        },
      ];
    },
  };
  
  export default nextConfig;
  