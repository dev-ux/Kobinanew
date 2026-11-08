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

const ALLOWED_IMAGES = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif' };
const MAX_IMAGE_BYTES = 3 * 1024 * 1024;

export async function uploadPostImage(file) {
  // Extension déduite du type MIME (jamais du nom de fichier) : bloque SVG/HTML déguisés
  const ext = ALLOWED_IMAGES[file?.type];
  if (!ext) throw new Error('Format non autorisé (JPG, PNG, WebP ou GIF uniquement).');
  if (file.size > MAX_IMAGE_BYTES) throw new Error('Image trop lourde (3 Mo maximum).');
  const random = Math.random().toString(36).slice(2, 10);
  const filename = `posts/${Date.now()}-${random}.${ext}`;
  const { data, error } = await supabase.storage
    .from('blog-images')
    .upload(filename, file, { upsert: false, contentType: file.type, cacheControl: '31536000' });
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
