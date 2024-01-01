import React, { useState } from "react";
import OtpInput from "react-otp-input";
import AuthHeader from "../component/auth/AuthHeader";
import { useNavigate } from "react-router-dom";
const OtpInputWithValidation = () => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleVerify = (event) => {
    event.preventDefault();
    // Verify OTP code
    if (otp === "1234") {
      navigate("/createpassword");
    } else {
      setMessage("Invalid OTP code");
    }
  };

  return (
    <div className="authorization-wrapper">
      <div className="container-fluid">
        <div className="authorization d-flex flex-column gap-4">
          <AuthHeader
            message="OTP Verification Code"
            desc=" Enter the OTP code, We send to your phone number"
          />
          <form>
            <div className="otp-form">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                inputType="tel"
                renderInput={(props) => (
                  <input {...props} className="form-control otp-input" />
                )}
              />
            </div>
            <button
              className="btn btn-primary btn-md mt-5"
              onClick={handleVerify}
            >
              Verify OTP
            </button>

            {message && <p className="mt-3 ">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpInputWithValidation;
