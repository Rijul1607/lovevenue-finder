
import React from 'react';
import { MapPin, Users, Star } from 'lucide-react';
import { Venue } from '@/utils/data';

interface VenueHeaderProps {
  venue: Venue;
}

const VenueHeader = ({ venue }: VenueHeaderProps) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl md:text-4xl font-serif mb-2">{venue.name}</h1>
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
        <div className="flex items-center">
          <MapPin className="mr-1 h-4 w-4" />
          <span>{venue.city}</span>
        </div>
        <div className="flex items-center">
          <Users className="mr-1 h-4 w-4" />
          <span>{venue.capacity.min}-{venue.capacity.max} guests</span>
        </div>
        <div className="flex items-center">
          <Star className="mr-1 h-4 w-4 fill-gold text-gold" />
          <span>{venue.rating} ({venue.reviewCount} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default VenueHeader;
