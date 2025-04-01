
# Supabase Database Setup

To set up the required database tables for this application, follow these steps:

1. Log in to your Supabase dashboard
2. Navigate to the SQL Editor
3. Copy the SQL code from `supabaseSchema.sql` file
4. Run the SQL script in the Supabase SQL Editor

This will create the following tables:
- `profiles`: For storing user profile information
- `wishlists`: For storing user wishlist items
- `bookings`: For storing user booking information

The script also sets up Row Level Security (RLS) policies to ensure that users can only access their own data.

## Table Schemas

### profiles
- `id`: UUID (references auth.users)
- `full_name`: TEXT
- `avatar_url`: TEXT
- `phone`: TEXT
- `created_at`: TIMESTAMP
- `updated_at`: TIMESTAMP

### wishlists
- `id`: UUID
- `user_id`: UUID (references auth.users)
- `venue_id`: TEXT
- `venue_name`: TEXT
- `venue_image`: TEXT
- `venue_price`: NUMERIC
- `venue_city`: TEXT
- `created_at`: TIMESTAMP

### bookings
- `id`: UUID
- `user_id`: UUID (references auth.users)
- `venue_id`: TEXT
- `venue_name`: TEXT
- `venue_image`: TEXT
- `check_in_date`: TEXT
- `check_out_date`: TEXT
- `guests`: INTEGER
- `total_price`: NUMERIC
- `status`: TEXT
- `created_at`: TIMESTAMP
