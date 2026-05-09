import { supabase } from './supabase';

export async function getAdminPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function createPost(post) {
  const { data, error } = await supabase
    .from('posts')
    .insert([post])
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updatePost(id, post) {
  const { data, error } = await supabase
    .from('posts')
    .update(post)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deletePost(id) {
  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) throw error;
}

export async function getContacts() {
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function markContactRead(id) {
  const { error } = await supabase
    .from('contact_submissions')
    .update({ read: true })
    .eq('id', id);
  if (error) throw error;
}

export async function uploadPostImage(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  const filename = `posts/${Date.now()}.${ext}`;
  const { data, error } = await supabase.storage
    .from('blog-images')
    .upload(filename, file, { upsert: true, contentType: file.type });
  if (error) throw error;
  const { data: { publicUrl } } = supabase.storage
    .from('blog-images')
    .getPublicUrl(data.path);
  return publicUrl;
}

export async function getDashboardStats() {
  const [postsRes, contactsRes] = await Promise.all([
    supabase.from('posts').select('id, published'),
    supabase.from('contact_submissions').select('id, read'),
  ]);
  if (postsRes.error) throw postsRes.error;
  if (contactsRes.error) throw contactsRes.error;

  const posts = postsRes.data ?? [];
  const contacts = contactsRes.data ?? [];

  return {
    totalPosts: posts.length,
    publishedPosts: posts.filter((p) => p.published).length,
    totalContacts: contacts.length,
    unreadContacts: contacts.filter((c) => !c.read).length,
  };
}
