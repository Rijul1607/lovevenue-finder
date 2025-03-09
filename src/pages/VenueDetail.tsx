
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Star, Check, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Venue, getVenueById, formatPrice, formatDate } from '../utils/data';
import { toast } from '@/hooks/use-toast';

const VenueDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [venue, setVenue] = useState<Venue | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [mainImageLoaded, setMainImageLoaded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      // In a real app, this would be an API call
      const foundVenue = getVenueById(id);
      setVenue(foundVenue || null);
      setLoading(false);
      
      // Set the main image as active image by default
      if (foundVenue) {
        setActiveImage(foundVenue.images.main);
      }
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
      description: `Your booking for ${venue?.name} on ${formatDate(selectedDate)} is being processed.`,
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

          {/* Venue Name and Basic Info */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-serif mb-2">{venue.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="mr-1 h-4 w-4" />
                <span>{venue.city}</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-1 h-4 w-4" />
                <span>{venue.capacity.min}-{venue.capacity.max} guests</span>
              </div>
              <div className="flex items-center">
                <Star className="mr-1 h-4 w-4 fill-gold text-gold" />
                <span>{venue.rating} ({venue.reviewCount} reviews)</span>
              </div>
            </div>
          </div>

          {/* Main Image and Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
            {/* Main Large Image */}
            <div className="relative md:col-span-8 rounded-xl overflow-hidden bg-muted" style={{ height: '500px' }}>
              <div 
                className={`blur-load h-full ${mainImageLoaded ? 'loaded' : ''}`}
                style={{ backgroundImage: `url(${activeImage || venue.images.main}?blur=200&w=100)` }}
              >
                <img 
                  src={activeImage || venue.images.main} 
                  alt={venue.name}
                  className="w-full h-full object-cover transition-all duration-500"
                  onLoad={() => setMainImageLoaded(true)}
                />
              </div>
              
              <button 
                onClick={handleAddToWishlist}
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

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Left Column - Venue Details */}
            <div className="lg:col-span-2">
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
                {/* Map placeholder - In a real app, this would be Google Maps or similar */}
                <div className="bg-muted rounded-xl h-80 flex items-center justify-center">
                  <p className="text-muted-foreground">Map view would be displayed here</p>
                </div>
              </section>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
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
                        onClick={() => handleDateSelect(date)}
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
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VenueDetail;
