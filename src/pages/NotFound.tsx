
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-card max-w-md mx-auto p-8 rounded-xl">
            <h1 className="text-8xl font-bold mb-6">404</h1>
            <h2 className="text-2xl font-bold mb-3">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md transition-all hover:bg-primary/90 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
