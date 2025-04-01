
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Venue, getVenueById } from "../utils/data";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/contexts/AuthContext";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  date: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactVenue = () => {
  const { id } = useParams<{ id: string }>();
  const [venue, setVenue] = useState<Venue | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      date: "",
    },
  });

  useEffect(() => {
    if (id) {
      // Fetch venue details
      const foundVenue = getVenueById(id);
      setVenue(foundVenue || null);
      setLoading(false);

      // Pre-fill the form with user data if available
      if (user) {
        form.setValue("name", user.user_metadata?.full_name || "");
        form.setValue("email", user.email || "");
      }
    }
  }, [id, user, form]);

  const onSubmit = (data: ContactFormValues) => {
    if (!venue) return;

    // In a real app, this would send data to an API
    console.log("Form data:", data);

    toast({
      title: "Message sent",
      description: `Your message has been sent to the team at ${venue.name}. They will respond to you shortly.`,
    });

    // Navigate back to venue page
    navigate(`/venue/${id}`);
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

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Back Button */}
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link to={`/venue/${id}`} className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {venue.name}
          </Link>
        </Button>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-serif mb-2">
            Contact {venue.name}
          </h1>
          <p className="text-muted-foreground mb-8">
            Fill out the form below to reach out to the venue team with your questions or booking inquiries.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Event Date (Optional)</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
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
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your event, your requirements, or ask any questions you have about the venue..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Please include details about your event type, expected guest count, and any specific requirements.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Form>

          <div className="mt-12 bg-secondary p-6 rounded-lg">
            <h2 className="text-xl font-medium mb-4">Other Ways to Reach Us</h2>
            <div className="space-y-2">
              <p>
                <strong>Phone:</strong> {venue.phone || "(555) 123-4567"}
              </p>
              <p>
                <strong>Email:</strong> {venue.email || `info@${venue.name.toLowerCase().replace(/\s+/g, '')}.com`}
              </p>
              <p>
                <strong>Address:</strong> {venue.address || `${venue.city}, CA`}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactVenue;
