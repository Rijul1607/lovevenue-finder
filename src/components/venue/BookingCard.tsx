
import React from 'react';
import { Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Venue, formatPrice, formatDate } from '@/utils/data';
import { toast } from '@/hooks/use-toast';

interface BookingCardProps {
  venue: Venue;
  selectedDate: string | null;
  onDateSelect: (date: string) => void;
}

const BookingCard = ({ venue, selectedDate, onDateSelect }: BookingCardProps) => {
  const handleBookNow = () => {
    if (!selectedDate) {
      toast({
        title: "Please select a date",
        description: "You need to select a date before booking this venue.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would redirect to booking page or open a booking modal
    toast({
      title: "Booking initiated",
      description: `Your booking for ${venue.name} on ${formatDate(selectedDate)} is being processed.`,
    });
  };

  return (
    <div className="bg-card rounded-xl shadow-lg p-6 sticky top-24">
      <div className="mb-4">
        <p className="text-xl font-medium mb-1">{formatPrice(venue.price)}</p>
        <p className="text-muted-foreground text-sm">per day</p>
      </div>

      <Separator className="my-4" />

      {/* Date Selection */}
      <div className="mb-6">
        <h3 className="text-base font-medium mb-3">Available Dates</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {venue.availability.slice(0, 6).map((date) => (
            <button
              key={date}
              onClick={() => onDateSelect(date)}
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                selectedDate === date
                  ? 'bg-primary text-white'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              {new Date(date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
              })}
            </button>
          ))}
        </div>
        {venue.availability.length > 6 && (
          <p className="text-sm text-muted-foreground mb-2">
            + {venue.availability.length - 6} more dates available
          </p>
        )}
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1" />
          <span>
            {selectedDate
              ? `Selected: ${formatDate(selectedDate)}`
              : 'Select a date to continue'}
          </span>
        </div>
      </div>

      {/* Capacity */}
      <div className="mb-6">
        <h3 className="text-base font-medium mb-3">Capacity</h3>
        <div className="flex items-center text-sm">
          <Users className="h-4 w-4 mr-1 text-muted-foreground" />
          <span>{venue.capacity.min} - {venue.capacity.max} guests</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button className="w-full" onClick={handleBookNow}>
          Book Now
        </Button>
        <Button variant="outline" className="w-full">
          Contact Venue
        </Button>
      </div>

      {/* Booking Policies */}
      <div className="mt-6 text-xs text-muted-foreground">
        <p className="mb-1">Booking requires a 20% deposit.</p>
        <p className="mb-1">Free cancellation up to 30 days before event.</p>
        <p>Pricing includes basic amenities.</p>
      </div>
    </div>
  );
};

export default BookingCard;
