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

}

module.exports = nextConfig
