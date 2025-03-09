
import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Venue, Filter, initialFilter, availableAmenities, filterVenues, venuesData } from '../utils/data';

export interface SearchFiltersProps {
  onFilterChange: (filteredVenues: Venue[]) => void;
}

const SearchFilters = ({ onFilterChange }: SearchFiltersProps) => {
  const [filters, setFilters] = useState<Filter>(initialFilter);
  const [calendarOpen, setCalendarOpen] = useState(false);

  // Apply filters and notify parent component
  useEffect(() => {
    const filteredVenues = filterVenues(venuesData, filters);
    onFilterChange(filteredVenues);
  }, [filters, onFilterChange]);

  // Handle location filter change
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, location: e.target.value });
  };

  // Handle price range filter change
  const handlePriceRangeChange = (value: number[]) => {
    setFilters({ ...filters, priceRange: [value[0], value[1]] });
  };

  // Handle guest count filter change
  const handleGuestCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(e.target.value, 10) || 0;
    setFilters({ ...filters, guestCount: count });
  };

  // Handle amenity filter change
  const handleAmenityChange = (amenity: string, checked: boolean) => {
    if (checked) {
      setFilters({ ...filters, amenities: [...filters.amenities, amenity] });
    } else {
      setFilters({
        ...filters,
        amenities: filters.amenities.filter(a => a !== amenity)
      });
    }
  };

  // Handle date selection
  const handleDateSelect = (date: Date | undefined) => {
    setCalendarOpen(false);
    if (date) {
      const isoDate = date.toISOString().split('T')[0];
      setFilters({ ...filters, date: isoDate });
    }
  };

  // Clear date filter
  const clearDateFilter = () => {
    setFilters({ ...filters, date: null });
  };

  return (
    <div className="space-y-6">
      {/* Location Filter */}
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input 
          id="location" 
          placeholder="City or region..." 
          value={filters.location}
          onChange={handleLocationChange}
        />
      </div>
      
      {/* Price Range Filter */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Price Range</Label>
          <span className="text-sm text-muted-foreground">
            ${filters.priceRange[0]} - ${filters.priceRange[1]}
          </span>
        </div>
        <Slider 
          defaultValue={[0, 10000]}
          max={10000}
          step={500}
          value={[filters.priceRange[0], filters.priceRange[1]]}
          onValueChange={handlePriceRangeChange}
        />
      </div>
      
      {/* Guest Count Filter */}
      <div className="space-y-2">
        <Label htmlFor="guests">Number of Guests</Label>
        <Input 
          id="guests" 
          type="number" 
          placeholder="100" 
          min="10" 
          max="1000"
          value={filters.guestCount.toString()}
          onChange={handleGuestCountChange}
        />
      </div>
      
      {/* Date Filter */}
      <div className="space-y-2">
        <Label>Event Date</Label>
        <div className="flex items-center gap-2">
          <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full justify-start text-left font-normal"
              >
                <Calendar className="mr-2 h-4 w-4" />
                {filters.date 
                  ? new Date(filters.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })
                  : <span>Pick a date</span>
                }
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={filters.date ? new Date(filters.date) : undefined}
                onSelect={handleDateSelect}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          
          {filters.date && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={clearDateFilter}
              className="h-10 w-10"
            >
              ×
            </Button>
          )}
        </div>
      </div>
      
      {/* Amenities Filter */}
      <div className="space-y-2">
        <Label>Amenities</Label>
        <div className="space-y-2">
          {availableAmenities.slice(0, 6).map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox 
                id={`amenity-${amenity}`} 
                checked={filters.amenities.includes(amenity)}
                onCheckedChange={(checked) => 
                  handleAmenityChange(amenity, checked === true)
                }
              />
              <label 
                htmlFor={`amenity-${amenity}`}
                className="text-sm cursor-pointer"
              >
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
