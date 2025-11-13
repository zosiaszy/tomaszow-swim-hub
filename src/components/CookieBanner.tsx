import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem("cookieConsent", "necessary");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="container mx-auto">
        <div className="bg-card rounded-xl shadow-strong p-6 border border-border max-w-4xl mx-auto">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-base"
            aria-label="Zamknij"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Cookie className="h-6 w-6 text-primary" />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Ta strona używa plików cookie
              </h3>
              <p className="text-muted-foreground mb-4">
                Używamy plików cookie, aby zapewnić najlepszą jakość korzystania z naszej strony. 
                Klikając "Akceptuję wszystkie", wyrażasz zgodę na przechowywanie wszystkich plików cookie. 
                Możesz wybrać tylko niezbędne pliki cookie lub zarządzać ustawieniami w{" "}
                <a href="/polityka-cookies" className="text-primary hover:underline">
                  Polityce cookies
                </a>
                .
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAcceptAll}
                  className="water-gradient hover:shadow-medium transition-base"
                >
                  Akceptuję wszystkie
                </Button>
                <Button onClick={handleAcceptNecessary} variant="outline">
                  Tylko niezbędne
                </Button>
                <Button variant="ghost" asChild>
                  <a href="/polityka-cookies">Ustawienia</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
