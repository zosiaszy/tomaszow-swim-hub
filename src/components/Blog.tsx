import { Calendar, ArrowRight, Facebook, Instagram, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "Dlaczego warto uczyć dzieci pływania od najmłodszych lat?",
      excerpt: "Nauka pływania to nie tylko umiejętność sportowa, ale przede wszystkim kwestia bezpieczeństwa. Dowiedz się, dlaczego warto zacząć jak najwcześniej.",
      date: "15 stycznia 2025",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=500&fit=crop",
    },
    {
      title: "5 korzyści zdrowotnych płynących z regularnego pływania",
      excerpt: "Pływanie to jedna z najzdrowszych form aktywności fizycznej. Zobacz, jakie korzyści przynosi regularne pływanie dla zdrowia.",
      date: "8 stycznia 2025",
      image: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800&h=500&fit=crop",
    },
    {
      title: "Jak przygotować dziecko do pierwszych zajęć na basenie?",
      excerpt: "Pierwsze zajęcia na basenie mogą być stresujące dla dziecka. Przeczytaj nasze wskazówki, jak pomóc dziecku poczuć się komfortowo.",
      date: "2 stycznia 2025",
      image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&h=500&fit=crop",
    },
  ];

  return (
    <section id="aktualnosci" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Aktualności i porady
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Najnowsze wpisy z naszego bloga i social media
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-base animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-base duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Czytaj więcej
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Social Media Section */}
        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Śledź nas w social media
            </h3>
            <p className="text-lg text-muted-foreground">
              Bądź na bieżąco z naszymi aktualnościami, zdjęciami z zajęć i poradami
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#1877f2] hover:bg-[#1877f2]/90 text-white gap-2"
              asChild
            >
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
                Facebook
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white gap-2"
              asChild
            >
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white gap-2"
              asChild
            >
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <Video className="h-5 w-5" />
                TikTok
              </a>
            </Button>
          </div>

          {/* Social Media Feed Placeholder */}
          <div className="mt-8 bg-card/50 rounded-xl p-8 text-center border-2 border-dashed border-border">
            <p className="text-muted-foreground">
              Miejsce na osadzony feed z Facebooka/Instagrama
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              (można dodać iframe z embedem po podpięciu social media)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
