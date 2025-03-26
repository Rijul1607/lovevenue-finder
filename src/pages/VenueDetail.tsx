
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
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

const VenueDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [venue, setVenue] = useState<Venue | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (id) {
      // In a real app, this would be an API call
      const foundVenue = getVenueById(id);
      setVenue(foundVenue || null);
      setLoading(false);
    }
  }, [id]);

  // Check if venue is in user's wishlist
  useEffect(() => {
    const checkWishlistStatus = async () => {
      if (!user || !id) return;
      
      try {
        const { data, error } = await supabase
          .from('wishlists')
          .select('id')
          .eq('user_id', user.id)
          .eq('venue_id', id)
          .single();
        
        if (error && error.code !== 'PGRST116') {
          console.error('Error checking wishlist status:', error);
          return;
        }
        
        setIsWishlisted(!!data);
      } catch (error) {
        console.error('Error checking wishlist:', error);
      }
    };
    
    checkWishlistStatus();
  }, [user, id]);

  const handleAddToWishlist = async () => {
    if (!user || !venue) {
      toast({
        title: "Authentication required",
        description: "Please sign in to save venues to your wishlist.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      if (isWishlisted) {
        // Remove from wishlist
        const { error } = await supabase
          .from('wishlists')
          .delete()
          .eq('user_id', user.id)
          .eq('venue_id', venue.id);
        
        if (error) throw error;
        
        setIsWishlisted(false);
        toast({
          title: "Removed from wishlist",
          description: "This venue has been removed from your wishlist.",
        });
      } else {
        // Add to wishlist
        const { error } = await supabase
          .from('wishlists')
          .insert({
            user_id: user.id,
            venue_id: venue.id,
            venue_name: venue.name,
            venue_image: venue.images.main,
            venue_price: venue.price,
            venue_city: venue.city
          });
        
        if (error) throw error;
        
        setIsWishlisted(true);
        toast({
          title: "Added to wishlist",
          description: "This venue has been added to your wishlist.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Action failed",
        description: error.message,
        variant: "destructive",
      });
    }
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
