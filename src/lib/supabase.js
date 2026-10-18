import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ntlrovmirmdjnegfliqq.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50bHJvdm1pcm1kam5lZ2ZsaXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIzMjczMjIsImV4cCI6MjEwNzkwMzMyMn0.iVG1DJTh-H_cZTR5xRvsE0DMw196_LZzWZo6AxYMUmI';

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes('ntlrovmirmdjnegfliqq')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

