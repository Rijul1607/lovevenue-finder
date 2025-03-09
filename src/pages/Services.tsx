
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-serif mb-6">Our Wedding Services</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
                Beyond beautiful venues, we offer a range of professional services to make your wedding day perfect from start to finish.
              </p>
              <Button asChild size="lg">
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Service 1 */}
              <div className="bg-card shadow-sm rounded-xl p-8 transition-all hover:shadow-md">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M8 2h8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2Z"></path>
                    <path d="M16 4v16H8V4"></path>
                    <path d="M12 12h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Wedding Planning</h3>
                <p className="text-muted-foreground mb-6">
                  Our expert wedding planners will help you orchestrate every detail, from concept to execution, ensuring a seamless celebration.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Full event coordination</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Vendor management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Timeline development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Budget planning assistance</span>
                  </li>
                </ul>
                <Link to="/services/planning" className="text-primary hover:underline flex items-center font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              {/* Service 2 */}
              <div className="bg-card shadow-sm rounded-xl p-8 transition-all hover:shadow-md">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
                    <line x1="6" x2="18" y1="17" y2="17"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Catering Services</h3>
                <p className="text-muted-foreground mb-6">
                  Exceptional dining experiences with customized menus crafted from the finest ingredients by our talented culinary team.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Custom menu creation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Professional service staff</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Dietary accommodations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Bar and beverage packages</span>
                  </li>
                </ul>
                <Link to="/services/catering" className="text-primary hover:underline flex items-center font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              {/* Service 3 */}
              <div className="bg-card shadow-sm rounded-xl p-8 transition-all hover:shadow-md">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                    <circle cx="9" cy="9" r="2"></circle>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Photography</h3>
                <p className="text-muted-foreground mb-6">
                  Capture every precious moment with our skilled photographers who blend artistry and emotion in every shot.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Engagement sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Full-day wedding coverage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Digital galleries</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Premium photo albums</span>
                  </li>
                </ul>
                <Link to="/services/photography" className="text-primary hover:underline flex items-center font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              {/* Service 4 */}
              <div className="bg-card shadow-sm rounded-xl p-8 transition-all hover:shadow-md">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                    <circle cx="17" cy="7" r="5"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Floral Design</h3>
                <p className="text-muted-foreground mb-6">
                  Transform your venue with stunning arrangements from our talented floral designers using the freshest seasonal blooms.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Bridal bouquets</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Ceremony decorations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Reception centerpieces</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Custom floral installations</span>
                  </li>
                </ul>
                <Link to="/services/floral" className="text-primary hover:underline flex items-center font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              {/* Service 5 */}
              <div className="bg-card shadow-sm rounded-xl p-8 transition-all hover:shadow-md">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M19 9V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2"></path>
                    <path d="M3 13a9 9 0 0 1 18 0"></path>
                    <path d="M3 13h4"></path>
                    <path d="M17 13h4"></path>
                    <path d="M12 20v-7"></path>
                    <path d="M15 17v3h-3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Entertainment</h3>
                <p className="text-muted-foreground mb-6">
                  Keep your guests entertained with our curated selection of musicians, DJs, and other performance artists.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Live bands & DJs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>String quartets</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Custom playlists</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Sound & lighting equipment</span>
                  </li>
                </ul>
                <Link to="/services/entertainment" className="text-primary hover:underline flex items-center font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              {/* Service 6 */}
              <div className="bg-card shadow-sm rounded-xl p-8 transition-all hover:shadow-md">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="m22 9-10 13L2 9l10-7 10 7Z"></path>
                    <path d="M6 12v8"></path>
                    <path d="M18 12v8"></path>
                    <path d="M12 9v13"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Decor & Styling</h3>
                <p className="text-muted-foreground mb-6">
                  Bring your vision to life with our expert stylists who create beautiful and personalized design concepts.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Theme development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Furniture rentals</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Lighting design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Table settings & linens</span>
                  </li>
                </ul>
                <Link to="/services/decor" className="text-primary hover:underline flex items-center font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Packages Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Wedding Packages</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from our curated packages or customize your own to create the perfect wedding experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Essential Package */}
              <div className="bg-card rounded-xl shadow-sm p-8 transition-all hover:shadow-md">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-serif mb-2">Essential Package</h3>
                  <div className="text-3xl font-bold mb-2">$3,999</div>
                  <p className="text-muted-foreground">Perfect for intimate weddings</p>
                </div>
                
                <Separator className="my-6" />
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Venue rental (6 hours)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Basic decor package</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Catering for up to 50 guests</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Wedding coordination (day-of)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Photography (6 hours)</span>
                  </li>
                </ul>
                
                <Button asChild className="w-full">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
              
              {/* Premium Package */}
              <div className="bg-card rounded-xl shadow-md p-8 transition-all hover:shadow-lg relative border border-primary/20">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-serif mb-2">Premium Package</h3>
                  <div className="text-3xl font-bold mb-2">$7,999</div>
                  <p className="text-muted-foreground">Our comprehensive solution</p>
                </div>
                
                <Separator className="my-6" />
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Venue rental (10 hours)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Premium decor & floral package</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Catering for up to 100 guests</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Full wedding planning services</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Photography & videography</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>DJ & entertainment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Custom wedding website</span>
                  </li>
                </ul>
                
                <Button className="w-full">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
              
              {/* Luxury Package */}
              <div className="bg-card rounded-xl shadow-sm p-8 transition-all hover:shadow-md">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-serif mb-2">Luxury Package</h3>
                  <div className="text-3xl font-bold mb-2">$12,999</div>
                  <p className="text-muted-foreground">The ultimate wedding experience</p>
                </div>
                
                <Separator className="my-6" />
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Exclusive venue rental (weekend)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Luxury decor & custom installations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Gourmet catering for up to 150 guests</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Premium bar package</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Comprehensive planning services</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Premium photography & cinematography</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Live band & entertainment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Luxury transportation</span>
                  </li>
                </ul>
                
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-xl shadow-md p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-serif mb-4">Ready to Plan Your Dream Wedding?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Contact us today to discuss how our services can make your wedding day everything you've imagined and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/venues">Browse Venues</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
