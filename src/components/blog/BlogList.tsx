import React from 'react';
import BlogCard from './BlogCard';
import { blogPosts } from '../../data/blogPosts';

function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-32 p-8">
      {blogPosts.map((post) => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </div>
  );
}

export default BlogList;