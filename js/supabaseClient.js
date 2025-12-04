// js/supabaseClient.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ✅ Replace with your actual Supabase Project URL and anon public key
const SUPABASE_URL = 'https://btuaxkjjtdvnelbbwlqo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0dWF4a2pqdGR2bmVsYmJ3bHFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MDI2NTMsImV4cCI6MjA3NjI3ODY1M30.vQTTj913oMmsIzym2HCv12M8Rm4zdB4ugYyLYOw1-hk';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
