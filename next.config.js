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
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname:
                    '/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**',
            },
            {
                protocol: 'https',
                hostname: 'marriland.com',
                port: '',
                pathname:
                    '/wp-content/plugins/marriland-core/images/pokemon/sprites/home/full/**',
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
