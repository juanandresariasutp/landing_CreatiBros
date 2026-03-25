import Link from "next/link";
import { Camera, Instagram, ArrowUpRight, Mail, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cb-dark text-cb-white pt-20 pb-10 border-t border-cb-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-cb-purple/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-5 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="p-2 bg-cb-lavender-light/10 rounded-xl group-hover:bg-cb-purple/20 transition-colors">
                <Camera className="w-7 h-7 text-cb-lavender-light group-hover:text-cb-white transition-colors" />
              </div>
              <span className="font-arsenica text-3xl font-bold tracking-tight">
                Creatibros
              </span>
            </Link>
            <p className="text-cb-white/60 leading-relaxed mb-8 max-w-sm text-lg font-light">
              Inmortalizamos lo que importa. Estudio creativo, fotografía y producción audiovisual de alto impacto.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/creatibros" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-cb-white/10 flex items-center justify-center hover:bg-cb-purple hover:border-cb-purple hover:-translate-y-1 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-cb-white/80 group-hover:text-cb-white" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="col-span-1 md:col-span-3 lg:col-span-3 lg:col-start-6">
            <h4 className="font-arsenica text-xl font-bold mb-6 text-cb-white">Navegación</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="group flex items-center text-cb-white/70 hover:text-cb-white transition-colors font-medium">
                  Inicio
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/portafolio" className="group flex items-center text-cb-white/70 hover:text-cb-white transition-colors font-medium">
                  Portafolio
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/audiovisual" className="group flex items-center text-cb-white/70 hover:text-cb-white transition-colors font-medium">
                  Producción Audiovisual
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/clientes" className="group flex items-center text-cb-white/70 hover:text-cb-white transition-colors font-medium">
                  Servicios para Empresas
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="group flex items-center text-cb-white/70 hover:text-cb-white transition-colors font-medium">
                  Quiénes Somos
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto Directo */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4">
            <h4 className="font-arsenica text-xl font-bold mb-6 text-cb-white">Hablemos</h4>
            <ul className="space-y-5">
              <li>
                <a 
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-start gap-4 p-4 rounded-2xl bg-cb-white/5 border border-cb-white/5 hover:border-cb-purple/50 hover:bg-cb-purple/10 transition-colors group"
                >
                  <div className="p-2 bg-cb-white/10 rounded-lg group-hover:bg-cb-purple/20 transition-colors">
                    <Phone className="w-5 h-5 text-cb-white group-hover:text-cb-lavender-light" />
                  </div>
                  <div>
                    <span className="block text-sm text-cb-white/50 font-medium mb-1">WhatsApp</span>
                    <span className="text-cb-white font-medium">+{process.env.NEXT_PUBLIC_WA_NUMBER}</span>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hola@creatibros.com" 
                  className="flex items-start gap-4 p-4 rounded-2xl bg-cb-white/5 border border-cb-white/5 hover:border-cb-purple/50 hover:bg-cb-purple/10 transition-colors group"
                >
                  <div className="p-2 bg-cb-white/10 rounded-lg group-hover:bg-cb-purple/20 transition-colors">
                    <Mail className="w-5 h-5 text-cb-white group-hover:text-cb-lavender-light" />
                  </div>
                  <div>
                    <span className="block text-sm text-cb-white/50 font-medium mb-1">Email</span>
                    <span className="text-cb-white font-medium">hola@creatibros.com</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-cb-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-cb-white/50">
            &copy; 2026 Juan Andrés Arias. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/politicas-privacidad" className="text-sm text-cb-white/50 hover:text-cb-white transition-colors">Políticas de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
