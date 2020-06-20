export const findPost = (blogPosts, targetindex) => {
  const posts = [...blogPosts];
  const post = posts[targetindex];
  return [posts, post];
};
