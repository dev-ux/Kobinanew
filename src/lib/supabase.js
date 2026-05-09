import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const isConfigured =
  supabaseUrl &&
  supabaseKey &&
  !supabaseKey.includes('REMPLACE');

export const supabase = isConfigured ? createClient(supabaseUrl, supabaseKey) : null;
