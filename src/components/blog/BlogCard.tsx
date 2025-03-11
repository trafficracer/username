import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  subtitle: string;
  image: string;
  date: string;
  slug: string;
}

function BlogCard({ title, subtitle, image, date, slug }: BlogCardProps) {
  return (
    <article className="bg-gray-900 rounded-lg overflow-hidden group hover:ring-2 hover:ring-green-500/50 transition-all duration-300">
      <a href={`/blog/${slug}`} className="block">
        <div className="relative h-[250px] overflow-hidden">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <div className="p-6">
          <div className="text-green-500 text-sm mb-2 font-mono">{date}</div>
          <h2 className="text-2xl font-bold mb-2 font-mono group-hover:text-green-500 transition-colors">
            {title}
          </h2>
          <p className="text-gray-400 mb-4">{subtitle}</p>
          <div className="flex items-center text-green-500 font-mono">
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
          </div>
        </div>
      </a>
    </article>
  );
}

export default BlogCard;