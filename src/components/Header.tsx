import { useState, useEffect } from "react";
import { Menu, X, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "O nas", href: "#o-nas" },
    { name: "Zajęcia", href: "#zajecia" },
    { name: "Grafik i cennik", href: "#cennik" },
    { name: "Opinie", href: "#opinie" },
    { name: "Galeria", href: "#galeria" },
    { name: "Aktualności", href: "#aktualnosci" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-base ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-primary font-bold text-xl group">
            <Waves className="h-8 w-8 group-hover:scale-110 transition-base" />
            <span>Szkółka Pływania</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="water-gradient hover:shadow-medium transition-base"
              asChild
            >
              <a href="#kontakt">Zapisz się</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="water-gradient mt-4" asChild>
              <a href="#kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                Zapisz się
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
