
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VenueGrid from '../components/VenueGrid';
import SearchFilters from '../components/SearchFilters';
import { venuesData, Venue } from '../utils/data';

const Venues = () => {
  const [filteredVenues, setFilteredVenues] = useState<Venue[]>(venuesData);
  const [isFiltering, setIsFiltering] = useState(false);

  // Function to handle filter changes
  const handleFilterChange = (filtered: Venue[]) => {
    setIsFiltering(true);
    setFilteredVenues(filtered);
  };

  // Function to reset filters
  const handleResetFilters = () => {
    setIsFiltering(false);
    setFilteredVenues(venuesData);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-serif mb-4 text-center">Find Your Perfect Venue</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-center">
              Browse our collection of stunning wedding venues and find the ideal setting for your special day.
            </p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-card rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-medium">Filters</h2>
                    {isFiltering && (
                      <Button variant="ghost" size="sm" onClick={handleResetFilters}>
                        Reset
                      </Button>
                    )}
                  </div>
                  
                  <SearchFilters onFilterChange={handleFilterChange} />
                </div>
              </div>
            </div>
            
            {/* Venues Grid */}
            <div className="lg:col-span-3">
              <VenueGrid 
                venues={filteredVenues} 
                title={isFiltering ? `${filteredVenues.length} venues found` : "All Venues"} 
                description={isFiltering ? "Matching your search criteria" : "Explore our handpicked selection of wedding venues"} 
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Venues;
