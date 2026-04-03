import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Users, Target } from "lucide-react";
import { buildImageUrl } from "@/lib/cloudinary";

export const metadata = {
  title: "Nuestros Clientes | Creatibros",
  description: "Descubre las marcas que han confiado en Creatibros para potenciar su presencia con fotografía y video profesional.",
};

const clients = [
  {
    name: "@faroles.plaza",
    type: "Mall de Comidas",
    category: "Gastronomía",
    description: "Los mejores espacios gastronómicos reunidos en un solo lugar. Capturamos la esencia del sabor.",
    image: buildImageUrl("", "faroles.jpg"),
  },
  {
    name: "@zabroxoeloriginal",
    type: "Restaurante",
    category: "Gastronomía",
    description: "Cocina auténtica con un toque especial. Cada plato es una obra maestra visual.",
    image: buildImageUrl("", "zabroxo.png"),
  },
  {
    name: "@dulcettecolombia",
    type: "Tortas y Postres",
    category: "Gastronomía",
    description: "Dulzura hecha arte. Cada postre merece ser fotografiado y compartido.",
    image: buildImageUrl("", "dulcette.jpg"),
  },
  {
    name: "@carrera.riocana",
    type: "Evento Deportivo",
    category: "Deportes",
    description: "La adrenalina y el espíritu competitivo capturados en cada fotograma.",
    image: buildImageUrl("", "carrera.jpg"),
  },
  {
    name: "@lucho.entrenador",
    type: "Personal Trainer",
    category: "Deportes",
    description: "Transformación y disciplina. El viaje del fitness merecía ser documentado.",
    image: buildImageUrl("", "lucho.jpg"),
  },
  {
    name: "@correcaminos.viajes",
    type: "Agencia de Viajes",
    category: "Viajes y Turismo",
    description: "Destinos soñados hechos accesibles. Inspiramos viajes a través de imágenes.",
    image: buildImageUrl("", "correcaminos.jpg"),
  },
  {
    name: "@bran.medinatattoo",
    type: "Tattoos Store",
    category: "Tatuajes y Arte",
    description: "Arte tatuado. Cada diseño es una historia que merece ser retratada perfectamente.",
    image: buildImageUrl("", "bran-tattoo.jpg"),
  },
  {
    name: "@_aeternum_official",
    type: "Boutique",
    category: "Tienda de Ropa",
    description: "Moda y elegancia redefinida. Cada pieza brilla con nuestro toque visual.",
    image: buildImageUrl("", "aeternum.jpg"),
  },
];

