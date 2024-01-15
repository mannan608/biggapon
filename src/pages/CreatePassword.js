import React from "react";
import AuthHeader from "../component/auth/AuthHeader";
import Password from "../assets/images/auth/password.svg";

const CreatePassword = () => {
  return (
    <div className="authorization-wrapper">
      <div className="container-fluid">
        <div className="authorization d-flex flex-column gap-4">
          <AuthHeader
            message="Create Password"
            desc=" Create new password at list one capita word and use symbool"
          />
          <form action="">
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
                placeholder="Password"
              />
              <img src={Password} alt="Password" className="form-fiel-icon" />
            </div>
            <button className="btn btn-primary btn-md mt-3">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
