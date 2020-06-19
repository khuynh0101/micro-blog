import React, { useState } from 'react';
import './PostFeature.css';
import InputText from '../../../components/InputText/InputText.js';

const PostFeature = ({ features, onLikeButtonClick, onReplyButtonClick }) => {
  const [isReply, setReplyStatus] = useState(false);
  const [replyText, setReplyText] = useState('');

  let likeClassName = 'feature-item-button';
  let count = 0;
  if (features && features.isLike) {
    likeClassName += ' selected';
    count = features.count;
  }

  const handleStartReplyClick = (index) => {
    setReplyStatus(!isReply);
    if (!isReply) setReplyText('');
  };

  const handleInputTextChanged = (event) => {
    setReplyText(event.target.value);
  };

  const handleReplyButtonClick = () => {
    onReplyButtonClick(replyText);
    setReplyText('');
  };
  return (
    <div className='feature'>
      <div className='feature-item'>
        <button className={likeClassName} onClick={onLikeButtonClick}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24'
            viewBox='0 0 24 24'
            width='24'
          >
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
          </svg>
        </button>
        <div className='feature-item-counter'>{count}</div>
        <button className='feature-item-button' onClick={handleStartReplyClick}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24'
            viewBox='0 0 24 24'
            width='24'
          >
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z' />
          </svg>
        </button>
      </div>
      {isReply && (
        <div className='reply-input-container'>
          <InputText
            value={replyText}
            onInputTextChanged={(event) => handleInputTextChanged(event)}
            onSendButtonClicked={(value) => handleReplyButtonClick()}
            // onSendButtonClicked={(value) => onReplyButtonClick(replyText)}
          />
        </div>
      )}
    </div>
  );
};

export default PostFeature;
