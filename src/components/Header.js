import '../index.css';
import { NavLink } from "react-router-dom";

function Header({ to, text }) {
    return (
    <div className='header' >
        <NavLink to="/" exact>
        <h1>SHOWMESOMETHINGCUTE</h1>
      </NavLink>
      <NavLink to={to} exact>
        <h4>{text}</h4>
      </NavLink>
    </div>
    )
}

export default Header;