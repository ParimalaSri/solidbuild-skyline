
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <Link to="/" className="text-3xl font-bold tracking-tight">
                SolidBuild
              </Link>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Building excellence in construction and real estate development since 1998. Quality, innovation, and client satisfaction are at the core of everything we do.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-white/20" 
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-white/20" 
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-white/20" 
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-white/20" 
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Residential Construction
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Commercial Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Renovation & Remodeling
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Infrastructure Development
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  1234 Construction Avenue<br />
                  New York, NY 10001, USA
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="text-primary-foreground/80">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="text-primary-foreground/80">info@solidbuild.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Subscribe to Our Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-md w-full text-foreground focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="bg-white text-primary px-3 rounded-r-md flex items-center justify-center hover:bg-white/90 transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-primary-foreground/70">
                &copy; {currentYear} SolidBuild. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
