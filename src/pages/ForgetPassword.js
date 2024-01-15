import Cell from "../assets/images/auth/cell.svg";
import AuthHeader from "../component/auth/AuthHeader";

const ForgetPassword = () => {
  return (
    <div className="authorization-wrapper">
      <div className="container-fluid">
        <div className="authorization d-flex flex-column gap-4">
          <AuthHeader
            message="Reset Your Password"
            desc=" Enter your phone number to get OTP code"
          />
          <form action="/otpinputwithvalidation">
            <div className="d-flex gap-3">
              <div className="form-group position-relative mb-3 w-75">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone Number"
                />
                <img src={Cell} alt="Cell" className="form-fiel-icon" />
              </div>

              <div className="w-25">
                <button className="btn btn-primary btn-md">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
