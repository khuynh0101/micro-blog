import React from 'react';
import './Blog.css';
import formatDate from '../../../utils/formatDate.js';

const Blog = ({ post }) => {
  return (
    <article className='blog-item'>
      {!post.isMyPost && (
        <>
          <div className='blog-item-avatar'>{post.avatar}</div>
          <div>
            <div className='blog-item-header-flex'>
              <h2 className='blog-item-header-name'>
                {post.name} - {post.handle}
              </h2>
              <h2 className='blog-item-header-timestamp'>
                {formatDate(post.date)}
              </h2>
            </div>
            <p className='blog-item-content'>{post.text}</p>
          </div>
        </>
      )}

      {post.isMyPost && (
        <>
          <div></div>
          <div>
            <div className='blog-item-header-flex'>
              <h2 className='blog-item-header-timestamp'>
              {formatDate(post.date)}
              </h2>
              <h2>
              </h2>
            </div>            
            <p className='blog-item-content mycontent'>{post.text}</p>
          </div>
          <div className='blog-item-avatar right'>{post.avatar}</div>
        </>
      )}
    </article>
  );
};

export default Blog;
