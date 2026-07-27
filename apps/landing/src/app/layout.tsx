import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { getLandingPageData } from "@/lib/landing-page-data";
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
  title: "Business Growth | Growith Business Academy",
  description:
    "Programa ejecutivo de nueve meses para empresarios que quieren dirigir su empresa con estrategia, estructura, liderazgo e indicadores.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getLandingPageData();

  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer data={data.footer} />
      </body>
    </html>
  );
}
