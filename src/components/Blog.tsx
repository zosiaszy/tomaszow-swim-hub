import { Calendar, ArrowRight, Facebook, Instagram, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <section id="aktualnosci" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Śledź nas w social media</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-[#1877f2] hover:bg-[#1877f2]/90 text-white gap-2 hover:scale-110 transition-bounce" asChild>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="h-5 w-5" />Facebook</a>
          </Button>
          <Button size="lg" className="bg-gradient-to-r from-[#833ab4] to-[#fcb045] text-white gap-2 hover:scale-110 transition-bounce" asChild>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="h-5 w-5" />Instagram</a>
          </Button>
          <Button size="lg" className="bg-black text-white gap-2 hover:scale-110 transition-bounce" asChild>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><Video className="h-5 w-5" />TikTok</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
