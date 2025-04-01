
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const FAQ = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12 md:py-16">
        <h1 className="text-4xl font-serif mb-6 text-center">Frequently Asked Questions</h1>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Find answers to the most common questions about our venue booking platform.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="booking-process">
              <AccordionTrigger className="text-left text-lg">How does the booking process work?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>Our booking process is simple and straightforward:</p>
                <ol className="list-decimal ml-5 mt-2 space-y-2">
                  <li>Browse our selection of venues and select one that suits your needs.</li>
                  <li>Choose your preferred dates and review availability.</li>
                  <li>Fill in your details and submit your booking request.</li>
                  <li>Receive confirmation once the venue owner approves your booking.</li>
                  <li>Make payment to secure your reservation.</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="cancellation">
              <AccordionTrigger className="text-left text-lg">What is your cancellation policy?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Cancellation policies vary by venue. Generally, cancellations made 30+ days before the event receive a full refund minus processing fees. Cancellations 15-29 days prior receive a 50% refund. Cancellations less than 14 days before the event are not eligible for refunds. Always check the specific venue's cancellation policy on their listing page.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="payment">
              <AccordionTrigger className="text-left text-lg">What payment methods do you accept?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. Payment details are securely processed through our payment gateway, ensuring your financial information remains protected.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="deposits">
              <AccordionTrigger className="text-left text-lg">Are deposits required for booking?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, most venues require a deposit to secure your booking. Deposit amounts typically range from 20% to 50% of the total booking fee, depending on the venue and the type of event. The remaining balance is usually due 14 days before your event date.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="capacity">
              <AccordionTrigger className="text-left text-lg">How do I know if a venue can accommodate my group size?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Each venue listing includes detailed information about capacity for different event types. You can filter venues by capacity when searching. If you have specific requirements or questions about accommodating your group, you can contact the venue directly through our messaging system before booking.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="catering">
              <AccordionTrigger className="text-left text-lg">Do venues provide catering services?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Some venues offer in-house catering, while others allow external caterers or have preferred catering partners. This information is specified on each venue's listing page. You can filter venues by catering options when searching. Additional fees may apply for catering services.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="equipment">
              <AccordionTrigger className="text-left text-lg">What equipment is included with venue rentals?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Available equipment varies by venue. Most venues provide basic furniture (tables, chairs), audio-visual equipment, and Wi-Fi. Specific equipment inclusions are listed on each venue's page. Additional equipment may be available for rent. We recommend confirming equipment needs when booking.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="parking">
              <AccordionTrigger className="text-left text-lg">Is parking available at the venues?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Parking availability varies by location. Venue listings indicate whether on-site parking is available and if there are any associated costs. For venues without dedicated parking, information about nearby public parking options is usually provided.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="accessibility">
              <AccordionTrigger className="text-left text-lg">Are venues accessible for people with disabilities?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Accessibility information is included on each venue listing. Look for the accessibility icon or section to find details about wheelchair access, elevators, accessible restrooms, and parking. If you have specific accessibility requirements, contact the venue directly before booking.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="account">
              <AccordionTrigger className="text-left text-lg">How do I create and manage my account?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Creating an account is simple – click the "Sign Up" button and follow the prompts. Once registered, you can manage your profile, view booking history, save favorite venues to your wishlist, and access exclusive offers. Account management options are available in your profile dashboard.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <Separator className="my-16" />
        
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our customer support team is ready to assist you with any other questions you might have.
          </p>
          <a href="/contact" className="text-primary hover:underline">
            Contact Us
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
