import React from 'react';
import './Blogs.css';
import Blog from './Blog/Blog.js';

const Blogs = ({posts}) => {
  return (
    <div className='blogs'>
      {posts.map((post, index) => {
          return (
            <Blog key={index} post={post}/>
          );
        })}
    </div>
  );
};

export default Blogs;
