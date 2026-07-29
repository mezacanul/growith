"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { AcademiaPageAssets } from "@/types/academia-page-data";

const paginas = [
  { title: "Inicio", route: "/" },
  { title: "Material de Trabajo", route: "/material-de-trabajo" },
] as const;

interface HeaderProps {
  assets: AcademiaPageAssets;
}

export function Header({ assets }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 80;
      setScrolled((prev) => (prev !== next ? next : prev));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const timeout = setTimeout(() => setShowContent(true), 200);
      return () => clearTimeout(timeout);
    }
    setShowContent(false);
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full py-5 lg:py-6 z-50",
          "transition-all duration-200",
          scrolled ? "bgc-night shadow-md" : "",
        )}
      >
        <div className="flex w-[90%] mx-auto justify-between items-center text-white">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-6 object-contain"
              src={assets.growithLogo}
              alt="Growith Logo"
            />
          </Link>

          <button
            type="button"
            onClick={toggleMenu}
            className="block lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <span
              className="material-symbols-outlined tc-white cursor-pointer"
              style={{ fontSize: "2.4rem" }}
            >
              menu
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-4" aria-label="Navegación principal">
            {paginas.map((pagina) => (
              <Link key={pagina.title} href={pagina.route} className="cursor-pointer">
                {pagina.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div
        className={cn(
          "fixed top-0 left-0 h-full bgc-night z-50 text-white",
          menuOpen ? "w-full" : "w-0",
          "transition-all duration-200",
        )}
      >
        {showContent && (
          <div
            className={cn(
              "relative w-full h-full p-5",
              "transition-all duration-300",
            )}
          >
            <button
              type="button"
              onClick={toggleMenu}
              className={cn(
                "material-symbols-outlined block lg:hidden tc-white cursor-pointer",
                "absolute top-5 right-5",
              )}
              style={{ fontSize: "2.4rem" }}
              aria-label="Cerrar menú"
            >
              close
            </button>
            <nav className="p-5 w-full h-full flex flex-col gap-4" aria-label="Menú móvil">
              {paginas.map((pagina) => (
                <Link
                  key={pagina.title}
                  href={pagina.route}
                  className="text-xl cursor-pointer"
                  onClick={toggleMenu}
                >
                  {pagina.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
