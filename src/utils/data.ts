export interface Venue {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  address: string;
  city: string;
  price: number;
  capacity: {
    min: number;
    max: number;
  };
  rating: number;
  reviewCount: number;
  amenities: string[];
  images: {
    main: string;
    gallery: string[];
  };
  featured: boolean;
  availability: string[]; // ISO date strings of available dates
  coordinates: {
    lat: number;
    lng: number;
  };
  reviews?: Review[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Filter {
  location: string;
  priceRange: [number, number];
  guestCount: number;
  amenities: string[];
  date: string | null;
}

export const initialFilter: Filter = {
  location: "",
  priceRange: [0, 10000],
  guestCount: 100,
  amenities: [],
  date: null
};

export const availableAmenities = [
  "Catering",
  "Decoration",
  "DJ/Music",
  "Photography",
  "Parking",
  "Accommodation",
  "AC",
  "WiFi",
  "Bar",
  "Outdoor Space",
  "Wedding Planner",
  "Bridal Suite"
];

export const venuesData: Venue[] = [
  {
    id: "grand-palace",
    name: "The Grand Palace",
    description: "The Grand Palace is an iconic luxury venue perfect for couples seeking elegance and grandeur for their special day. With its high ceilings, crystal chandeliers, and marble floors, this venue exudes timeless sophistication. Our professional staff provides impeccable service, ensuring every detail of your wedding is executed to perfection. The venue features spacious indoor halls and beautifully landscaped outdoor areas, offering versatile settings for both the ceremony and reception. Our in-house catering team crafts gourmet menus tailored to your preferences, while our partnerships with top wedding vendors ensure a seamless planning experience. The Grand Palace can accommodate both intimate gatherings and large celebrations, with state-of-the-art sound and lighting equipment to enhance your event. Create unforgettable memories in this prestigious setting that combines luxury, convenience, and outstanding service.",
    shortDescription: "A regal venue with crystal chandeliers and marble floors, perfect for elegant celebrations.",
    address: "123 Royal Avenue",
    city: "New York",
    price: 8500,
    capacity: {
      min: 150,
      max: 500
    },
    rating: 4.8,
    reviewCount: 127,
    amenities: ["Catering", "Decoration", "DJ/Music", "Photography", "Parking", "Accommodation", "AC", "WiFi", "Bar", "Wedding Planner", "Bridal Suite"],
    images: {
      main: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1498&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1528&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1470&auto=format&fit=crop"
      ]
    },
    featured: true,
    availability: [
      "2024-06-15",
      "2024-06-22",
      "2024-07-06",
      "2024-07-13",
      "2024-07-20",
      "2024-08-03",
      "2024-08-10",
      "2024-08-17"
    ],
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    },
    reviews: [
      {
        id: "r1",
        userId: "user1",
        userName: "Sarah Johnson",
        rating: 5,
        comment: "This venue was absolutely perfect for our wedding! The staff was incredibly attentive and the space is gorgeous.",
        date: "2024-03-15"
      },
      {
        id: "r2",
        userId: "user2",
        userName: "Michael Chen",
        rating: 4,
        comment: "Beautiful location with excellent amenities. Only small issue was parking for some guests.",
        date: "2024-02-28"
      }
    ]
  },
  {
    id: "seaside-villa",
    name: "Seaside Villa",
    description: "Seaside Villa offers a breathtaking oceanfront setting for couples dreaming of a romantic beach wedding. This Mediterranean-inspired venue features panoramic sea views, lush gardens, and elegant indoor spaces designed to create a perfect blend of natural beauty and sophisticated comfort. Exchange vows with the sound of waves in the background, then celebrate under the stars on our expansive terrace. Our dedicated event planners specialize in creating personalized wedding experiences that reflect your unique love story. The venue's flexible spaces can be transformed to accommodate both intimate gatherings and larger celebrations. With luxury accommodations on-site, your wedding party can enjoy the convenience of staying where the event takes place. Seaside Villa's culinary team excels in creating memorable dining experiences featuring fresh, local ingredients and customized menus. Choose this enchanting coastal retreat for a wedding that captures both elegance and the natural beauty of the seaside.",
    shortDescription: "A breathtaking oceanfront venue with panoramic views and Mediterranean-inspired architecture.",
    address: "789 Ocean Drive",
    city: "Miami",
    price: 7200,
    capacity: {
      min: 80,
      max: 250
    },
    rating: 4.9,
    reviewCount: 89,
    amenities: ["Catering", "Decoration", "DJ/Music", "Photography", "Parking", "Accommodation", "WiFi", "Bar", "Outdoor Space", "Wedding Planner"],
    images: {
      main: "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=1074&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505944357431-27579db47f79?q=80&w=1470&auto=format&fit=crop"
      ]
    },
    featured: true,
    availability: [
      "2024-06-08",
      "2024-06-29",
      "2024-07-13",
      "2024-07-27",
      "2024-08-10",
      "2024-08-24",
      "2024-09-07",
      "2024-09-21"
    ],
    coordinates: {
      lat: 25.7617,
      lng: -80.1918
    },
    reviews: [
      {
        id: "r3",
        userId: "user3",
        userName: "Emma Garcia",
        rating: 5,
        comment: "The ocean view was breathtaking! Our guests couldn't stop talking about how beautiful everything was.",
        date: "2024-03-10"
      },
      {
        id: "r4",
        userId: "user4",
        userName: "David Smith",
        rating: 4,
        comment: "Amazing venue with excellent service. Slightly pricey but worth every penny for our special day.",
        date: "2024-02-20"
      }
    ]
  },
  {
    id: "garden-retreat",
    name: "Garden Retreat",
    description: "Garden Retreat offers a serene and romantic setting amidst lush greenery and vibrant flowers. This enchanting venue is perfect for couples who envision celebrating their special day surrounded by nature's beauty. The carefully manicured gardens feature charming pathways, a picturesque gazebo, and a tranquil pond, creating numerous idyllic spots for ceremonies and photographs. In case of inclement weather, the elegant glass conservatory provides a stunning indoor alternative that maintains the garden atmosphere. Our experienced staff specializes in creating personalized experiences, with flexible packages that allow you to design your dream wedding. The venue's farm-to-table approach to catering emphasizes fresh, seasonal ingredients, many grown in our own gardens. Garden Retreat can accommodate both intimate gatherings and medium-sized events, with various garden rooms that can be reserved separately or combined. Choose this natural haven for a wedding that celebrates the beauty of love amidst the beauty of nature.",
    shortDescription: "A peaceful garden venue with lush greenery, perfect for romantic outdoor ceremonies.",
    address: "456 Bloom Street",
    city: "Chicago",
    price: 5500,
    capacity: {
      min: 50,
      max: 200
    },
    rating: 4.7,
    reviewCount: 103,
    amenities: ["Catering", "Decoration", "Photography", "Parking", "WiFi", "Outdoor Space", "Wedding Planner"],
    images: {
      main: "https://images.unsplash.com/photo-1464158641052-92939d6bca51?q=80&w=1470&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1604014056465-9e90a41178e5?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=1469&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?q=80&w=1506&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1470&auto=format&fit=crop"
      ]
    },
    featured: false,
    availability: [
      "2024-06-01",
      "2024-06-15",
      "2024-06-29",
      "2024-07-13",
      "2024-07-27",
      "2024-08-10",
      "2024-08-24",
      "2024-09-07"
    ],
    coordinates: {
      lat: 41.8781,
      lng: -87.6298
    },
    reviews: [
      {
        id: "r5",
        userId: "user5",
        userName: "Jessica Lee",
        rating: 5,
        comment: "The gardens were in full bloom for our wedding and it was magical! Couldn't have asked for a better venue.",
        date: "2024-03-05"
      }
    ]
  },
  {
    id: "mountain-lodge",
    name: "Mountain Lodge",
    description: "Mountain Lodge offers a rustic yet elegant retreat for couples seeking a wedding venue surrounded by natural beauty and tranquility. Nestled amidst majestic mountains, this timber and stone lodge combines rustic charm with modern amenities to create a warm, inviting atmosphere. The property features multiple ceremony locations, including a scenic overlook with breathtaking mountain views and a cozy indoor space with a grand stone fireplace. The expansive reception hall, with its exposed wooden beams and floor-to-ceiling windows, brings the outdoors in while providing comfort in any weather. Our culinary team specializes in hearty, sophisticated cuisine that showcases local ingredients and can be customized to your preferences. The venue offers exclusive use of the property for your wedding weekend, with comfortable on-site accommodations for you and your guests. Our experienced coordinators are familiar with the unique aspects of mountain weddings and will help you plan every detail. Choose Mountain Lodge for a wedding that feels both intimate and grand, embraced by the majesty of the mountains.",
    shortDescription: "A rustic lodge nestled in the mountains, offering scenic views and cozy indoor spaces.",
    address: "321 Pine Ridge",
    city: "Denver",
    price: 6800,
    capacity: {
      min: 60,
      max: 180
    },
    rating: 4.6,
    reviewCount: 75,
    amenities: ["Catering", "Decoration", "DJ/Music", "Photography", "Parking", "Accommodation", "WiFi", "Bar", "Outdoor Space"],
    images: {
      main: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?q=80&w=1470&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1470290378698-263af93eb11a?q=80&w=1374&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1471253387723-35c53c9f97ca?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1490122417551-6ee9691429d0?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?q=80&w=1428&auto=format&fit=crop"
      ]
    },
    featured: false,
    availability: [
      "2024-06-08",
      "2024-06-22",
      "2024-07-06",
      "2024-07-20",
      "2024-08-03",
      "2024-08-17",
      "2024-09-07",
      "2024-09-21"
    ],
    coordinates: {
      lat: 39.7392,
      lng: -104.9903
    },
    reviews: [
      {
        id: "r6",
        userId: "user6",
        userName: "Robert Wilson",
        rating: 4,
        comment: "The mountain views were stunning and the lodge itself is cozy yet elegant. Great for our winter wedding.",
        date: "2024-02-15"
      }
    ]
  },
  {
    id: "historic-mansion",
    name: "Historic Mansion",
    description: "Historic Mansion offers an exquisite blend of timeless elegance and rich history for couples seeking a sophisticated wedding venue. This meticulously restored 19th-century estate features ornate architecture, period furnishings, and museum-quality artworks that create a backdrop of refined luxury for your special day. The mansion's versatile spaces include a grand ballroom with crystal chandeliers, intimate parlors for smaller gatherings, and manicured formal gardens perfect for outdoor ceremonies. Our experienced staff takes pride in preserving the venue's historic character while providing all modern amenities and exceptional service. The mansion's professional culinary team crafts gourmet menus that can be customized to reflect both your tastes and the venue's historic significance, with options for formal seated dinners or elegant receptions. The property's distinct settings offer countless opportunities for unique and memorable photography. Choose Historic Mansion for a wedding that honors both your future together and the timeless traditions of the past, creating an atmosphere of true sophistication and romance.",
    shortDescription: "A meticulously restored 19th-century estate with ornate architecture and formal gardens.",
    address: "555 Heritage Lane",
    city: "Boston",
    price: 9200,
    capacity: {
      min: 100,
      max: 300
    },
    rating: 4.9,
    reviewCount: 112,
    amenities: ["Catering", "Decoration", "DJ/Music", "Photography", "Parking", "AC", "WiFi", "Bar", "Outdoor Space", "Wedding Planner", "Bridal Suite"],
    images: {
      main: "https://images.unsplash.com/photo-1543968996-ee822b8176ba?q=80&w=1470&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1572891086295-6c1c7c476549?q=80&w=1528&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515192088926-be262c78bf6a?q=80&w=1469&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1571575522341-ded0a910e05a?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1549312368-869bb17d0e96?q=80&w=1470&auto=format&fit=crop"
      ]
    },
    featured: true,
    availability: [
      "2024-06-01",
      "2024-06-15",
      "2024-06-29",
      "2024-07-13",
      "2024-07-27",
      "2024-08-10",
      "2024-08-24",
      "2024-09-07"
    ],
    coordinates: {
      lat: 42.3601,
      lng: -71.0589
    },
    reviews: [
      {
        id: "r7",
        userId: "user7",
        userName: "Olivia Taylor",
        rating: 5,
        comment: "This mansion has so much character and history. Our guests loved exploring all the beautiful rooms.",
        date: "2024-03-01"
      }
    ]
  },
  {
    id: "urban-loft",
    name: "Urban Loft",
    description: "Urban Loft offers a contemporary, industrial-chic space for couples seeking a modern and versatile wedding venue in the heart of the city. This converted warehouse space retains authentic elements like exposed brick walls, steel beams, and polished concrete floors, creating a blank canvas that can be transformed to reflect your personal style. The open-concept design features floor-to-ceiling windows that flood the space with natural light during the day and showcase stunning city views at night. The venue's flexible layout can accommodate both the ceremony and reception, with ample space for dining, dancing, and mingling. Our partnerships with the city's top vendors allow for seamless coordination of catering, décor, and entertainment. The loft's central location provides convenient access for guests and proximity to hotels and transportation. The building's rooftop terrace offers additional space for cocktail hours or intimate ceremonies with skyline views. Choose Urban Loft for a wedding that combines urban sophistication with unlimited creative possibilities, creating a truly memorable celebration in a distinctive setting.",
    shortDescription: "A modern, industrial-chic space with exposed brick and city views, perfect for contemporary celebrations.",
    address: "888 Metropolitan Avenue",
    city: "San Francisco",
    price: 6200,
    capacity: {
      min: 75,
      max: 220
    },
    rating: 4.7,
    reviewCount: 83,
    amenities: ["Catering", "DJ/Music", "Photography", "AC", "WiFi", "Bar", "Wedding Planner"],
    images: {
      main: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?q=80&w=1492&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515169094554-702b539b54c3?q=80&w=1470&auto=format&fit=crop"
      ]
    },
    featured: false,
    availability: [
      "2024-06-08",
      "2024-06-22",
      "2024-07-06",
      "2024-07-20",
      "2024-08-03",
      "2024-08-17",
      "2024-09-07",
      "2024-09-21"
    ],
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    },
    reviews: [
      {
        id: "r8",
        userId: "user8",
        userName: "Daniel Brown",
        rating: 4,
        comment: "Modern, sleek space that was perfect for our minimalist wedding theme. Great city views!",
        date: "2024-02-25"
      }
    ]
  }
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const getVenueById = (id: string): Venue | undefined => {
  return venuesData.find(venue => venue.id === id);
};

export const filterVenues = (venues: Venue[], filters: Filter): Venue[] => {
  return venues.filter(venue => {
    if (filters.location && !venue.city.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    
    if (venue.price < filters.priceRange[0] || venue.price > filters.priceRange[1]) {
      return false;
    }
    
    if (filters.guestCount > venue.capacity.max || filters.guestCount < venue.capacity.min) {
      return false;
    }
    
    if (filters.amenities.length > 0) {
      const hasAllAmenities = filters.amenities.every(amenity => 
        venue.amenities.includes(amenity)
      );
      if (!hasAllAmenities) return false;
    }
    
    if (filters.date && !venue.availability.includes(filters.date)) {
      return false;
    }
    
    return true;
  });
};
