import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/layout/header";
import { getAcademiaPageData } from "@/lib/academia-page-data";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Growith | Academia",
  description:
    "Portal de la Academia Growith Business Academy: espacio de trabajo, implementaciones, reuniones y material de trabajo.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getAcademiaPageData();

  return (
    <html lang="es" className={`${montserrat.variable} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bgc-white">
        <Header assets={data.assets} />
        {children}
      </body>
    </html>
  );
}
