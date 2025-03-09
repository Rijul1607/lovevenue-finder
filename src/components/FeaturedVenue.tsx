
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Venue, formatPrice } from '../utils/data';

interface FeaturedVenueProps {
  venue: Venue;
}

const FeaturedVenue = ({ venue }: FeaturedVenueProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Choose 3 key amenities to highlight
  const keyAmenities = venue.amenities.slice(0, 3);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-20">
          {/* Image Side */}
          <div className="flex-1 relative rounded-2xl overflow-hidden shadow-xl">
            <div 
              className={`blur-load aspect-[3/4] sm:aspect-[4/3] md:aspect-auto md:h-[500px] ${imageLoaded ? 'loaded' : ''}`}
              style={{ backgroundImage: `url(${venue.images.main}?blur=200&w=100)` }}
            >
              <img 
                src={venue.images.main} 
                alt={venue.name}
                className="w-full h-full object-cover object-center transition-all duration-700"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            
            {/* Price Tag */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-md">
              <p className="text-xs text-muted-foreground">Starting from</p>
              <p className="text-xl font-medium">{formatPrice(venue.price)}</p>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="flex-1 max-w-xl">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-secondary text-sm rounded-full">
                Featured Venue
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              {venue.name}
            </h2>
            
            <p className="text-muted-foreground mb-6">
              {venue.shortDescription}
            </p>
            
            {/* Amenities */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">Key Amenities</h3>
              <div className="space-y-2">
                {keyAmenities.map(amenity => (
                  <div key={amenity} className="flex items-center">
                    <div className="mr-2 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">{amenity}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Capacity & Location */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Capacity</p>
                <p className="font-medium">{venue.capacity.min} - {venue.capacity.max} guests</p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-medium">{venue.city}</p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="flex-1">
                <Link to={`/venue/${venue.id}`}>
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="flex-1">
                <Link to={`/booking/${venue.id}`}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVenue;
