import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs.js';
import InputText from './components/InputText/InputText.js';

import posts from './data/blog-posts.json';

const App = () => {
  const [postText, setPostText] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(posts);
  }, []);

  const handleInputTextChanged = (e) => {
    //change max length into context
    if (e.target.value.length <= 140) setPostText(e.target.value);
  };

  const handlePostClicked = () => {
    if (postText.trim().length > 0) {
      const newPost = {
        avatar: 'KH',
        name: 'Khuong Huynh',
        handle: '@khuonghuynh',
        date: Date.now(),
        text: postText,
        isMyPost: true,
      };
      const posts = [...blogPosts, newPost];
      setBlogPosts(posts);
      setPostText('');
    }
  };
  return (
    <div className='container'>
      <h1>Micro Blog</h1>
      <Blogs posts={blogPosts} />
      <InputText
        value={postText}
        onInputTextChanged={handleInputTextChanged}
        onSendButtonClicked={handlePostClicked}
      />
    </div>
  );
};

export default App;
