import { createClient } from '@supabase/supabase-js';

// 1. Ensure these are defined in your .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 2. Add detailed error logging so you know exactly what is missing
if (!supabaseUrl) {
  throw new Error("Missing VITE_SUPABASE_URL. Check your .env file.");
}
if (!supabaseAnonKey) {
  throw new Error("Missing VITE_SUPABASE_ANON_KEY. Check your .env file.");
}

// 3. Create the client
// The default configuration (LocalStorage) is usually best for standard React apps
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true, // Ensures user stays logged in after page refresh
    autoRefreshToken: true,
  }
});