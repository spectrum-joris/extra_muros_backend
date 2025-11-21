import { supabase } from '../utils/supabaseClient.js';

export async function insertTrip(title, owner) {
  const { data, error } = await supabase
    .from('trips')
    .insert([{ title, owner }])
    .select();
  if (error) throw error;
  return data[0];
}

export async function fetchTrips(owner) {
  const { data, error } = await supabase
    .from('trips')
    .select('*')
    .eq('owner', owner);
  if (error) throw error;
  return data;
}
