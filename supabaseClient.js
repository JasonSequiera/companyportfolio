import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://glvgqccvoxfrrgzhjxum.supabase.co"; // from Supabase
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsdmdxY2N2b3hmcnJnemhqeHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MDY5NDYsImV4cCI6MjA3Mjk4Mjk0Nn0.Z1LOCehtO1zO4HFCG8D6_8gAxvv55oTwg4pwGWpMK50"; // from Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);
