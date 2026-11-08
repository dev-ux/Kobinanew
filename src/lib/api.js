import { supabase } from './supabase';

export async function getPosts() {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from('posts')
    .select('id, title, excerpt, content, author, category, image, created_at')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

const LIMITS = { name: 120, email: 200, phone: 40, company: 160, subject: 160, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const clean = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

export async function submitContact(formData) {
  if (!supabase) throw new Error('Supabase non configuré');

  const payload = {
    name: clean(formData.name, LIMITS.name),
    email: clean(formData.email, LIMITS.email).toLowerCase(),
    phone: clean(formData.phone, LIMITS.phone) || null,
    company: clean(formData.company, LIMITS.company) || null,
    subject: clean(formData.subject, LIMITS.subject) || 'Demande de contact',
    message: clean(formData.message, LIMITS.message),
  };

  if (!payload.name || !payload.message || !EMAIL_RE.test(payload.email)) {
    throw new Error('Champs invalides');
  }

  // Pas de .select() : le rôle public n'a besoin que du droit d'insertion
  const { error } = await supabase.from('contact_submissions').insert([payload]);
  if (error) throw error;
}
