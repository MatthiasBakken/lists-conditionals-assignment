import React from 'react';

import './CharComponent.css';

const CharComponent = (props) => {

  return (
    <div className="CharComponent" onClick={props.removed}>
      {props.character}
    </div>
  )
};

export default CharComponent;