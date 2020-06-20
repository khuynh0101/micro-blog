import React, { createContext, useContext } from 'react';
import { useStore } from '../utils/useStore';

const BlogContext = createContext([]);

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useStore([]);

  return (
    <BlogContext.Provider value={[blogPosts, setBlogPosts]}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const [blogPosts, setBlogPosts] = useContext(BlogContext);
  return [blogPosts, setBlogPosts];
};
