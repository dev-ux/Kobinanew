import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Loader2, UploadCloud, X, ImageIcon } from 'lucide-react';
import { getAdminPosts, createPost, updatePost, uploadPostImage } from '../../lib/adminApi';

const CATEGORIES = ['Développement', 'Architecture', 'IA', 'Mobile', 'Cloud', 'Design', 'Business'];

const EMPTY = {
  title: '',
  excerpt: '',
  content: '',
  author: '',
  category: 'Développement',
  image: '',
  read_time: '5 min',
  published: false,
};

export default function BlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!isEdit) return;
    getAdminPosts()
      .then((posts) => {
        const post = posts.find((p) => String(p.id) === String(id));
        if (post) setForm(post);
      })
      .catch(() => setError('Article introuvable.'))
      .finally(() => setLoading(false));
  }, [id, isEdit]);

  const set = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleImageFile = async (file) => {
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('Fichier trop lourd (max 5 Mo).');
      return;
    }
    setUploadError('');
    setUploading(true);
    try {
      const url = await uploadPostImage(file);
      setForm((prev) => ({ ...prev, image: url }));
    } catch (err) {
      setUploadError(err.message || 'Échec de l\'upload.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSaving(true);
    try {
      const payload = {
        title: form.title,
        excerpt: form.excerpt,
        content: form.content,
        author: form.author,
        category: form.category,
        image: form.image,
        read_time: form.read_time,
        published: form.published,
      };
      if (isEdit) {
        await updatePost(id, payload);
      } else {
        await createPost(payload);
      }
      navigate('/admin/blog');
    } catch (err) {
      setError(err.message || 'Une erreur est survenue.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate('/admin/blog')}
          className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white">
            {isEdit ? 'Modifier l\'article' : 'Nouvel article'}
          </h1>
        </div>
      </div>

      {error && (
        <div className="mb-6 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Titre *</label>
          <input
            value={form.title}
            onChange={set('title')}
            required
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Titre de l'article"
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Résumé *</label>
          <textarea
            value={form.excerpt}
            onChange={set('excerpt')}
            required
            rows={3}
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
            placeholder="Courte description affichée dans la liste des articles"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">
            Contenu HTML *
          </label>
          <textarea
            value={form.content}
            onChange={set('content')}
            required
            rows={16}
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm font-mono focus:outline-none focus:border-blue-500 transition-colors resize-y"
            placeholder={'<h2>Introduction</h2>\n<p>Votre contenu ici...</p>'}
          />
          <p className="text-xs text-gray-500 mt-1">Utilisez des balises HTML : &lt;h2&gt;, &lt;h3&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;a&gt;...</p>
        </div>

        {/* Row: author + category + read_time */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Auteur *</label>
            <input
              value={form.author}
              onChange={set('author')}
              required
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Prénom Nom"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Catégorie</label>
            <select
              value={form.category}
              onChange={set('category')}
              className="w-full px-4 py-2.5 bg-[#0a0a1a] border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Temps de lecture</label>
            <input
              value={form.read_time}
              onChange={set('read_time')}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="5 min"
            />
          </div>
        </div>

        {/* Image upload */}
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Image de couverture</label>

          {/* Drop zone */}
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files[0];
              if (file) handleImageFile(file);
            }}
            className="relative flex flex-col items-center justify-center gap-2 w-full h-36 border-2 border-dashed border-white/10 rounded-xl cursor-pointer hover:border-blue-500/50 hover:bg-white/3 transition-colors"
          >
            {uploading ? (
              <>
                <Loader2 className="w-6 h-6 text-blue-400 animate-spin" />
                <span className="text-sm text-gray-400">Upload en cours...</span>
              </>
            ) : form.image ? (
              <>
                <img
                  src={form.image}
                  alt="preview"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm font-medium flex items-center gap-2">
                    <UploadCloud className="w-4 h-4" /> Changer l'image
                  </span>
                </div>
              </>
            ) : (
              <>
                <ImageIcon className="w-8 h-8 text-gray-600" />
                <span className="text-sm text-gray-400">Cliquer ou glisser une image</span>
                <span className="text-xs text-gray-600">JPG, PNG, WebP — max 5 Mo</span>
              </>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) handleImageFile(file);
              e.target.value = '';
            }}
          />

          {uploadError && (
            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
              <X className="w-3 h-3" /> {uploadError}
            </p>
          )}

          {form.image && !uploading && (
            <button
              type="button"
              onClick={() => setForm((prev) => ({ ...prev, image: '' }))}
              className="mt-2 text-xs text-gray-500 hover:text-red-400 flex items-center gap-1 transition-colors"
            >
              <X className="w-3 h-3" /> Supprimer l'image
            </button>
          )}
        </div>

        {/* Published toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setForm((prev) => ({ ...prev, published: !prev.published }))}
            className={`relative w-11 h-6 rounded-full transition-colors ${
              form.published ? 'bg-blue-500' : 'bg-white/10'
            }`}
          >
            <span
              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                form.published ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <label className="text-sm text-gray-300 cursor-pointer select-none" onClick={() => setForm((prev) => ({ ...prev, published: !prev.published }))}>
            {form.published ? 'Publié (visible sur le site)' : 'Brouillon (non visible)'}
          </label>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? 'Enregistrement...' : isEdit ? 'Enregistrer' : 'Créer l\'article'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/blog')}
            className="px-5 py-2.5 text-gray-400 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}
