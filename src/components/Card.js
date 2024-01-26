import '../index.css';

function Card({ cutie }) {
    return (
      <div className='card'>
        <p>{cutie.description}</p>
        <img src={cutie.image}/> 
        <span class="like-glyph">&#x2661;</span>
      </div>
    );
  };
  
  export default Card;