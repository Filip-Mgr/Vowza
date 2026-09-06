// ============================================================
// SHARED SUPABASE CONNECTION
// Any page that needs to talk to the database loads this file
// (after the Supabase library itself) to get access to the same
// `supabase` client object — same idea as linking style.css once
// instead of repeating it on every page.
// ============================================================

const SUPABASE_URL = 'https://wavdvtdboeqffsthyqhc.supabase.co';

// The "publishable" key is Supabase's newer, recommended replacement
// for the old "anon" key — same purpose (safe to expose in a website),
// same permissions, same Row Level Security behaviour. It's the
// long-term standard going forward, so we use it here directly.
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_GulhtzKbJezPwZHWpzb_-w_Gl6wYeON';

// window.supabase here refers to the LIBRARY (loaded via the CDN
// script tag) — createClient() gives us back a client we then also
// call "supabase", which we use for every database call from here on.
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
