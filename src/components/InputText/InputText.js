import React from 'react';
import './InputText.css';
import isEnterKey from '../../utils/checkEnterKey.js';

const InputText = ({ value, onInputTextChanged, onSendButtonClicked }) => {
  const placeHolderText = "What's happening?";
  let textCounter = 140; 
  textCounter -= value.length;
  const isSendButtonDisabled = value.trim().length === 0 ? true : false;
  return (
    <div className='blog-input-container'>
      <span className='blog-input-counter'>{textCounter}</span>
      <input
        onChange={onInputTextChanged}
        onKeyDown={(event)=>isEnterKey(event, onSendButtonClicked)}
        className='blog-input'
        placeholder={placeHolderText}
        type='text'
        value={value}
      />
      <button className='blog-input-button' disabled={isSendButtonDisabled} onClick={onSendButtonClicked}>
        <svg className="blog-input-button-svg"
          xmlns='http://www.w3.org/2000/svg'
          height='32'
          viewBox='0 0 24 24'
          width='32'
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' />
        </svg>
      </button>
    </div>
  );
};

export default InputText;
