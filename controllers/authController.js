// backend/controllers/authController.js
import { supabase } from '../utils/supabaseClient.js';

export async function register(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email en wachtwoord zijn verplicht' });
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // Als email confirmation aanstaat, kan session null zijn
    const accessToken = data.session?.access_token || null;

    return res.json({
      user: data.user,
      access_token: accessToken,
      needs_email_confirmation: !accessToken,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email en wachtwoord zijn verplicht' });
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.json({
      user: data.user,
      access_token: data.session.access_token,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
