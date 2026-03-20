import { portfolioCategories } from "@/lib/portfolio-data";
import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { Contact } from "@/components/Contact";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = portfolioCategories.find((c) => c.slug === params.slug);
  if (!category) return { title: "No encontrado" };
  return {
    title: `${category.title} | Portafolio Creatibros`,
    description: category.description,
  };
}

export function generateStaticParams() {
  return portfolioCategories.map((category) => ({
    slug: category.slug,
  }));
}

export default function PortfolioCategoryPage({ params }: { params: { slug: string } }) {
  const category = portfolioCategories.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="bg-cb-white dark:bg-cb-dark pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          href="/portafolio" 
          className="inline-flex items-center gap-2 text-cb-purple hover:text-cb-navy dark:hover:text-cb-lavender-light transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al portafolio principal
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <span className="text-cb-purple font-semibold tracking-wider uppercase text-sm">
          {category.group}
        </span>
        <h1 className="font-arsenica text-4xl md:text-6xl font-bold text-cb-navy dark:text-cb-white mt-4 mb-6">
          {category.title}
        </h1>
      </div>

      <section className="mt-4 border-t border-cb-lavender-light/30 dark:border-cb-white/10 pt-16">
        <PortfolioCarousel 
          title={`Galería de ${category.title}`}
          description={category.description}
          images={category.images} 
        />
      </section>

      <div className="mt-16">
        <Contact />
      </div>
    </main>
  );
}