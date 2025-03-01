
import React from 'react';
import { Home, Building, Wrench, TrendingUp, Compass, Rocket } from 'lucide-react';
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
      title: "Village Homes",
      description: "Custom rural homes designed with traditional aesthetics and modern amenities."
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Community Centers",
      description: "Gathering spaces that bring villagers together while preserving local heritage."
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Rural Renovations",
      description: "Transform existing structures with respect for traditional craftsmanship."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Village Development",
      description: "Holistic development plans that enhance rural prosperity and quality of life."
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Rural Architecture",
      description: "Designs that blend with the natural landscape and village character."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Infrastructure Projects",
      description: "Roads, water systems, and facilities that connect and empower rural communities."
    }
  ];

  return (
    <section className="section-padding village-pattern">
      <div className="container-tight">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Our Village Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">Rural Development Solutions</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-balance">
            From traditional homes to modern infrastructure, we provide construction services tailored to village needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "rural-container transition-all duration-500 hover:shadow-lg opacity-0",
                "animate-fade-in animate-fill-both",
                index % 3 === 0 ? "animate-delay-1" : 
                index % 3 === 1 ? "animate-delay-2" : "animate-delay-3"
              )}
            >
              <div className="p-3 mb-5 rounded-md inline-flex bg-primary/10 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
