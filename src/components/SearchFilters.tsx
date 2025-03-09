
import React, { useState } from 'react';
import { Calendar, Search, MapPin, Users, Sliders, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Filter, initialFilter, availableAmenities, formatPrice } from '../utils/data';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";

interface SearchFiltersProps {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  onSearch: () => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filter, setFilter, onSearch }) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(
    filter.date ? new Date(filter.date) : undefined
  );

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setFilter(prev => ({
      ...prev,
      date: selectedDate ? selectedDate.toISOString().split('T')[0] : null
    }));
  };

  const handleAmenityToggle = (amenity: string) => {
    setFilter(prev => {
      const amenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity];
      
      return { ...prev, amenities };
    });
  };

  const handlePriceChange = (value: number[]) => {
    setFilter(prev => ({ ...prev, priceRange: [value[0], value[1]] }));
  };

  const handleClear = () => {
    setFilter(initialFilter);
    setDate(undefined);
  };

  return (
    <div className="w-full">
      {/* Main Search Bar */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
            </div>
            <Input
              type="text"
              placeholder="City or venue name..."
              className="pl-10"
              value={filter.location}
              onChange={(e) => setFilter({ ...filter, location: e.target.value })}
            />
          </div>
          
          <div className="md:w-40">
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-left font-normal"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {filter.date ? new Date(filter.date).toLocaleDateString() : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="md:w-44">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                <Users className="w-5 h-5" />
              </div>
              <Input
                type="number"
                placeholder="Guest count"
                className="pl-10"
                min="0"
                value={filter.guestCount || ''}
                onChange={(e) => setFilter({ ...filter, guestCount: parseInt(e.target.value) || 0 })}
              />
            </div>
          </div>
          
          <Button className="md:w-auto" onClick={onSearch}>
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
          
          <Button
            variant="outline"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="md:w-auto"
          >
            <Sliders className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Selected Filters Display */}
        {(filter.amenities.length > 0 || filter.priceRange[0] > initialFilter.priceRange[0] || filter.priceRange[1] < initialFilter.priceRange[1]) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {filter.amenities.map(amenity => (
              <Badge key={amenity} variant="secondary" className="py-1">
                {amenity}
                <button
                  onClick={() => handleAmenityToggle(amenity)}
                  className="ml-1 rounded-full hover:bg-muted p-1"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            
            {(filter.priceRange[0] > initialFilter.priceRange[0] || filter.priceRange[1] < initialFilter.priceRange[1]) && (
              <Badge variant="secondary" className="py-1">
                {formatPrice(filter.priceRange[0])} - {formatPrice(filter.priceRange[1])}
                <button
                  onClick={() => setFilter(prev => ({ ...prev, priceRange: initialFilter.priceRange }))}
                  className="ml-1 rounded-full hover:bg-muted p-1"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="h-7 px-2 text-xs"
            >
              Clear all
            </Button>
          </div>
        )}
      </div>

      {/* Advanced Filters */}
      {isFiltersOpen && (
        <div className="mt-4 p-6 bg-white rounded-lg border shadow-sm animate-fade-in">
          <h3 className="text-lg font-medium mb-4">Advanced Filters</h3>
          
          <div className="space-y-6">
            {/* Price Range Slider */}
            <div>
              <h4 className="text-sm font-medium mb-2">Price Range</h4>
              <div className="pt-4 px-2">
                <Slider
                  defaultValue={[filter.priceRange[0], filter.priceRange[1]]}
                  max={10000}
                  step={100}
                  onValueChange={handlePriceChange}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{formatPrice(filter.priceRange[0])}</span>
                  <span>{formatPrice(filter.priceRange[1])}</span>
                </div>
              </div>
            </div>
            
            {/* Amenities */}
            <div>
              <h4 className="text-sm font-medium mb-3">Amenities</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {availableAmenities.map(amenity => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox
                      id={`amenity-${amenity}`}
                      checked={filter.amenities.includes(amenity)}
                      onCheckedChange={() => handleAmenityToggle(amenity)}
                    />
                    <label
                      htmlFor={`amenity-${amenity}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-end space-x-2 pt-2">
              <Button variant="outline" onClick={handleClear}>
                Clear All
              </Button>
              <Button onClick={() => {
                onSearch();
                setIsFiltersOpen(false);
              }}>
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
