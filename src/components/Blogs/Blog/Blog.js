import React from 'react';
import './Blog.css';

const Blog = ({ post }) => {
  return (
    <article className='blog-item'>
      <div className='blog-item-avatar'>{post.avatar}</div>
      <div>
        <div className='blog-item-header-flex'>
          <h2 className='blog-item-header-name'>
            {post.name} - {post.handle}
          </h2>
          <h2 className='blog-item-header-timestamp'>{post.date}</h2>
        </div>
        <p className='blog-item-content'>{post.text}</p>
      </div>
    </article>
  );
};

export default Blog;
