
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import VenueGrid from '../components/VenueGrid';
import FeaturedVenue from '../components/FeaturedVenue';
import Footer from '../components/Footer';
import { venuesData } from '../utils/data';

const Index = () => {
  // Get featured venues
  const featuredVenues = venuesData.filter(venue => venue.featured);
  
  // Get a random featured venue for the spotlight
  const spotlightVenue = featuredVenues[Math.floor(Math.random() * featuredVenues.length)];
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Venues Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Featured Venues</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our hand-picked selection of extraordinary venues, each offering unique features and exceptional experiences for your special day.
            </p>
          </div>
          
          <VenueGrid venues={featuredVenues} />
          
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/venues" className="flex items-center">
                View All Venues
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Venue Spotlight */}
      <FeaturedVenue venue={spotlightVenue} />
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Wedding Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond beautiful venues, we offer a range of services to make your wedding day perfect from start to finish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-background rounded-xl p-6 shadow-sm transition-all hover:shadow-md">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M8 2h8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2Z"></path>
                  <path d="M16 4v16H8V4"></path>
                  <path d="M12 12h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Wedding Planning</h3>
              <p className="text-muted-foreground mb-4">
                Our expert wedding planners will help you orchestrate every detail, from concept to execution, ensuring a seamless celebration.
              </p>
              <Link to="/services/planning" className="text-primary hover:underline font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {/* Service 2 */}
            <div className="bg-background rounded-xl p-6 shadow-sm transition-all hover:shadow-md">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
                  <line x1="6" x2="18" y1="17" y2="17"></line>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Catering Services</h3>
              <p className="text-muted-foreground mb-4">
                Exceptional dining experiences with customized menus crafted from the finest ingredients by our talented culinary team.
              </p>
              <Link to="/services/catering" className="text-primary hover:underline font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {/* Service 3 */}
            <div className="bg-background rounded-xl p-6 shadow-sm transition-all hover:shadow-md">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Photography</h3>
              <p className="text-muted-foreground mb-4">
                Capture every precious moment with our skilled photographers who blend artistry and emotion in every shot.
              </p>
              <Link to="/services/photography" className="text-primary hover:underline font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/services">
                Explore All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Finding and booking your perfect wedding venue is simple with our streamlined process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-semibold mb-6">1</div>
              <h3 className="text-xl font-medium mb-3">Discover Venues</h3>
              <p className="text-muted-foreground">
                Browse our curated collection of venues and use filters to find options that match your vision and requirements.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-semibold mb-6">2</div>
              <h3 className="text-xl font-medium mb-3">Schedule a Visit</h3>
              <p className="text-muted-foreground">
                Book a personal tour to experience the venue firsthand and envision your special day in the space.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-semibold mb-6">3</div>
              <h3 className="text-xl font-medium mb-3">Secure Your Date</h3>
              <p className="text-muted-foreground">
                Once you've found the perfect match, book your date with a secure deposit and start planning your dream wedding.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-secondary rounded-xl">
            <div className="text-center">
              <h3 className="text-2xl font-serif mb-4">Ready to Find Your Perfect Venue?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Start your search today and discover the ideal setting for your wedding celebration.
              </p>
              <Button asChild size="lg">
                <Link to="/venues">
                  Search Venues
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
