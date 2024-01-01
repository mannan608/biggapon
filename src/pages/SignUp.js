import React from "react";
import AuthHeader from "../component/auth/AuthHeader";
import { Link } from "react-router-dom";
import Business from "../assets/images/auth/bitscase.svg";
import User from "../assets/images/auth/user.svg";
import Cell from "../assets/images/auth/cell.svg";
import Password from "../assets/images/auth/password.svg";

const SignUp = () => {
  return (
    <div className="authorization-wrapper">
      <div className="container-fluid">
        <div className="authorization d-flex flex-column gap-4">
          <AuthHeader
            message="Welcome to Biggapon"
            desc=" Enter your information for register"
          />
          <form action="">
            <div className="form-group position-relative mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
              <img src={User} alt="user" className="form-fiel-icon" />
            </div>
            <div className="form-group position-relative mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Business Name"
              />
              <img src={Business} alt="Business" className="form-fiel-icon" />
            </div>
            <div className="form-group position-relative mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Phone Number"
              />
              <img src={Cell} alt="Cell" className="form-fiel-icon" />
            </div>
            <div className="form-group position-relative mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <img src={Password} alt="Password" className="form-fiel-icon" />
            </div>
            <div className="form-group position-relative mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
              <img src={Password} alt="Password" className="form-fiel-icon" />
            </div>

            <button className="btn btn-primary btn-md mt-3">Register</button>
          </form>
          <div className="d-flex flex-column gap-3 text-center">
            <Link to="#" className="text-primary fw-500">
              Forgot Password?
            </Link>
            <p>
              Already have account ?{" "}
              <Link to="/login" className="text-primary fw-500">
                Login
              </Link>{" "}
              Here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
