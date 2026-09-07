
import { About } from "./_components/About";
import Contact from "./_components/contact";
import FooterDev from "./_components/footerDev";
import Hero from "./_components/hero";
import ProjetosSociaisSection from "./_components/ProjetosSociaisSection";
import Segments from "./_components/segments";
import ServicosCards from "./_components/ServicosCards";
import Testimonials from "./_components/testimonials";
import Whatsapp from "./_components/whatsapp";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjetosSociaisSection />
      <ServicosCards />
      <Segments />
      <Testimonials />
      <Contact />
      <FooterDev />
      <Whatsapp />
    </main>
  )
}
