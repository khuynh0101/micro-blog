import React from 'react';
import './Blog.css';

const Blog = () => {
  return (      
    <article className='blog-item'>
      <h2 className='blog-item-header-name'>Mary Meeker</h2>
      <h2 className='blog-item-header-timestamp'>Jan 16 6:36am</h2>
      <p className='blog-item-content'>
        my blog post my blog postmy blog postmy blog postmy blog postmy blog
        postmy blog post
      </p>
    </article>
    
  );
};

export default Blog;
