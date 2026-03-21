"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Portafolio", href: "/portafolio" },
  { name: "Audiovisual", href: "/audiovisual" },
  { name: "Quiénes Somos", href: "/nosotros" },
  { name: "Clientes", href: "/clientes" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-cb-white/90 dark:bg-cb-dark/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Camera className="w-10 h-10 text-cb-purple transition-transform duration-300 group-hover:scale-110" />
            <span className="font-arsenica text-3xl font-bold text-cb-navy dark:text-cb-white tracking-tight transition-colors duration-300 group-hover:text-cb-purple">
              Creatibros
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative py-2 text-base lg:text-[1.05rem] font-medium text-cb-navy/80 dark:text-cb-white/80 hover:text-cb-purple dark:hover:text-cb-white transition-all duration-300 hover:-translate-y-0.5 group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cb-purple transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <div className="flex items-center gap-5 border-l pl-5 border-cb-dark/10 dark:border-cb-white/10">
              <ThemeToggle />
              <Link
                href="/#contacto"
                className="bg-cb-purple hover:bg-cb-navy dark:hover:bg-cb-white dark:hover:text-cb-navy text-cb-white px-7 py-3 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 shadow-md"
              >
                Contacto
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button & Theme toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 text-cb-dark dark:text-cb-white hover:text-cb-purple transition-colors"
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
        <div className="md:hidden absolute top-full left-0 w-full bg-cb-white dark:bg-cb-dark border-t border-cb-lavender-light dark:border-cb-white/10 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-cb-dark dark:text-cb-white hover:text-cb-purple dark:hover:text-cb-purple p-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contacto"
            className="bg-cb-purple hover:bg-cb-navy text-cb-white px-5 py-3 rounded-md text-center text-base font-medium mt-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contáctanos
          </Link>
        </div>
      )}
    </header>
  );
}
