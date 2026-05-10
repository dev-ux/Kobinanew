import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, User, Tag, Search } from 'lucide-react';
import { Button } from './ui/button';
import BlogDetail from './BlogDetail';
import useInView from '../hooks/useInView';
import { getPosts } from '../lib/api';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const formatDate = (val) => {
  if (!val) return '';
  try { return format(new Date(val), 'd MMM yyyy', { locale: fr }); }
  catch { return val; }
};

const STATIC_POSTS = [
  {
    id: 1,
    title: "Les tendances du développement web en 2025",
    excerpt: "Découvrez les dernières innovations et technologies qui transforment le paysage du développement web cette année.",
    author: "Thomas Petit",
    created_at: "2026-01-10",
    read_time: "5 min",
    category: "Développement",
    image: "https://tunisie-innovation.tn/uploads/images/1733648239_nouveautes-marche-developpement-preparer-2025.jpeg"
  },
  {
    id: 2,
    title: "Comment choisir sa stack technologique",
    excerpt: "Un guide complet pour sélectionner les bonnes technologies adaptées à votre projet et votre équipe.",
    author: "Jean Martin",
    created_at: "2025-12-23",
    read_time: "7 min",
    category: "Architecture",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQGVY03EZ8F2IQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695727161208?e=2147483647&v=beta&t=eqZ7hkH2NrnDy7ErmbaVi4vDJYvMW44Mh0P3YX2n6bg"
  },
  {
    id: 3,
    title: "L'IA au service du développement",
    excerpt: "Explorez comment l'intelligence artificielle révolutionne les méthodes de développement moderne.",
    author: "Marie Dupont",
    created_at: "2026-01-05",
    read_time: "6 min",
    category: "IA",
    image: "https://www.essca-alumni.com/ressources/temp/images/100_851_10937705009x525_33992583436_2702898811_2024114240-1726047756-art-developpement-durable-ia-potentiel-entreprises-glavas.webp"
  },
  {
    id: 4,
    title: "Best practices pour les applications mobiles",
    excerpt: "Les bonnes pratiques à suivre pour créer des applications mobiles performantes et intuitives.",
    author: "Sophie Bernard",
    created_at: "2025-09-28",
    read_time: "8 min",
    category: "Mobile",
    image: "https://cdn.kellton.com/design-studio-s3/s3fs-public/2024-07/Mobile%20App%20Design%20Best%20Practices.jpg"
  },
  {
    id: 5,
    title: "Cloud Native : L'avenir du déploiement",
    excerpt: "Comprendre les principes du Cloud Native et pourquoi c'est essentiel pour les applications modernes.",
    author: "Jean Martin",
    created_at: "2026-02-04",
    read_time: "6 min",
    category: "Cloud",
    image: "https://cdn.prod.website-files.com/654ac8098482d38e23dbd331/654ac8098482d38e23dbd4c3_TdTX1ESooa5nISnxd26vcQoSxB3O8vNAWehVvXiW0NM.jpeg"
  },
  {
    id: 6,
    title: "UX/UI : Les fondamentaux à connaître",
    excerpt: "Les principes essentiels de design UX/UI pour créer des expériences utilisateur mémorables.",
    author: "Sophie Bernard",
    created_at: "2026-02-07",
    read_time: "5 min",
    category: "Design",
    image: "https://media.licdn.com/dms/image/v2/D5612AQFvtFCZ9u3xyA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1720177347124?e=2147483647&v=beta&t=2LF2rhm1tbomyrVkVrdQ5hzWlxoKfcVxoPR99NYoZCM"
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState(STATIC_POSTS);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tous');

  useEffect(() => {
    getPosts()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setPosts(data);
        }
      })
      .catch((err) => console.error('[Blog] Erreur chargement articles:', err))
      .finally(() => setLoading(false));
  }, []);

  // Génère les catégories dynamiquement depuis les articles chargés
  const categories = ['Tous', ...new Set(posts.map((p) => p.category).filter(Boolean))];

  const filteredPosts = posts.filter((post) => {
    const matchCategory = activeCategory === 'Tous' || post.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch = !q || [post.title, post.excerpt, post.author, post.category]
      .some((f) => f && f.toLowerCase().includes(q));
    return matchCategory && matchSearch;
  });

  const isFiltering = search.trim() !== '' || activeCategory !== 'Tous';

  const [headerRef, headerInView] = useInView(0.1);
  const [gridRef, gridInView] = useInView(0.05);

  if (selectedPost) {
    return <BlogDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-gray-300">
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button
            variant="ghost"
            className="mb-6 text-gray-400 hover:text-white"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>

          {/* Header */}
          <div
            ref={headerRef}
            className="text-center mb-12"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog <span className="shimmer-text">KOBINATECH</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez nos articles, tutoriels et analyses sur les dernières tendances
              technologiques et les meilleures pratiques du développement.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher un article..."
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    activeCategory === category
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* No results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Aucun article trouvé.</p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('Tous'); }}
                className="mt-4 text-blue-400 text-sm hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}

          {/* Featured Post — caché pendant une recherche ou si aucun résultat */}
          {filteredPosts.length > 0 && !isFiltering && (
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">Featured</span>
                  <span className="text-gray-400 text-sm">Article mis en avant</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {posts[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(posts[0].created_at)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {posts[0].read_time}
                  </div>
                </div>
                <Button
                  className="bg-white text-black hover:bg-gray-100 rounded-full"
                  onClick={() => setSelectedPost(posts[0])}
                >
                  Lire l'article
                </Button>
              </div>
              <div className="bg-white/10 rounded-xl h-64 flex items-center justify-center">
                <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          )}

          {/* Blog Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedPost(post)}
                style={{
                  opacity: gridInView ? 1 : 0,
                  transform: gridInView ? 'translateY(0)' : 'translateY(40px)',
                  transition: `opacity 0.6s ease-out ${index * 100}ms, transform 0.6s ease-out ${index * 100}ms`,
                }}
              >
                <div className="bg-white/10 h-48 flex items-center justify-center">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="h-4 w-4 text-blue-400" />
                    <span className="text-blue-400 text-sm">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {post.read_time}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.created_at)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
            >
              Charger plus d'articles
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;