import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Clock, Users, MapPin, Calendar as CalendarIcon, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface ScheduleSlot {
  id: string;
  day: string;
  time: string;
  group: string;
  pool: string;
  availableSpots: number;
  maxSpots: number;
}

const InteractiveSchedule = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const schedule: ScheduleSlot[] = [
    { id: "mon-1", day: "Poniedziałek", time: "16:00 - 16:45", group: "Dzieci 4-6 lat", pool: "Basen mały", availableSpots: 3, maxSpots: 8 },
    { id: "mon-2", day: "Poniedziałek", time: "17:00 - 18:00", group: "Dzieci 7-12 lat", pool: "Basen duży", availableSpots: 2, maxSpots: 8 },
    { id: "mon-3", day: "Poniedziałek", time: "18:15 - 19:15", group: "Młodzież 13-17 lat", pool: "Basen duży", availableSpots: 5, maxSpots: 8 },
    { id: "tue-1", day: "Wtorek", time: "17:00 - 18:00", group: "Dorośli", pool: "Basen duży", availableSpots: 4, maxSpots: 8 },
    { id: "tue-2", day: "Wtorek", time: "18:15 - 19:15", group: "Trening sportowy", pool: "Basen duży", availableSpots: 1, maxSpots: 6 },
    { id: "wed-1", day: "Środa", time: "16:00 - 16:45", group: "Dzieci 4-6 lat", pool: "Basen mały", availableSpots: 6, maxSpots: 8 },
    { id: "wed-2", day: "Środa", time: "17:00 - 18:00", group: "Dzieci 7-12 lat", pool: "Basen duży", availableSpots: 3, maxSpots: 8 },
    { id: "thu-1", day: "Czwartek", time: "17:00 - 18:00", group: "Dorośli", pool: "Basen duży", availableSpots: 7, maxSpots: 8 },
    { id: "fri-1", day: "Piątek", time: "16:00 - 16:45", group: "Dzieci 4-6 lat", pool: "Basen mały", availableSpots: 2, maxSpots: 8 },
    { id: "fri-2", day: "Piątek", time: "17:00 - 18:00", group: "Młodzież 13-17 lat", pool: "Basen duży", availableSpots: 4, maxSpots: 8 },
  ];

  const handleBooking = (slotId: string, slotInfo: ScheduleSlot) => {
    setSelectedSlot(slotId);
    toast({
      title: "Zapisano na zajęcia!",
      description: `Zostałeś zapisany na ${slotInfo.group} w ${slotInfo.day} o ${slotInfo.time}. Skontaktujemy się z Tobą w ciągu 24h.`,
      duration: 5000,
    });
  };

  const getAvailabilityColor = (available: number, max: number) => {
    const percentage = (available / max) * 100;
    if (percentage > 50) return "bg-green-500";
    if (percentage > 20) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <section id="grafik-interaktywny" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Interaktywny grafik zajęć
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wybierz termin i zapisz się online - od razu!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Calendar Selection */}
          <div className="lg:col-span-1 animate-slide-up">
            <div className="bg-card rounded-2xl p-6 shadow-strong border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full water-gradient flex items-center justify-center">
                  <CalendarIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Wybierz datę</h3>
                  <p className="text-sm text-muted-foreground">Sprawdź dostępność</p>
                </div>
              </div>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-2 h-14 hover:border-primary hover:shadow-medium transition-bounce",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    {selectedDate ? format(selectedDate, "PPP", { locale: pl }) : "Wybierz datę zajęć"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                    className="pointer-events-auto"
                    locale={pl}
                  />
                </PopoverContent>
              </Popover>

              <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-xl">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-foreground">
                    <strong>Natychmiastowe potwierdzenie!</strong>
                    <p className="text-muted-foreground mt-1">
                      Po wyborze terminu otrzymasz SMS i email z potwierdzeniem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule Slots */}
          <div className="lg:col-span-2 animate-slide-up">
            <div className="bg-card rounded-2xl p-6 shadow-strong">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Dostępne terminy
              </h3>

              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {schedule.map((slot, index) => (
                  <div
                    key={slot.id}
                    className={cn(
                      "group relative bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl p-5 border-2 transition-bounce hover:shadow-medium hover:scale-[1.02]",
                      selectedSlot === slot.id
                        ? "border-primary bg-primary/5 shadow-glow"
                        : "border-border hover:border-primary/50"
                    )}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Availability indicator */}
                    <div className="absolute top-3 right-3 flex items-center gap-2">
                      <div className={cn("w-3 h-3 rounded-full animate-pulse", getAvailabilityColor(slot.availableSpots, slot.maxSpots))} />
                      <span className="text-sm font-semibold text-foreground">
                        {slot.availableSpots} / {slot.maxSpots} miejsc
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="font-bold text-lg text-foreground mb-2">{slot.day}</div>
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="font-medium">{slot.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4 text-secondary" />
                          <span>{slot.pool}</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="h-5 w-5 text-accent" />
                          <span className="font-semibold text-foreground">{slot.group}</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      className={cn(
                        "w-full transition-bounce",
                        selectedSlot === slot.id
                          ? "bg-green-600 hover:bg-green-700"
                          : "water-gradient hover:shadow-glow"
                      )}
                      onClick={() => handleBooking(slot.id, slot)}
                      disabled={slot.availableSpots === 0}
                    >
                      {slot.availableSpots === 0 ? (
                        "Brak miejsc"
                      ) : selectedSlot === slot.id ? (
                        <>
                          <CheckCircle2 className="mr-2 h-5 w-5" />
                          Zapisano!
                        </>
                      ) : (
                        "Zapisz się teraz"
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing section */}
        <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
          {[
            { type: "Karnet grupowy dzieci", price: "320 zł", sessions: "8 wejść", highlight: false },
            { type: "Karnet grupowy dorośli", price: "400 zł", sessions: "8 wejść", highlight: true },
            { type: "Zajęcia indywidualne", price: "120 zł", sessions: "1 zajęcia", highlight: false },
          ].map((pricing, index) => (
            <div
              key={index}
              className={cn(
                "bg-card rounded-2xl p-8 border-2 transition-bounce hover:scale-105",
                pricing.highlight
                  ? "border-accent shadow-strong water-gradient text-white"
                  : "border-border shadow-soft hover:shadow-medium hover:border-primary/50"
              )}
            >
              {pricing.highlight && (
                <div className="inline-block bg-accent-gradient text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  NAJPOPULARNIEJSZY
                </div>
              )}
              <h4 className={cn("text-xl font-bold mb-2", pricing.highlight ? "text-white" : "text-foreground")}>
                {pricing.type}
              </h4>
              <div className={cn("text-4xl font-bold mb-2", pricing.highlight ? "text-white" : "text-primary")}>
                {pricing.price}
              </div>
              <p className={cn("mb-4", pricing.highlight ? "text-white/90" : "text-muted-foreground")}>
                {pricing.sessions}
              </p>
              <Button
                variant={pricing.highlight ? "secondary" : "outline"}
                className="w-full transition-bounce"
                asChild
              >
                <a href="#kontakt">Kup karnet</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveSchedule;
