
import React from 'react';
import { Check } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Venue } from '@/utils/data';
import VenueMap from './VenueMap';

interface VenueDescriptionProps {
  venue: Venue;
}

const VenueDescription = ({ venue }: VenueDescriptionProps) => {
  return (
    <>
      {/* Description */}
      <section className="mb-8">
        <h2 className="text-2xl font-serif mb-4">About this venue</h2>
        <p className="text-muted-foreground whitespace-pre-line">
          {venue.description}
        </p>
      </section>

      <Separator className="my-8" />

      {/* Amenities */}
      <section className="mb-8">
        <h2 className="text-2xl font-serif mb-4">Amenities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4">
          {venue.amenities.map((amenity) => (
            <div key={amenity} className="flex items-center">
              <div className="mr-2 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span>{amenity}</span>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* Location */}
      <section className="mb-8">
        <h2 className="text-2xl font-serif mb-4">Location</h2>
        <p className="text-muted-foreground mb-4">{venue.address}, {venue.city}</p>
        <VenueMap venue={venue} />
      </section>
    </>
  );
};

export default VenueDescription;
