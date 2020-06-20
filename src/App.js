import React from 'react';
import './App.css';

import { BlogProvider } from './contexts/BlogContext';
import { Blog } from './components/Blog/Blog';

export const App = () => {
  return (
    <BlogProvider>
      <Blog />
    </BlogProvider>
  );
};
