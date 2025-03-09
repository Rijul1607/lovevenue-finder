
import React from 'react';
import VenueCard from './VenueCard';
import { Venue } from '../utils/data';

interface VenueGridProps {
  venues: Venue[];
  title?: string;
  description?: string;
}

const VenueGrid = ({ venues, title, description }: VenueGridProps) => {
  if (venues.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-2xl font-serif mb-2">No venues found</h3>
        <p className="text-muted-foreground">
          Try adjusting your search filters to find the perfect venue.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {title && (
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-2">{title}</h2>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {venues.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
    </div>
  );
};

export default VenueGrid;
