
import React from 'react';
import { Home, Building, Tool, TrendingUp, Compass, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Residential Construction",
      description: "Custom homes and residential buildings designed with precision and built with excellence."
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Commercial Projects",
      description: "Modern commercial spaces that balance aesthetics, functionality, and cost efficiency."
    },
    {
      icon: <Tool className="h-6 w-6" />,
      title: "Renovations & Remodels",
      description: "Transform existing structures with innovative design and quality craftsmanship."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Real Estate Development",
      description: "End-to-end development services from land acquisition to construction and marketing."
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Architectural Design",
      description: "Creative architectural solutions that combine form, function, and sustainability."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Infrastructure Projects",
      description: "Large-scale infrastructure development with modern engineering techniques."
    }
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-tight">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Comprehensive Construction Solutions</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-balance">
            From concept to completion, we provide a full range of construction services tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card p-6 rounded-xl transition-all duration-500 hover:shadow-lg opacity-0",
                "animate-fade-in animate-fill-both",
                index % 3 === 0 ? "animate-delay-1" : 
                index % 3 === 1 ? "animate-delay-2" : "animate-delay-3"
              )}
            >
              <div className="p-3 mb-5 rounded-md inline-flex bg-primary/10 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
