
import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1498&auto=format&fit=crop)',
          backgroundPosition: 'center 25%'
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center pt-32 pb-20 text-center">
        <h1 className="animate-fade-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <span className="block text-white font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-2">
            Find the Perfect
          </span>
          <span className="block text-white font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Wedding Venue
          </span>
        </h1>
        
        <p className="max-w-2xl text-white/90 text-lg md:text-xl mb-8 animate-fade-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Discover extraordinary venues for your special day, from elegant ballrooms to charming garden retreats
        </p>
        
        {/* Search Box */}
        <div className="w-full max-w-3xl p-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 animate-fade-up opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-white/80 rounded-md overflow-hidden">
              <div className="flex items-center h-full px-4">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="City, venue name, or location..." 
                  className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-foreground"
                />
              </div>
            </div>
            <Link
              to="/venues" 
              className="md:w-auto bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-md text-center transition-colors duration-300"
            >
              Search Venues
            </Link>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mt-8 animate-fade-up opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <Link 
            to="/venues?city=New+York" 
            className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
          >
            New York
          </Link>
          <Link 
            to="/venues?city=Miami" 
            className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
          >
            Miami
          </Link>
          <Link 
            to="/venues?city=Chicago" 
            className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
          >
            Chicago
          </Link>
          <Link 
            to="/venues?city=Denver" 
            className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
          >
            Denver
          </Link>
          <Link 
            to="/venues?city=Boston" 
            className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
          >
            Boston
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
