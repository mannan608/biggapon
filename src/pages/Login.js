import React from "react";
import AuthHeader from "../component/auth/AuthHeader";
import { Link } from "react-router-dom";
import Google from "../assets/images/auth/google.svg";
import Facebook from "../assets/images/auth/facebook.svg";
import Cell from "../assets/images/auth/cell.svg";
import Password from "../assets/images/auth/password.svg";

const Login = () => {
  return (
    <div className="authorization-wrapper">
      <div className="container-fluid">
        <div className="authorization d-flex flex-column gap-4">
          <AuthHeader
            message="Welcome Back"
            desc=" Enter the information while you are registering"
          />
          <form action="">
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
            <button className="btn btn-primary btn-md mt-3">Login</button>
          </form>
          <div className="d-flex flex-column gap-3 text-center">
            <Link to="/forgetpassword" className="text-primary fw-500">
              Forgot Password?
            </Link>
            <p>
              New Customer?{" "}
              <Link to="/signup" className="text-primary fw-500">
                Register
              </Link>{" "}
              Here
            </p>
            <div className="sm-login d-flex gap-3 mt-3 ">
              <div className="w-50">
                <Link className=" btn btn-md google-btn  d-flex gap-2 align-items-center justify-content-center">
                  <img src={Google} alt="Google" className="w-auto h-auto" />
                  Log in with Google
                </Link>
              </div>
              <div className="w-50">
                <Link className="btn btn-info btn-md  d-flex gap-2 align-items-center justify-content-center">
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="w-auto h-auto"
                  />
                  Log in with Facebook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
