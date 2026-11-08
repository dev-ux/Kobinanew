# KobinaTech — site vitrine

Site de KobinaTech (React 19 + Create React App/CRACO + Tailwind), déployé sur Vercel.

## Scripts

- `yarn start` : serveur de développement
- `yarn build` : build de production (sans source maps, sans script inline pour la CSP)

## Organisation

- `src/config/site.js` : coordonnées (email, téléphone, adresse, horaires) utilisées partout
- `src/components/home/` : sections de la page d'accueil
- `src/components/layout/` : en-tête, pied de page, mise en page commune
- `src/components/admin/` : espace d'administration (chargé à la demande sous `/admin`)
- `vercel.json` : réécritures SPA, en-têtes de sécurité (CSP, HSTS…) et cache

## Variables d'environnement (Vercel → Settings → Environment Variables)

| Nom | Contenu |
| --- | --- |
| `REACT_APP_SUPABASE_URL` | URL du projet Supabase |
| `REACT_APP_SUPABASE` | Clé **publishable / anon** uniquement (jamais la clé `service_role` ou `secret`) |

Toute variable `REACT_APP_*` est intégrée au JavaScript public : n'y mettez jamais de secret.
La protection des données repose sur les règles RLS de Supabase.

## Contenus et images

N'utiliser que des textes, images et logos dont KobinaTech détient les droits.
Ne jamais charger d'images directement depuis le site d'un tiers.
