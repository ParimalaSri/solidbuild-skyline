
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { toast } from "sonner";

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend
    toast.success("Your message has been sent! We'll be in touch soon.", {
      icon: <CheckCircle className="h-5 w-5" />,
      duration: 5000,
    });
  };

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
                Get In Touch
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in animate-delay-1">Contact Us</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in animate-delay-2">
                Have a project in mind or questions about our services? Our team is ready to help you.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Info & Form Section */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Let's Discuss Your Project</h2>
                <p className="text-lg text-muted-foreground mb-10">
                  Whether you're looking to start a new construction project, renovate an existing space, or simply want to learn more about our services, we're here to help. Fill out the form or use our contact information to get in touch with our team.
                </p>
                
                <div className="space-y-8 mb-10">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Main Office</h3>
                      <p className="text-muted-foreground">
                        1234 Construction Avenue<br />
                        New York, NY 10001, USA
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        Main: (123) 456-7890<br />
                        Support: (123) 456-7891
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        info@solidbuild.com<br />
                        support@solidbuild.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Working Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 3:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-xl border border-border">
                  <h3 className="text-lg font-medium mb-4">Regional Offices</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-1">West Coast</h4>
                      <p className="text-sm text-muted-foreground">
                        567 Pacific Boulevard<br />
                        San Francisco, CA 94111<br />
                        (123) 456-7892
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Midwest</h4>
                      <p className="text-sm text-muted-foreground">
                        789 Lakefront Drive<br />
                        Chicago, IL 60601<br />
                        (123) 456-7893
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">South</h4>
                      <p className="text-sm text-muted-foreground">
                        321 Gulf Way<br />
                        Miami, FL 33101<br />
                        (123) 456-7894
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Northwest</h4>
                      <p className="text-sm text-muted-foreground">
                        456 Evergreen Terrace<br />
                        Seattle, WA 98101<br />
                        (123) 456-7895
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in animate-delay-2">
                <div className="glass-card rounded-xl overflow-hidden border border-border">
                  <form onSubmit={handleSubmit} className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium">First Name*</label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium">Last Name*</label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address*</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="service" className="block mb-2 text-sm font-medium">Service Interested In*</label>
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
                        <option value="development">Real Estate Development</option>
                        <option value="infrastructure">Infrastructure Projects</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="projectDetails" className="block mb-2 text-sm font-medium">Project Details*</label>
                      <textarea
                        id="projectDetails"
                        rows={5}
                        className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                        placeholder="Please provide some details about your project..."
                        required
                      ></textarea>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="budget" className="block mb-2 text-sm font-medium">Estimated Budget</label>
                      <select
                        id="budget"
                        className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        <option value="" disabled selected>Select a budget range</option>
                        <option value="below50k">Below $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="500k-1m">$500,000 - $1 million</option>
                        <option value="above1m">Above $1 million</option>
                      </select>
                    </div>
                    
                    <div className="mb-8">
                      <div className="flex items-center">
                        <input 
                          id="privacy" 
                          type="checkbox" 
                          className="h-4 w-4 text-primary border-border rounded focus:ring-primary/20"
                          required
                        />
                        <label htmlFor="privacy" className="ml-2 text-sm text-muted-foreground">
                          I agree to the <a href="#" className="text-primary hover:underline">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                        </label>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-md transition-all hover:bg-primary/90 flex items-center justify-center"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Submit Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-20 bg-secondary">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Find Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visit our headquarters or one of our regional offices to discuss your project in person.
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden h-96 shadow-lg animate-fade-in">
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
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container-tight">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Find answers to some of the most common questions about our services and processes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "What types of projects does SolidBuild handle?",
                  answer: "SolidBuild handles a wide range of construction projects including residential homes, commercial buildings, renovations, infrastructure, and real estate development. Our versatile team can adapt to projects of various scales and complexities."
                },
                {
                  question: "How long does a typical construction project take?",
                  answer: "Project timelines vary significantly based on size, complexity, and scope. A smaller renovation might take a few weeks, while larger commercial or residential developments can take several months to a year or more. We provide detailed timelines during our initial consultation."
                },
                {
                  question: "Do you provide cost estimates before starting a project?",
                  answer: "Yes, we provide detailed cost estimates before beginning any work. Our transparent approach ensures you understand all costs involved and can make informed decisions about your project's budget."
                },
                {
                  question: "Are you licensed and insured?",
                  answer: "Absolutely. SolidBuild is fully licensed, bonded, and insured in all jurisdictions where we operate. We maintain comprehensive insurance coverage to protect both our clients and our projects."
                },
                {
                  question: "How do you ensure quality in your construction projects?",
                  answer: "We implement rigorous quality control measures throughout every phase of construction. This includes regular inspections, adherence to industry standards, working with certified professionals, and using high-quality materials."
                },
                {
                  question: "Can you help with obtaining necessary permits?",
                  answer: "Yes, our team handles all aspects of the permitting process. We have extensive experience navigating local building codes and regulations to ensure your project meets all legal requirements."
                }
              ].map((faq, index) => (
                <div key={index} className="glass-card p-6 rounded-xl animate-fade-in">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
