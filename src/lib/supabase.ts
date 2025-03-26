
import { createClient } from '@supabase/supabase-js';

// Supabase project configuration
const supabaseUrl = 'https://vylvhvzvhjudxvnsvskk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5bHZodnp2aGp1ZHh2bnN2c2trIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5NzAxODEsImV4cCI6MjA1ODU0NjE4MX0.8DW22axIq6zQhBMN-QNv1rdUiqobdEQsZXi5UyTxIGo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
