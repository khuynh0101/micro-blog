import React, { useEffect, useRef } from 'react';
import './Posts.css';
import { Post } from './Post/Post';
import { useBlogContext } from '../../contexts/BlogContext';

export const Posts = ({}) => {
  const [posts] = useBlogContext();
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
        return <Post key={index} index={index} post={post} />;
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};
