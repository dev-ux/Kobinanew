import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, Mail, AlertCircle, Plus, Loader2 } from 'lucide-react';
import { getDashboardStats, getContacts } from '../../lib/adminApi';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-gray-400 text-sm">{label}</p>
        <p className="text-white text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [recentContacts, setRecentContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getDashboardStats(), getContacts()])
      .then(([s, contacts]) => {
        setStats(s);
        setRecentContacts(contacts.slice(0, 5));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 text-sm mt-0.5">Vue d'ensemble de votre blog</p>
        </div>
        <Link
          to="/admin/blog/new"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          Nouvel article
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={FileText}
          label="Total articles"
          value={stats?.totalPosts ?? 0}
          color="bg-blue-500/20 text-blue-400"
        />
        <StatCard
          icon={CheckCircle}
          label="Publiés"
          value={stats?.publishedPosts ?? 0}
          color="bg-green-500/20 text-green-400"
        />
        <StatCard
          icon={Mail}
          label="Contacts reçus"
          value={stats?.totalContacts ?? 0}
          color="bg-purple-500/20 text-purple-400"
        />
        <StatCard
          icon={AlertCircle}
          label="Non lus"
          value={stats?.unreadContacts ?? 0}
          color="bg-orange-500/20 text-orange-400"
        />
      </div>

      {/* Recent contacts */}
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h2 className="text-white font-semibold">Derniers messages</h2>
          <Link to="/admin/contacts" className="text-blue-400 text-sm hover:underline">
            Voir tout
          </Link>
        </div>
        {recentContacts.length === 0 ? (
          <div className="px-5 py-8 text-center text-gray-500 text-sm">Aucun message</div>
        ) : (
          <div className="divide-y divide-white/5">
            {recentContacts.map((c) => (
              <div key={c.id} className="flex items-center gap-4 px-5 py-3">
                <div className={`w-2 h-2 rounded-full shrink-0 ${c.read ? 'bg-gray-600' : 'bg-blue-400'}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white font-medium truncate">{c.name}</p>
                  <p className="text-xs text-gray-400 truncate">{c.subject}</p>
                </div>
                <span className="text-xs text-gray-500 shrink-0">
                  {c.created_at
                    ? format(new Date(c.created_at), 'd MMM', { locale: fr })
                    : '—'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
