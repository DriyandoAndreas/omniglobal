/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://s3.tradingview.com;
              frame-src 'self' https://s3.tradingview.com https://www.tradingview-widget.com https://s.tradingview.com;
              style-src 'self' 'unsafe-inline';
            `.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
