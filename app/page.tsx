import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Clients } from "@/components/Clients";
import { Values } from "@/components/Values";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Clients />
      <Values />
      <Contact />
    </>
  );
}
