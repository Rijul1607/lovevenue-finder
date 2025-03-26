
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Venue } from '@/utils/data';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

interface VenueGalleryProps {
  venue: Venue;
  isWishlisted: boolean;
  onWishlistToggle: () => void;
}

const VenueGallery = ({ venue, isWishlisted, onWishlistToggle }: VenueGalleryProps) => {
  const [mainImageLoaded, setMainImageLoaded] = useState(false);
  const [activeImage, setActiveImage] = useState<string>(venue.images.main);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleWishlistClick = () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to save venues to your wishlist.",
        variant: "destructive",
      });
      navigate('/signin');
      return;
    }
    
    onWishlistToggle();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
      {/* Main Large Image */}
      <div className="relative md:col-span-8 rounded-xl overflow-hidden bg-muted" style={{ height: '500px' }}>
        <div 
          className={`blur-load h-full ${mainImageLoaded ? 'loaded' : ''}`}
          style={{ backgroundImage: `url(${activeImage}?blur=200&w=100)` }}
        >
          <img 
            src={activeImage} 
            alt={venue.name}
            className="w-full h-full object-cover transition-all duration-500"
            onLoad={() => setMainImageLoaded(true)}
          />
        </div>
        
        <button 
          onClick={handleWishlistClick}
          className="absolute top-4 right-4 z-10 rounded-full bg-black/20 p-3 backdrop-blur-md transition-colors hover:bg-black/30"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`h-6 w-6 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-white'}`} />
        </button>
      </div>

      {/* Gallery Thumbnails */}
      <div className="md:col-span-4 grid grid-cols-2 gap-4">
        {venue.images.gallery.slice(0, 4).map((image, index) => (
          <div 
            key={index} 
            className="relative rounded-xl overflow-hidden bg-muted cursor-pointer hover:opacity-90 transition-opacity"
            style={{ height: '120px' }}
            onClick={() => setActiveImage(image)}
          >
            <img 
              src={image} 
              alt={`${venue.name} - Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueGallery;
