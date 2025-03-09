
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setEventDate('');
      setMessage('');
      
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-serif mb-6">Contact Us</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have questions or ready to start planning your wedding? Get in touch with our team.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-serif mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="bg-card rounded-xl p-8 text-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                      <Check className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. Our team will get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value)} 
                        />
                      </div>
                      <div>
                        <Label htmlFor="eventDate">Event Date (if known)</Label>
                        <Input 
                          id="eventDate" 
                          type="date" 
                          value={eventDate} 
                          onChange={(e) => setEventDate(e.target.value)} 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Your Message</Label>
                      <textarea
                        id="message"
                        className="w-full min-h-[150px] p-3 rounded-md border border-input bg-background text-sm resize-y"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full sm:w-auto" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
                
                <div className="bg-card rounded-xl shadow-sm p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Our Office</h3>
                      <p className="text-muted-foreground">
                        123 Wedding Lane<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Contact Information</h3>
                      <p className="text-muted-foreground mb-1">
                        <strong>Phone:</strong> (555) 123-4567
                      </p>
                      <p className="text-muted-foreground mb-1">
                        <strong>Email:</strong> info@weddingvenues.com
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Hours:</strong> Monday - Friday, 9am - 6pm
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Follow Us</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                          </svg>
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pinterest">
                            <line x1="12" x2="12" y1="17" y2="22"/>
                            <path d="M19.07 7a8 8 0 0 0-15.37 2.5c.1 2 1.1 3.8 3.3 4.5 0-1 .25-2.5 1-3"/>
                            <path d="M14 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map Placeholder */}
                <div className="mt-8 bg-muted rounded-xl h-64 flex items-center justify-center">
                  <p className="text-muted-foreground">Map would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our wedding venues and services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-6">
                <h3 className="text-lg font-medium mb-2">How far in advance should I book my venue?</h3>
                <p className="text-muted-foreground">
                  We recommend booking your venue 12-18 months in advance, especially for peak wedding season (May-October). Popular dates can be reserved up to 2 years in advance.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6">
                <h3 className="text-lg font-medium mb-2">What is included in the venue rental fee?</h3>
                <p className="text-muted-foreground">
                  Our venue rental typically includes the space, basic tables and chairs, setup and cleanup, and on-site staff. Additional services can be added for an extra cost.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6">
                <h3 className="text-lg font-medium mb-2">Can I bring my own vendors?</h3>
                <p className="text-muted-foreground">
                  Most of our venues allow outside vendors, though some may require you to choose from a preferred vendor list. We're happy to discuss your specific needs.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6">
                <h3 className="text-lg font-medium mb-2">Do you offer wedding planning services?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer various levels of planning services, from day-of coordination to full-service planning. Our team can help you create your perfect wedding day.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
