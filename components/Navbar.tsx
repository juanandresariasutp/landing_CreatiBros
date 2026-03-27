"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Camera, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { portfolioCategories } from "@/lib/portfolio-data";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Portafolio", href: "/portafolio", hasDropdown: true },
  { name: "Audiovisual", href: "/audiovisual" },
  { name: "Quiénes Somos", href: "/nosotros" },
  { name: "Clientes", href: "/clientes" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const pathname = usePathname();
  const isHomeTop = pathname === "/" && !isScrolled;
  const phoneNumber = process.env.NEXT_PUBLIC_WA_NUMBER || "";
  const waText = "Hola, me gustaría obtener más información sobre sus servicios.";
  const whatsappUrl = phoneNumber
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waText)}`
    : "/#contacto";
  const isWhatsappLink = whatsappUrl.startsWith("https://wa.me/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const eventos = portfolioCategories.filter((c) => c.group === "Eventos");
  const servicios = portfolioCategories.filter((c) => c.group === "Servicios Profesionales");

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-cb-white/90 dark:bg-cb-dark/90 backdrop-blur-md shadow-sm py-4"
          : isHomeTop
            ? "bg-cb-dark/25 backdrop-blur-[2px] py-6"
            : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Camera className="w-10 h-10 text-cb-purple transition-transform duration-300 group-hover:scale-110" />
            <span className={cn(
              "font-arsenica text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-cb-purple",
              isHomeTop ? "text-cb-white" : "text-cb-dark dark:text-cb-white"
            )}>
              Creatibros
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              // Determina si esta es la ruta activa. Maneja tanto matching exacto como subrutas (ej: /portafolio/bodas)
              const isActive = link.href === "/" 
                ? pathname === "/" 
                : pathname.startsWith(link.href.replace(/#.*$/, ''));

              return (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div className="flex items-center gap-1 cursor-pointer py-2 px-1">
                    <Link
                      href={link.href}
                      className={cn(
                        "relative text-base lg:text-[1.05rem] font-medium transition-all duration-300",
                        isActive
                          ? (isHomeTop ? "text-cb-lavender-light" : "text-cb-purple dark:text-cb-white")
                          : (isHomeTop
                            ? "text-cb-white/90 group-hover:text-cb-lavender-light"
                            : "text-cb-dark/80 dark:text-cb-white/80 group-hover:text-cb-purple dark:group-hover:text-cb-white")
                      )}
                    >
                      {link.name}
                      <span className={cn(
                        "absolute left-0 -bottom-1 h-0.5 bg-cb-purple transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}></span>
                    </Link>
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-300 group-hover:rotate-180",
                      isActive
                        ? (isHomeTop ? "text-cb-lavender-light" : "text-cb-purple dark:text-cb-white")
                        : (isHomeTop
                          ? "text-cb-white/75 group-hover:text-cb-lavender-light"
                          : "text-cb-dark/50 dark:text-cb-white/50 group-hover:text-cb-purple dark:group-hover:text-cb-white")
                    )} />
                    
                    {/* Dropdown Menu modificado con PUENTE INVISIBLE para evitar cierre al mover el ratón */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[500px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                      <div className="relative bg-cb-white/95 dark:bg-cb-dark/95 backdrop-blur-xl border border-cb-lavender-light/30 dark:border-cb-white/10 rounded-2xl shadow-xl p-6 flex gap-8">
                        {/* THE FIX: Puente invisible rellenando el hueco entre el botón y el menù para q no pierda el hover */}
                        <div className="absolute -top-6 left-0 w-full h-8 bg-transparent"></div>
                        
                        <div className="absolute -top-[9px] left-1/2 -translate-x-1/2 w-4 h-4 bg-cb-white/95 dark:bg-cb-dark/95 border-l border-t border-cb-lavender-light/30 dark:border-cb-white/10 rotate-45 pointer-events-none"></div>
                        
                        <div className="flex-1">
                          <h4 className="font-arsenica font-bold text-cb-dark dark:text-cb-white border-b border-cb-lavender-light/30 dark:border-cb-white/10 pb-2 mb-3 text-lg">Eventos</h4>
                          <ul className="space-y-2">
                            {eventos.map(item => (
                              <li key={item.slug}>
                                <Link href={`/portafolio/${item.slug}`} className="block text-cb-dark/70 dark:text-cb-white/70 hover:text-cb-purple dark:hover:text-cb-purple transition-colors py-1 text-sm font-medium">
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex-1 border-l border-cb-lavender-light/30 dark:border-cb-white/10 pl-8">
                          <h4 className="font-arsenica font-bold text-cb-dark dark:text-cb-white border-b border-cb-lavender-light/30 dark:border-cb-white/10 pb-2 mb-3 text-lg">Servicios</h4>
                          <ul className="space-y-2">
                            {servicios.map(item => (
                              <li key={item.slug}>
                                <Link href={`/portafolio/${item.slug}`} className="block text-cb-dark/70 dark:text-cb-white/70 hover:text-cb-purple dark:hover:text-cb-purple transition-colors py-1 text-sm font-medium">
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "relative py-2 text-base lg:text-[1.05rem] font-medium transition-all duration-300 hover:-translate-y-0.5 inline-block",
                      isActive
                        ? (isHomeTop ? "text-cb-lavender-light" : "text-cb-purple dark:text-cb-white")
                        : (isHomeTop
                          ? "text-cb-white/90 group-hover:text-cb-lavender-light"
                          : "text-cb-dark/80 dark:text-cb-white/80 group-hover:text-cb-purple dark:group-hover:text-cb-white")
                    )}
                  >
                    {link.name}
                    <span className={cn(
                      "absolute left-0 bottom-0 h-0.5 bg-cb-purple transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}></span>
                  </Link>
                )}
              </div>
            )})}
            <div className={cn(
              "flex items-center gap-5 border-l pl-5",
              isHomeTop ? "border-cb-white/25" : "border-cb-dark/10 dark:border-cb-white/10"
            )}>
              <ThemeToggle />
              <a
                href={whatsappUrl}
                target={isWhatsappLink ? "_blank" : undefined}
                rel={isWhatsappLink ? "noopener noreferrer" : undefined}
                className="bg-cb-purple hover:bg-cb-navy dark:hover:bg-cb-white dark:hover:text-cb-dark text-cb-white px-7 py-3 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 shadow-md"
              >
                Contacto
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button & Theme toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className={cn(
                "p-2 hover:text-cb-purple transition-colors",
                isHomeTop ? "text-cb-white" : "text-cb-dark dark:text-cb-white"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full max-h-[80vh] overflow-y-auto bg-cb-white dark:bg-cb-dark border-t border-cb-lavender-light dark:border-cb-white/10 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = link.href === "/" 
              ? pathname === "/" 
              : pathname.startsWith(link.href.replace(/#.*$/, ''));

            return (
            <div key={link.name} className="flex flex-col">
              {link.hasDropdown ? (
                <>
                  <div className="flex justify-between items-center p-2 cursor-pointer text-base font-medium transition-colors" onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}>
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)} 
                      className={cn(
                        "flex-1",
                        isActive ? "text-cb-purple dark:text-cb-white font-semibold" : "text-cb-dark dark:text-cb-white hover:text-cb-purple"
                      )}
                    >
                      {link.name}
                    </Link>
                    <ChevronDown className={cn("w-5 h-5 transition-transform", mobilePortfolioOpen && "rotate-180", isActive ? "text-cb-purple dark:text-cb-white" : "")} />
                  </div>
                  {mobilePortfolioOpen && (
                    <div className="pl-6 pr-2 py-2 flex flex-col gap-4 bg-cb-lavender-light/10 dark:bg-white/5 rounded-xl mt-1">
                      <div>
                        <span className="text-sm font-bold text-cb-dark/50 dark:text-cb-white/50 uppercase tracking-wider mb-2 block">Eventos</span>
                        <div className="flex flex-col gap-2">
                          {eventos.map(item => (
                            <Link key={item.slug} href={`/portafolio/${item.slug}`} className="text-sm font-medium text-cb-dark/80 dark:text-cb-white/80 hover:text-cb-purple" onClick={() => setIsOpen(false)}>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-bold text-cb-dark/50 dark:text-cb-white/50 uppercase tracking-wider mb-2 block">Servicios</span>
                        <div className="flex flex-col gap-2">
                          {servicios.map(item => (
                            <Link key={item.slug} href={`/portafolio/${item.slug}`} className="text-sm font-medium text-cb-dark/80 dark:text-cb-white/80 hover:text-cb-purple" onClick={() => setIsOpen(false)}>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "text-base font-medium p-2",
                    isActive ? "text-cb-purple dark:text-cb-white font-semibold" : "text-cb-dark dark:text-cb-white hover:text-cb-purple dark:hover:text-cb-purple"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          )})}
          <a
            href={whatsappUrl}
            target={isWhatsappLink ? "_blank" : undefined}
            rel={isWhatsappLink ? "noopener noreferrer" : undefined}
            className="bg-cb-purple hover:bg-cb-navy text-cb-white px-5 py-3 rounded-md text-center text-base font-medium mt-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contáctanos
          </a>
        </div>
      )}
    </header>
  );
}
