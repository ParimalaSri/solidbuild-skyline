
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, CheckCircle, Users, Clock, History, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                About SolidBuild
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in animate-delay-1">Our Story of Excellence</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in animate-delay-2">
                Since 1998, SolidBuild has been at the forefront of the construction industry, delivering exceptional projects and building lasting relationships.
              </p>
            </div>
          </div>
        </section>
        
        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Building the Future with Integrity and Innovation</h2>
                <p className="text-lg text-muted-foreground">
                  SolidBuild was founded with a vision to transform the construction landscape through innovative techniques, sustainable practices, and unwavering commitment to quality. Over two decades later, we've grown from a small local contractor to a recognized leader in the construction industry.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our journey has been marked by countless successful projects across residential, commercial, and infrastructure sectors, each reflecting our core values of integrity, excellence, and client satisfaction.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex flex-col items-center text-center p-6 glass-card rounded-xl">
                    <span className="text-3xl font-bold text-primary mb-2">25+</span>
                    <span className="text-muted-foreground">Years of Experience</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 glass-card rounded-xl">
                    <span className="text-3xl font-bold text-primary mb-2">500+</span>
                    <span className="text-muted-foreground">Projects Completed</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 glass-card rounded-xl">
                    <span className="text-3xl font-bold text-primary mb-2">100+</span>
                    <span className="text-muted-foreground">Expert Professionals</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 glass-card rounded-xl">
                    <span className="text-3xl font-bold text-primary mb-2">30+</span>
                    <span className="text-muted-foreground">Industry Awards</span>
                  </div>
                </div>
              </div>
              <div className="relative animate-fade-in animate-delay-2">
                <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1571515476930-4cee16232ba3?auto=format&fit=crop&q=80&w=1200" 
                    alt="SolidBuild project completion" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black/5 rounded-2xl transform -translate-x-4 translate-y-4" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-20 bg-secondary">
          <div className="container-tight">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Our Core Values
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What Drives Us Forward</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Our values shape everything we do, from how we interact with clients to how we approach each project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <CheckCircle className="h-8 w-8" />,
                  title: "Quality Excellence",
                  description: "We never compromise on quality, ensuring every project meets the highest standards."
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Client-Centric Approach",
                  description: "Our clients' vision and satisfaction are at the heart of everything we do."
                },
                {
                  icon: <Target className="h-8 w-8" />,
                  title: "Integrity & Transparency",
                  description: "We operate with honesty and openness in all our business dealings."
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  title: "Professional Excellence",
                  description: "Our team consists of industry experts committed to the highest standards."
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Timeliness",
                  description: "We understand the importance of deadlines and work diligently to meet them."
                },
                {
                  icon: <History className="h-8 w-8" />,
                  title: "Innovation",
                  description: "We continuously seek new ways to improve and advance construction practices."
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="glass-card p-8 rounded-xl transition-all hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className="p-3 mb-5 rounded-full inline-flex bg-primary/10 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container-tight">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Our Leadership
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Meet the Team Behind Our Success</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Our experienced leadership team brings decades of industry knowledge and expertise to every project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Robert Thompson",
                  position: "Chief Executive Officer",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
                  bio: "With over 30 years in construction, Robert has led SolidBuild to new heights since founding the company in 1998."
                },
                {
                  name: "Sarah Patel",
                  position: "Chief Operations Officer",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
                  bio: "Sarah oversees all operations, ensuring projects are delivered on time, within budget, and to the highest standards."
                },
                {
                  name: "Michael Chen",
                  position: "Chief Architect",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
                  bio: "Michael brings creative vision and technical expertise to lead our architectural design department."
                },
                {
                  name: "Emily Rodriguez",
                  position: "Project Director",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
                  bio: "Emily manages our largest projects, coordinating teams and resources to deliver exceptional results."
                }
              ].map((member, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl overflow-hidden transition-all hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className="aspect-[3/4] relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to Start Your Project?</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in animate-delay-1">
              Let's work together to bring your construction vision to life. Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animate-delay-2">
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-primary font-medium rounded-md transition-all hover:bg-white/90"
              >
                Contact Us
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md transition-all hover:bg-white/10"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
