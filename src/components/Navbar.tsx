
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X, User, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-serif font-medium tracking-tight"
          >
            <span className="text-gold-dark">Venue</span>Belle
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-item text-sm font-medium">
              Home
            </Link>
            <Link to="/venues" className="nav-item text-sm font-medium">
              Venues
            </Link>
            <Link to="/services" className="nav-item text-sm font-medium">
              Services
            </Link>
            <Link to="/about" className="nav-item text-sm font-medium">
              About
            </Link>
            <Link to="/contact" className="nav-item text-sm font-medium">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/wishlist" 
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </Link>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    {user.user_metadata?.full_name || user.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/wishlist">My Wishlist</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/bookings">My Bookings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to="/signin"
                className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-white/95 backdrop-blur-md z-40 animate-fade-in">
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            <Link 
              to="/" 
              className="text-lg font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/venues" 
              className="text-lg font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Venues
            </Link>
            <Link 
              to="/services" 
              className="text-lg font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-lg font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-lg font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
              <Link 
                to="/wishlist" 
                className="flex items-center space-x-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="w-5 h-5" />
                <span>Wishlist</span>
              </Link>
            </div>
            
            {user ? (
              <div className="space-y-3">
                <div className="py-2 font-medium">
                  {user.user_metadata?.full_name || user.email}
                </div>
                <Link
                  to="/profile"
                  className="block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/bookings"
                  className="block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Bookings
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full justify-start" 
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link
                to="/signin"
                className="w-full px-4 py-3 rounded-md bg-primary text-white text-center hover:bg-primary/90 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
