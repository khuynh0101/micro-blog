import React, { useEffect, useRef } from 'react';
import './Blogs.css';
import Blog from './Blog/Blog.js';

const Blogs = ({ posts }) => {
  //allows scroll to botttom automatically
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    console.log('scrolling');
    setTimeout(() => {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 200); //settimeout is needed for mobile devices
  };
  useEffect(scrollToBottom, [posts]);

  return (
    <div className='blogs'>
      {posts.map((post, index) => {
        return <Blog key={index} post={post} />;
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Blogs;
