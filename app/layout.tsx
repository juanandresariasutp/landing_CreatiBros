import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ThemeProvider } from "@/components/theme-provider";
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
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${arsenicaAlternative.variable} font-sans antialiased text-cb-dark bg-cb-white dark:bg-cb-dark dark:text-cb-white transition-colors duration-300 relative overflow-x-hidden min-h-screen flex flex-col`}
      >
        {/* Global Aurora Background */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Dark Mode Aurora */}
          <div className="hidden dark:block absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-[0.15] mix-blend-screen">
            <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] bg-cb-blue rounded-full filter blur-[150px] animate-aurora"></div>
            <div className="absolute top-1/3 right-1/4 w-[35%] h-[45%] bg-[#4f46e5] rounded-full filter blur-[180px] animate-aurora-reverse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-[45%] h-[40%] bg-[#2563eb] rounded-full filter blur-[200px] animate-aurora"></div>
          </div>
          
          {/* Light Mode Aurora */}
          <div className="dark:hidden absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-[0.4] mix-blend-multiply">
            <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] bg-blue-100 rounded-full filter blur-[120px] animate-aurora"></div>
            <div className="absolute top-1/3 right-1/4 w-[35%] h-[45%] bg-indigo-100 rounded-full filter blur-[140px] animate-aurora-reverse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-[45%] h-[40%] bg-cyan-100 rounded-full filter blur-[120px] animate-aurora"></div>
          </div>
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
