import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-500 mb-4">404</h1>
          <p className="text-gray-400 mb-4">Blog post not found</p>
          <Link to="/blog" className="text-green-500 hover:underline">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto pt-64 pb-32 pl-6 pr-6">
      <Link 
        to="/blog" 
        className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to all posts
      </Link>

      <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
        <img 
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-0 p-8">
            <div className="text-green-500 text-sm mb-2 font-mono">{post.date}</div>
            <h1 className="text-4xl font-bold font-mono">
              {post.title}
              <span className="text-green-500"> ({post.subtitle})</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="prose prose-invert prose-green max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}

export default BlogPost;