function Card({ cutie }) {
    return (
      <>
        <p>{cutie.description}</p>
        <img src={cutie.image}/> 
        <span class="like-glyph">&#x2661;</span>
      </>
    );
  };
  
  export default Card;