/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: false },
    async redirects() {
        return [
          {
            source: '/hello',
            destination: '/en/hello',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
