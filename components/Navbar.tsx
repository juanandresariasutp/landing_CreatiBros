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
  { name: "Quiénes Somos", href: "/#quienes-somos" },
  { name: "Clientes", href: "/#clientes" },
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
          ? "bg-cb-white/90 dark:bg-cb-dark/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 group">
            <Camera className="w-8 h-8 text-cb-purple" />
            <span className="font-arsenica text-2xl font-bold text-cb-navy dark:text-cb-white tracking-tight">
              Creatibros
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-cb-dark dark:text-cb-white/80 hover:text-cb-purple dark:hover:text-cb-purple transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 border-l pl-4 border-cb-dark/10 dark:border-cb-white/10">
              <ThemeToggle />
              <Link
                href="/#contacto"
                className="bg-cb-purple hover:bg-cb-navy text-cb-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
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
