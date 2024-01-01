import "../header/Navbar.css";
import Logo from "../../assets/images/logo.svg";
import Fabar from "../../assets/images/fa_bar.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbab-wrapper">
      <div className="container-fluid">
        <nav className="navbar">
          <div className="brand d-flex align-items-center gap-3">
            <div className="mobile-nav-toggler">
              <img src={Fabar} alt="bar" className="w-auto h-auto" />
            </div>
            <Link to="/" className="w-100 h-100">
              <img src={Logo} alt="brand" />
            </Link>
          </div>
          <div className="navbar-menu">
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
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/contacts"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/casestudy"
                >
                  Case Study
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/blogs">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="d-flex navbar-right align-items-center gap-4">
            <Link to="/signup" className="text-primary fw-500">
              Sign Up
            </Link>
            <Link
              to="/login"
              className="btn btn-md btn-primary d-flex align-items-center justify-content-center "
            >
              Login
            </Link>
            <div className="stwitch-btn">
              <label className="d-flex align-items-center justify-content-center">
                EN
              </label>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
