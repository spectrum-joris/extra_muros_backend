import { supabase } from '../utils/supabaseClient.js';

export async function insertContentItem(trip_id, module_id, type, title, body, storage_path, published) {
  const { data, error } = await supabase
    .from('content_items')
    .insert([{ trip_id, module_id, type, title, body, storage_path, published }])
    .select();
  if (error) throw error;
  return data[0];
}

export async function fetchContentItems(trip_id, module_id) {
  const { data, error } = await supabase
    .from('content_items')
    .select('*')
    .eq('trip_id', trip_id)
    .eq('module_id', module_id);
  if (error) throw error;
  return data;
}