export default function ClientesPage() {
  const clientesHeroBg = buildImageUrl("", "hero-clientes.jpg");
  const clientesCtaBgCandidates = [
    buildImageUrl("", "cta-clientes.jpg"),
    buildImageUrl("", "cta-clientes.png"),
    buildImageUrl("", "cta-clientes.webp"),
    buildImageUrl("clientes", "cta-clientes.jpg"),
    buildImageUrl("clientes", "cta-clientes.png"),
    buildImageUrl("clientes", "cta-clientes.webp"),
    buildImageUrl("", "cta-clientes"),
    buildImageUrl("clientes", "cta-clientes"),
  ];

  return (
    <main className="bg-cb-white dark:bg-cb-dark pt-24 min-h-screen text-cb-dark dark:text-cb-white transition-colors duration-300">
      
      {/* 1. Hero Section - Enfoque en Autoridad y Confianza */}
      <section className="relative overflow-hidden border-b border-cb-white/10 min-h-[65vh] lg:min-h-[72vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={clientesHeroBg}
            alt="Clientes Creatibros"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-cb-dark/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center text-cb-white">
          <div className="max-w-4xl mx-auto">
          <p className="text-cb-lavender-light font-semibold tracking-[0.2em] uppercase text-sm mb-6 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-cb-lavender-light"></span>
            Casos de Éxito
            <span className="w-12 h-px bg-cb-lavender-light"></span>
          </p>
          <h1 className="font-arsenica text-5xl md:text-7xl font-bold leading-tight mb-8">
            Marcas que confían en <br className="hidden md:block"/> nuestra <span className="text-cb-lavender-light italic">visión</span>
          </h1>
          <p className="text-xl text-cb-white/90 leading-relaxed max-w-2xl mx-auto mb-10">
            Hemos tenido el privilegio de impulsar marcas locales creando fotografías y videos profesionales que no solo se ven increíbles, sino que <strong>venden y conectan</strong>.
          </p>
          </div>
        </div>
      </section>

      {/* 2. Grid de Empresas Clientes */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-arsenica text-4xl lg:text-5xl font-bold mb-6">Empresas que impulsamos</h2>
          <div className="w-24 h-1 bg-cb-purple rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-cb-navy/30 border border-cb-dark/5 dark:border-white/10 hover:border-cb-purple/50 dark:hover:border-cb-purple/50 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Imagen */}
              <div className="relative aspect-video overflow-hidden bg-cb-dark">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-cb-dark/20 group-hover:bg-cb-dark/10 transition-colors duration-300"></div>
              </div>

              {/* Contenido */}
              <div className="flex-1 flex flex-col p-5">
                {/* Nombre y tipo */}
                <div className="mb-3">
                  <h3 className="font-arsenica text-lg font-bold text-cb-dark dark:text-cb-white mb-1 line-clamp-1">
                    {client.name}
                  </h3>
                  <p className="text-sm font-medium text-cb-dark/70 dark:text-cb-white/70">
                    {client.type}
                  </p>
                </div>

                {/* Descripción */}
                <p className="text-sm text-cb-dark/80 dark:text-cb-white/70 mb-4 line-clamp-2 flex-grow">
                  {client.description}
                </p>

                {/* Badge de categoría */}
                <div className="flex items-center justify-between">
                  <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-cb-purple/15 text-cb-purple dark:bg-cb-purple/20 dark:text-cb-lavender-light">
                    {client.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Sección de Marketing: ¿Por qué invertir en contenido visual? */}
      <section className="bg-cb-navy text-cb-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-arsenica text-4xl lg:text-5xl font-bold mb-6">El impacto del buen contenido</h2>
            <p className="text-cb-lavender-light text-lg max-w-2xl mx-auto">Una estrategia visual liderada por profesionales transforma por completo cómo el mercado percibe tu empresa.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-cb-purple rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-arsenica">Mayor Retención</h3>
              <p className="text-cb-lavender-light/80">
                Los videos profesionales logran captar la atención de tu audiencia en los primeros 3 segundos vitales en redes sociales.
              </p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-cb-purple rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-arsenica">Construye Comunidad</h3>
              <p className="text-cb-lavender-light/80">
                Una estética cuidada y constante genera familiaridad y confianza, convirtiendo seguidores pasivos en clientes fieles.
              </p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-cb-lavender-light rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-cb-dark" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-arsenica text-cb-lavender-light">Incrementa Ventas</h3>
              <p className="text-cb-lavender-light/80">
                Está comprobado: las personas están dispuestas a pagar más por productos y servicios que se presentan con una calidad premium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Final */}
      <section className="relative overflow-hidden pb-20 pt-16 text-center border-t border-cb-lavender-light/20 dark:border-white/10">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: clientesCtaBgCandidates.map((url) => `url(\"${url}\")`).join(", "),
          }}
        >
          <div className="absolute inset-0 bg-cb-dark/85" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-cb-white">
          <h2 className="font-arsenica text-4xl md:text-5xl font-bold mb-8">
            ¿Quieres ser nuestro próximo caso de éxito?
          </h2>
          <Link 
            href="/#contacto" 
            className="inline-flex items-center gap-2 px-10 py-5 bg-cb-purple hover:bg-cb-navy text-white rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(134,132,255,0.4)] text-lg"
          >
            Hablemos de tu proyecto
          </Link>
        </div>
      </section>

    </main>
  );
}