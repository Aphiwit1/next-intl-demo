/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
    output: 'export',
    images: { unoptimized: false },
    async redirects() {
        return [
          {
            source: '/about',
            destination: '/',
            permanent: true,
          },
          {
            source: '/contact',
            destination: '/en/contact',
            permanent: true,
          },
        ]
      },
}

// module.exports = withNextIntl({});
// module.exports = nextConfig


module.exports = withNextIntl(nextConfig);