
import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase URL and anon key
// In production, these should be environment variables
const supabaseUrl = 'https://your-supabase-project.supabase.co';
const supabaseAnonKey = 'your-supabase-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
