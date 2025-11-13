import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const MapSection = () => {
  // Współrzędne Tomaszowa Mazowieckiego
  const tomaszowLat = 51.5311;
  const tomaszowLng = 20.0158;
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Jak do nas trafić?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Znajdź nas w centrum Tomaszowa Mazowieckiego
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map */}
          <div className="lg:col-span-3 animate-slide-up">
            <div className="bg-card rounded-2xl overflow-hidden shadow-strong border-2 border-border h-[500px]">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.5!2d${tomaszowLng}!3d${tomaszowLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMxJzUyLjAiTiAyMMKwMDAnNTcuMyJF!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja basenu w Tomaszowie Mazowieckim"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 animate-slide-up">
            <div className="bg-card rounded-2xl p-8 shadow-strong border-2 border-primary/20">
              <div className="w-16 h-16 rounded-full water-gradient flex items-center justify-center mb-6 animate-float">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Basen Miejski
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Adres</div>
                    <p className="text-muted-foreground">
                      ul. Przykładowa 12
                      <br />
                      97-200 Tomaszów Mazowiecki
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Telefon</div>
                    <a
                      href="tel:+48123456789"
                      className="text-muted-foreground hover:text-secondary transition-base"
                    >
                      +48 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">E-mail</div>
                    <a
                      href="mailto:kontakt@szkolka-plywania.pl"
                      className="text-muted-foreground hover:text-accent transition-base"
                    >
                      kontakt@szkolka-plywania.pl
                    </a>
                  </div>
                </div>
              </div>

              <Button
                className="w-full mt-6 water-gradient hover:shadow-glow transition-bounce"
                asChild
              >
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${tomaszowLat},${tomaszowLng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="mr-2 h-5 w-5" />
                  Nawiguj do nas
                </a>
              </Button>
            </div>

            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-6 border-2 border-primary/20">
              <h4 className="font-bold text-foreground mb-3">Godziny otwarcia</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Poniedziałek - Piątek:</span>
                  <span className="font-semibold text-foreground">15:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sobota:</span>
                  <span className="font-semibold text-foreground">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Niedziela:</span>
                  <span className="font-semibold text-foreground">Zamknięte</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
