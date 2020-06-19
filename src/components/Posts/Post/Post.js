import React from 'react';
import './Post.css';
import PostFeature from './PostFeature.js';
import formatDate from '../../../utils/formatDate.js';

const Post = ({ post, onHover, onLikeButtonClick, onReplyButtonClick }) => {
  const renderPostFeature = () => {
    if (post.isHovered) {
      return (
        <PostFeature
          features={post.features}
          onLikeButtonClick={onLikeButtonClick}
          onReplyButtonClick={onReplyButtonClick}
        />
      );
    } else return null;
  };
  return (
    <article className='blog-item'>
      {!post.isMyPost && (
        <>
          <div className='blog-item-avatar'>{post.avatar}</div>
          <div
            className='blog-item-container'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            <div className='blog-item-header-flex'>
              <h2 className='blog-item-header-name'>
                {post.name} - {post.handle}
              </h2>
              <h2 className='blog-item-header-timestamp'>
                {formatDate(post.date)}
              </h2>
            </div>
            <p className='blog-item-content'>{post.text}</p>
            {renderPostFeature()}
          </div>
          {post.replies &&
            post.replies.map((reply, index) => {
              return <div>{reply.text}</div>;
            })}
        </>
      )}

      {post.isMyPost && (
        <>
          <div></div>
          <div>
            <div className='blog-item-header-flex'>
              <h2 className='blog-item-header-timestamp'>
                {formatDate(post.date)}
              </h2>
              <h2></h2>
            </div>
            <p className='blog-item-content mycontent'>{post.text}</p>
          </div>
          <div className='blog-item-avatar right'>{post.avatar}</div>
        </>
      )}
    </article>
  );
};

export default Post;
