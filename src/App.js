import React from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs.js';

const App = () => {
  const placeHolderText = "What's happening?";
  return (
    <div className='container'>
      <h1>Micro Blog</h1>
      <Blogs />
      <div className='blog-input-container'>       
        <span className='blog-input-counter'>140</span>
        <input
          className='blog-input'
          placeholder={placeHolderText}
          type='text'
        />
      </div>
    </div>
  );
};

export default App;
