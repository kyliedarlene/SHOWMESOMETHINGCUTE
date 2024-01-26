import Header from '../components/Header';
import Feed from '../components/Feed';

import '../index.css';

function Cuties() {

    return (
      <div className='page'>
        <Header to={"/favs"} text={"Go To Favorites"} />
        <Feed />
      </div>
    );
  };
  
  export default Cuties;