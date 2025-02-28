
import React from 'react';
import { CheckCircle, Clock, Headset, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Advantage {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  const advantages: Advantage[] = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Quality Workmanship",
      description: "Rigorous quality control and attention to detail in every project we undertake."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "On-Time Completion",
      description: "We pride ourselves on delivering projects on schedule without compromising quality."
    },
    {
      icon: <Headset className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Our dedicated team is always available to address your concerns and questions."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Project Tracking",
      description: "Real-time updates and complete transparency throughout the construction process."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] opacity-0 animate-fade-in animate-fill-both">
              <img 
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=1200" 
                alt="Construction site with workers" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black/5 rounded-2xl transform translate-x-4 translate-y-4" />
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-6 shadow-lg max-w-xs opacity-0 animate-fade-in animate-delay-3 animate-fill-both">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">25+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">500+</p>
                  <p className="text-sm text-muted-foreground">Projects Done</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">95%</p>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">100+</p>
                  <p className="text-sm text-muted-foreground">Expert Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4 opacity-0 animate-fade-in animate-fill-both">
            Why Choose Us
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 opacity-0 animate-fade-in animate-delay-1 animate-fill-both">Building Excellence, Delivering Trust</h2>
          
          <p className="text-lg text-muted-foreground mb-8 opacity-0 animate-fade-in animate-delay-2 animate-fill-both">
            SolidBuild combines innovative design, quality materials, and expert craftsmanship to deliver construction projects that exceed expectations. With decades of experience and a commitment to excellence, we've earned our reputation as an industry leader.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className={cn(
                  "flex flex-col opacity-0",
                  "animate-fade-in animate-fill-both",
                  index === 0 ? "animate-delay-3" : 
                  index === 1 ? "animate-delay-4" : 
                  index === 2 ? "animate-delay-5" : "animate-delay-5"
                )}
              >
                <div className="text-primary mb-3">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
