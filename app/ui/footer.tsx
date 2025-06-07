"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleChange);
    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <footer className="bg-white dark:bg-black text-stone-700 dark:text-stone-300 py-10 px-4">
      <div className="container mx-auto text-center">
        {mounted && (
          <div className="mb-8 flex justify-center">
            <Image
              src={isDarkMode ? "/svg/logoFooderDark.svg" : "/svg/logoFooderLight.svg"}
              alt="Logotipo VivaBem Rodapé"
              width={180} // Ajuste conforme necessário
              height={60}  // Ajuste conforme necessário
            />
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-8 mb-8 items-start">
          <div className="text-left md:text-center">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">Entre em Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-start md:justify-center">
                <MapPin className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0" />
                <span>Rua das Flores, 123 – São Paulo/SP</span>
              </div>
              <div className="flex items-center justify-start md:justify-center">
                <Phone className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0" />
                <a href="tel:+5511999990000" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  (11) 99999-0000
                </a>
              </div>
            </div>
          </div>
          <div className="text-left md:text-center md:border-l md:border-stone-300 dark:md:border-stone-700 md:pl-8">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">VivaBem Fisioterapia</h3>
            <p className="text-stone-600 dark:text-stone-400">Cuidando do seu bem-estar com excelência e dedicação. Agende sua avaliação e dê o primeiro passo para uma vida com mais movimento e qualidade.</p>
          </div>
        </div>
        <p className="text-sm text-stone-500 dark:text-stone-400 pt-8 border-t border-stone-200 dark:border-stone-700">
          © {new Date().getFullYear()} VivaBem Fisioterapia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
