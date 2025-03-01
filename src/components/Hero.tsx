
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const Hero: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=2000",
      title: "Building Better Villages Together",
      subtitle: "Excellence in rural construction & development",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=2000",
      title: "Rural Infrastructure Development",
      subtitle: "Creating sustainable solutions for village communities",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=2000", 
      title: "Traditional Meets Modern",
      subtitle: "Blending village heritage with contemporary techniques",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide((activeSlide + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [activeSlide, slides.length]);

  const changeSlide = (index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-[1.5s] ease-in-out",
            index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <div 
            className="absolute inset-0 bg-center bg-cover mask-image-gradient"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 pt-20">
        <div className="max-w-5xl mx-auto animate-fade-in opacity-0 animate-fill-both">
          <div className="inline-block px-4 py-1.5 mb-5 text-xs sm:text-sm font-medium backdrop-blur-sm bg-white/20 rounded-full border border-white/30 animate-fade-in opacity-0 animate-fill-both animate-delay-1">
            <span className="text-white">
              Rural Development. Village Prosperity.
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight sm:leading-tight md:leading-tight lg:leading-tight font-balance">
            {slides[activeSlide].title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8 animate-fade-in opacity-0 animate-fill-both animate-delay-2">
            {slides[activeSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in opacity-0 animate-fill-both animate-delay-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-primary text-white font-medium rounded-md transition-all hover:bg-primary/90 group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-white/30 text-white backdrop-blur-sm bg-secondary/20 font-medium rounded-md transition-all hover:bg-secondary/30 group"
            >
              <span>View Our Projects</span>
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              index === activeSlide 
                ? "bg-primary w-8" 
                : "bg-white/50 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
