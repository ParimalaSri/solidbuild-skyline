
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, MapPin, Building as BuildingIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  featured?: boolean;
}

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Skyline Tower",
      category: "commercial",
      location: "New York, NY",
      year: "2022",
      description: "A 45-story commercial tower featuring cutting-edge sustainable design and smart building technology.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800",
      featured: true
    },
    {
      id: 2,
      title: "Riverside Residences",
      category: "residential",
      location: "Chicago, IL",
      year: "2021",
      description: "Luxury waterfront condominiums with panoramic river views and state-of-the-art amenities.",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=800",
      featured: true
    },
    {
      id: 3,
      title: "Green Valley Mall",
      category: "commercial",
      location: "Austin, TX",
      year: "2023",
      description: "An eco-friendly shopping center with open-air design and integrated green spaces.",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=800",
      featured: true
    },
    {
      id: 4,
      title: "Hillside Villas",
      category: "residential",
      location: "San Francisco, CA",
      year: "2020",
      description: "A collection of custom hillside homes featuring contemporary architecture and breathtaking bay views.",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=800",
      featured: true
    },
    {
      id: 5,
      title: "Harbor Bridge",
      category: "infrastructure",
      location: "Seattle, WA",
      year: "2019",
      description: "A steel arch bridge spanning the harbor, designed for both vehicular and pedestrian traffic.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=800",
      featured: true
    },
    {
      id: 6,
      title: "Tech Park Campus",
      category: "commercial",
      location: "Boston, MA",
      year: "2021",
      description: "A multi-building technology campus with collaborative workspaces and advanced research facilities.",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&q=80&w=800",
      featured: true
    },
    {
      id: 7,
      title: "Urban Apartments",
      category: "residential",
      location: "Denver, CO",
      year: "2022",
      description: "Modern urban living spaces designed for young professionals, with shared amenities and proximity to downtown.",
      image: "https://images.unsplash.com/photo-1545324418-8097b6811163?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 8,
      title: "Central Station Renovation",
      category: "infrastructure",
      location: "Washington, DC",
      year: "2020",
      description: "Complete renovation of a historic train station, preserving architectural heritage while adding modern functionality.",
      image: "https://images.unsplash.com/photo-1570275239925-4af0aa3e6949?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 9,
      title: "Lakefront Resort",
      category: "commercial",
      location: "Minneapolis, MN",
      year: "2023",
      description: "A luxury resort and conference center featuring sustainable construction and scenic lakefront views.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 10,
      title: "Mountain Retreat",
      category: "residential",
      location: "Aspen, CO",
      year: "2021",
      description: "A collection of high-end mountain homes designed to blend with the natural landscape and withstand harsh winter conditions.",
      image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 11,
      title: "Solar Energy Farm",
      category: "infrastructure",
      location: "Phoenix, AZ",
      year: "2022",
      description: "Large-scale solar energy installation with advanced tracking systems and energy storage capabilities.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 12,
      title: "Downtown Office Complex",
      category: "commercial",
      location: "Dallas, TX",
      year: "2020",
      description: "A multi-tower office development with shared plazas, retail spaces, and underground parking.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'residential', name: 'Residential' },
    { id: 'infrastructure', name: 'Infrastructure' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
                Our Portfolio
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in animate-delay-1">Featured Projects</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in animate-delay-2">
                Explore our diverse portfolio of construction projects spanning residential, commercial, and infrastructure sectors.
              </p>
            </div>
          </div>
        </section>
        
        {/* Projects Filter and Grid */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse Our Work</h2>
                <p className="text-muted-foreground max-w-2xl">
                  Our portfolio showcases a range of projects that demonstrate our expertise, innovation, and commitment to quality.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-all",
                      activeCategory === category.id 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-secondary text-foreground hover:bg-primary/10"
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="glass-card rounded-xl overflow-hidden transition-all hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index % 6 * 0.1}s` }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-white">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="text-sm text-muted-foreground px-2 py-1 bg-secondary rounded">
                        {project.year}
                      </span>
                    </div>
                    <p className="flex items-center text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                      {project.location}
                    </p>
                    <p className="text-muted-foreground mb-5">{project.description}</p>
                    <Link 
                      to={`/projects/${project.id}`} 
                      className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                      View Project Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-20 bg-secondary">
          <div className="container-tight">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "25+", label: "Years of Experience" },
                { value: "30+", label: "Industry Awards" },
                { value: "100%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="glass-card p-8 rounded-xl text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Project Process */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">How We Execute Projects</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Our proven methodology ensures every project is delivered on time, within budget, and to the highest standards.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Plan & Design",
                  description: "We start with in-depth planning and architectural design, establishing a solid foundation for your project."
                },
                {
                  step: "02",
                  title: "Build & Construct",
                  description: "Our skilled teams execute the plans with precision, adhering to the highest quality and safety standards."
                },
                {
                  step: "03",
                  title: "Deliver & Support",
                  description: "We complete the project on time and provide ongoing support to ensure lasting satisfaction."
                }
              ].map((process, index) => (
                <div 
                  key={index} 
                  className="glass-card p-8 rounded-xl animate-fade-in relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className="absolute -top-2 -right-2 text-8xl font-bold text-primary/5">{process.step}</div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Start Your Project with SolidBuild</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in animate-delay-1">
              Ready to bring your construction vision to life? Contact our team today to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animate-delay-2">
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-primary font-medium rounded-md transition-all hover:bg-white/90"
              >
                Request a Quote
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md transition-all hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
