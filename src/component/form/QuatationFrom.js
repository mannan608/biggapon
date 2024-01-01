import React from "react";

const QuatationFrom = () => {
  return (
    <form action="">
      <div className="form-group position-relative mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Business Name"
        />
      </div>
      <div className="form-group position-relative mb-3">
        <input type="text" className="form-control" placeholder="Full Name" />
      </div>
      <div className="form-group position-relative mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Phone Number"
        />
      </div>
      <div className="form-group position-relative mb-3">
        <input type="email" className="form-control" placeholder="Email" />
      </div>
      <button className="btn btn-md btn-primary">Submit</button>
    </form>
  );
};

export default QuatationFrom;
