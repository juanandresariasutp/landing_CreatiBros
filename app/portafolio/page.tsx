import { PortfolioCarousel, PortfolioImage } from "@/components/PortfolioCarousel";
import { Contact } from "@/components/Contact";

export const metadata = {
  title: "Portafolio | Creatibros",
  description: "Explora nuestros trabajos en fotografía de bodas, quince años, retrato, gastronomía y video corporativo.",
};

// Datos fijos (Mock)
const bodasImages: PortfolioImage[] = [
  { id: 1, folder: "bodas", filename: "boda1.jpg", alt: "Ceremonia al aire libre" },
  { id: 2, folder: "bodas", filename: "boda2.jpg", alt: "Primer baile" },
  { id: 3, folder: "bodas", filename: "boda3.jpg", alt: "Retrato de novios" },
  { id: 4, folder: "bodas", filename: "boda4.jpg", alt: "Detalles de anillos" },
  { id: 5, folder: "bodas", filename: "boda5.jpg", alt: "Preparación de la novia" },
];

const quinceImages: PortfolioImage[] = [
  { id: 1, folder: "quince", filename: "quince1.jpg", alt: "Sesión pre-quince" },
  { id: 2, folder: "quince", filename: "quince2.jpg", alt: "Entrada principal" },
  { id: 3, folder: "quince", filename: "quince3.jpg", alt: "Baile familiar" },
  { id: 4, folder: "quince", filename: "quince4.jpg", alt: "Celebración y amigos" },
];

const retratosImages: PortfolioImage[] = [
  { id: 1, folder: "retratos", filename: "retrato1.jpg", alt: "Retrato corporativo" },
  { id: 2, folder: "retratos", filename: "retrato2.jpg", alt: "Sesión marca personal" },
  { id: 3, folder: "retratos", filename: "retrato3.jpg", alt: "Retrato artístico" },
  { id: 4, folder: "retratos", filename: "retrato4.jpg", alt: "Estudio" },
];

const gastronomiaImages: PortfolioImage[] = [
  { id: 1, folder: "gastronomia", filename: "gastro1.jpg", alt: "Fotografía de menú" },
  { id: 2, folder: "gastronomia", filename: "gastro2.jpg", alt: "Postre gourmet" },
  { id: 3, folder: "gastronomia", filename: "gastro3.jpg", alt: "Bebidas y coctelería" },
  { id: 4, folder: "gastronomia", filename: "gastro4.jpg", alt: "Tomas de cocina" },
];

const videoImages: PortfolioImage[] = [
  { id: 1, folder: "video", filename: "video1.jpg", alt: "Detrás de cámaras" },
  { id: 2, folder: "video", filename: "video2.jpg", alt: "Comercial de producto" },
  { id: 3, folder: "video", filename: "video3.jpg", alt: "Reel redes sociales" },
  { id: 4, folder: "video", filename: "video4.jpg", alt: "Cobertura de evento" },
];

export default function PortafolioPage() {
  return (
    <main className="bg-cb-white pt-24 pb-12">
      {/* Cabecera */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <span className="text-cb-purple font-semibold tracking-wider uppercase text-sm">
          Nuestro Trabajo
        </span>
        <h1 className="font-arsenica text-5xl md:text-7xl font-bold text-cb-navy mt-4 mb-6">
          Portafolio
        </h1>
        <p className="text-lg md:text-xl text-cb-dark/80 max-w-2xl mx-auto">
          Un repaso por las historias que hemos ayudado a contar y las marcas que hemos impulsado a través del lente.
        </p>
      </div>

      {/* Sección Eventos - Dividida */}
      <section className="mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="font-arsenica text-4xl font-bold text-cb-navy border-b border-cb-lavender-light pb-4">
            Eventos
          </h2>
        </div>
        
        <PortfolioCarousel 
          title="Bodas" 
          description="Inmortalizando la magia de tu gran día desde los preparativos hasta la fiesta."
          images={bodasImages} 
        />
        
        <PortfolioCarousel 
          title="15 Años" 
          description="Acompañamos esta etapa única capturando emociones frescas e irrepetibles."
          images={quinceImages} 
        />
      </section>

      {/* Otras Categorías */}
      <section className="mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="font-arsenica text-4xl font-bold text-cb-navy border-b border-cb-lavender-light pb-4">
            Servicios Profesionales
          </h2>
        </div>

        <PortfolioCarousel 
          title="Retratos" 
          description="Marca personal, corporativo y artístico. Tu mejor perfil profesional."
          images={retratosImages} 
        />

        <PortfolioCarousel 
          title="Gastronomía" 
          description="Imágenes que abren el apetito y elevan la identidad de tu restaurante."
          images={gastronomiaImages} 
        />

        <PortfolioCarousel 
          title="Producción de Video" 
          description="Piezas audiovisuales con calidad cinematográfica pensadas para conectar."
          images={videoImages} 
        />
      </section>

      {/* CTA final */}
      <div className="mt-24">
        <Contact />
      </div>
    </main>
  );
}
