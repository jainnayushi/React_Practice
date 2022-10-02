import { NavLink } from "react-router-dom";
import "./Nav.css";
// Problem - Home is always active
function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink className="link" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/contact1">
            Contact1
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/logout">
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
