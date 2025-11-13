import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-pool.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Basen pływacki"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Droplets className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Profesjonalna nauka pływania w Tomaszowie Mazowieckim
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Nauka pływania dla <span className="text-primary">każdego</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Bezpieczeństwo, zabawa i rozwój w wodzie. Małe grupy, doświadczeni instruktorzy 
            i indywidualne podejście do każdego uczestnika. Zajęcia dla dzieci, młodzieży i dorosłych.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="water-gradient hover:shadow-strong transition-base text-lg" asChild>
              <a href="#cennik">
                Zobacz grafik i cennik
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-2" asChild>
              <a href="#kontakt">Zapisz dziecko na zajęcia</a>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Małe grupy</div>
                <div className="text-sm text-muted-foreground">Do 8 osób</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Bezpieczeństwo</div>
                <div className="text-sm text-muted-foreground">Priorytet nr 1</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Droplets className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Doświadczenie</div>
                <div className="text-sm text-muted-foreground">10+ lat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
