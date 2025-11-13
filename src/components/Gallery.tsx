import { useState } from "react";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-pool.jpg";
import kidsSwimming from "@/assets/kids-swimming.jpg";
import instructorImage from "@/assets/instructor.jpg";
import poolFacility from "@/assets/pool-facility.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: heroImage, alt: "Basen pływacki", title: "Nowoczesny basen" },
    { src: kidsSwimming, alt: "Dzieci na zajęciach", title: "Zajęcia dla dzieci" },
    { src: instructorImage, alt: "Instruktor z dzieckiem", title: "Doświadczeni instruktorzy" },
    { src: poolFacility, alt: "Obiekt pływacki", title: "Profesjonalna infrastruktura" },
    { src: heroImage, alt: "Zajęcia grupowe", title: "Małe grupy zajęciowe" },
    { src: kidsSwimming, alt: "Nauka pływania", title: "Nauka od podstaw" },
  ];

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Galeria
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Zobacz jak wyglądają nasze zajęcia i obiekt
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-strong transition-base cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-base duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-base flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold text-lg">{image.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-accent transition-base"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Powiększony obraz"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
