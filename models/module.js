import { supabase } from '../utils/supabaseClient.js';

export async function insertModule(trip_id, title, latitude, longitude) {
  const { data, error } = await supabase
    .from('modules')
    .insert([{ trip_id, title, latitude, longitude }])
    .select();
  if (error) throw error;
  return data[0];
}

export async function fetchModules(trip_id) {
  const { data, error } = await supabase
    .from('modules')
    .select('*')
    .eq('trip_id', trip_id);
  if (error) throw error;
  return data;
}
