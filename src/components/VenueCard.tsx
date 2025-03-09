
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Users, MapPin } from 'lucide-react';
import { Venue, formatPrice } from '../utils/data';
import { cn } from '@/lib/utils';

interface VenueCardProps {
  venue: Venue;
  className?: string;
}

const VenueCard = ({ venue, className }: VenueCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    // In a real app, we would update this in a wishlist context or API
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
