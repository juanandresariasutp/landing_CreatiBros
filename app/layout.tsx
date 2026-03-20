import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const arsenicaAlternative = Lora({
  subsets: ["latin"],
  variable: "--font-arsenica",
});

export const metadata: Metadata = {
  title: "Creatibros - Agencia Creativa | Fotografía & Video",
  description: "Creatibros es una agencia creativa especializada en fotografía y producción audiovisual para eventos, empresas y emprendedores. Inmortalizamos los momentos que importan.",
  keywords: ["fotografía", "video", "agencia creativa", "bodas", "eventos", "producción audiovisual"],
  openGraph: {
    title: "Creatibros - Agencia Creativa",
    description: "Especialistas en fotografía y producción audiovisual para eventos, marcas y empresas.",
    url: "https://creatibros.vercel.app",
    siteName: "Creatibros",
    images: [
      {
        url: "https://placehold.co/1200x630/e2e8f0/8684FF?text=Creatibros+OG",
        width: 1200,
        height: 630,
        alt: "Creatibros Preview Image",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creatibros - Agencia Creativa",
    description: "Inmortalizamos tus mejores momentos con fotografía y video profesional.",
    images: ["https://placehold.co/1200x630/e2e8f0/8684FF?text=Creatibros+X"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${arsenicaAlternative.variable} font-sans antialiased text-cb-dark bg-cb-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
