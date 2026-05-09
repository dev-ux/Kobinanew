import React, { useEffect, useState } from 'react';
import { Mail, MailOpen, Loader2, Phone, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { getContacts, markContactRead } from '../../lib/adminApi';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    getContacts()
      .then(setContacts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleExpand = async (contact) => {
    if (expanded === contact.id) {
      setExpanded(null);
      return;
    }
    setExpanded(contact.id);
    if (!contact.read) {
      await markContactRead(contact.id).catch(console.error);
      setContacts((prev) =>
        prev.map((c) => (c.id === contact.id ? { ...c, read: true } : c))
      );
    }
  };

  const unread = contacts.filter((c) => !c.read).length;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Messages contact</h1>
        <p className="text-gray-400 text-sm mt-0.5">
          {contacts.length} message{contacts.length !== 1 ? 's' : ''}
          {unread > 0 && (
            <span className="ml-2 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full">
              {unread} non lu{unread !== 1 ? 's' : ''}
            </span>
          )}
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-48">
          <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
        </div>
      ) : contacts.length === 0 ? (
        <div className="bg-white/5 border border-white/10 rounded-xl py-16 text-center">
          <Mail className="w-10 h-10 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-400">Aucun message pour le moment.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`bg-white/5 border rounded-xl overflow-hidden transition-colors ${
                contact.read ? 'border-white/10' : 'border-blue-500/30'
              }`}
            >
              {/* Header row */}
              <button
                onClick={() => handleExpand(contact)}
                className="w-full flex items-center gap-4 px-5 py-4 hover:bg-white/3 transition-colors text-left"
              >
                <div className="shrink-0">
                  {contact.read ? (
                    <MailOpen className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Mail className="w-5 h-5 text-blue-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`font-medium text-sm ${contact.read ? 'text-gray-300' : 'text-white'}`}>
                      {contact.name}
                    </span>
                    <span className="text-gray-500 text-sm">{contact.email}</span>
                    {!contact.read && (
                      <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                    )}
                  </div>
                  <p className="text-gray-400 text-sm truncate mt-0.5">{contact.subject}</p>
                </div>
                <span className="text-xs text-gray-500 shrink-0 hidden sm:block">
                  {contact.created_at
                    ? format(new Date(contact.created_at), 'd MMM yyyy, HH:mm', { locale: fr })
                    : '—'}
                </span>
                {expanded === contact.id ? (
                  <ChevronUp className="w-4 h-4 text-gray-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
                )}
              </button>

              {/* Expanded content */}
              {expanded === contact.id && (
                <div className="px-5 pb-5 border-t border-white/10 pt-4">
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    {contact.phone && (
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5" />
                        {contact.phone}
                      </div>
                    )}
                    {contact.company && (
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5" />
                        {contact.company}
                      </div>
                    )}
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-blue-400 hover:underline"
                    >
                      Répondre par email
                    </a>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4 text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {contact.message}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
