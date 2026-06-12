import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Features } from "@/components/site/features";
import { GlobalTrust } from "@/components/site/global-trust";
import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <GlobalTrust />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
