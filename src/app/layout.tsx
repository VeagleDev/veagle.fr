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
      </head>
      <PlausibleProvider domain={"veagle.fr"}>
        <body className={manrope.className}>{children}</body>
      </PlausibleProvider>
    </html>
  );
}
