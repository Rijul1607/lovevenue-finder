
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VenueGrid from '../components/VenueGrid';
import { Venue, venuesData } from '../utils/data';
import { toast } from '@/hooks/use-toast';

const Wishlist = () => {
  // In a real app, this would be fetched from a database/API
  // Here we're simulating wishlist functionality with local state and random venues
  const [wishlistVenues, setWishlistVenues] = useState<Venue[]>([]);
  
  useEffect(() => {
    // Simulate loading wishlist data
    // In a real app, this would be a fetch request to get user's wishlist
    const randomVenues = [...venuesData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3); // Random 3 venues for demo
    
    setWishlistVenues(randomVenues);
  }, []);
  
  const removeFromWishlist = (venueId: string) => {
    setWishlistVenues(wishlistVenues.filter(venue => venue.id !== venueId));
    
    toast({
      title: "Removed from wishlist",
      description: "The venue has been removed from your wishlist.",
    });
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
          {wishlistVenues.length > 0 ? (
            <div className="mb-16">
              <VenueGrid venues={wishlistVenues} />
              
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
