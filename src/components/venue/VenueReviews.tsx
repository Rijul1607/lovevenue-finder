
import React, { useState } from 'react';
import { Star, StarHalf, StarOff } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { Review, Venue } from '@/utils/data';
import { v4 as uuidv4 } from '@supabase/supabase-js/dist/module/lib/helpers';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { supabase } from '@/lib/supabase';

interface VenueReviewsProps {
  venue: Venue;
  onReviewAdded: (review: Review) => void;
}

const formSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().min(3, {
    message: 'Comment must be at least 3 characters.',
  }).max(500, {
    message: 'Comment cannot be longer than 500 characters.'
  }),
});

const VenueReviews = ({ venue, onReviewAdded }: VenueReviewsProps) => {
  const { user } = useAuth();
  const [hoveredRating, setHoveredRating] = useState(0);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 0,
      comment: '',
    },
  });

  const handleRatingClick = (rating: number) => {
    form.setValue('rating', rating);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to leave a review.",
        variant: "destructive",
      });
      return;
    }

    try {
      const newReview: Review = {
        id: uuidv4(),
        userId: user.id,
        userName: user.user_metadata.full_name || 'Anonymous',
        rating: values.rating,
        comment: values.comment,
        date: new Date().toISOString().split('T')[0],
      };

      // In a real application, you would save this to your database
      const { error } = await supabase
        .from('venue_reviews')
        .insert({
          venue_id: venue.id,
          user_id: user.id,
          rating: values.rating,
          comment: values.comment,
        });
      
      if (error) throw error;
      
      onReviewAdded(newReview);
      
      form.reset();
      
      toast({
        title: "Review submitted",
        description: "Thank you for sharing your experience!",
      });
    } catch (error: any) {
      toast({
        title: "Failed to submit review",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  // Render stars for a given rating
  const renderStars = (rating: number, interactive = false) => {
    const stars = [];
    const displayRating = interactive ? (hoveredRating > 0 ? hoveredRating : form.getValues().rating) : rating;
    
    for (let i = 1; i <= 5; i++) {
      if (interactive) {
        // Interactive stars for the rating selector
        stars.push(
          <button
            key={i}
            type="button"
            className="focus:outline-none"
            onMouseEnter={() => setHoveredRating(i)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => handleRatingClick(i)}
          >
            {i <= displayRating ? (
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ) : (
              <StarOff className="h-6 w-6 text-gray-300" />
            )}
          </button>
        );
      } else {
        // Display-only stars for showing ratings
        if (i <= Math.floor(rating)) {
          stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
        } else if (i - 0.5 <= rating) {
          stars.push(<StarHalf key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
        } else {
          stars.push(<StarOff key={i} className="h-4 w-4 text-gray-300" />);
        }
      }
    }
    return stars;
  };

  return (
    <div className="mt-10 pt-10 border-t">
      <h2 className="text-2xl font-serif mb-6">Guest Reviews</h2>
      
      {/* Reviews list */}
      {venue.reviews && venue.reviews.length > 0 ? (
        <div className="space-y-6 mb-8">
          {venue.reviews.map((review) => (
            <div key={review.id} className="bg-card rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{review.userName}</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex mr-2">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sm">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground mb-8">No reviews yet. Be the first to share your experience!</p>
      )}
      
      {/* Add a review form */}
      <div className="bg-muted rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">Share Your Experience</h3>
        
        {user ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating</FormLabel>
                    <FormControl>
                      <div 
                        className="flex items-center"
                        onMouseLeave={() => setHoveredRating(0)}
                      >
                        {renderStars(field.value, true)}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Review</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Share your experience with this venue..." 
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full">
                Submit Review
              </Button>
            </form>
          </Form>
        ) : (
          <div className="text-center py-4">
            <p className="mb-4 text-muted-foreground">Please sign in to leave a review</p>
            <Button variant="outline" onClick={() => window.location.href = '/signin'}>
              Sign In
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VenueReviews;
