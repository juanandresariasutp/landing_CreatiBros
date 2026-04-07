import { PortfolioImage } from "@/components/PortfolioCarousel";

export interface PortfolioCategory {
  id: string;
  slug: string;
  title: string;
  description: string;
  group: "Eventos" | "Servicios Profesionales";
  coverImage: string;
  images: PortfolioImage[];
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "1",
    slug: "bodas",
    title: "Bodas",
    description: "Inmortalizando la magia de tu gran día desde los preparativos hasta la fiesta.",
    group: "Eventos",
    coverImage: "boda1.jpg",
    images: [
      { id: 1, folder: "bodas", filename: "boda1.jpg", alt: "Ceremonia al aire libre" },
      { id: 2, folder: "bodas", filename: "boda2.jpg", alt: "Primer baile" },
      { id: 3, folder: "bodas", filename: "boda3.jpg", alt: "Retrato de novios" },
      { id: 4, folder: "bodas", filename: "boda4.jpg", alt: "Detalles de anillos" },
      { id: 5, folder: "bodas", filename: "boda5.jpg", alt: "Preparación de la novia" },
    ]
  },
  {
    id: "2",
    slug: "quince",
    title: "15 Años",
    description: "Acompañamos esta etapa única capturando emociones frescas e irrepetibles.",
    group: "Eventos",
    coverImage: "quince1.jpg",
    images: [
      { id: 1, folder: "quince", filename: "quince1.jpg", alt: "Sesión pre-quince" },
      { id: 2, folder: "quince", filename: "quince2.jpg", alt: "Entrada principal" },
      { id: 3, folder: "quince", filename: "quince3.jpg", alt: "Baile familiar" },
      { id: 4, folder: "quince", filename: "quince4.jpg", alt: "Celebración y amigos" },
    ]
  },
  {
    id: "3",
    slug: "cumpleanos",
    title: "Cumpleaños",
    description: "Celebraciones llenas de alegría y momentos divertidos junto a los tuyos.",
    group: "Eventos",
    coverImage: "cumpleanos1.jpg",
    images: [
      { id: 1, folder: "cumpleanos", filename: "cumpleanos1.jpg", alt: "Pastel y velas" },
      { id: 2, folder: "cumpleanos", filename: "cumpleanos2.jpg", alt: "Regalos y sorpresas" },
      { id: 3, folder: "cumpleanos", filename: "cumpleanos3.jpg", alt: "Festejo en familia" },
    ]
  },
  {
    id: "7",
    slug: "bautizos",
    title: "Bautizos",
    description: "Documentamos el primer sacramento con la delicadeza y ternura que merece.",
    group: "Eventos",
    coverImage: "bautizo1.jpg",
    images: [
      { id: 1, folder: "bautizos", filename: "bautizo1.jpg", alt: "Ceremonia principal" },
      { id: 2, folder: "bautizos", filename: "bautizo2.jpg", alt: "Detalles del ropón" },
      { id: 3, folder: "bautizos", filename: "bautizo3.jpg", alt: "Familia y padrinos" },
    ]
  },
  {
    id: "8",
    slug: "primeras-comuniones",
    title: "Primeras Comuniones",
    description: "Recuerdos imborrables de una de las etapas más hermosas de la niñez.",
    group: "Eventos",
    coverImage: "comunion1.jpg",
    images: [
      { id: 1, folder: "comuniones", filename: "comunion1.jpg", alt: "Retrato del niño/niña" },
      { id: 2, folder: "comuniones", filename: "comunion2.jpg", alt: "Detalles del evento" },
      { id: 3, folder: "comuniones", filename: "comunion3.jpg", alt: "Recepción familiar" },
    ]
  },
  {
    id: "4",
    slug: "retratos",
    title: "Retratos",
    description: "Marca personal, corporativo y artístico. Tu mejor perfil profesional.",
    group: "Servicios Profesionales",
    coverImage: "retrato1.jpg",
    images: [
      { id: 1, folder: "retratos", filename: "retrato1.jpg", alt: "Retrato corporativo" },
      { id: 2, folder: "retratos", filename: "retrato2.jpg", alt: "Sesión marca personal" },
      { id: 3, folder: "retratos", filename: "retrato3.jpg", alt: "Retrato artístico" },
      { id: 4, folder: "retratos", filename: "retrato4.jpg", alt: "Estudio" },
    ]
  },
  {
    id: "5",
    slug: "gastronomia",
    title: "Gastronomía",
    description: "Imágenes que abren el apetito y elevan la identidad de tu restaurante.",
    group: "Servicios Profesionales",
    coverImage: "gastro1.jpg",
    images: [
      { id: 1, folder: "gastronomia", filename: "gastro1.jpg", alt: "Fotografía de menú" },
      { id: 2, folder: "gastronomia", filename: "gastro2.jpg", alt: "Postre gourmet" },
      { id: 3, folder: "gastronomia", filename: "gastro3.jpg", alt: "Bebidas y coctelería" },
      { id: 4, folder: "gastronomia", filename: "gastro4.jpg", alt: "Tomas de cocina" },
    ]
  },
  {
    id: "6",
    slug: "deportes",
    title: "Deportes",
    description: "Capturamos la adrenalina, el esfuerzo y la pasión en cada movimiento.",
    group: "Servicios Profesionales",
    coverImage: "deporte1.jpg",
    images: [
      { id: 1, folder: "deportes", filename: "deporte1.jpg", alt: "Acción en competencia" },
      { id: 2, folder: "deportes", filename: "deporte2.jpg", alt: "Retrato de atleta" },
      { id: 3, folder: "deportes", filename: "deporte3.jpg", alt: "Detalle de equipamiento" },
    ]
  },
  {
    id: "7",
    slug: "boudoir",
    title: "Boudoir",
    description: "Sesiones íntimas y elegantes, celebrando la sensualidad y el amor propio con estilo.",
    group: "Servicios Profesionales",
    coverImage: "boudoir1.jpg",
    images: [
      { id: 1, folder: "boudoir", filename: "boudoir1.jpg", alt: "Retrato íntimo" },
      { id: 2, folder: "boudoir", filename: "boudoir2.jpg", alt: "Juegos de iluminación" },
      { id: 3, folder: "boudoir", filename: "boudoir3.jpg", alt: "Detalles finos" },
    ]
  },
  {
    id: "9",
    slug: "embarazos",
    title: "Embarazos",
    description: "Capturamos los momentos especiales de esta etapa única en la vida.",
    group: "Servicios Profesionales",
    coverImage: "embarazo1.jpg",
    images: [
      { id: 1, folder: "embarazos", filename: "embarazo1.jpg", alt: "Fotografía del embarazo" },
      { id: 2, folder: "embarazos", filename: "embarazo2.jpg", alt: "Juegos de iluminación" },
      { id: 3, folder: "embarazos", filename: "embarazo3.jpg", alt: "Detalles finos" },
    ]
  }
];
