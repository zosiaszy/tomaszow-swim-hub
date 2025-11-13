import { Award, Heart, Target, TrendingUp } from "lucide-react";
import instructorImage from "@/assets/realistic-instructor.jpg";

const About = () => {
  const features = [
    { icon: Heart, title: "Małe grupy", description: "Maksymalnie 8 osób w grupie dla indywidualnego podejścia." },
    { icon: Award, title: "Doświadczeni instruktorzy", description: "Wieloletnie doświadczenie i certyfikaty." },
    { icon: Target, title: "Różne poziomy", description: "Od podstaw po doskonalenie techniki." },
    { icon: TrendingUp, title: "Systematyczny rozwój", description: "Program dostosowany do wieku i umiejętności." },
  ];

  return (
    <section id="o-nas" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">O naszej szkółce</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">Pasja do pływania i bezpieczeństwo w wodzie</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <img src={instructorImage} alt="Instruktor" className="rounded-2xl shadow-strong w-full h-[400px] object-cover hover:scale-[1.02] transition-bounce" />
          </div>
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-3xl font-bold text-foreground">Nauka pływania z sercem i profesjonalizmem</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">Od ponad 10 lat uczymy w przyjaznej atmosferze.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-strong transition-bounce hover:scale-105">
              <div className="w-16 h-16 rounded-full water-gradient flex items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
