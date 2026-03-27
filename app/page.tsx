import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Clients } from "@/components/Clients";
import { Values } from "@/components/Values";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Clients />
      <Values />
      <FAQ />
      <Contact />
    </>
  );
}
