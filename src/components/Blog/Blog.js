import React, { useState } from 'react';
import { Posts } from '../../components/Posts/Posts';
import { InputText } from '../../components/InputText/InputText';
import { useBlogContext } from '../../contexts/BlogContext';

export const Blog = () => {
  const [postText, setPostText] = useState('');
  const [blogPosts, setBlogPosts] = useBlogContext();

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
        replies: [],
      };
      const posts = [...blogPosts, newPost];
      setBlogPosts(posts);
      setPostText('');
    }
  };
  return (
    <>
      <div className='container'>
        <h1>Micro Blog</h1>
        <Posts />
        <div className='blog-input-container'>
          <InputText
            value={postText}
            onInputTextChanged={handleInputTextChanged}
            onSendButtonClicked={handlePostClicked}
          />
        </div>
      </div>
    </>
  );
};
