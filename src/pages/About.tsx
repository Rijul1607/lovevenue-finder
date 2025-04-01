
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">About Staycation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner for unforgettable experiences and exceptional hospitality.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2020, Staycation was born from a simple vision: to make exceptional accommodation accessible to everyone. Our founders saw an opportunity to transform how people discover and book venues by leveraging technology to create a transparent, user-friendly platform.
                </p>
                <p className="text-muted-foreground mb-4">
                  What started as a small team with big dreams has grown into a thriving community of hosts and travelers united by a passion for authentic experiences and meaningful connections.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to have helped millions of guests find their perfect stay while empowering property owners to share their unique spaces with the world.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden h-80">
                <img 
                  src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Our team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <Separator />
        
        {/* Our Mission */}
        <section className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              We're on a mission to connect travelers with exceptional spaces and create memorable experiences that last a lifetime.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-xl shadow-sm">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Quality & Trust</h3>
                <p className="text-muted-foreground">
                  We curate exceptional venues and maintain high standards through rigorous vetting and authentic reviews.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-xl shadow-sm">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Safety & Security</h3>
                <p className="text-muted-foreground">
                  We prioritize your safety with secure payments, data protection, and comprehensive support.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-xl shadow-sm">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Global Community</h3>
                <p className="text-muted-foreground">
                  We connect travelers with hosts, fostering cross-cultural understanding and meaningful exchanges.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif mb-12 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Transparency</h3>
                  <p className="text-muted-foreground">
                    We believe in honest, clear communication. No hidden fees, no surprises—just straightforward information so you can make confident decisions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Inclusivity</h3>
                  <p className="text-muted-foreground">
                    We celebrate diversity and create a platform where everyone feels welcome, respected, and valued regardless of background.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously evolve our platform with cutting-edge technology and creative solutions to improve the experience for hosts and guests alike.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Responsiveness</h3>
                  <p className="text-muted-foreground">
                    We're committed to providing prompt, helpful support. Your needs and concerns are our top priority, and we're always here to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of satisfied travelers who've discovered their perfect stay with Staycation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/venues">Explore Venues</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
