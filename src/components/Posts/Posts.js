import React, { useEffect, useRef } from 'react';
import './Posts.css';
import Post from './Post/Post.js';

const Posts = ({ posts, onHover, onLikeButtonClick }) => {
  //allows scroll to botttom automatically
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 200); //settimeout is needed for mobile devices
  };
  useEffect(scrollToBottom, [posts]);

  return (
    <div className='blogs'>
      {posts.map((post, index) => {
        return (
          <Post
            key={index}
            post={post}
            onHover={() => onHover(index)}
            onLikeButtonClick={() => onLikeButtonClick(index)}
          />
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Posts;
