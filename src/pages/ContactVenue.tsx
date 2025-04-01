
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getVenueById } from '@/utils/data';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  eventDate: z.string().optional(),
  eventType: z.string().min(2, {
    message: "Please specify your event type.",
  }),
  guestCount: z.string().min(1, {
    message: "Please specify your expected guest count.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactVenue = () => {
  const { id } = useParams<{ id: string }>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [venue, setVenue] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      eventType: "",
      guestCount: "",
      message: "",
    },
  });

  useEffect(() => {
    if (id) {
      const venueData = getVenueById(id);
      setVenue(venueData || null);
      setLoading(false);
    }
  }, [id]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!venue) return;
    
    setIsSubmitting(true);
    
    // In a real app, this would send the form data to a server
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      toast({
        title: "Inquiry sent",
        description: `Your message has been sent to ${venue.name}. They will contact you shortly.`,
      });
      
      form.reset();
      setIsSubmitting(false);
    }, 1500);
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

      <main className="flex-1 container mx-auto px-4 py-6">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link to={`/venue/${id}`} className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to venue
          </Link>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-serif mb-2">Contact {venue.name}</h1>
            <p className="text-muted-foreground mb-6">
              Fill out the form below to inquire about this venue for your event.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Date (Optional)</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Type</FormLabel>
                        <FormControl>
                          <Input placeholder="Wedding, Conference, Birthday, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="guestCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expected Guest Count</FormLabel>
                        <FormControl>
                          <Input placeholder="100" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more about your event and any specific requirements you have." 
                          className="min-h-[150px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Venue Contact Information */}
          <div className="md:col-span-1">
            <div className="bg-muted rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-medium mb-4">Venue Information</h2>
              
              <div className="space-y-4">
                <div>
                  <img 
                    src={venue.images.main} 
                    alt={venue.name} 
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-medium">{venue.name}</h3>
                  <p className="text-sm text-muted-foreground">{venue.city}</p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm">{venue.address}, {venue.city}</p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm">(Contact number will be provided after inquiry)</p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm">(Email will be provided after inquiry)</p>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Typical response time: Within 24 hours
                  </p>
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

export default ContactVenue;
