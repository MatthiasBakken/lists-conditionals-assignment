import React from 'react';

import './CharComponent.css';

const CharComponent = (props) => {

  let charList = props.chars.split('');

  return (
    <div className="CharComponent">
      {charList.map((char, index) => {
        return <p key={index} onClick={() => props.removed(char.key, 1)} >{char}</p>
      })}  
    </div>
  )
};

export default CharComponent;