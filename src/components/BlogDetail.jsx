import React from 'react';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { Button } from './ui/button';
import Navbar from './Navbar';
import './BlogDetail.css';

const BlogDetail = ({ post, onBack }) => {
  const fullContent = {
    1: {
      content: `
        <h2>Introduction</h2>
        <p>Le développement web évolue à une vitesse fulgurante, et 2024 ne fait pas exception. Cette année marque un tournant avec l'adoption massive de nouvelles technologies qui redéfinissent la façon dont nous construisons des applications web.</p>
        
        <h2>Les Frameworks Modernes</h2>
        <p>React 19, Vue 3 et Angular 17 continuent de dominer le marché, mais avec des approches différentes. React se concentre sur les Server Components, Vue sur la performance et Angular sur l'entreprise.</p>
        
        <h2>L'Ère du TypeScript</h2>
        <p>TypeScript n'est plus une option, mais un standard. Les entreprises l'adoptent massivement pour la robustesse qu'il apporte aux projets JavaScript.</p>
        
        <h2>WebAssembly et le Futur</h2>
        <p>WebAssembly ouvre de nouvelles possibilités pour les applications web haute performance, permettant d'exécuter du code C++, Rust et autres langages compilés directement dans le navigateur.</p>
        
        <h2>Conclusion</h2>
        <p>Restez à l'affût de ces tendances pour rester compétitif dans le monde du développement web moderne.</p>
      `
    },
    2: {
      content: `
        <h2>Introduction</h2>
        <p>Choisir la bonne stack technologique est crucial pour le succès de tout projet de développement. Ce guide vous aidera à prendre les bonnes décisions.</p>
        
        <h2>Frontend : React vs Vue vs Angular</h2>
        <p>Chaque framework a ses avantages. React offre une grande flexibilité, Vue une courbe d'apprentissage douce, et Angular une solution complète pour les entreprises.</p>
        
        <h2>Backend : Node.js vs Python vs Java</h2>
        <p>Node.js excelle dans les applications temps réel, Python dans l'IA et l'analyse de données, Java dans les applications d'entreprise robustes.</p>
        
        <h2>Base de Données</h2>
        <p>Choisissez entre SQL pour les données structurées et NoSQL pour la flexibilité. PostgreSQL et MongoDB restent des choix populaires.</p>
        
        <h2>Conclusion</h2>
        <p>La meilleure stack dépend de vos besoins spécifiques, de l'expertise de votre équipe et des exigences du projet.</p>
      `
    },
    3: {
      content: `
        <h2>Introduction</h2>
        <p>L'intelligence artificielle transforme radicalement le développement logiciel, des outils de codage assisté aux méthodes de test automatisées.</p>
        
        <h2>Copilot et les Assistants de Code</h2>
        <p>GitHub Copilot et autres assistants IA révolutionnent la productivité des développeurs en suggérant du code pertinent en temps réel.</p>
        
        <h2>Tests Automatisés par IA</h2>
        <p>L'IA génère automatiquement des tests unitaires et d'intégration, réduisant considérablement le temps de débogage.</p>
        
        <h2>Déploiement Intelligent</h2>
        <p>Les systèmes CI/CD intégrés à l'IA optimisent les déploiements et prédisent les problèmes avant qu'ils ne surviennent.</p>
        
        <h2>Conclusion</h2>
        <p>L'IA n'est plus un luxe mais un outil essentiel pour les développeurs modernes.</p>
      `
    },
    4: {
      content: `
        <h2>Introduction</h2>
        <p>Le développement mobile nécessite une approche spécifique pour garantir performance et expérience utilisateur optimale.</p>
        
        <h2>Performance et Optimisation</h2>
        <p>Optimisez les images, utilisez le lazy loading, et minimisez les requêtes réseau pour des applications rapides et réactives.</p>
        
        <h2>Design Responsive</h2>
        <p>Adaptez votre interface à toutes les tailles d'écran, des petits smartphones aux tablettes, en utilisant des grilles flexibles.</p>
        
        <h2>Sécurité Mobile</h2>
        <p>Protégez les données utilisateur avec chiffrement, authentification forte et validation côté serveur.</p>
        
        <h2>Conclusion</h2>
        <p>Une application mobile réussie allie performance, sécurité et expérience utilisateur exceptionnelle.</p>
      `
    },
    5: {
      content: `
        <h2>Introduction</h2>
        <p>Le Cloud Native représente l'évolution du déploiement applicatif, conçu spécifiquement pour les environnements cloud.</p>
        
        <h2>Conteneurs et Kubernetes</h2>
        <p>Docker et Kubernetes sont les piliers du Cloud Native, permettant un déploiement scalable et résilient des applications.</p>
        
        <h2>Microservices</h2>
        <p>L'architecture microservices décompose les applications en services indépendants, facilitant la maintenance et l'évolution.</p>
        
        <h2>Observabilité</h2>
        <p>Surveillez, tracez et débuggez vos applications avec des outils modernes comme Prometheus et Grafana.</p>
        
        <h2>Conclusion</h2>
        <p>Le Cloud Native n'est pas seulement une technologie, mais une nouvelle façon de penser le développement logiciel.</p>
      `
    },
    6: {
      content: `
        <h2>Introduction</h2>
        <p>Le design UX/UI est essentiel pour créer des produits que les utilisateurs aiment vraiment utiliser.</p>
        
        <h2>Les Principes UX</h2>
        <p>Utilisabilité, accessibilité et cohérence sont les piliers d'une bonne expérience utilisateur.</p>
        
        <h2>Design UI Moderne</h2>
        <p>Minimalisme, typographie claire et palette de couleurs cohérente définissent le design moderne.</p>
        
        <h2>Tests Utilisateurs</h2>
        <p>Testez régulièrement vos designs avec de vrais utilisateurs pour identifier les points de friction.</p>
        
        <h2>Conclusion</h2>
        <p>Un bon design UX/UI transforme un produit fonctionnel en une expérience mémorable.</p>
      `
    }
  };

  const articleContent = fullContent[post.id] || { content: '<p>Article en cours de rédaction...</p>' };

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-gray-300">
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Retour au blog cliqué');
              if (onBack && typeof onBack === 'function') {
                onBack();
              } else {
                console.error('onBack is not defined or not a function');
              }
            }}
            className="mb-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded inline-flex items-center gap-2"
            type="button"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </button>

          <article className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {post.category}
                </div>
              </div>
            </header>

            <div className="mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>

            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: articleContent.content }}
            />
          </article>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;