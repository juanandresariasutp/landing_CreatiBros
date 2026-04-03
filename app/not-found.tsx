import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-cb-white dark:bg-cb-dark min-h-screen flex items-center justify-center px-4 py-20 text-cb-dark dark:text-cb-white transition-colors duration-300">
      <div className="max-w-2xl w-full text-center">
        {/* 404 heading */}
        <div className="mb-8">
          <span className="font-arsenica text-5xl md:text-6xl font-bold text-cb-purple dark:text-cb-lavender-light">404</span>
        </div>

        {/* Main message */}
        <h1 className="font-arsenica text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Página no encontrada
        </h1>
        
        <p className="text-xl md:text-2xl text-cb-dark/70 dark:text-cb-white/75 mb-6 leading-relaxed max-w-lg mx-auto">
          Parece que esta página se fue de sesión de fotos. No pudimos encontrar lo que buscabas.
        </p>

        {/* Decorative line */}
        <div className="flex items-center gap-4 justify-center mb-10">
          <div className="h-px bg-cb-lavender-light/30 dark:bg-cb-white/10 flex-1 max-w-[80px]"></div>
          <span className="text-xs uppercase tracking-[0.2em] text-cb-purple/60 dark:text-cb-purple/50 font-semibold">Error 404</span>
          <div className="h-px bg-cb-lavender-light/30 dark:bg-cb-white/10 flex-1 max-w-[80px]"></div>
        </div>

        {/* CTA Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-cb-purple hover:bg-cb-navy dark:hover:bg-cb-white dark:hover:text-cb-dark text-cb-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <Home className="w-5 h-5" />
          Ir al inicio
        </Link>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-cb-purple rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 left-5 w-60 h-60 bg-cb-lavender-light rounded-full blur-[120px]"></div>
        </div>
      </div>
    </main>
  );
}
