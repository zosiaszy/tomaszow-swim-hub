import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Classes />
        <Schedule />
        <Testimonials />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
