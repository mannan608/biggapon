import React from "react";
import Favicon from "../../assets/images/favicon.svg";

const AuthHeader = (props) => {
  return (
    <div className="authheader d-flex flex-column gap-3 align-items-center">
      <div className="favicon">
        <img src={Favicon} alt="Favicon" className="w-auto h-auto" />
      </div>
      <h5>{props.message}</h5>
      <p className="text-center font-14">{props.desc}</p>
    </div>
  );
};

export default AuthHeader;
