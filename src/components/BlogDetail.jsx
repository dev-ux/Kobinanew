import React from 'react';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';

import './BlogDetail.css';

const BlogDetail = ({ post, onBack }) => {
  const articleContent = post.content
    ? { content: post.content }
    : { content: '<p>Article en cours de rédaction...</p>' };

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