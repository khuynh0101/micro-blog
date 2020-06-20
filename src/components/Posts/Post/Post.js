import React, { useState } from 'react';
import './Post.css';
import PostFeature from './PostFeature';
import formatDate from '../../../utils/formatDate';

const Post = ({ index, post }) => {
  const [hoverStatus, setHoverStatus] = useState(false);

  const toggleOnHover = () => {
    setHoverStatus(!hoverStatus);
  };

  const renderPostFeature = () => {
    if (hoverStatus) {
      return <PostFeature index={index} features={post.features} />;
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
