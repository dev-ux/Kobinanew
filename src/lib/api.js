import { supabase } from './supabase';

export async function getPosts() {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function submitContact(formData) {
  if (!supabase) throw new Error('Supabase non configuré');

  const { error } = await supabase
    .from('contact_submissions')
    .insert([{
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      company: formData.company || null,
      subject: formData.subject,
      message: formData.message,
    }]);

  if (error) throw error;
}
