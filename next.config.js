/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/public/:path*', // Redirige toutes les requêtes à la racine vers le dossier public
            },
        ]
    },
    async redirects() {
        return [
            {
                source: '/:path*.html',
                destination: '/',
                permanent: true,
            }
        ]
    },
    reactStrictMode: true,
    swcMinify: true,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value:
                            "default-src 'self' 'unsafe-inline' https://acabou.veagle.fr;",
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'https://acabou.veagle.fr',
                    },
                ],
            },
        ];
    },

}

module.exports = nextConfig
