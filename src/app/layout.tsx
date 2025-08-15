import type { Metadata } from "next";
import { Inter, Kumar_One } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const kumarOne = Kumar_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rabat Rentals | Agence de Location de Voiture à Rabat",
  description: "Rabat Rentals - Agence premium de location de voiture à Rabat. Réservez votre véhicule en ligne sur rabatrentals.ma.",
  metadataBase: new URL("https://rabatrentals.ma"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="light" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#111111" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${kumarOne.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
