
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Venue } from '../utils/data';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import VenueCard from '@/components/VenueCard';

interface WishlistItem {
  id: string;
  venue_id: string;
  venue_name: string;
  venue_image: string;
  venue_price: number;
  venue_city: string;
  created_at: string;
}

const Wishlist = () => {
  const [wishlistVenues, setWishlistVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  
  useEffect(() => {
    const fetchWishlist = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      
      try {
        const { data, error } = await supabase
          .from('wishlists')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        // Convert wishlist items to venue format
        const venues: Venue[] = (data || []).map((item: WishlistItem) => ({
          id: item.venue_id,
          name: item.venue_name,
          city: item.venue_city,
          price: item.venue_price,
          shortDescription: 'Saved venue from your wishlist',
          capacity: { min: 10, max: 100 }, // Default values
          rating: 4.5, // Default value
          reviewCount: 10, // Default value
          images: {
            main: item.venue_image,
            gallery: [item.venue_image] // Just use the main image
          },
          availability: ['2023-07-01'], // Default value
          description: '',
          amenities: [],
          location: { lat: 0, lng: 0 },
          host: { name: '', image: '', rating: 0 },
        }));
        
        setWishlistVenues(venues);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
        toast({
          title: "Error loading wishlist",
          description: "There was a problem fetching your wishlist. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchWishlist();
  }, [user]);
  
  const removeFromWishlist = async (venueId: string) => {
    if (!user) return;
    
    try {
      const { error } = await supabase
        .from('wishlists')
        .delete()
        .eq('user_id', user.id)
        .eq('venue_id', venueId);
      
      if (error) throw error;
      
      setWishlistVenues(wishlistVenues.filter(venue => venue.id !== venueId));
      
      toast({
        title: "Removed from wishlist",
        description: "The venue has been removed from your wishlist.",
      });
    } catch (error: any) {
      toast({
        title: "Action failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          {/* Back Button */}
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
              <Heart className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif mb-4">Your Wishlist</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Keep track of your favorite venues and revisit them when you're ready to make a decision.
            </p>
          </div>
          
          {/* Wishlist Content */}
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : wishlistVenues.length > 0 ? (
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistVenues.map((venue) => (
                  <VenueCard key={venue.id} venue={venue} />
                ))}
              </div>
              
              <div className="mt-8 flex flex-col items-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Want to remove a venue from your wishlist? Visit the venue page and click the heart icon.
                </p>
                <Button asChild variant="outline">
                  <Link to="/venues">Discover more venues</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-muted/20 rounded-xl mb-16">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-6">
                <Heart className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-serif mb-3">Your wishlist is empty</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Start adding venues to your wishlist by clicking the heart icon on venue pages.
              </p>
              <Button asChild>
                <Link to="/venues">Browse Venues</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wishlist;
