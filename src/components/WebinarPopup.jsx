import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function WebinarPopup() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Affiche une seule fois par session
    if (sessionStorage.getItem('webinar_popup_seen')) return;
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    sessionStorage.setItem('webinar_popup_seen', '1');
    setVisible(false);
  };

  const goToWebinar = () => {
    close();
    navigate('/webinar-ia');
  };

  if (!visible) return null;

  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={close}
    >
      {/* Card — stoppe la propagation pour ne pas fermer en cliquant dedans */}
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10 animate-popup"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton fermer */}
        <button
          onClick={close}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 border border-white/20 text-white hover:bg-black/70 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image */}
        <div className="relative">
          <img
            src="/webinar.jpg"
            alt="Webinar IA — Décision algorithmique opaques"
            className="w-full object-cover"
            style={{ maxHeight: '280px', objectPosition: 'center top' }}
          />
          {/* Gradient overlay bas */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0d1117] to-transparent" />
        </div>

        {/* Contenu */}
        <div className="bg-[#0d1117] px-6 pb-6 pt-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Webinar gratuit · En ligne
          </div>

          <h2 className="text-xl font-bold text-white mb-1 leading-snug">
            Intelligence Artificielle
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Décision algorithmique opaques
          </p>

          {/* Date + heure */}
          <div className="flex items-center gap-4 mb-5">
            <div className="flex items-center gap-1.5 text-xs text-gray-300">
              <Calendar className="w-3.5 h-3.5 text-yellow-400" />
              Samedi 18 juillet 2025
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              10h00 GMT · 12h00 CEST
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={goToWebinar}
            className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/30"
          >
            Je m'inscris gratuitement
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={close}
            className="w-full mt-2 py-2 text-xs text-gray-500 hover:text-gray-300 transition-colors"
          >
            Non merci, continuer sur le site
          </button>
        </div>
      </div>

      <style>{`
        @keyframes popup-in {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
        .animate-popup {
          animation: popup-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </div>
  );
}
