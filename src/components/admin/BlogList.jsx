import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Pencil, Trash2, Eye, EyeOff, Loader2, Tag } from 'lucide-react';
import { getAdminPosts, deletePost, updatePost } from '../../lib/adminApi';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [togglingId, setTogglingId] = useState(null);

  const load = () =>
    getAdminPosts()
      .then(setPosts)
      .catch(console.error)
      .finally(() => setLoading(false));

  useEffect(() => { load(); }, []);

  const handleToggle = async (post) => {
    setTogglingId(post.id);
    try {
      const updated = await updatePost(post.id, { published: !post.published });
      setPosts((prev) => prev.map((p) => (p.id === post.id ? { ...p, published: updated.published } : p)));
    } catch (e) {
      console.error(e);
    } finally {
      setTogglingId(null);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Supprimer cet article définitivement ?')) return;
    setDeletingId(id);
    try {
      await deletePost(id);
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (e) {
      console.error(e);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Articles</h1>
          <p className="text-gray-400 text-sm mt-0.5">{posts.length} article{posts.length !== 1 ? 's' : ''}</p>
        </div>
        <Link
          to="/admin/blog/new"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          Nouvel article
        </Link>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-48">
          <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
        </div>
      ) : posts.length === 0 ? (
        <div className="bg-white/5 border border-white/10 rounded-xl py-16 text-center">
          <FileText className="w-10 h-10 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-400">Aucun article. Créez le premier !</p>
        </div>
      ) : (
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 text-xs uppercase tracking-wider">
                <th className="text-left px-5 py-3">Titre</th>
                <th className="text-left px-4 py-3 hidden md:table-cell">Catégorie</th>
                <th className="text-left px-4 py-3 hidden lg:table-cell">Date</th>
                <th className="text-center px-4 py-3">Statut</th>
                <th className="text-right px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-white/3 transition-colors">
                  <td className="px-5 py-4">
                    <p className="text-white font-medium line-clamp-1">{post.title}</p>
                    <p className="text-gray-500 text-xs line-clamp-1 mt-0.5">{post.excerpt}</p>
                  </td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs">
                      <Tag className="w-3 h-3" />
                      {post.category || '—'}
                    </span>
                  </td>
                  <td className="px-4 py-4 hidden lg:table-cell text-gray-400">
                    {post.created_at
                      ? format(new Date(post.created_at), 'd MMM yyyy', { locale: fr })
                      : '—'}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button
                      onClick={() => handleToggle(post)}
                      disabled={togglingId === post.id}
                      title={post.published ? 'Dépublier' : 'Publier'}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                        post.published
                          ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20'
                          : 'bg-gray-500/10 text-gray-400 hover:bg-gray-500/20'
                      }`}
                    >
                      {togglingId === post.id ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : post.published ? (
                        <Eye className="w-3 h-3" />
                      ) : (
                        <EyeOff className="w-3 h-3" />
                      )}
                      {post.published ? 'Publié' : 'Brouillon'}
                    </button>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={`/admin/blog/edit/${post.id}`}
                        className="p-1.5 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                        title="Modifier"
                      >
                        <Pencil className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
                        disabled={deletingId === post.id}
                        className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                        title="Supprimer"
                      >
                        {deletingId === post.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function FileText(props) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
}
