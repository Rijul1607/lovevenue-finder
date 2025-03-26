
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Star, Users, MapPin } from 'lucide-react';
import { Venue, formatPrice } from '../utils/data';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { toast } from '@/hooks/use-toast';

interface VenueCardProps {
  venue: Venue;
  className?: string;
}

const VenueCard = ({ venue, className }: VenueCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  // Check if the venue is in the user's wishlist
  useEffect(() => {
    const checkWishlistStatus = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from('wishlists')
          .select('*')
          .eq('user_id', user.id)
          .eq('venue_id', venue.id)
          .single();
        
        if (error && error.code !== 'PGRST116') {
          console.error('Error checking wishlist status:', error);
          return;
        }
        
        setIsLiked(!!data);
      } catch (error) {
        console.error('Error checking wishlist:', error);
      }
    };
    
    checkWishlistStatus();
  }, [user, venue.id]);

  const toggleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to save venues to your wishlist.",
        variant: "destructive",
      });
      navigate('/signin');
      return;
    }
    
    try {
      if (isLiked) {
        // Remove from wishlist
        const { error } = await supabase
          .from('wishlists')
          .delete()
          .eq('user_id', user.id)
          .eq('venue_id', venue.id);
        
        if (error) throw error;
        
        setIsLiked(false);
        toast({
          title: "Removed from wishlist",
          description: "Venue has been removed from your wishlist.",
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
        
        setIsLiked(true);
        toast({
          title: "Added to wishlist",
          description: "Venue has been added to your wishlist.",
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

  return (
    <div className={cn(
      'group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg card-hover',
      className
    )}>
      <Link to={`/venue/${venue.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <div 
            className={cn("blur-load", imageLoaded && "loaded")}
            style={{ backgroundImage: `url(${venue.images.main}?blur=200&w=100)` }}
          >
            <img
              src={venue.images.main}
              alt={venue.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          
          {/* Favorite Button */}
          <button
            onClick={toggleLike}
            className="absolute top-4 right-4 z-10 rounded-full bg-black/20 p-2 backdrop-blur-md transition-colors hover:bg-black/30"
            aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              className={cn(
                "h-5 w-5",
                isLiked ? "fill-red-500 text-red-500" : "text-white"
              )}
            />
          </button>
          
          {/* Price Tag */}
          <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium shadow-sm backdrop-blur-sm">
            {formatPrice(venue.price)}
            <span className="text-muted-foreground text-xs"> / day</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
            <MapPin className="h-4 w-4" />
            <span>{venue.city}</span>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">
            {venue.name}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4">
            {venue.shortDescription}
          </p>
          
          {/* Details */}
          <div className="flex items-center justify-between mt-auto">
            {/* Rating */}
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-gold text-gold" />
              <span className="text-sm font-medium">{venue.rating}</span>
              <span className="text-xs text-muted-foreground">
                ({venue.reviewCount})
              </span>
            </div>
            
            {/* Capacity */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>Up to {venue.capacity.max}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VenueCard;
