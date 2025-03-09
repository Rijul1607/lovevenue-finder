
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-serif">
                <span className="text-gold-dark">Venue</span>Belle
              </h2>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Discover and book the perfect venue for your special day, with premium spaces and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-base font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/venues" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Venues
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Features */}
          <div>
            <h3 className="text-base font-medium mb-4">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/venues?feature=catering" className="text-muted-foreground hover:text-foreground transition-colors">
                  Catering Services
                </Link>
              </li>
              <li>
                <Link to="/venues?feature=accommodation" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link to="/venues?feature=outdoor" className="text-muted-foreground hover:text-foreground transition-colors">
                  Outdoor Spaces
                </Link>
              </li>
              <li>
                <Link to="/venues?feature=decoration" className="text-muted-foreground hover:text-foreground transition-colors">
                  Decoration
                </Link>
              </li>
              <li>
                <Link to="/venues?feature=parking" className="text-muted-foreground hover:text-foreground transition-colors">
                  Parking
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-base font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Wedding Lane, Suite 101<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <a href="tel:+12345678900" className="text-muted-foreground hover:text-foreground transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <a href="mailto:info@venuebelle.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@venuebelle.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} VenueBelle. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
