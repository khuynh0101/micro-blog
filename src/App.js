import React, { useState } from 'react';
import './App.css';

import { BlogProvider } from './contexts/BlogContext';
import { Blog } from './components/Blog/Blog';

const App = () => {
  return (
    <BlogProvider>
      <Blog />
    </BlogProvider>
  );
};

export default App;
