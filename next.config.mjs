/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    // Canonical host is the plural apex (leadbuyersplaybook.com). The legacy
    // singular domains 308-redirect into it, preserving any existing links.
    return ['leadbuyerplaybook.com', 'www.leadbuyerplaybook.com'].map((host) => ({
      source: '/:path*',
      has: [{ type: 'host', value: host }],
      destination: 'https://leadbuyersplaybook.com/:path*',
      permanent: true,
    }));
  },
};

export default nextConfig;

