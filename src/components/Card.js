import '../index.css';

import React, {useState} from 'react';

function Card({ cutie }) {
  const [isFavorite, setIsFavorite] = useState(cutie.isFavorite);

  function handleClick() {
    setIsFavorite(!isFavorite);

    fetch(`http://localhost:8000/data/${cutie.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isFavorite: !isFavorite,
    }),
  })
    .then((r) => r.json())
    .then((favUpdated) => console.log(favUpdated))
  }

  return (
      <div className='card'>
        <p>{cutie.description}</p>
        <img src={cutie.image}/> 
        <span 
          onClick={handleClick} 
          class={isFavorite ? "favorite-heart" : "heart"}
        >
          &#x2764;
        </span>
      </div>
    );
  };
  
  export default Card;