
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-tight">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-balance">
            Have a project in mind or questions about our services? Our team is ready to help you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-in animate-fill-both">
            <div className="glass-card rounded-xl overflow-hidden">
              <form className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="service" className="block mb-2 text-sm font-medium">Service Needed</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  >
                    <option value="" disabled selected>Select a service</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="design">Architectural Design</option>
                    <option value="infrastructure">Infrastructure Projects</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-md transition-all hover:bg-primary/90"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-2 animate-fill-both">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Office Location</h4>
                    <p className="text-muted-foreground">
                      1234 Construction Avenue<br />
                      New York, NY 10001, USA
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone Number</h4>
                    <p className="text-muted-foreground">
                      Office: (123) 456-7890<br />
                      Support: (123) 456-7891
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email Address</h4>
                    <p className="text-muted-foreground">
                      info@solidbuild.com<br />
                      support@solidbuild.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Working Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 3:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden h-64 border border-border opacity-0 animate-fade-in animate-delay-3 animate-fill-both">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25286918174!2d-74.11976446121548!3d40.697663747505566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1688663312532!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="SolidBuild Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
