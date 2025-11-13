import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Shield, Users, Sparkles } from "lucide-react";
import heroImage from "@/assets/realistic-pool.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Basen pływacki" className="w-full h-full object-cover animate-fade-in" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/15 border-2 border-primary/30 rounded-full px-5 py-2.5 mb-6 shadow-glow animate-bounce-slow">
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary">Profesjonalna nauka pływania w Tomaszowie Mazowieckim</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Nauka pływania dla <span className="text-primary animate-pulse-slow">każdego</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-medium">
            Bezpieczeństwo, zabawa i rozwój w wodzie. Małe grupy, doświadczeni instruktorzy i indywidualne podejście do każdego uczestnika.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="water-gradient hover:shadow-glow hover:scale-105 transition-bounce text-lg shadow-strong" asChild>
              <a href="#grafik-interaktywny">Zapisz się online<ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-2 hover:scale-105 transition-bounce" asChild>
              <a href="#grafik-interaktywny">Zobacz cennik</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 group hover:scale-105 transition-bounce">
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center shadow-medium group-hover:shadow-glow transition-base">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="font-bold text-lg text-foreground">Małe grupy</div>
                <div className="text-sm text-muted-foreground font-medium">Do 8 osób</div>
              </div>
            </div>
            <div className="flex items-center gap-3 group hover:scale-105 transition-bounce">
              <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center shadow-medium group-hover:shadow-glow transition-base">
                <Shield className="h-7 w-7 text-secondary" />
              </div>
              <div>
                <div className="font-bold text-lg text-foreground">Bezpieczeństwo</div>
                <div className="text-sm text-muted-foreground font-medium">Priorytet nr 1</div>
              </div>
            </div>
            <div className="flex items-center gap-3 group hover:scale-105 transition-bounce">
              <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center shadow-medium group-hover:shadow-glow transition-base">
                <Droplets className="h-7 w-7 text-accent" />
              </div>
              <div>
                <div className="font-bold text-lg text-foreground">Doświadczenie</div>
                <div className="text-sm text-muted-foreground font-medium">10+ lat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
