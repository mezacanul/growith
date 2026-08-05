import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Header } from "@/components/layout/header";
import { getAcademiaPageData } from "@/lib/data/academia-page-data";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
  const clientID = "soferp";
  const data = await getAcademiaPageData(clientID);

  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {/* <Header assets={data.assets} /> */}
        {children}
      </body>
    </html>
  );
}
