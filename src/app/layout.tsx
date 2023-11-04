import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import PlausibleProvider from "next-plausible";
import "./globals.scss";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veagle",
  description: "Bienvenue sur la page d'accueil de Veagle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script defer data-domain="veagle.fr" src="https://acabou.veagle.fr/js/script.js"></script>
      </head>
        <body className={manrope.className}>{children}</body>
    </html>
  );
}
