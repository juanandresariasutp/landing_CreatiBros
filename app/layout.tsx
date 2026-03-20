import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
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
  description: "Creatibros es una agencia creativa especializada en fotografía y producción audiovisual para eventos, empresas y emprendedores.",
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
        {children}
      </body>
    </html>
  );
}
