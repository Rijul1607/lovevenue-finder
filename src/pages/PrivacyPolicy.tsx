
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12 md:py-16">
        <h1 className="text-4xl font-serif mb-6 text-center">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground text-center mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="max-w-3xl mx-auto prose prose-sm dark:prose-invert">
          <h2>Introduction</h2>
          <p>
            VenueBelle ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our venue booking services.
          </p>
          
          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, information we collect automatically when you use our services, and information from third-party sources.
          </p>
          
          <h3>Information You Provide to Us</h3>
          <ul>
            <li>Account Information: When you create an account, we collect your name, email address, phone number, and password.</li>
            <li>Profile Information: Information you add to your profile such as a profile picture, address, and preferences.</li>
            <li>Booking Information: Details related to your venue bookings including dates, payment information, special requests, and communication with venue owners.</li>
            <li>Communications: Information you provide when you contact us or respond to surveys.</li>
          </ul>
          
          <h3>Information We Collect Automatically</h3>
          <ul>
            <li>Usage Information: We collect information about how you interact with our services, such as the pages you view, the features you use, and the actions you take.</li>
            <li>Device Information: We collect information about the device you use to access our services, including hardware model, operating system, IP address, and browser type.</li>
            <li>Location Information: With your consent, we may collect information about your precise or approximate location.</li>
            <li>Cookies and Similar Technologies: We use cookies and similar technologies to collect information about your browsing behavior and preferences.</li>
          </ul>
          
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process and manage your venue bookings</li>
            <li>Facilitate payments and transactions</li>
            <li>Communicate with you about our services, updates, and promotions</li>
            <li>Personalize your experience and deliver content relevant to your interests</li>
            <li>Maintain the security of our platform and prevent fraud</li>
            <li>Comply with legal obligations and enforce our terms of service</li>
          </ul>
          
          <h2>Sharing Your Information</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Venue Owners: To facilitate bookings and communication between you and venue providers.</li>
            <li>Service Providers: Third-party companies that perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service.</li>
            <li>Business Partners: With your consent, we may share information with business partners to offer joint promotions or products.</li>
            <li>Legal Requirements: We may disclose information if required by law, regulation, legal process, or governmental request.</li>
            <li>Business Transfers: If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
          </ul>
          
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2>Your Rights and Choices</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>Access and update your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict certain processing of your data</li>
            <li>Request portability of your personal information</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Opt-out of certain communications</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the "Contact Us" section.
          </p>
          
          <h2>International Data Transfers</h2>
          <p>
            Your information may be transferred to, stored, and processed in countries other than the one in which you reside. By using our services, you consent to the transfer of information to countries that may have different data protection rules than your country.
          </p>
          
          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to children under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected personal information from a child, please contact us so we can promptly remove the information.
          </p>
          
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p>
            Email: privacy@venuebelle.com<br />
            Address: 123 Wedding Lane, Suite 101, New York, NY 10001<br />
            Phone: (123) 456-7890
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
