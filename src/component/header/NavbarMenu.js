import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <ul className="navbar-nav flex-row gap-5" id="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/service">
          Services
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/about">
          About Us
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/contacts">
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/casestudy">
          Case Study
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/blogs">
          Blog
        </NavLink>
      </li>
    </ul>
  );
};

export default NavbarMenu;
