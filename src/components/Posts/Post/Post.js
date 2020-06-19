import React, { useState } from 'react';
import './Post.css';
import PostFeature from './PostFeature.js';
import formatDate from '../../../utils/formatDate.js';

const Post = ({ post, onLikeButtonClick, onReplySendButtonClick }) => {
  const [hoverStatus, setHoverStatus] = useState(false);

  const toggleOnHover = () => {
    setHoverStatus(!hoverStatus);
  };
  // const showFeature = () => {
  //   console.log('show');
  //   setHoverStatus(true);
  // };
  // const hideFeature = () => {
  //   console.log('hide');
  //   setHoverStatus(false);
  // };

  const handleReplySendButtonClick = (value) => {
    onReplySendButtonClick(value);
  };
  const renderPostFeature = () => {
    if (hoverStatus) {
      //if (post.isHovered) {
      return (
        <PostFeature
          features={post.features}
          onLikeButtonClick={onLikeButtonClick}
          onReplySendButtonClick={(value) => handleReplySendButtonClick(value)}
        />
      );
    } else return null;
  };
  const renderPostContent = (text, date, avatar) => {
    return (
      <>
        <div></div>
        <div>
          <div className='blog-item-header-flex'>
            <h2 className='blog-item-header-timestamp'>{formatDate(date)}</h2>
            <h2></h2>
          </div>
          <p className='blog-item-content mycontent'>{text}</p>
        </div>
        <div className='blog-item-avatar right'>{avatar}</div>
      </>
    );
  };
  return (
    <article className='blog-article'>
      <div className='blog-item'>
        {!post.isMyPost && (
          <>
            <div className='blog-item-avatar'>{post.avatar}</div>
            <div
              className='blog-item-container'
              onMouseEnter={toggleOnHover}
              onMouseLeave={toggleOnHover}
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
          </>
        )}

        {post.isMyPost && (
          <>{renderPostContent(post.text, post.date, post.avatar)}</>
        )}
      </div>
      {post.replies &&
        post.replies.map((reply, index) => {
          return (
            <div key={index} className='blog-item reply'>
              {renderPostContent(reply.text, reply.date, reply.avatar)}
            </div>
          );
        })}
    </article>
  );
};

export default Post;
