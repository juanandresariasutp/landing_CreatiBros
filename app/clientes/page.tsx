import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Users, Target, Utensils, Activity, Briefcase } from "lucide-react";

export const metadata = {
  title: "Nuestros Clientes | Creatibros",
  description: "Descubre las marcas que han confiado en Creatibros para potenciar su presencia con fotografía y video profesional.",
};

const clientCategories = [
  {
    title: "Gastronomía & Experiencias",
    icon: <Utensils className="w-6 h-6 text-cb-purple" />,
    description: "Hacemos que tus platillos y espacios luzcan irresistibles. Despertamos el apetito de tu audiencia a través de la pantalla.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop",
    clients: [
      { name: "@faroles.plaza", type: "Mall de Comidas" },
      { name: "@zabroxoeloriginal", type: "Restaurante" },
      { name: "@dulcettecolombia", type: "Tortas y Postres" },
    ]
  },
  {
    title: "Deportes & Bienestar",
    icon: <Activity className="w-6 h-6 text-cb-purple" />,
    description: "Capturamos la adrenalina, el esfuerzo y la pasión. Transmitimos energía pura que inspira a tu comunidad a moverse.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop",
    clients: [
      { name: "@carrera.riocana", type: "Evento Deportivo" },
      { name: "@lucho.entrenador", type: "Personal Trainer" },
    ]
  },
  {
    title: "Lifestyle & Servicios",
    icon: <Briefcase className="w-6 h-6 text-cb-purple" />,
    description: "Elevamos la percepción de marca. Mostramos la verdadera calidad de tus servicios para atraer clientes de alto valor.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
    clients: [
      { name: "@correcaminos.viajes", type: "Agencia de Viajes" },
      { name: "@bran.medinatattoo", type: "Tattoos Store" },
      { name: "@_aeternum_official", type: "Boutique" },
    ]
  }
];

export default function ClientesPage() {
  return (
    <main className="bg-cb-white dark:bg-cb-dark pt-24 min-h-screen text-cb-dark dark:text-cb-white transition-colors duration-300">
      
      {/* 1. Hero Section - Enfoque en Autoridad y Confianza */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cb-purple/5 dark:bg-cb-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-cb-purple font-semibold tracking-[0.2em] uppercase text-sm mb-6 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-cb-purple"></span>
            Casos de Éxito
            <span className="w-12 h-px bg-cb-purple"></span>
          </p>
          <h1 className="font-arsenica text-5xl md:text-7xl font-bold leading-tight mb-8">
            Marcas que confían en <br className="hidden md:block"/> nuestra <span className="text-cb-purple italic">visión</span>
          </h1>
          <p className="text-xl text-cb-dark dark:text-cb-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Hemos tenido el privilegio de impulsar marcas locales creando fotografías y videos profesionales que no solo se ven increíbles, sino que <strong>venden y conectan</strong>.
          </p>
        </div>
      </section>

      {/* 2. Sección de Marketing: ¿Por qué invertir en contenido visual? */}
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
              <div className="w-14 h-14 bg-[#D4FF00] rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-cb-dark" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-arsenica text-[#D4FF00]">Incrementa Ventas</h3>
              <p className="text-cb-lavender-light/80">
                Está comprobado: las personas están dispuestas a pagar más por productos y servicios que se presentan con una calidad premium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Categorización de Clientes (Estilo Bento/Grid) */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-arsenica text-4xl lg:text-5xl font-bold mb-6">Empresas que impulsamos</h2>
          <div className="w-24 h-1 bg-cb-purple rounded-full"></div>
        </div>

        <div className="space-y-24">
          {clientCategories.map((category, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Imagen representativa del sector */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                  <Image 
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-cb-navy/40 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cb-navy/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-8 flex items-center gap-3">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-arsenica font-bold text-white shadow-sm">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Lista de clientes */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <p className="text-lg text-cb-dark/90 dark:text-cb-white/70 mb-8 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="grid gap-4">
                  {category.clients.map((client, index) => (
                    <div 
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-white/60 dark:bg-white/5 border border-cb-dark/5 dark:border-white/5 hover:border-cb-purple/50 dark:hover:border-cb-purple/50 hover:bg-cb-purple/5 dark:hover:bg-cb-purple/10 transition-all duration-300"
                    >
                      <span className="font-bold text-lg text-cb-dark dark:text-cb-white">{client.name}</span>
                      <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-cb-purple/10 text-cb-purple mt-2 sm:mt-0 w-fit">
                        {client.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA Final */}
      <section className="bg-cb-white dark:bg-cb-dark pb-20 pt-16 text-center border-t border-cb-lavender-light/20 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-4">
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