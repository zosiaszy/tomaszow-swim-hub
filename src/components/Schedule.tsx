import { Clock, Calendar, MapPin } from "lucide-react";

const Schedule = () => {
  const schedule = [
    { day: "Poniedziałek", time: "16:00 - 16:45", group: "Dzieci 4-6 lat", pool: "Basen mały" },
    { day: "Poniedziałek", time: "17:00 - 18:00", group: "Dzieci 7-12 lat", pool: "Basen duży" },
    { day: "Poniedziałek", time: "18:15 - 19:15", group: "Młodzież 13-17 lat", pool: "Basen duży" },
    { day: "Wtorek", time: "17:00 - 18:00", group: "Dorośli", pool: "Basen duży" },
    { day: "Wtorek", time: "18:15 - 19:15", group: "Trening sportowy", pool: "Basen duży" },
    { day: "Środa", time: "16:00 - 16:45", group: "Dzieci 4-6 lat", pool: "Basen mały" },
    { day: "Środa", time: "17:00 - 18:00", group: "Dzieci 7-12 lat", pool: "Basen duży" },
    { day: "Czwartek", time: "17:00 - 18:00", group: "Dorośli", pool: "Basen duży" },
    { day: "Piątek", time: "16:00 - 16:45", group: "Dzieci 4-6 lat", pool: "Basen mały" },
    { day: "Piątek", time: "17:00 - 18:00", group: "Młodzież 13-17 lat", pool: "Basen duży" },
  ];

  const pricing = [
    { type: "Zajęcia grupowe - dzieci (karnet 8 wejść)", price: "320 zł", perSession: "40 zł/zajęcia" },
    { type: "Zajęcia grupowe - młodzież (karnet 8 wejść)", price: "360 zł", perSession: "45 zł/zajęcia" },
    { type: "Zajęcia grupowe - dorośli (karnet 8 wejść)", price: "400 zł", perSession: "50 zł/zajęcia" },
    { type: "Zajęcia indywidualne (30 min)", price: "80 zł", perSession: "1 zajęcia" },
    { type: "Zajęcia indywidualne (60 min)", price: "120 zł", perSession: "1 zajęcia" },
    { type: "Trening sportowy (karnet miesięczny)", price: "480 zł", perSession: "12 zajęć" },
  ];

  return (
    <section id="cennik" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Grafik i cennik
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sprawdź dostępne terminy i wybierz odpowiedni dla siebie
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Schedule */}
          <div className="animate-slide-up">
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="h-7 w-7 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Grafik zajęć</h3>
              </div>

              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-base"
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-foreground mb-1">{item.day}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:text-right">
                      <div className="font-medium text-foreground">{item.group}</div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground sm:justify-end">
                        <MapPin className="h-3 w-3" />
                        <span>{item.pool}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Uwaga:</strong> Zajęcia indywidualne ustalane są indywidualnie z instruktorem.
                  Skontaktuj się z nami, aby umówić się na termin.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="animate-slide-up">
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-7 w-7 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">Cennik</h3>
              </div>

              <div className="space-y-4">
                {pricing.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-base"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-foreground mb-1">{item.type}</div>
                      <div className="text-sm text-muted-foreground">{item.perSession}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Płatność:</strong> Karnet należy opłacić przed rozpoczęciem zajęć.
                    Akceptujemy płatności gotówką lub przelewem.
                  </p>
                </div>
                <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Ważność karnetu:</strong> Karnet jest ważny 2 miesiące od daty zakupu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
