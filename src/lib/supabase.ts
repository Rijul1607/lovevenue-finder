
import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase URL and anon key
const supabaseUrl = 'https://vhiqkcufxakllbppebjg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoaXFrY3VmeGFrbGxicHBlYmpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyNzE3NzEsImV4cCI6MjAyNjg0Nzc3MX0.7QcYrAZAX79JxVK8jw1rBX7Mq0Zzrw0hQ9i-fYS4kEw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
