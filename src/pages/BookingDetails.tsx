
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { CalendarCheck, ArrowLeft, MapPin, Calendar, Users, DollarSign, Trash, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { formatPrice } from '../utils/data';

interface Booking {
  id: string;
  created_at: string;
  user_id: string;
  venue_id: string;
  venue_name: string;
  venue_image: string;
  check_in_date: string;
  check_out_date: string;
  guests: number;
  total_price: number;
  status: string;
}

const BookingDetails = () => {
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookingDetails = async () => {
      if (!user || !id) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .eq('id', id)
          .eq('user_id', user.id)
          .single();

        if (error) throw error;
        setBooking(data);
      } catch (error) {
        console.error('Error fetching booking details:', error);
        toast({
          title: "Error loading booking details",
          description: "There was a problem fetching your booking details. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBookingDetails();
  }, [user, id]);

  const handleDeleteBooking = async () => {
    if (!booking || !user) return;
    
    setDeleteLoading(true);
    try {
      const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', booking.id)
        .eq('user_id', user.id);

      if (error) throw error;

      toast({
        title: "Booking cancelled",
        description: "Your booking has been successfully cancelled.",
      });
      
      navigate('/bookings');
    } catch (error) {
      console.error('Error deleting booking:', error);
      toast({
        title: "Error cancelling booking",
        description: "There was a problem cancelling your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setDeleteLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          {/* Back Button */}
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link to="/bookings" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to my bookings
            </Link>
          </Button>

          {/* Booking Details Content */}
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : booking ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl font-serif">Booking Details</CardTitle>
                        <CardDescription>Booking ID: {booking.id}</CardDescription>
                      </div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        booking.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : booking.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="h-48 md:w-48 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={booking.venue_image} 
                          alt={booking.venue_name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="space-y-3 flex-grow">
                        <h3 className="text-xl font-medium">{booking.venue_name}</h3>
                        <Link 
                          to={`/venue/${booking.venue_id}`}
                          className="inline-flex items-center text-primary hover:underline"
                        >
                          <MapPin className="h-4 w-4 mr-1" />
                          View Venue Details
                        </Link>
                        
                        <div className="flex items-center gap-2 text-muted-foreground mt-4">
                          <Calendar className="h-4 w-4" />
                          <p>Stay dates: {formatDate(booking.check_in_date)} - {formatDate(booking.check_out_date)}</p>
                        </div>
                        
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <p>Guests: {booking.guests}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          <p className="font-semibold">Total: {formatPrice(booking.total_price)}</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Info className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Booking Information</h4>
                          <p className="text-sm text-muted-foreground">
                            Booking made on {new Date(booking.created_at).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link to={`/venue/${booking.venue_id}`}>View Venue</Link>
                    </Button>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">
                          <Trash className="mr-2 h-4 w-4" />
                          Cancel Booking
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently cancel your booking.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction 
                            onClick={handleDeleteBooking} 
                            disabled={deleteLoading}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            {deleteLoading ? 'Cancelling...' : 'Yes, cancel booking'}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </CardFooter>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Need assistance?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      If you need to make changes to your booking or have any questions, our support team is here to help.
                    </p>
                    <Button asChild className="w-full">
                      <Link to="/contact">Contact Support</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-muted/20 rounded-xl mb-16">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-6">
                <CalendarCheck className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-serif mb-3">Booking not found</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                We couldn't find the booking you were looking for. It may have been cancelled or removed.
              </p>
              <Button asChild>
                <Link to="/bookings">View All Bookings</Link>
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingDetails;
