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
                            "default-src 'self' 'unsafe-inline' 'https://veagle.fr';",
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: "camera=(); battery=(); geolocation=(); microphone=()",
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                ],
            },
        ];
    },

}

module.exports = nextConfig
