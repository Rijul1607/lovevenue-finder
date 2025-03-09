
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Venue, getVenueById } from '../utils/data';
import { toast } from '@/hooks/use-toast';
import VenueHeader from '../components/venue/VenueHeader';
import VenueGallery from '../components/venue/VenueGallery';
import VenueDescription from '../components/venue/VenueDescription';
import BookingCard from '../components/venue/BookingCard';

const VenueDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [venue, setVenue] = useState<Venue | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (id) {
      // In a real app, this would be an API call
      const foundVenue = getVenueById(id);
      setVenue(foundVenue || null);
      setLoading(false);
    }
  }, [id]);

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
    
    // In a real app, this would be an API call to add/remove from wishlist
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted ? "This venue has been removed from your wishlist." : "This venue has been added to your wishlist.",
    });
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!venue) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-serif mb-4">Venue Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The venue you're looking for does not exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/venues">Browse All Venues</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to venues
            </Link>
          </Button>

          {/* Venue Header */}
          <VenueHeader venue={venue} />

          {/* Gallery */}
          <VenueGallery 
            venue={venue}
            isWishlisted={isWishlisted}
            onWishlistToggle={handleAddToWishlist}
          />

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Left Column - Venue Details */}
            <div className="lg:col-span-2">
              <VenueDescription venue={venue} />
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <BookingCard 
                venue={venue}
                selectedDate={selectedDate}
                onDateSelect={handleDateSelect}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VenueDetail;
