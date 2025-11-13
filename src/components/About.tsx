import { Award, Heart, Target, TrendingUp } from "lucide-react";
import instructorImage from "@/assets/instructor.jpg";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Małe grupy",
      description: "Maksymalnie 8 osób w grupie dla indywidualnego podejścia do każdego uczestnika.",
    },
    {
      icon: Award,
      title: "Doświadczeni instruktorzy",
      description: "Nasi instruktorzy posiadają wieloletnie doświadczenie i certyfikaty instruktorskie.",
    },
    {
      icon: Target,
      title: "Różne poziomy",
      description: "Od nauki podstaw pływania po doskonalenie techniki i trening sportowy.",
    },
    {
      icon: TrendingUp,
      title: "Systematyczny rozwój",
      description: "Program nauczania dostosowany do wieku, umiejętności i tempa rozwoju.",
    },
  ];

  return (
    <section id="o-nas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O naszej szkółce
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pasja do pływania i bezpieczeństwo w wodzie – to nas wyróżnia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <img
              src={instructorImage}
              alt="Instruktor z dzieckiem na basenie"
              className="rounded-2xl shadow-strong w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6 animate-slide-up">
            <h3 className="text-3xl font-bold text-foreground">
              Nauka pływania z sercem i profesjonalizmem
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Od ponad 10 lat uczymy dzieci, młodzież i dorosłych pływania w przyjaznej 
              i bezpiecznej atmosferze. Nasza szkółka to miejsce, gdzie każdy czuje się komfortowo 
              w wodzie, niezależnie od wieku czy poziomu zaawansowania.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wierzymy, że nauka pływania to nie tylko umiejętność techniczna, ale przede wszystkim 
              budowanie pewności siebie, zdrowia i radości z aktywności fizycznej. Zajęcia prowadzone 
              są na nowoczesnym basenie w Tomaszowie Mazowieckim.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-base animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full water-gradient flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
