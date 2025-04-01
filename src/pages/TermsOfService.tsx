
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const TermsOfService = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12 md:py-16">
        <h1 className="text-4xl font-serif mb-6 text-center">Terms of Service</h1>
        <p className="text-sm text-muted-foreground text-center mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="max-w-3xl mx-auto prose prose-sm dark:prose-invert">
          <h2>1. Acceptance of Terms</h2>
          <p>
            Welcome to VenueBelle. By accessing or using our website, mobile applications, or services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
          </p>
          
          <h2>2. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.
          </p>
          
          <h2>3. Account Registration</h2>
          <p>
            To access certain features of our Services, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>
          
          <h2>4. Venue Booking</h2>
          <h3>4.1 Booking Process</h3>
          <p>
            Our platform allows you to browse, search for, and book venues for events. When you make a booking, you enter into a direct contract with the venue owner or operator. We act as an intermediary and are not a party to this contract.
          </p>
          
          <h3>4.2 Fees and Payment</h3>
          <p>
            Prices for venues are set by venue owners or operators. We may charge a service fee for using our platform. All applicable fees will be displayed before you confirm your booking. Payment methods accepted are specified during the checkout process. You agree to pay all charges incurred in connection with your bookings at the rates in effect when the charges are incurred.
          </p>
          
          <h3>4.3 Cancellations and Refunds</h3>
          <p>
            Cancellation policies vary by venue and are specified in each venue listing. We are not responsible for offering refunds or making exceptions to the venue's cancellation policy. Any refund will be processed according to the venue's policy and our refund procedures.
          </p>
          
          <h2>5. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Services in any way that violates applicable laws or regulations</li>
            <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity</li>
            <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
            <li>Use the Services to send spam, chain letters, or other unsolicited communications</li>
            <li>Attempt to gain unauthorized access to any portion of the Services</li>
            <li>Collect or store personal data about other users without their consent</li>
            <li>Use the Services for any harmful or abusive purpose</li>
          </ul>
          
          <h2>6. User Content</h2>
          <p>
            Our Services may allow you to post, upload, or submit content such as reviews, photos, and messages (collectively, "User Content"). You retain ownership of your User Content, but you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content for the purpose of providing and promoting our Services.
          </p>
          <p>
            You are solely responsible for your User Content and the consequences of posting it. By posting User Content, you represent and warrant that:
          </p>
          <ul>
            <li>You own or have the necessary rights to use and authorize us to use your User Content</li>
            <li>Your User Content does not infringe upon the rights of any third party</li>
            <li>Your User Content does not violate any applicable laws or regulations</li>
          </ul>
          
          <h2>7. Intellectual Property</h2>
          <p>
            The Services and their content, features, and functionality are owned by VenueBelle and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our Services without our explicit permission.
          </p>
          
          <h2>8. Disclaimer of Warranties</h2>
          <p>
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p>
            WE DO NOT GUARANTEE THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>
          
          <h2>9. Limitation of Liability</h2>
          <p>
            IN NO EVENT SHALL VENUEBELLE, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
          </p>
          <ul>
            <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES</li>
            <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES</li>
            <li>ANY CONTENT OBTAINED FROM THE SERVICES</li>
            <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
          </ul>
          
          <h2>10. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless VenueBelle, its officers, directors, employees, and agents, from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the Services, your violation of these Terms, or your violation of any third-party rights.
          </p>
          
          <h2>11. Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Services will immediately cease.
          </p>
          
          <h2>12. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located in New York County, New York.
          </p>
          
          <h2>13. Entire Agreement</h2>
          <p>
            These Terms constitute the entire agreement between you and VenueBelle regarding our Services and supersede all prior and contemporaneous agreements, proposals, or representations, written or oral, concerning the Services.
          </p>
          
          <h2>14. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            Email: terms@venuebelle.com<br />
            Address: 123 Wedding Lane, Suite 101, New York, NY 10001<br />
            Phone: (123) 456-7890
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
