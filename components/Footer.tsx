import Link from "next/link";
import { Camera, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cb-navy text-cb-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-1">
            <Link href="#" className="flex items-center gap-2 mb-6">
              <Camera className="w-8 h-8 text-cb-lavender-light" />
              <span className="font-arsenica text-2xl font-bold tracking-tight">
                Creatibros
              </span>
            </Link>
            <p className="text-cb-lavender-light/80 leading-relaxed mb-6">
              Inmortalizamos lo que importa. Estudio de fotografía y producción de video creando contenido visual de alto impacto para ti y tu negocio.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cb-white/10 flex items-center justify-center hover:bg-cb-purple transition-colors shrink-0">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cb-white/10 flex items-center justify-center hover:bg-cb-purple transition-colors shrink-0">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cb-white/10 flex items-center justify-center hover:bg-cb-purple transition-colors shrink-0">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="col-span-1">
            <h4 className="font-arsenica text-xl font-bold mb-6">Enlaces</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-cb-lavender-light/80 hover:text-cb-lavender-light transition-colors">Inicio</Link></li>
              <li><Link href="#servicios" className="text-cb-lavender-light/80 hover:text-cb-lavender-light transition-colors">Servicios</Link></li>
              <li><Link href="#portafolio" className="text-cb-lavender-light/80 hover:text-cb-lavender-light transition-colors">Portafolio</Link></li>
              <li><Link href="#quienes-somos" className="text-cb-lavender-light/80 hover:text-cb-lavender-light transition-colors">Quiénes Somos</Link></li>
              <li><Link href="#contacto" className="text-cb-lavender-light/80 hover:text-cb-lavender-light transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto Directo */}
          <div className="col-span-1">
            <h4 className="font-arsenica text-xl font-bold mb-6">Contacto</h4>
            <ul className="space-y-3">
              <li className="text-cb-lavender-light/80">
                <span className="block text-sm text-cb-lavender-light/50 mb-1">WhatsApp</span>
                +{process.env.NEXT_PUBLIC_WA_NUMBER}
              </li>
              <li className="text-cb-lavender-light/80">
                <span className="block text-sm text-cb-lavender-light/50 mb-1">Email</span>
                hola@creatibros.com
              </li>
              <li className="text-cb-lavender-light/80">
                <span className="block text-sm text-cb-lavender-light/50 mb-1">Horario</span>
                Lun - Sáb: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-cb-white/10 text-center text-sm text-cb-lavender-light/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {year} Creatibros Agencia Creativa. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cb-lavender-light transition-colors">Políticas de Privacidad</a>
            <a href="#" className="hover:text-cb-lavender-light transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
