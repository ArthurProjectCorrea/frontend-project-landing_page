"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    // Esta função é chamada quando um link do drawer é clicado.
    // O componente <Link> em si cuidará da navegação.
    // Nós apenas gerenciamos o fechamento do drawer após a rolagem.

    let timeoutId: NodeJS.Timeout | null = null;

    const closeDrawer = () => {
      setIsOpen(false);
    };

    const onScrollEnd = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null; 
      }
      closeDrawer();
      window.removeEventListener('scrollend', onScrollEnd);
    };

    window.addEventListener('scrollend', onScrollEnd, { once: true });

    timeoutId = setTimeout(() => {
      window.removeEventListener('scrollend', onScrollEnd); 
      closeDrawer();
    }, 300); // Ajuste este atraso conforme necessário.
  };

  const controlNavbar = useCallback(() => {
    const currentScrollY = window.scrollY;
    // Não esconder a navbar se o drawer estiver aberto
    if (isOpen) {
      setShowNavbar(true);
      setLastScrollY(currentScrollY);
      return;
    }

    if (currentScrollY > lastScrollY && currentScrollY > 50) { // 50 é uma tolerância para não esconder no topo
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY, isOpen]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);

  return (
    <>
      <nav className={`bg-gray-100 text-black p-4 fixed top-0 left-0 right-0 z-30 transition-transform duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-400  animate-pulse bg-gray-400 rounded-2xl w-40">
            Logo {/* Placeholder para o seu logo */}
          </Link>

          {/* Hamburger Menu for Mobile - Hidden on medium screens and up */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Navigation Links for Desktop - Shown on medium screens and up */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/#hero" className="hover:text-blue-600 transition-colors">
              Início
            </Link>
            <Link href="/#about" className="hover:text-blue-600 transition-colors">
              Sobre
            </Link>
            <Link href="/#services" className="hover:text-blue-600 transition-colors">
              Serviços
            </Link>
            <Link href="/#contact" className="hover:text-blue-600 transition-colors">
              Contato
            </Link>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out z-40
                    ${
                      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      {/* Drawer Menu */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-64 transform bg-gray-100 p-4 shadow-xl transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        hidden={!isOpen}
      >
        <div className="flex justify-between items-center mb-6">
          <span id="drawer-title" className="text-lg font-semibold text-black">
            Menu
          </span>
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none p-1 hover:bg-gray-200 rounded-full"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-2">
          <Link
            href="/#hero"
            className="block py-2 px-4 text-sm text-black hover:bg-gray-200 rounded-md"
            onClick={handleNavLinkClick}
          >
            Início
          </Link>
          <Link
            href="/#about"
            className="block py-2 px-4 text-sm text-black hover:bg-gray-200 rounded-md"
            onClick={handleNavLinkClick}
          >
            Sobre
          </Link>
          <Link
            href="/#services"
            className="block py-2 px-4 text-sm text-black hover:bg-gray-200 rounded-md"
            onClick={handleNavLinkClick}
          >
            Serviços
          </Link>
          <Link
            href="/#contact"
            className="block py-2 px-4 text-sm text-black hover:bg-gray-200 rounded-md"
            onClick={handleNavLinkClick}
          >
            Contato
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
