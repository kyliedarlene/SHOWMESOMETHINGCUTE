import '../index.css';

import React, {useState} from 'react';

function Card({ cutie }) {
  const [isFavorite, setIsFavorite] = useState(cutie.isFavorite);

  function handleClick() {
    setIsFavorite(!isFavorite);
  }

  return (
      <div className='card'>
        <p>{cutie.description}</p>
        <img src={cutie.image}/> 
        <span 
          onClick={handleClick} 
          class={isFavorite ? "favorite-heart" : "heart"}
        >
          &#x2661;
        </span>
      </div>
    );
  };
  
  export default Card;