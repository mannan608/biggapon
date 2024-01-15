import "../header/Navbar.css";
import Logo from "../../assets/images/logo.svg";
import Fabar from "../../assets/images/fa_bar.svg";
import { Link, NavLink } from "react-router-dom";
// import NavbarMenu from "./NavbarMenu";
import { useState } from "react";

const Navbar = () => {
  // Toogle Menu
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  // fixed Header
  window.addEventListener("scroll", function () {
    const navbab_wrapper = document.querySelector(".navbab-wrapper");
    navbab_wrapper.classList.toggle("active", window.scrollY >= 1);
  });

  return (
    <div className="navbab-wrapper">
      <div className="container-fluid">
        <nav className="navbar">
          <div className="brand d-flex align-items-center gap-3">
            <div className="mobile-nav-toggler" onClick={ToggleSidebar}>
              <img src={Fabar} alt="bar" className="w-auto h-auto" />
            </div>
            <div className="brand-logo">
              <Link to="/">
                <img src={Logo} alt="brand" />
              </Link>
            </div>
          </div>
          <div className={`navbar-menu ${isOpen === true ? "active" : ""}`}>
            {/* <NavbarMenu /> */}
            <ul
              className="navbar-nav flex-row gap-5"
              id="navbar-nav"
              onClick={ToggleSidebar}
            >
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
          <div
            className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
            onClick={ToggleSidebar}
          ></div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
