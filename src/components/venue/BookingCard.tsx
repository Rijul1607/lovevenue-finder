
import React from 'react';
import { Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Venue, formatPrice, formatDate } from '@/utils/data';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';

interface BookingCardProps {
  venue: Venue;
  selectedDate: string | null;
  onDateSelect: (date: string) => void;
}

const BookingCard = ({ venue, selectedDate, onDateSelect }: BookingCardProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleBookNow = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to book this venue.",
        variant: "destructive",
      });
      navigate('/signin');
      return;
    }

    if (!selectedDate) {
      toast({
        title: "Please select a date",
        description: "You need to select a date before booking this venue.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      // Calculate check-out date (1 day after check-in for simplicity)
      const checkInDate = new Date(selectedDate);
      const checkOutDate = new Date(checkInDate);
      checkOutDate.setDate(checkOutDate.getDate() + 1);
      
      // Generate total price (for demo: 1 day rental + 15% fees)
      const totalPrice = venue.price * 1.15;
      
      // Store the booking in the database
      const { error } = await supabase
        .from('bookings')
        .insert({
          user_id: user.id,
          venue_id: venue.id,
          venue_name: venue.name,
          venue_image: venue.images.main,
          check_in_date: selectedDate,
          check_out_date: checkOutDate.toISOString().split('T')[0],
          guests: venue.capacity.min,
          total_price: totalPrice,
          status: 'confirmed'
        });
      
      if (error) throw error;
      
      toast({
        title: "Booking successful",
        description: `Your booking for ${venue.name} on ${formatDate(selectedDate)} has been confirmed.`,
      });
      
      // Navigate to the bookings page
      navigate('/bookings');
    } catch (error: any) {
      toast({
        title: "Booking failed",
        description: error.message,
        variant: "destructive",
      });
    }
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
          {user ? 'Book Now' : 'Sign In to Book'}
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
