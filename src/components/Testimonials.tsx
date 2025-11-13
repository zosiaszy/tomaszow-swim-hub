import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Anna Kowalska",
      role: "Mama Zosi (6 lat)",
      content: "Moja córka na początku bała się wody, ale dzięki cierpliwości i profesjonalizmowi instruktorów teraz uwielbia pływanie! Po 3 miesiącach zajęć potrafi już pływać samodzielnie. Gorąco polecam!",
      rating: 5,
    },
    {
      name: "Piotr Nowak",
      role: "Tata Kubusia (8 lat)",
      content: "Świetna szkółka! Instruktorzy są bardzo zaangażowani, zajęcia prowadzone w małych grupach. Syn z niecierpliwością czeka na każde zajęcia. Widać postępy już po kilku tygodniach.",
      rating: 5,
    },
    {
      name: "Katarzyna Wiśniewska",
      role: "Mama Oli i Jasia",
      content: "Polecam z całego serca! Moje dzieci uczęszczają na zajęcia od roku. Atmosfera jest świetna, instruktorzy profesjonalni i bardzo cierpliwi. Najlepsza szkółka w Tomaszowie!",
      rating: 5,
    },
    {
      name: "Marek Lewandowski",
      role: "Uczestnik zajęć dla dorosłych",
      content: "W wieku 35 lat postanowiłem nauczyć się pływać. Trochę się obawiałem, ale instruktorzy bardzo profesjonalnie podeszli do tematu. Po 2 miesiącach czuję się pewnie w wodzie. Dziękuję!",
      rating: 5,
    },
    {
      name: "Magdalena Zając",
      role: "Mama Michała (12 lat)",
      content: "Syn trenuje pływanie sportowe i jest bardzo zadowolony z poziomu zajęć. Trenerzy mają duże doświadczenie i potrafią zmotywować do dalszego rozwoju. Poziom treningu jest wysoki!",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="opinie" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Co mówią nasi klienci
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Opinie rodziców i uczestników naszych zajęć
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-strong relative animate-fade-in">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-foreground text-center mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
