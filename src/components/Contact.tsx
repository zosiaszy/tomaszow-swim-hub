import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    email: "",
    phone: "",
    classType: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Błąd",
        description: "Musisz wyrazić zgodę na przetwarzanie danych osobowych.",
        variant: "destructive",
      });
      return;
    }

    // Here would be the actual form submission logic
    toast({
      title: "Zgłoszenie wysłane!",
      description: "Skontaktujemy się z Tobą w ciągu 24 godzin.",
    });

    // Reset form
    setFormData({
      parentName: "",
      childName: "",
      childAge: "",
      email: "",
      phone: "",
      classType: "",
      message: "",
      consent: false,
    });
  };

  return (
    <section id="kontakt" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kontakt i zapisy
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Skontaktuj się z nami lub zapisz dziecko na zajęcia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Formularz zgłoszeniowy
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="parentName">Imię i nazwisko rodzica *</Label>
                  <Input
                    id="parentName"
                    value={formData.parentName}
                    onChange={(e) =>
                      setFormData({ ...formData, parentName: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="childName">Imię dziecka</Label>
                    <Input
                      id="childName"
                      value={formData.childName}
                      onChange={(e) =>
                        setFormData({ ...formData, childName: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="childAge">Wiek dziecka</Label>
                    <Input
                      id="childAge"
                      type="number"
                      value={formData.childAge}
                      onChange={(e) =>
                        setFormData({ ...formData, childAge: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="classType">Typ zajęć</Label>
                  <Select
                    value={formData.classType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, classType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Wybierz rodzaj zajęć" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dzieci-4-6">Dzieci 4-6 lat</SelectItem>
                      <SelectItem value="dzieci-7-12">Dzieci 7-12 lat</SelectItem>
                      <SelectItem value="mlodziez">Młodzież 13-17 lat</SelectItem>
                      <SelectItem value="dorosli">Dorośli</SelectItem>
                      <SelectItem value="indywidualne">Zajęcia indywidualne</SelectItem>
                      <SelectItem value="sportowe">Trening sportowy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Wiadomość</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    placeholder="Dodatkowe informacje lub pytania..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, consent: checked as boolean })
                    }
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{" "}
                    <a href="/polityka-prywatnosci" className="text-primary hover:underline">
                      Polityką Prywatności
                    </a>
                    . *
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full water-gradient hover:shadow-medium transition-base"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Wyślij zgłoszenie
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8 animate-slide-up">
            {/* Contact Info */}
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Dane kontaktowe
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Telefon</div>
                    <a
                      href="tel:+48123456789"
                      className="text-muted-foreground hover:text-primary transition-base"
                    >
                      +48 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">E-mail</div>
                    <a
                      href="mailto:kontakt@szkolka-plywania.pl"
                      className="text-muted-foreground hover:text-secondary transition-base"
                    >
                      kontakt@szkolka-plywania.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Adres basenu</div>
                    <p className="text-muted-foreground">
                      Basen Miejski
                      <br />
                      ul. Przykładowa 12
                      <br />
                      97-200 Tomaszów Mazowiecki
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-card rounded-xl p-4 shadow-soft">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Mapa Google Maps</p>
                  <p className="text-sm mt-1">(iframe do osadzenia)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
