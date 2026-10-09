import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Services } from "@/components/Services";
import { Spotlight } from "@/components/Spotlight";
import { Team } from "@/components/Team";
import { Ticker } from "@/components/Ticker";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Spotlight />
      <Nav />
      <Hero />
      <Ticker />
      <Services />
      <Work />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
