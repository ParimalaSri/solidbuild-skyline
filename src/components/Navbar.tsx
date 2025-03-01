
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home as HomeIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary rounded-full p-1.5">
                <HomeIcon className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-primary">
                VillageBuild
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={cn("nav-link", isActive('/') && "active")}>
              Home
            </Link>
            <Link to="/about" className={cn("nav-link", isActive('/about') && "active")}>
              About
            </Link>
            <Link to="/services" className={cn("nav-link", isActive('/services') && "active")}>
              Services
            </Link>
            <Link to="/projects" className={cn("nav-link", isActive('/projects') && "active")}>
              Projects
            </Link>
            <Link to="/contact" className={cn("nav-link", isActive('/contact') && "active")}>
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:bg-primary/90"
            >
              Get a Quote
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-foreground/90 hover:text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-40 rural-container",
          isMobileMenuOpen ? "block animate-fade-in" : "hidden"
        )}
        style={{ top: '80px' }}
      >
        <div className="p-4 space-y-6 pt-8">
          <Link 
            to="/" 
            className={cn(
              "block py-3 text-lg border-b border-orange-200",
              isActive('/') && "font-medium text-primary"
            )}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "block py-3 text-lg border-b border-orange-200",
              isActive('/about') && "font-medium text-primary"
            )}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className={cn(
              "block py-3 text-lg border-b border-orange-200",
              isActive('/services') && "font-medium text-primary"
            )}
          >
            Services
          </Link>
          <Link 
            to="/projects" 
            className={cn(
              "block py-3 text-lg border-b border-orange-200",
              isActive('/projects') && "font-medium text-primary"
            )}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className={cn(
              "block py-3 text-lg border-b border-orange-200",
              isActive('/contact') && "font-medium text-primary"
            )}
          >
            Contact
          </Link>
          
          <div className="pt-4">
            <Link
              to="/contact"
              className="w-full block text-center px-5 py-3 bg-primary text-primary-foreground rounded-md font-medium"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
