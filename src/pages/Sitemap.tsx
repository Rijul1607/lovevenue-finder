
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { FileText, Map, Home, Building, User, Heart, Calendar, ShoppingBag, Mail, Info } from 'lucide-react';

const SitemapSection = ({ title, links }: { title: string, links: { name: string, url: string, icon: React.ReactNode }[] }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-serif mb-6">{title}</h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {links.map((link, index) => (
        <li key={index}>
          <Link 
            to={link.url} 
            className="flex items-center p-4 rounded-lg border border-border hover:bg-muted transition-colors"
          >
            <span className="mr-3 text-primary">{link.icon}</span>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Sitemap = () => {
  const mainLinks = [
    { name: 'Home', url: '/', icon: <Home size={18} /> },
    { name: 'Venues', url: '/venues', icon: <Building size={18} /> },
    { name: 'Services', url: '/services', icon: <ShoppingBag size={18} /> },
    { name: 'About Us', url: '/about', icon: <Info size={18} /> },
    { name: 'Contact Us', url: '/contact', icon: <Mail size={18} /> },
  ];

  const userLinks = [
    { name: 'Sign In', url: '/signin', icon: <User size={18} /> },
    { name: 'Sign Up', url: '/signup', icon: <User size={18} /> },
    { name: 'My Profile', url: '/profile', icon: <User size={18} /> },
    { name: 'My Wishlist', url: '/wishlist', icon: <Heart size={18} /> },
    { name: 'My Bookings', url: '/bookings', icon: <Calendar size={18} /> },
  ];

  const infoLinks = [
    { name: 'FAQ', url: '/faq', icon: <FileText size={18} /> },
    { name: 'Privacy Policy', url: '/privacy', icon: <FileText size={18} /> },
    { name: 'Terms of Service', url: '/terms', icon: <FileText size={18} /> },
    { name: 'Sitemap', url: '/sitemap', icon: <Map size={18} /> },
  ];

  const venueCategories = [
    { name: 'Wedding Venues', url: '/venues?category=wedding', icon: <Building size={18} /> },
    { name: 'Corporate Venues', url: '/venues?category=corporate', icon: <Building size={18} /> },
    { name: 'Birthday Venues', url: '/venues?category=birthday', icon: <Building size={18} /> },
    { name: 'Party Venues', url: '/venues?category=party', icon: <Building size={18} /> },
    { name: 'Outdoor Venues', url: '/venues?feature=outdoor', icon: <Building size={18} /> },
    { name: 'Venues with Accommodation', url: '/venues?feature=accommodation', icon: <Building size={18} /> },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12 md:py-16">
        <h1 className="text-4xl font-serif mb-6 text-center">Sitemap</h1>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Find all the pages on our website organized in a structured way.
        </p>
        
        <SitemapSection title="Main Pages" links={mainLinks} />
        <Separator className="my-8" />
        
        <SitemapSection title="User Account" links={userLinks} />
        <Separator className="my-8" />
        
        <SitemapSection title="Venue Categories" links={venueCategories} />
        <Separator className="my-8" />
        
        <SitemapSection title="Information Pages" links={infoLinks} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Sitemap;
