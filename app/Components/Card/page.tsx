import React from 'react';
import './style.css'; 

const Card = ({description, info}) => {

  return (
   <>
    <div className='headCard'>
        <div className="cardLeft contentContainer">
            <div className="devPhoto"></div>
        </div>
        <div className="cardRight contentContainer">
            <div className="cardDescription">{description}</div>
            <div className="cardInfo">{info}</div>
        </div>
    </div>
   </>
  );
};

export default Card;
