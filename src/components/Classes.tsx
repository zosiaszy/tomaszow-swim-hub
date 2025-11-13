import { Button } from "@/components/ui/button";
import { Baby, Users, Briefcase, User, Trophy } from "lucide-react";

const Classes = () => {
  const classes = [
    {
      icon: Baby,
      title: "Dzieci 4-6 lat",
      description: "Zabawowa nauka pływania dla najmłodszych. Oswajanie z wodą, podstawowe umiejętności pływackie.",
      level: "Początkujący",
      duration: "45 min",
      frequency: "2x w tygodniu",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Users,
      title: "Dzieci 7-12 lat",
      description: "Nauka technik pływackich, doskonalenie stylu, budowanie pewności siebie w wodzie.",
      level: "Początkujący - Średnio zaawansowany",
      duration: "60 min",
      frequency: "2x w tygodniu",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Users,
      title: "Młodzież 13-17 lat",
      description: "Doskonalenie techniki, trening wytrzymałościowy, przygotowanie do pływania sportowego.",
      level: "Średnio zaawansowany - Zaawansowany",
      duration: "60 min",
      frequency: "2-3x w tygodniu",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Briefcase,
      title: "Dorośli",
      description: "Nauka pływania od podstaw lub doskonalenie techniki. Grupy dostosowane do poziomu.",
      level: "Wszystkie poziomy",
      duration: "60 min",
      frequency: "1-2x w tygodniu",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: User,
      title: "Zajęcia indywidualne",
      description: "Spersonalizowany program nauczania, elastyczne godziny, intensywny rozwój umiejętności.",
      level: "Wszystkie poziomy",
      duration: "30-60 min",
      frequency: "Do ustalenia",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Trophy,
      title: "Trening sportowy",
      description: "Zaawansowany trening pływacki dla osób chcących rozwijać się w kierunku sportowym.",
      level: "Zaawansowany",
      duration: "90 min",
      frequency: "3-4x w tygodniu",
      color: "bg-secondary/10 text-secondary",
    },
  ];

  return (
    <section id="zajecia" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nasze zajęcia
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wybierz odpowiedni program dla siebie lub swojego dziecka
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-strong transition-base border border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-full ${classItem.color} flex items-center justify-center mb-4`}>
                <classItem.icon className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {classItem.title}
              </h3>

              <p className="text-muted-foreground mb-4 min-h-[60px]">
                {classItem.description}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Poziom:</span>
                  <span className="font-semibold text-foreground">{classItem.level}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Czas trwania:</span>
                  <span className="font-semibold text-foreground">{classItem.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Częstotliwość:</span>
                  <span className="font-semibold text-foreground">{classItem.frequency}</span>
                </div>
              </div>

              <Button className="w-full" variant="outline" asChild>
                <a href="#kontakt">Zapytaj o miejsce</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
