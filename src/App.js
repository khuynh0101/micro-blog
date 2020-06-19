import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Posts from './components/Posts/Posts.js';
import InputText from './components/InputText/InputText.js';
import useStore from './utils/useStore.js';

//import posts from './data/blog-posts.json';

const App = () => {
  const [postText, setPostText] = useState('');
  const [blogPosts, setBlogPosts] = useStore([]);

  // useEffect(() => {
  //   setBlogPosts(posts);
  // }, []);

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
        isHovered: false,
        features: {
          isLike: false,
          count: 0,
        },
      };
      const posts = [...blogPosts, newPost];
      setBlogPosts(posts);
      setPostText('');
    }
  };
  const handleHoverToggle = (index) => {
    const [posts, post] = getPost(index);
    if (!post.isMyPost) {
      post.isHovered = true; //!post.isHovered;
      setBlogPosts(posts);
    }
  };
  const handleLikeButtonClick = (index) => {
    const [posts, post] = getPost(index);
    if (!post.features) {
      //have to create features object
      post.features = {};
      post.features.isLike = true;
      if (!post.features.count) post.features.count = 0;
      post.features.count++;
    }
    console.log(post);
    setBlogPosts(posts);
  };

  const getPost = (targetindex) => {
    const posts = [...blogPosts];
    const post = posts[targetindex];
    return [posts, post];
  };

  return (
    <div className='container'>
      <h1>Micro Blog</h1>
      <Posts
        posts={blogPosts}
        onHover={handleHoverToggle}
        onLikeButtonClick={handleLikeButtonClick}
      />
      <InputText
        value={postText}
        onInputTextChanged={handleInputTextChanged}
        onSendButtonClicked={handlePostClicked}
      />
    </div>
  );
};

export default App;
