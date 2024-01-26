import '../index.css';
import { NavLink } from "react-router-dom";

function Header() {
    return (
    <div className='header' >
        <NavLink to="/" exact>
        <h1>SHOWMESOMETHINGCUTE</h1>
      </NavLink>
      <NavLink to="/favs" exact>
        <h4>Go To Favorites</h4>
      </NavLink>
    </div>
    )
}

export default Header;