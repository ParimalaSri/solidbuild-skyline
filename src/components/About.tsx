
import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" 
        aria-hidden="true"
      />
      
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4 opacity-0 animate-fade-in animate-fill-both">
            About SolidBuild
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 opacity-0 animate-fade-in animate-delay-1 animate-fill-both">
            Building Excellence Since 1998
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6 opacity-0 animate-fade-in animate-delay-2 animate-fill-both">
            SolidBuild is a premier construction and real estate development company with over 25 years of industry experience. We specialize in delivering high-quality construction projects across residential, commercial, and infrastructure sectors.
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 opacity-0 animate-fade-in animate-delay-3 animate-fill-both">
            Our team of experienced professionals is committed to excellence in every aspect of our work, from initial design to final construction. We pride ourselves on our attention to detail, innovative solutions, and unwavering commitment to client satisfaction.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 opacity-0 animate-fade-in animate-delay-4 animate-fill-both">
            {[
              "Quality Craftsmanship",
              "Innovative Design",
              "Sustainable Practices",
              "Experienced Team",
              "Value Engineering",
              "Client-Focused Approach"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-5 animate-fill-both">
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md transition-all hover:bg-primary/90"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/3] opacity-0 animate-fade-in animate-fill-both">
            <img 
              src="https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=1200" 
              alt="SolidBuild headquarters" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black/5 rounded-2xl transform -translate-x-4 translate-y-4" />
          
          <div className="absolute -bottom-6 left-6 glass-card rounded-xl p-6 shadow-lg max-w-xs opacity-0 animate-fade-in animate-delay-3 animate-fill-both">
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-muted-foreground">
              To deliver exceptional construction services while maintaining the highest standards of quality, safety, and client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
