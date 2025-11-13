import { Waves, Facebook, Instagram, Video, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Waves className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">Szkółka Pływania</span>
            </div>
            <p className="text-background/70 mb-4">
              Profesjonalna nauka pływania w Tomaszowie Mazowieckim. 
              Zajęcia dla dzieci, młodzieży i dorosłych. Małe grupy, 
              doświadczeni instruktorzy, bezpieczna atmosfera.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-base flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-base flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-base flex items-center justify-center"
                aria-label="TikTok"
              >
                <Video className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              <li>
                <a href="#o-nas" className="text-background/70 hover:text-primary transition-base">
                  O nas
                </a>
              </li>
              <li>
                <a href="#zajecia" className="text-background/70 hover:text-primary transition-base">
                  Zajęcia
                </a>
              </li>
              <li>
                <a href="#cennik" className="text-background/70 hover:text-primary transition-base">
                  Grafik i cennik
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-background/70 hover:text-primary transition-base">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-background/70 hover:text-primary transition-base">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Informacje prawne</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a
                  href="/polityka-prywatnosci"
                  className="text-background/70 hover:text-primary transition-base"
                >
                  Polityka prywatności
                </a>
              </li>
              <li>
                <a
                  href="/polityka-cookies"
                  className="text-background/70 hover:text-primary transition-base"
                >
                  Polityka cookies
                </a>
              </li>
              <li>
                <a
                  href="/regulamin"
                  className="text-background/70 hover:text-primary transition-base"
                >
                  Regulamin
                </a>
              </li>
            </ul>

            <div className="space-y-2">
              <a
                href="tel:+48123456789"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-base"
              >
                <Phone className="h-4 w-4" />
                <span>+48 123 456 789</span>
              </a>
              <a
                href="mailto:kontakt@szkolka-plywania.pl"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-base"
              >
                <Mail className="h-4 w-4" />
                <span>kontakt@szkolka-plywania.pl</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 text-center text-background/70 text-sm">
          <p>
            © {currentYear} Szkółka Pływania Tomaszów Mazowiecki. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
