
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Home, Building, Wrench, TrendingUp, Compass, Rocket, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Home className="h-10 w-10" />,
      title: "Residential Construction",
      description: "We build dream homes tailored to your unique vision and lifestyle needs. From luxury custom homes to multi-family residences, our team handles every aspect of residential construction with precision and care.",
      features: [
        "Custom home building",
        "Multi-family residential developments",
        "Home renovations and additions",
        "Luxury estate construction",
        "Sustainable home building"
      ]
    },
    {
      icon: <Building className="h-10 w-10" />,
      title: "Commercial Projects",
      description: "Our commercial construction services deliver functional, aesthetically pleasing spaces that enhance productivity and create lasting impressions. We understand the unique requirements of different business environments.",
      features: [
        "Office buildings and corporate headquarters",
        "Retail and shopping centers",
        "Restaurants and hospitality venues",
        "Medical facilities and healthcare centers",
        "Industrial buildings and warehouses"
      ]
    },
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "Renovations & Remodels",
      description: "Transform your existing space into something extraordinary. Our renovation and remodeling services breathe new life into properties while preserving their unique character and maximizing their potential.",
      features: [
        "Complete building renovations",
        "Interior remodeling and space optimization",
        "Historic building restoration",
        "Commercial space retrofitting",
        "Energy efficiency upgrades"
      ]
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Real Estate Development",
      description: "From concept to completion, our development team handles every aspect of the process. We identify opportunities, manage risks, and maximize returns to ensure successful real estate ventures.",
      features: [
        "Land acquisition and due diligence",
        "Feasibility studies and market analysis",
        "Project financing and investment structuring",
        "Development planning and execution",
        "Property management services"
      ]
    },
    {
      icon: <Compass className="h-10 w-10" />,
      title: "Architectural Design",
      description: "Our architectural design services combine creativity, functionality, and sustainability to create spaces that inspire. We work closely with clients to understand their vision and bring it to life.",
      features: [
        "Conceptual and schematic design",
        "3D visualization and rendering",
        "Construction documentation",
        "Sustainable design solutions",
        "Interior design services"
      ]
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "Infrastructure Projects",
      description: "We develop critical infrastructure that connects communities and powers progress. Our experienced team handles complex engineering challenges with innovative solutions and meticulous execution.",
      features: [
        "Road and bridge construction",
        "Utility installation and upgrades",
        "Public facilities and municipal buildings",
        "Transportation hubs and terminals",
        "Environmental infrastructure"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-secondary relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" 
            aria-hidden="true"
          />
          <div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" 
            aria-hidden="true"
          />
          
          <div className="container-wide relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4 animate-fade-in">
                Our Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in animate-delay-1">Comprehensive Construction Solutions</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in animate-delay-2">
                From concept to completion, we provide a full range of construction services tailored to your specific needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Detail Section */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="space-y-32">
              {services.map((service, index) => (
                <div key={index} className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                  index % 2 !== 0 && "lg:grid-flow-dense"
                )}>
                  <div className={cn(
                    "space-y-6 animate-fade-in",
                    index % 2 !== 0 && "lg:col-start-2"
                  )}>
                    <div className="p-3 inline-flex rounded-full bg-primary/10 text-primary mb-2">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-3 pt-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center text-primary font-medium hover:underline"
                      >
                        Discuss your project with us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className={cn(
                    "relative animate-fade-in animate-delay-2",
                    index % 2 !== 0 && "lg:col-start-1"
                  )}>
                    <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/3]">
                      <img 
                        src={`https://images.unsplash.com/photo-${index % 6 === 0 ? '1582139793526-928a9521a16e' : 
                          index % 6 === 1 ? '1497366754035-f200968a6e72' :
                          index % 6 === 2 ? '1581578731548-c64695cc6952' :
                          index % 6 === 3 ? '1504307651254-35b724d3dc39' :
                          index % 6 === 4 ? '1556156653-e5a7b3a6ee28' :
                          '1503387762645-592cc58c45a6'}?auto=format&fit=crop&q=80&w=1200`}
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black/5 rounded-2xl transform -translate-x-4 translate-y-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20 bg-secondary">
          <div className="container-tight">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Our Process
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">How We Work</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Our streamlined approach ensures every project progresses smoothly from initial concept to successful completion.
              </p>
            </div>
            
            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>
              
              {[
                {
                  step: "01",
                  title: "Consultation & Planning",
                  description: "We begin with a thorough consultation to understand your vision, requirements, and budget. Our team works with you to develop a comprehensive plan that aligns with your goals."
                },
                {
                  step: "02",
                  title: "Design & Engineering",
                  description: "Our architects and engineers create detailed designs and plans, incorporating your input at every stage. We ensure all designs meet regulatory requirements while maximizing functionality and aesthetics."
                },
                {
                  step: "03",
                  title: "Budgeting & Scheduling",
                  description: "We provide transparent cost estimates and establish a realistic timeline for your project. Our detailed approach to budgeting and scheduling helps prevent unexpected delays and cost overruns."
                },
                {
                  step: "04",
                  title: "Construction & Execution",
                  description: "Our experienced construction teams bring your project to life with precision and attention to detail. We adhere to the highest quality standards and safety protocols throughout the construction process."
                },
                {
                  step: "05",
                  title: "Quality Assurance",
                  description: "We conduct rigorous quality checks at every stage of construction. Our comprehensive quality assurance process ensures that every aspect of your project meets our exacting standards."
                },
                {
                  step: "06",
                  title: "Project Completion & Handover",
                  description: "Once construction is complete, we conduct a final walkthrough with you to ensure everything meets your expectations. We provide all necessary documentation and training before the final handover."
                }
              ].map((process, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "relative grid grid-cols-1 lg:grid-cols-5 items-center mb-16 last:mb-0 animate-fade-in",
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left lg:grid-flow-dense"
                  )}
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className={cn(
                    "mb-6 lg:mb-0",
                    index % 2 === 0 ? "lg:col-span-2" : "lg:col-span-2 lg:col-start-4"
                  )}>
                    <div className="text-6xl font-bold text-primary/10 mb-2">{process.step}</div>
                    <h3 className="text-2xl font-bold mb-3">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                  
                  <div className={cn(
                    "hidden lg:flex lg:col-span-1 justify-center items-center",
                    index % 2 === 0 ? "" : "lg:col-start-3"
                  )}>
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground relative z-10">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  
                  <div className={cn(
                    "hidden lg:block lg:col-span-2",
                    index % 2 === 0 ? "lg:col-start-4" : "lg:col-start-1"
                  )}></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to Transform Your Vision into Reality?</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in animate-delay-1">
              Contact us today to discuss your project requirements and discover how our comprehensive construction services can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animate-delay-2">
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-primary font-medium rounded-md transition-all hover:bg-white/90"
              >
                Request a Consultation
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md transition-all hover:bg-white/10"
              >
                Explore Our Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
