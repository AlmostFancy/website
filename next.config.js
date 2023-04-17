/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/mint',
                destination: '/mint/the-nfts',
            },
            {
                source: '/manifest',
                destination: '/manifest/vision-not-roadmap',
            },
        ];
    },
};

module.exports = nextConfig;
