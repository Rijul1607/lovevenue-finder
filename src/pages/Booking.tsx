
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, CreditCard, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Venue, getVenueById, formatPrice, formatDate } from '../utils/data';
import { toast } from '@/hooks/use-toast';

const Booking = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [venue, setVenue] = useState<Venue | null>(null);
  const [loading, setLoading] = useState(true);
  const [bookingDate, setBookingDate] = useState<string | null>(null);
  const [guestCount, setGuestCount] = useState<number>(50);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (id) {
      // Get venue data
      const foundVenue = getVenueById(id);
      setVenue(foundVenue || null);
      setLoading(false);
      
      // Get selected date from localStorage or URL params (in a real app)
      const date = localStorage.getItem(`selectedDate_${id}`);
      if (date) {
        setBookingDate(date);
      }
    }
  }, [id]);

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBookingDate(e.target.value);
    // In a real app, save this to localStorage or state
    if (id) {
      localStorage.setItem(`selectedDate_${id}`, e.target.value);
    }
  };

  const handleGuestCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(e.target.value);
    if (!isNaN(count)) {
      setGuestCount(count);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bookingDate) {
      toast({
        title: "Please select a date",
        description: "You need to select a date before proceeding.",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 1) {
      setStep(2);
      window.scrollTo(0, 0);
    } else {
      // Submit booking
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(3);
        
        toast({
          title: "Booking successful!",
          description: "Your booking has been confirmed.",
        });
      }, 1500);
    }
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
          The venue you're trying to book does not exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/venues">Browse All Venues</Link>
        </Button>
      </div>
    );
  }

  // Confirmation step
  if (step === 3) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1">
          <div className="container mx-auto px-4 py-12 max-w-3xl">
            <div className="text-center mb-12">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif mb-4">Booking Confirmed!</h1>
              <p className="text-muted-foreground max-w-md mx-auto">
                Thank you for booking with us. We've sent a confirmation email with all the details.
              </p>
            </div>
            
            <div className="bg-card rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-serif mb-6">Booking Details</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Venue</p>
                    <p className="font-medium">{venue.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium">{formatDate(bookingDate || '')}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Guest Count</p>
                    <p className="font-medium">{guestCount} guests</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Booking Reference</p>
                    <p className="font-medium">{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm text-muted-foreground">Amount Paid (20% Deposit)</p>
                  <p className="text-xl font-medium">{formatPrice(venue.price * 0.2)}</p>
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <Button onClick={() => navigate('/')} size="lg">
                Return to Home
              </Button>
              <p className="text-sm text-muted-foreground">
                If you have any questions, please contact our support team.
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => step === 1 ? navigate(`/venue/${id}`) : setStep(1)} 
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {step === 1 ? 'Back to venue' : 'Back to details'}
          </Button>
          
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-serif mb-2">
              {step === 1 ? 'Book Your Event' : 'Complete Your Booking'}
            </h1>
            <p className="text-muted-foreground">
              {step === 1 
                ? 'Fill in the details to book this beautiful venue for your special day.'
                : 'Review your details and confirm your booking.'}
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="flex justify-between mb-2">
                <div className="text-sm font-medium">Venue Details</div>
                <div className="text-sm font-medium">Payment</div>
                <div className="text-sm font-medium">Confirmation</div>
              </div>
              <div className="h-2 w-full bg-muted rounded-full">
                <div 
                  className="h-2 bg-primary rounded-full transition-all duration-300" 
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                {step === 1 ? (
                  <div className="bg-card rounded-xl shadow-md p-6 md:p-8">
                    <h2 className="text-xl font-medium mb-6">Event Details</h2>
                    
                    <div className="space-y-6">
                      {/* Date Selection */}
                      <div>
                        <Label htmlFor="date">Select a Date</Label>
                        <select
                          id="date"
                          value={bookingDate || ''}
                          onChange={handleDateChange}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                          required
                        >
                          <option value="">Choose a date</option>
                          {venue.availability.map((date) => (
                            <option key={date} value={date}>
                              {formatDate(date)}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      {/* Guest Count */}
                      <div>
                        <Label htmlFor="guestCount">Number of Guests</Label>
                        <div className="flex items-center space-x-2">
                          <Input
                            id="guestCount"
                            type="number"
                            min={venue.capacity.min}
                            max={venue.capacity.max}
                            value={guestCount}
                            onChange={handleGuestCountChange}
                            required
                          />
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            ({venue.capacity.min}-{venue.capacity.max} allowed)
                          </span>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      {/* Contact Details */}
                      <h3 className="text-lg font-medium">Contact Information</h3>
                      
                      {/* Name */}
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      
                      {/* Email */}
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      
                      {/* Phone */}
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                      
                      {/* Special Requests */}
                      <div>
                        <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                        <textarea
                          id="specialRequests"
                          className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background text-sm resize-y"
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-card rounded-xl shadow-md p-6 md:p-8">
                    <h2 className="text-xl font-medium mb-6">Payment Details</h2>
                    
                    <div className="space-y-6">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-2">
                          You're making a 20% deposit payment to secure your booking. The remaining balance will be due 30 days before your event.
                        </p>
                      </div>
                      
                      {/* Card Details */}
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <div className="relative">
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            className="pl-10"
                            required
                          />
                          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input id="expiryDate" placeholder="MM/YY" required />
                        </div>
                        <div>
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" required />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="nameOnCard">Name on Card</Label>
                        <Input id="nameOnCard" required />
                      </div>
                      
                      <Separator />
                      
                      {/* Billing Address */}
                      <h3 className="text-lg font-medium">Billing Address</h3>
                      
                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" required />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input id="city" required />
                        </div>
                        <div>
                          <Label htmlFor="postalCode">Postal Code</Label>
                          <Input id="postalCode" required />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <select
                          id="country"
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                          required
                        >
                          <option value="">Select a country</option>
                          <option value="US">United States</option>
                          <option value="UK">United Kingdom</option>
                          <option value="CA">Canada</option>
                          <option value="AU">Australia</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-6">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                        Processing...
                      </>
                    ) : step === 1 ? 'Continue to Payment' : 'Complete Booking'}
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-medium mb-4">Booking Summary</h2>
                
                <div className="mb-4">
                  <img 
                    src={venue.images.main} 
                    alt={venue.name} 
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-medium">{venue.name}</h3>
                  <p className="text-muted-foreground">{venue.city}</p>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-3 text-sm">
                  {bookingDate && (
                    <div className="flex justify-between">
                      <span>Date</span>
                      <span className="font-medium">{formatDate(bookingDate)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span>Guests</span>
                    <span className="font-medium">{guestCount}</span>
                  </div>
                  
                  <Separator className="my-2" />
                  
                  <div className="flex justify-between">
                    <span>Venue Fee</span>
                    <span className="font-medium">{formatPrice(venue.price)}</span>
                  </div>
                  
                  <div className="flex justify-between text-muted-foreground">
                    <span>Service Fee</span>
                    <span>{formatPrice(venue.price * 0.05)}</span>
                  </div>
                  
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax</span>
                    <span>{formatPrice(venue.price * 0.1)}</span>
                  </div>
                  
                  <Separator className="my-2" />
                  
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>{formatPrice(venue.price * 1.15)}</span>
                  </div>
                  
                  <div className="flex justify-between text-primary">
                    <span>Due Now (20% Deposit)</span>
                    <span className="font-medium">{formatPrice(venue.price * 0.2)}</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted/30 rounded-lg text-xs text-muted-foreground">
                  <p className="mb-1">• Free cancellation up to 30 days before the event</p>
                  <p className="mb-1">• Final headcount can be adjusted up to 14 days before</p>
                  <p>• Balance payment due 30 days before event date</p>
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

export default Booking;
