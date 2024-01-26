import Header from '../components/Header';
import Feed from '../components/Feed';

function Favs() {
  return (
    <div className='page'>
      <Header to={"/cuties"} text={"See All Cuties"} />
      <Feed />
    </div>
  );
};
  
  export default Favs;