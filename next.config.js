/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.pokemondb.net',
                port: '',
                pathname: '/artwork/large/**',
            },
            {
                protocol: 'https',
                hostname: 'bulbapedia.bulbagarden.net',
                port: '',
                pathname: '/wiki/**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/pokemon',
                destination: '/',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
