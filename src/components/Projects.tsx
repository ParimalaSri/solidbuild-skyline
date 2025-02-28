
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Skyline Tower",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=600",
      location: "New York, NY"
    },
    {
      id: 2,
      title: "Riverside Residences",
      category: "residential",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=600",
      location: "Chicago, IL"
    },
    {
      id: 3,
      title: "Green Valley Mall",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=600",
      location: "Austin, TX"
    },
    {
      id: 4,
      title: "Hillside Villas",
      category: "residential",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=600",
      location: "San Francisco, CA"
    },
    {
      id: 5,
      title: "Harbor Bridge",
      category: "infrastructure",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=600",
      location: "Seattle, WA"
    },
    {
      id: 6,
      title: "Tech Park Campus",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&q=80&w=600",
      location: "Boston, MA"
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
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div className="mb-6 md:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              Our Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl font-balance">
              Explore our diverse portfolio of construction projects spanning residential, commercial, and infrastructure sectors.
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer opacity-0",
                "animate-fade-in animate-fill-both",
                index % 3 === 0 ? "animate-delay-1" : 
                index % 3 === 1 ? "animate-delay-2" : "animate-delay-3"
              )}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100">
                  <span className="inline-block text-white/80 text-sm mb-2">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">{project.title}</h3>
                <p className="text-white/80 mb-4 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100">{project.location}</p>
                <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-8 opacity-0 group-hover:opacity-100">
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="inline-flex items-center text-white text-sm font-medium"
                  >
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary bg-transparent font-medium rounded-md transition-all hover:bg-primary hover:text-primary-foreground group"
          >
            <span>View All Projects</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
